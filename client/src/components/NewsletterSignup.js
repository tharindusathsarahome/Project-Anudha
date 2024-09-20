import React, { useState } from 'react';
import { Form, Input, Button, Label, Icon } from 'semantic-ui-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.text();
      setResponseMessage(result);
    } catch (error) {
      setResponseMessage('Failed to subscribe. Please try again later.');
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '40px' }}>
      <Form id="subscribeForm" onSubmit={handleSubmit}>
        <Form.Field inline>
          <Label size='big' pointing='right'><Icon name='mail' /> SIGN UP FOR OUR DAILY INSIDER</Label>
          <Input
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" style={{ margin: '20px' }}>Subscribe</Button>
        </Form.Field>
      </Form>
      {responseMessage && <p id="responseMessage">{responseMessage}</p>}
    </div>
  );
};

export default NewsletterSignup;
