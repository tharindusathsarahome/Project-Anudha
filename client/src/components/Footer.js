import React from 'react';
import { Container, Grid, List } from 'semantic-ui-react';

const Footer = () => (
  <div style={{ padding: '20px', background: '#f1f1f1' }}>
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <h4>Explore</h4>
            <List>
              <List.Item>Home</List.Item>
              <List.Item>Questions</List.Item>
              <List.Item>Articles</List.Item>
              <List.Item>Tutorials</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={6}>
            <h4>Support</h4>
            <List>
              <List.Item>FAQs</List.Item>
              <List.Item>Help</List.Item>
              <List.Item>Contact Us</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <h4>Stay connected</h4>
            <List vertical>
              <List.Item icon='facebook' content='Facebook' />
              <List.Item icon='twitter' content='Twitter' />
              <List.Item icon='instagram' content='Instagram' />
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <p>DEV@Deakin 2022 | <a href="#">Privacy Policy</a> | <a href="#">Terms</a> | <a href="#">Code of Conduct</a></p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

export default Footer;
