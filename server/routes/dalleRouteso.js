import express from 'express';
import * as dotenv from 'dotenv';
import fetch from 'node-fetch'; // We use node-fetch to call the API

// NOTE: We are no longer using any Google AI packages.
// This code is self-contained with express and node-fetch.

const router = express.Router();

// Get the API Key from your .env file
const STABILITY_API_KEY = process.env.STABILITY_AI_API_KEY;

// Route to handle prompt and generate an image
router.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;

    // Check if the prompt was provided
    if (!prompt) {
      return res.status(400).json({ message: 'Prompt is required' });
    }

    // Call the Stability AI API
    const response = await fetch(
      "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${STABILITY_API_KEY}`,
        },
        body: JSON.stringify({
          text_prompts: [{ text: prompt }],
          cfg_scale: 7,
          height: 1024,
          width: 1024,
          steps: 30,
          samples: 1,
        }),
      }
    );

    // Check for errors from the API
    if (!response.ok) {
      throw new Error(`API call failed: ${await response.text()}`);
    }

    const responseJSON = await response.json();
    
    // Get the generated image from the response
    // The image data is a Base64 string, perfect for sending to a web page
    const image = responseJSON.artifacts[0].base64;
    
    // Send the image back to the client
    res.status(200).json({ photo: image });

  } catch (error) {
    console.error(error);
    res.status(500).send(error?.message || 'Something went wrong');
  }
});

export default router;