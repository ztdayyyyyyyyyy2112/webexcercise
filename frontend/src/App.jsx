import { useState, useEffect } from 'react'
import ArticleList from './components/ArticleList'
import AddArticleForm from './components/AddArticleForm'

function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  // Tải danh sách bài báo
  const loadArticles = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/articles')
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }
      const data = await response.json()
      setArticles(data)
    } catch (error) {
      console.error('Lỗi:', error)
      setArticles([])
      showMessage('❌ Lỗi tải bài báo!', 'error')
    } finally {
      setLoading(false)
    }
  }

  // Load khi component mount
  useEffect(() => {
    loadArticles()
  }, [])

  // Hàm thêm bài báo
  const handleAddArticle = async (newArticle) => {
    try {
      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newArticle)
      })
      
      if (response.ok) {
        showMessage('✅ Thêm bài báo thành công!', 'success')
        loadArticles()
      } else {
        showMessage('❌ Không thể thêm bài báo!', 'error')
      }
    } catch (error) {
      console.error('Lỗi:', error)
      showMessage('❌ Lỗi thêm bài báo!', 'error')
    }
  }

  // Hiển thị thông báo
  const showMessage = (text, type) => {
    setMessage({ text, type })
    setTimeout(() => setMessage(null), 3000)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>📰 Tin Tức Hôm Nay</h1>
          <p>Trang web với React + Node.js + MongoDB</p>
        </div>
      </header>

      {message && (
        <div className={`message message-${message.type}`}>
          {message.text}
        </div>
      )}

      <main className="app-main">
        <ArticleList articles={articles} loading={loading} />
        <hr className="divider" />
        <AddArticleForm onAdd={handleAddArticle} />
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 - Trang web BTVN. React + Node.js + MongoDB + Vercel</p>
      </footer>
    </div>
  )
}

export default App
