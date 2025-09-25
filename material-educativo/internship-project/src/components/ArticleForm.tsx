import { useState } from 'react';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Title from '@/components/ui/Title';

import type { ArticleProps } from '@/types/Article';

interface ArticleFormProps {
  onAddArticle: (article: ArticleProps) => void
}

function ArticleForm({ onAddArticle }: ArticleFormProps) {
  const [article, setArticle] = useState<ArticleProps>({
    title: '',
    author: '',
    date: new Date(),
    content: '',
    category: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddArticle(article);
    setArticle({
      title: '',
      author: '',
      date: new Date(),
      content: '',
      category: ''
    });
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '16px auto',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <Title style={{
        fontSize: '2rem',
        textAlign: 'center',
        marginBottom: '30px',
        color: '#333'
      }}>
        Crear Nuevo Artículo
      </Title>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Input
          type="text"
          label="Título del Artículo"
          placeholder="Ingresa el título..."
          value={article.title}
          onChange={(e) => setArticle({ ...article, title: e.target.value })}
          required
        />

        <Input
          type="text"
          label="Autor"
          placeholder="Nombre del autor..."
          value={article.author}
          onChange={(e) => setArticle({ ...article, author: e.target.value })}
          required
        />

        <Input
          type="date"
          label="Fecha de Publicación"
          value={article.date.toISOString().split('T')[0]}
          onChange={(e) => setArticle({ ...article, date: new Date(e.target.value) })}
          required
        />

        <Input
          type="text"
          label="Categoría"
          placeholder="Tecnología, Deportes, Noticias..."
          value={article.category}
          onChange={(e) => setArticle({ ...article, category: e.target.value })}
          required
        />

        <Textarea
          label="Contenido del Artículo"
          placeholder="Escribe el contenido del artículo aquí..."
          value={article.content}
          onChange={(e) => setArticle({ ...article, content: e.target.value })}
          required
          size="medium"
        />

        <Button
          type="submit"
          style={{
            marginTop: '10px',
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: '600'
          }}
        >
          📝 Crear Artículo
        </Button>
      </form>
    </div>
  );
}

export default ArticleForm;
