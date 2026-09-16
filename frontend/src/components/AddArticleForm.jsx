import { useState } from 'react'
import './AddArticleForm.css'

function AddArticleForm({ onAdd }) {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    content: ''
  })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.title.trim() || !formData.image.trim() || !formData.content.trim()) {
      alert('Vui lòng điền đầy đủ thông tin!')
      return
    }

    setSubmitting(true)
    try {
      await onAdd(formData)
      setFormData({ title: '', image: '', content: '' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="form-section">
      <div className="form-header">
        <h2>✍️ Thêm Bài Báo Mới</h2>
        <p>Chia sẻ tin tức của bạn</p>
      </div>

      <form className="article-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Tiêu đề *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Nhập tiêu đề bài báo..."
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">URL Ảnh *</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Nội Dung *</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Viết nội dung bài báo của bạn tại đây..."
            className="form-textarea"
            rows="6"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="form-button"
          disabled={submitting}
        >
          {submitting ? '⏳ Đang gửi...' : '📤 Đăng Bài'}
        </button>
      </form>
    </section>
  )
}

export default AddArticleForm
