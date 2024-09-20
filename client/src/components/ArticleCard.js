import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';

const ArticleCard = ({ article }) => (
  <Card>
    <Image src={article.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{article.title}</Card.Header>
      <Card.Meta>{article.meta}</Card.Meta>
      <Card.Description>{article.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Rating icon='star' defaultRating={5} maxRating={5} disabled />
      <div>{article.author}</div>
    </Card.Content>
  </Card>
);

export default ArticleCard;
