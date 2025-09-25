import type { ArticleListProps } from '@/types/ArticleList';
import Article from '@/components/Article';

function ArticleList({ articles }: ArticleListProps) {
  return (
    <>
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </>
  );
}

export default ArticleList;
