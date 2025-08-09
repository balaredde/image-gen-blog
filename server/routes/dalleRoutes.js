import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const router = express.Router();

const STABILITY_API_KEY = process.env.STABILITY_AI_API_KEY;
const STABILITY_API_URL = 'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image';

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from Stability AI!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
            return res.status(400).send('Prompt is required.');
        }

    const response = await axios.post(
      STABILITY_API_URL,
      {
        text_prompts: [{ text: prompt }],
        cfg_scale: 7,
        clip_guidance_preset: 'FAST_BLUE',
        height: 1024,
        width: 1024,
        samples: 1,
        steps: 30,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${STABILITY_API_KEY}`,
        },
      }
    );
    if (!response.data.artifacts || response.data.artifacts.length === 0 || !response.data.artifacts[0].base64) {
            console.error('Stability AI response did not contain expected image data:', response.data);
            return res.status(500).send('Failed to retrieve image data from Stability AI.');
        }

    const base64Image = response.data.artifacts[0].base64;
    res.status(200).json({ photo: base64Image });

  } catch (error) {
    console.error(error?.response?.data || error.message);
    res.status(500).json({
      error: error?.response?.data?.message || error?.message || 'Something went wrong',
    });
  }
});

export default router;
