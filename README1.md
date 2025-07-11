✅ Todo List Application – Documentation
📌 Project Overview
The Todo List App is a simple React-based application developed using the Vite bundler. It allows users to:
->Add new tasks
->Delete existing tasks
->Mark tasks as complete or incomplete
->The app is built with a focus on usability and performance.

⚙️ Technologies Used
1.React (via Vite)
2.JavaScript
3.HTML/CSS
4.GitHub (for version control)
5.Netlify (for deployment)

🧱 Folder Structure
todo-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── components/
│       └── TodoItem.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md

🛠️ Setup Instructions
✅ 1. Clone the Repository
git clone https://github.com/Bhargava2188/Todo-app.git
cd Todo-app
✅ 2. Install Dependencies
Make sure you have Node.js and npm installed.
npm install
✅ 3. Run the Application Locally
npm run dev
Then open your browser and go to:
http://localhost:5173

🚀 Build & Deployment
✅ Build the App
npm run build
✅ Deploy to Netlify (Manual)
Run npm run build

Upload the contents of the /dist folder to Netlify manually

Set the base path in vite.config.js to './' if using drag-and-drop

After upload, Netlify will give you a live site link

🧑‍💻 How to Use the App
->Add a Task
->Type into the input field and click “Add Task”
->Mark as Complete
->Click the checkbox next to a task to mark it as complete/incomplete
->Delete a Task
->Click the ❌ icon to remove a task

🧩 Features
1.Simple and clean UI
2.Real-time task management
3.Persistent state via React state
4.Fast Vite build and load times

