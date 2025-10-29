# MERN Deployment App 🚀

A full-stack MERN project demonstrating deployment, CI/CD, and monitoring setup.

## 🌍 Live URLs
- **Frontend:** [https://yourusername.github.io/mern-deployment-app](#)
- **Backend:** [https://mern-deployment-backend.onrender.com](#)

## 🧱 Stack
- MongoDB Atlas
- Express.js
- React (Vite)
- Node.js
- GitHub Actions (CI/CD)
- Render (Backend)
- GitHub Pages (Frontend)

## ⚙️ Environment Setup
```bash
# backend/.env
PORT=5000
MONGO_URI=your-mongodb-uri
CORS_ORIGIN=http://localhost:3000

# frontend/.env
VITE_API_URL=https://your-backend.onrender.com/api
```

## 🧪 Run Locally
```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
```

## 🚀 Deployment
1. Deploy backend to **Render**
2. Deploy frontend to **GitHub Pages**
3. Update environment variables accordingly

## 🔍 Monitoring
- `/healthz` endpoint for uptime checks
- MongoDB Atlas monitoring
- Render logs for backend
- GitHub Actions for CI/CD tracking
