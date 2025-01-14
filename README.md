# CRUD Operation with Socket.IO

This project is a simple CRUD (Create, Read, Update, Delete) operation application built using **React**, **Socket.IO**, **Express**, and **Tailwind CSS**. It demonstrates real-time data synchronization between the client and server.

## Features

- **Real-Time Updates**: Data changes are instantly reflected across all connected clients.
- **Create**: Add new records with a unique identifier.
- **Read**: View the list of all records.
- **Update**: Modify existing records.
- **Delete**: Remove records from the list.
- **Styled with Tailwind CSS**: Modern and responsive UI.

---

## Technologies Used

- **Frontend**:
  - React
  - Tailwind CSS
  - Socket.IO Client

- **Backend**:
  - Express.js
  - Socket.IO Server

---

## Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)

---

## Installation

Follow these steps to set up the project:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name

2. **Install Dependencies**:

   For the frontend:

   ```bash
   cd client
   npm install
   ```

   For the backend:

   ```bash 
   cd server
   npm install
   ```


3. **Start the Application**:

   Open two terminal windows:
   - Terminal 1 (Backend):
     
   
   ```bash
   cd server
   npm start
   ```

   - Terminal 2 (Frontend):

   ```bash
   cd client
   npm run dev
   ```

4. **Open your browser and navigate to http://localhost:5173 to access the app**.

5. **Folder Structure**.

```plaintext
SOCKET-PRACTICE/
├── .git/
├── client/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Input.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   ├── vite.config.js
├── server/
│   ├── node_modules/
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js

```

## Usage

- **Add Data**: Fill in the form and click the Submit button.
- **Edit Data**: Click the Edit button next to any record, modify the details, and click Update.
- **Delete Data**: Click the Delete button next to a record to remove it.

## Screenshots

![image](https://github.com/user-attachments/assets/5191eef8-6073-4fee-a02b-9795c19569a2)

![image](https://github.com/user-attachments/assets/8fb839b7-a03c-4619-b74e-bf687eb1060f)

![image](https://github.com/user-attachments/assets/818a6e72-c6dc-477f-9aeb-d2ddd96385e8)










   

   



   


 
   
