import React from 'react';
import { Header, Button, Card } from 'semantic-ui-react';
import TutorialCard from './TutorialCard';
import { faker } from '@faker-js/faker';

const generateTutorials = (num) => {
  return Array.from({ length: num }, () => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(5),
    meta: faker.lorem.word(),
    description: faker.lorem.sentence(),
    image: faker.image.abstract(500, 500, true),
    username: faker.internet.userName(),
  }));
};

const FeaturedTutorials = () => {
  const tutorials = generateTutorials(3);

  return (
    <div style={{ margin: '20px 100px', padding: '30px 40px' }}>
      <Header as='h2' textAlign='center'>Featured Tutorials</Header>
      <Card.Group itemsPerRow={3}>
        {tutorials.map(tutorial => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </Card.Group>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <Button>See all tutorials</Button>
      </div>
    </div>
  );
};

export default FeaturedTutorials;
