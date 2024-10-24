# My Chat GPT

My Chat GPT is a web chat application designed for single-user interactions, leveraging the OpenAI API for natural language processing. The application is built with ReactJS and styled-components on the frontend, while the backend is powered by Node.js, Express.js, CORS, and MongoDB.

## Features

- Real-time chat with automated responses using the OpenAI API
- Modern and responsive user interface with ReactJS and styled-components
- Robust backend using Node.js and Express.js
- Data storage and chat history with MongoDB
- CORS support for secure communication between frontend and backend

## Technologies Used

### Frontend

- [ReactJS](https://reactjs.org/)
- [styled-components](https://styled-components.com/)

### Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)
- [MongoDB](https://www.mongodb.com/)
- [OpenAI API](https://openai.com/)

## Installation

1. Clone the repository:

```console
git clone https://github.com/your-username/my-chat-gpt.git
```

Navigate to the project directory:

```console
cd my-chat-gpt
```

Install frontend and backend dependencies:

```console
cd frontend
npm install
cd ../backend
npm install
```

## Backend Configuration

Make sure to set up the required environment variables in the backend to access the OpenAI API and connect to MongoDB.
Example .env file

```
OPENAI_API_KEY=your_openai_api_key
MONGODB_ATLAS_URI=your_mongodb_uri
PORT=8080
JWT_SECRET=jwt_secret
```

## Usage

Start the backend:

```console
cd backend
npm start
```

Start the frontend:

```console
cd frontend
npm start
```

Open your browser and go to:

```console
http://localhost:3000
```

Contributing

- Fork the project
- Create a branch for your feature (git checkout -b feature/new-feature)
- Commit your changes (git commit -am 'Add new feature')
- Push to the branch (git push origin feature/new-feature)
- Open a Pull Request
