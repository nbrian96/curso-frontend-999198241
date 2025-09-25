import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Title from '@/components/ui/Title';
import ArticleList from '@/components/ArticleList';
import ArticleForm from '@/components/ArticleForm';

import type { ArticleProps } from '@/types/Article';

function Class22() {

  const [articles, setArticles] = useState([
    { title: 'Article 1', author: 'Author 1', date: new Date(), content: 'Content 1', category: 'Category 1' }

  ]);

  const addArticle = (article: ArticleProps) => {
    setArticles([...articles, article]);
  };

  return (
    <>
      <Title style={{ marginBottom: '5rem' }}>Personal Blog System</Title>
      <Container>
        <Row>
          <Col md={6}>
            <ArticleList articles={articles} />
          </Col>
          <Col md={6}>
            <ArticleForm onAddArticle={addArticle} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Class22;
