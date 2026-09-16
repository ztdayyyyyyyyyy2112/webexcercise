# 🚀 Hướng Dẫn Deploy Vercel

## Bước 1: Build React

```bash
cd frontend
npm install
npm run build
cd ..
```

Kết quả: Sẽ tạo folder `frontend/dist` chứa static files.

## Bước 2: Chuẩn bị Git

```bash
# Kiểm tra status
git status

# Add tất cả
git add .

# Commit
git commit -m "Add React frontend - ready for Vercel"

# Push
git push origin main
```

## Bước 3: Deploy Vercel

### 3.1 - Vào Vercel
- Truy cập https://vercel.com
- Login bằng GitHub

### 3.2 - New Project
- Click "New Project"
- Chọn repository `ztdayyyyyyyy2112/webtest`

### 3.3 - Framework & Settings
- **Framework Preset**: Other
- **Root Directory**: ./

### 3.4 - Environment Variables ⚠️ **QUAN TRỌNG**

Click "Environment Variables" rồi thêm:

| Key | Value |
|-----|-------|
| `MONGODB_URI` | `mongodb+srv://your_username:your_password@cluster.mongodb.net/webproject` |

**Lấy MONGODB_URI từ:**
1. MongoDB Atlas → Cluster → Connect
2. Choose "Connect your application"
3. Copy connection string
4. Thay `<username>` và `<password>` bằng credentials của bạn

### 3.5 - Deploy
- Click "Deploy"
- Chờ build hoàn tất (~2-3 phút)
- Sau khi xanh ✅ → click vào link để test

---

## ✅ Kiểm tra Deploy thành công

### Frontend
- Truy cập URL (vd: https://webtest.vercel.app)
- Thấy trang React với styling đẹp
- Click các nút, form có hoạt động không

### Backend API
- Trong DevTools (F12 → Network)
- Xem request `/api/articles` có trả dữ liệu không
- Status 200 = OK ✓

### Database
- Thêm bài báo qua form
- Kiểm tra MongoDB Atlas → Collection `articles`
- Thấy data mới được save

---

## 🔧 Troubleshooting

### Build Failed
**Lỗi:** "Found invalid or discontinued Node.js Version"
**Fix:** Kiểm tra `package.json` phải có:
```json
"engines": { "node": "24.x" }
```

### API Connection Error
**Lỗi:** Cannot connect to `/api/articles`
**Fix:** 
- Kiểm tra MONGODB_URI đúng chưa
- Check Network Access trong MongoDB Atlas (thêm 0.0.0.0/0)

### React Build Error
**Lỗi:** "Failed to load dist/index.html"
**Fix:**
- Kiểm tra `frontend/dist` folder có tồn tại
- Chạy lại: `cd frontend && npm run build`

### CORS Error
**Lỗi:** "Access to XMLHttpRequest blocked"
**Fix:** Backend đã có CORS, kiểm tra API URL có đúng không

---

## 📝 Redeploy sau khi sửa

**Cách 1: Auto (Recommended)**
```bash
git add .
git commit -m "Fix xyz"
git push origin main
# Vercel tự động redeploy
```

**Cách 2: Manual**
- Vào https://vercel.com/your-project
- Click "Redeploy"

---

## 🎯 Tips

1. **Theo dõi build**: Vercel Dashboard → "Deployments" tab
2. **Logs**: Click vào deployment → "Logs" xem error details
3. **Environment**: Có thể set khác nhau cho Production/Preview/Development
4. **Domain**: Có thể add custom domain trong "Settings"

---

## 💡 Lưu ý

- ❌ KHÔNG push file `.env` lên GitHub
- ✅ Environment Variables phải set trên Vercel
- ✅ `frontend/dist` được tạo khi build, không cần push
- ✅ MongoDB URI phải đúng (test local trước)

---

**Xong deploy? Chia sẻ link với anh em để chấm điểm! 🎉**
