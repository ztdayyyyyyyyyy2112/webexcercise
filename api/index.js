const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/webproject';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✓ Kết nối MongoDB thành công');
}).catch(err => {
  console.error('✗ Lỗi kết nối MongoDB:', err);
});

// Schema cho bài báo
const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
  date: { type: Date, default: Date.now }
});

const Article = mongoose.model('Article', articleSchema);

// ===== API ROUTES =====

// Lấy tất cả bài báo
app.get('/api/articles', async (req, res) => {
  try {
    const articles = await Article.find().sort({ date: -1 });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Lấy 1 bài báo theo ID
app.get('/api/articles/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ error: 'Không tìm thấy' });
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Thêm bài báo mới (POST)
app.post('/api/articles', async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    await newArticle.save();
    res.json(newArticle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Serve React static files (production)
const reactBuildPath = path.join(__dirname, '../public');
app.use(express.static(reactBuildPath));

// Fallback route cho React Router
app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'API endpoint not found' });
  }
  res.sendFile(path.join(reactBuildPath, 'index.html'), (err) => {
    if (err) {
      res.status(500).send('Error loading application');
    }
  });
});

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});

// Export cho Vercel Serverless
module.exports = app;
