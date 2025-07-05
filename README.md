                                                REAL-TIME COLLABORATIVE DOCUMENT EDITOR

Company - CodTech IT Solutions, Name - N.C.Pavani, Intern ID - CT06DF2606, Domain - Full Stack, Duration - 6 weeks, Mentor - Neela Santhosh

# Real-time Collaborative Document Editor
This project implements a basic real-time collaborative document editor, allowing multiple users to edit the same document simultaneously with instant updates across all connected clients.

## Features
*   **Real-time Collaboration:** Changes made by one user are immediately visible to others.
*   **Simple Text Editing:** A basic text area for document content.
*   **Client-Server Communication:** Utilizes WebSockets for efficient, bidirectional communication.

## Technologies Used
# Backend
*   **Node.js:** JavaScript runtime environment.
*   **Express.js:** Fast, unopinionated, minimalist web framework for Node.js.
*   **Socket.IO:** Library for real-time, bidirectional, event-based communication.
# Frontend
*   **React.js:** A JavaScript library for building user interfaces.
*   **Socket.IO Client:** Client-side library for Socket.IO.

## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.
## Prerequisites
Make sure you have Node.js and npm (Node Package Manager) installed on your system.
*   [Node.js (includes npm)](https://nodejs.org/en/download/)

## Installation
1.  **Clone the repository** (if you're getting it from GitHub) or navigate to your project directory.
    ```bash
    cd real-time-editor
    ```
    2.  **Install Backend Dependencies:**
    Navigate into the `backend` directory and install the required Node.js packages.
    ```bash
    cd backend
    npm install
    ```
3.  **Install Frontend Dependencies:**
    Navigate into the `client` directory and install the required Node.js packages.
    ```bash
    cd ../client
    npm install
    ```
### Running the Application
1.  **Start the Backend Server:**
    Open a new terminal window, navigate to the `backend` directory, and run:
    ```bash
    cd real-time-editor/backend
    node server.js
    ```
    The server will start on `http://localhost:3001`.
2.  **Start the Frontend Application:**
    Open another new terminal window, navigate to the `client` directory, and run:
    ```bash
    cd real-time-editor/client
    npm start
    ```
    The React app will open in your browser, usually at `http://localhost:3000`.
3.  **Test Collaboration:**
    Open `http://localhost:3000` in multiple browser tabs or windows. Type in one editor, and observe the changes instantly appearing in the others.

## Project Structure

real-time-editor/ ├── backend/ # Node.js server with Socket.IO │ ├── node_modules/ │ ├── package.json │ ├── server.js # Main backend application file │ └── ... ├── client/ # React.js frontend application │ ├── node_modules/ │ ├── public/ │ ├── src/ │ │ ├── App.js # Main React component │ │ └── ... │ ├── package.json │ └── ... ├── .gitignore # Specifies intentionally untracked files to ignore └── README.md # This file


https://github.com/user-attachments/assets/9520af73-17c9-4369-b089-b42c27c8d9b1 -----VIDEO OF PROJECT
![Screenshot 2025-07-05 101703](https://github.com/user-attachments/assets/72088d43-e169-4e94-8062-7ab384676e61)

