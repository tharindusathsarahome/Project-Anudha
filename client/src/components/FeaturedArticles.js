import React from 'react';
import { Header, Button, Card } from 'semantic-ui-react';
import ArticleCard from './ArticleCard';
import { faker } from '@faker-js/faker';

const generateArticles = (num) => {
  return Array.from({ length: num }, () => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(5),
    meta: faker.lorem.word(),
    description: faker.lorem.sentence(),
    image: faker.image.abstract(600, 600, true),
    author: faker.person.fullName(),
  }));
};

const FeaturedArticles = () => {
  const articles = generateArticles(3);

  return (
    <div style={{ margin: '20px 100px', padding: '30px 40px' }}>
      <Header as='h2' textAlign='center'>Featured Articles</Header>
      <Card.Group itemsPerRow={3}>
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </Card.Group>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <Button>See all articles</Button>
      </div>
    </div>
  );
};

export default FeaturedArticles;
