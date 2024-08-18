# Full Stack Assignment

## Help Center API

This project is a RESTful API for managing "Help Center" cards. It includes endpoints for creating, retrieving, and searching for help center cards, with a responsive frontend interface built using Vite + React and styled with Tailwind CSS.

## Project Structure

    ```bash

backend
├── config
│ └── db.js
├── controllers
│ └── cardContrtoller.js
├── models
│ └── cardModel.js
├── routes
│ └── cardRoutes.js
├── index.js
└── .env
frontend
├── src
│ ├── components
│ │ ├── Card.jsx
│ │ ├── Footer.jsx
│ │ ├── Header.jsx
│ │ └── HelpCenter.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── tailwind.config.js
├── vite.config.js
README.md
package.json
backend.md
frontend.md
UI-SCreen-1.png
```

## Features

- **Create Cards**: Add new help center cards with titles and descriptions.
- **Retrieve Cards**: Get a list of all help center cards.
- **Search Cards**: Search for specific cards by title.
- **Responsive UI**: Frontend is built with React and styled using Tailwind CSS, making it responsive across devices.

## Technologies Used

### Backend:

- Node.js
- Express.js
- MongoDB (with Mongoose)

### Frontend:

- Vite
- React
- Tailwind CSS

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm or yarn
- MongoDB (Local or MongoDB Atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/help-center-api.git
   cd help-center-api
   ```

2. Set up the backend:

   - Navigate to the backend directory:

   ```bash
   cd backend
   ```

   - Install dependencies:

   ```bash
   npm install
   ```

   - Create a `.env` file with the following content:

   ```bash
   PORT=4000
   MONGO_URI=your_mongo_connection_string
   ```

3. Set up the frontend:

   - Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

   - Install dependencies:

   ```bash
   npm install
   ```

### Running the Server

1. Start the backend server:

   - In the backend directory, run:

   ```bash
   npm start
   ```

   - The server will start on `http://localhost:4000`.

2. Start the frontend:

   - In the frontend directory, run:

   ```bash
   npm run dev
   ```

   - The frontend will start on `http://localhost:5173`.

### Running the Frontend

Open your browser and navigate to `http://localhost:5173` to interact with the frontend interface.

## API Endpoints

- `GET /cards`: Retrieve all help center cards.
- `GET /cards/:title`: Retrieve a specific card by its title.
- `POST /cards`: Create a new help center card.

## Frontend

The frontend application displays a search bar and a grid of help center cards. Users can search for specific cards using the search bar.
