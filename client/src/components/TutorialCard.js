import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';

const TutorialCard = ({ tutorial }) => (
  <Card>
    <Image src={tutorial.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{tutorial.title}</Card.Header>
      <Card.Meta>{tutorial.meta}</Card.Meta>
      <Card.Description>{tutorial.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Rating icon='star' defaultRating={5} maxRating={5} disabled />
      <div>{tutorial.username}</div>
    </Card.Content>
  </Card>
);

export default TutorialCard;
