# 📰 Trang Web Tin Tức - React + Node.js + MongoDB

Dự án BTVN với **React.js (Frontend)** + **Node.js + Express (Backend)** + **MongoDB (Database)**, deploy lên **Vercel**.

## 🎨 Features

✅ **React Frontend** - Hiệu ứng animations đẹp, dễ nhìn  
✅ **Node.js Backend** - API RESTful  
✅ **MongoDB** - Lưu trữ dữ liệu  
✅ **Responsive Design** - Hoạt động trên mobile + desktop  
✅ **Smooth Animations** - Fade in, hover effects, transitions  
✅ **Vercel Deploy** - Deploy dễ dàng  

## 📁 Cấu Trúc Project

```
webproject/
├── frontend/                    # React App (Vite)
│   ├── src/
│   │   ├── App.jsx             # App component chính
│   │   ├── App.css
│   │   ├── index.css           # Global styles + animations
│   │   ├── main.jsx
│   │   └── components/
│   │       ├── ArticleList.jsx
│   │       ├── ArticleList.css
│   │       ├── AddArticleForm.jsx
│   │       └── AddArticleForm.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── api/
│   └── index.js                 # Express server + MongoDB
├── package.json
├── vercel.json                  # Config Vercel
├── .env.example
└── README.md
```

## 🚀 Setup & Chạy Locally

### 1. **Cài đặt Node modules**

```bash
# Cài dependencies backend
npm install

# Cài dependencies frontend
cd frontend
npm install
cd ..
```

### 2. **Tạo file .env**

```bash
cp .env.example .env
```

Chỉnh sửa `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/webproject
PORT=3000
```

### 3. **Chạy cùng lúc Backend + Frontend (dev mode)**

**Terminal 1 - Backend:**
```bash
npm start
# Server chạy tại http://localhost:3000
```

**Terminal 2 - Frontend (Vite):**
```bash
cd frontend
npm run dev
# React dev server chạy tại http://localhost:5173
```

Hoặc chạy Backend rồi build React:

```bash
cd frontend
npm run build
cd ..
npm start
# Truy cập http://localhost:3000
```

---

## 📦 MongoDB Atlas Setup

1. Vào https://www.mongodb.com/cloud/atlas
2. Tạo account free
3. Tạo cluster
4. Network Access → Thêm `0.0.0.0/0`
5. Database Access → Tạo user + password
6. Copy connection string:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/webproject
   ```
7. Dán vào file `.env`

---

## 🌐 Deploy lên Vercel

### Bước 1: Build React
```bash
cd frontend
npm run build
cd ..
```

### Bước 2: Push lên GitHub

```bash
git add .
git commit -m "React + Node.js + MongoDB"
git push origin main
```

### Bước 3: Deploy trên Vercel

1. Vào https://vercel.com
2. Click "New Project"
3. Import từ GitHub repository
4. **Environment Variables:**
   - Key: `MONGODB_URI`
   - Value: (MongoDB connection string)
5. Click "Deploy"

✅ Xong! Trang web sẽ có URL như: `https://your-project.vercel.app`

---

## 🎯 API Endpoints

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/articles` | Lấy tất cả bài báo |
| GET | `/api/articles/:id` | Lấy 1 bài báo |
| POST | `/api/articles` | Thêm bài báo mới |

### POST `/api/articles`
```json
{
  "title": "Tiêu đề bài báo",
  "image": "https://example.com/image.jpg",
  "content": "Nội dung bài báo"
}
```

---

## 🎨 Hiệu Ứng & Design

### Animations
- 🎯 **Fade in** khi load bài báo
- 🖱️ **Hover effect** - card nâng lên, ảnh zoom
- ⚡ **Smooth transitions** - 0.3s, 0.5s, 0.6s
- 🔄 **Loading spinner** - CSS animation

### Colors
- Primary: `#3498db` (xanh)
- Secondary: `#2c3e50` (đen xám)
- Background: `#ecf0f1` (xám nhạt)

### Typography
- Header: 40px, bold
- Title: 28px
- Card title: 18px
- Body text: 14px

---

## 📝 Ghi chú

- Frontend dùng **Vite** (nhanh hơn CRA)
- Backend dùng **Express** (lightweight)
- Database dùng **MongoDB** (NoSQL, flexible)
- Không cần authentication (simple project)
- Responsive design với CSS Grid

---

## 🔧 Troubleshooting

**Lỗi: "Cannot find module 'react'"**
```bash
cd frontend
npm install
```

**Lỗi: MongoDB connection failed**
- Kiểm tra MONGODB_URI trong .env
- Kiểm tra Network Access trong MongoDB Atlas (phải thêm 0.0.0.0/0)

**Lỗi: Vercel build failed**
- Kiểm tra Node.js version trong package.json (phải 24.x)
- Kiểm tra Environment Variables trên Vercel

---

## 📚 Dependencies

**Backend:**
- express - Web framework
- mongoose - MongoDB ODM
- cors - Cross-origin requests
- dotenv - Environment variables

**Frontend:**
- react - UI library
- react-dom - React rendering
- vite - Build tool

---

## 👨‍💻 Tác giả

**Your Name** - BTVN  
**Tech Stack**: React + Node.js + MongoDB + Vercel

---

**Happy coding! 🚀**
