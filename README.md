# Webdevelopment_Module9_Module8_Assignment15
# 🕒 IELTS Speaking Test – Timer Component

## 📚 Assignment 15 – Countdown Timer Integration

This project implements a **countdown timer** for each section of the IELTS Speaking Test using **React + TypeScript** and the `react-timer-hook` library.

---

## 🎯 Objective

To help users manage time during the IELTS speaking test by:

- Displaying a countdown timer (default: 2 minutes)
- Alerting users visually as time runs out
- Providing controls to pause or reset the timer
- Keeping the timer in sync with question navigation

---

## 🗂 Folder Structure
For creating virtual enviroment 
npm create vite@latest

src/ 
├── components/ 
│ └── Timer.tsx # Timer component using react-timer-hook 
├── App.tsx # Displays the timer 
├── main.tsx # Entry point 
├── index.css # Global styling tsconfig.json # TypeScript configuration vite.config.ts # Vite configuration README.md



## ⚙️ How to Run
Install dependencies:
npm install
Start the development server:
npm run dev
Open in browser: http://localhost:5173

🔧 Features
✅ Countdown from 2 minutes

✅ Pause and Reset functionality

✅ Visual cue (color turns red when time < 1 minute)

✅ Responsive and clean UI

✅ Easy to extend to other test sections

🖼 Sample Output
![Screenshot (155)](https://github.com/user-attachments/assets/272a8a90-0562-4bf4-82fa-8cc01f0327cb)

🧪 Testing Instructions
Launch app and observe countdown

Use "Pause" and "Reset" buttons

Watch color change as time nears 0:00

📦 Dependencies
npm install react-timer-hook
TypeScript users:
npm install --save-dev @types/react
