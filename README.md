# 3D Portfolio

Welcome to my **3D Portfolio**! This project is a dynamic and interactive portfolio built with **Three.js**, **GSAP**, and **Framer Motion** on the frontend, powered by **Node.js**, **PostgreSQL**, and **Prisma** on the backend.

## Tech Stack

### **Frontend (Client)**
- **React** – Component-based UI development
- **Three.js** – 3D graphics rendering
- **GSAP** – Smooth animations and interactions
- **Framer Motion** – Advanced animations
- **Tailwind CSS** – Utility-first styling
- **Styled Components** – Component-based styling

### **Backend (Server)**
- **Node.js** – JavaScript runtime
- **PostgreSQL** – Relational database management
- **Prisma** – ORM for database interaction

---

## 📂 Project Structure

```
3D_PORTFOLIO/
│-- admin/              # Local admin panel (ignored in Git)
│-- client/             # Frontend application
│   ├── src/            # React source code
│   ├── assets/         # Images, icons, 3D models
│   ├── components/     # UI components
│   ├── styles/         # Tailwind & Styled Components
│   ├── state/          # Global state management
│   ├── pages/          # Route pages
│   ├── App.js          # Main React app file
│-- server/             # Backend application
│   ├── src/            # Node.js backend code
│   ├── prisma/         # Prisma ORM setup
│   ├── routes/         # API routes
│   ├── controllers/    # API logic
│   ├── models/         # Database models
│   ├── index.js        # Server entry point
│-- .gitignore          # Files to be ignored in Git
│-- README.md           # Project documentation
```

---

## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/3D-portfolio.git
cd 3D-portfolio
```

### **2️⃣ Install Dependencies**
#### **Client (Frontend)**
```sh
cd client
npm install
```

#### **Server (Backend)**
```sh
cd ../server
npm install
```

### **3️⃣ Configure Environment Variables**
Create a `.env` file in the **server** directory:
```env
DATABASE_URL=your_postgres_connection_string
```

### **4️⃣ Run the Application**
#### **Start the Backend Server**
```sh
cd server
npm run dev
```

#### **Start the Frontend**
```sh
cd client
npm run dev
```

---

## 🛠 Features
- **Fully interactive 3D portfolio** with **Three.js**
- **Smooth animations** using **GSAP** & **Framer Motion**
- **Responsive UI** built with **Tailwind CSS** & **Styled Components**
- **Backend API** for handling **projects & user interactions**
- **PostgreSQL & Prisma** for structured database management


