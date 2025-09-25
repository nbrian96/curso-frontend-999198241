import type { ArticleProps } from '@/types/Article';

interface ArticleComponentProps {
  article: ArticleProps
}

function Article({ article }: ArticleComponentProps) {

  return (
    <article style={{
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '24px',
      margin: '16px 0',
      border: '1px solid #e5e7eb',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }}>
      {/* Header con categoría */}
      <div style={{ marginBottom: '16px' }}>
        <span style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {article.category}
        </span>
      </div>

      {/* Título */}
      <h2 style={{
        fontSize: '24px',
        fontWeight: '700',
        color: '#1f2937',
        marginBottom: '12px',
        lineHeight: '1.3'
      }}>
        {article.title}
      </h2>

      {/* Contenido */}
      <p style={{
        color: '#6b7280',
        fontSize: '16px',
        lineHeight: '1.6',
        marginBottom: '20px'
      }}>
        {article.content}
      </p>

      {/* Footer con autor y fecha */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '16px',
        borderTop: '1px solid #f3f4f6'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: '#e5e7eb',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: '600',
            color: '#6b7280'
          }}>
            {article.author.charAt(0).toUpperCase()}
          </div>
          <span style={{
            color: '#374151',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            {article.author}
          </span>
        </div>

        <time style={{
          color: '#9ca3af',
          fontSize: '14px'
        }}>
          {article.date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>
    </article>
  );
}

export default Article;
