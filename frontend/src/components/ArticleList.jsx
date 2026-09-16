import './ArticleList.css'

function ArticleList({ articles, loading }) {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  if (articles.length === 0) {
    return (
      <div className="empty-state">
        <p>📭 Chưa có bài báo nào. Hãy thêm bài đầu tiên!</p>
      </div>
    )
  }

  return (
    <section className="articles-section">
      <h2 className="section-title">📝 Danh Sách Bài Báo</h2>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <article key={article._id} className="article-card" style={{
            animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
          }}>
            <div className="article-image-container">
              <img 
                src={article.image} 
                alt={article.title}
                className="article-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Hình+ảnh'
                }}
              />
            </div>
            <div className="article-content">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-text">{article.content}</p>
              <div className="article-meta">
                <span className="article-date">
                  📅 {new Date(article.date).toLocaleDateString('vi-VN')}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ArticleList
