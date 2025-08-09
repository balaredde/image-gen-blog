# AI Blog & Image Generation Platform

![Image Generation App](https://i.ibb.co/p0f27C2/Thumbnail-9.png)

A full-stack web application that combines a feature-rich blogging platform with a powerful AI image generator. Users can create accounts, write blog posts, and generate unique images using the Stability AI API, with all data and images managed seamlessly through MongoDB and Cloudinary.

---

## ✨ Features

* **User Authentication**: Secure user registration and login functionality.
* **CRUD for Blogs**: Users can Create, Read, Update, and Delete their own blog posts.
* **AI Image Generation**: Generate stunning and unique images from text prompts using the Stability AI API.
* **Cloud Image Storage**: All generated and uploaded images are stored efficiently and served via Cloudinary.
* **Responsive Design**: A modern and clean user interface that works perfectly on all devices.

---

## 🛠️ Tech Stack

This project is built with the MERN stack and utilizes several popular external services.

* **Frontend**: Vite, React.js, Tailwind CSS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Services & APIs**:
    * **Cloudinary**: For cloud-based image storage and management.
    * **Stability AI**: For text-to-image AI generation.
    * **JSON Web Tokens (JWT)**: For handling user authentication state.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### ### Prerequisites

Make sure you have the following installed on your machine:
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/) (v18.x or higher recommended)
* [npm](https://www.npmjs.com/) (comes with Node.js)
* A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account for the database.

### ### Installation

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/your-username/AI-IMAGE-GEN.git](https://github.com/your-username/AI-IMAGE-GEN.git)
    cd AI-IMAGE-GEN
    ```

2.  **Set up the Backend**
    ```sh
    # Navigate to the server directory
    cd server

    # Install dependencies
    npm install

    # Create a .env file in this directory (server/)
    # and fill it with your credentials (see template below)
    ```

3.  **Set up the Frontend**
    ```sh
    # Navigate to the client directory from the root
    cd ../client

    # Install dependencies
    npm install
    ```

4.  **Run the Application**
    You'll need two separate terminals open to run both the backend and frontend servers.

    * **In your first terminal (for the backend):**
        ```sh
        cd server
        nodemon index.js
        ```
    * **In your second terminal (for the frontend):**
        ```sh
        cd client
        npm run dev
        ```

Your application should now be running, with the frontend available at `http://localhost:5173` (or another port specified by Vite) and the backend at `http://localhost:8080`.

---

## 🔑 Environment Variables

For the application to work, you need to create a `.env` file in the `/server` directory. Use the following template and fill it with your actual credentials.

```env
# .env file for the server

# MongoDB Connection String
MONGO_URI="your_mongodb_connection_string"

# Server Port
PORT=8080

# JWT Secret for User Authentication
# Use a long, random string for security
JWT_SECRET="your_super_secret_key"

# Cloudinary Credentials
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

# Stability AI API Key
STABILITY_API_KEY="your_stability_ai_api_key"
```

---

## 📜 API Endpoints

The backend server exposes the following REST API endpoints, versioned under `/api/v1/`.

* **`GET /api/v1/post`**: Fetches all posts from the database.
* **`POST /api/v1/post`**: Creates a new post with data from the request body.
* **`POST /api/v1/dalle`**: Generates a new image using the DALL-E API based on a provided text prompt.

---



## 📬 Contact

bala rajendra reddy mittani- balarajendra11@gmail.comn


Project Link: [https://github.com/your-username/AI-IMAGE-GEN](https://github.com/your-username/AI-IMAGE-GEN)
