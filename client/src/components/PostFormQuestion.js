import React from 'react';
import { Input, TextArea, Form } from 'semantic-ui-react';
import CharacterCounter from '../components/CharacterCounter';

const PostFormQuestion = ({ setTitle, setContent }) => {

    return (
        <div>
            <Form.Field>
                <label>Question Title</label>
                <CharacterCounter maxChars={100}>
                    {(handleTitleChange) =>
                        <Input
                            placeholder='Start your question with how, what, why, etc.'
                            maxLength={100}
                            onChange={(e) => {
                                const title = e.target.value;
                                setTitle(title);
                                handleTitleChange(e);
                            }}
                        />
                    }
                </CharacterCounter>
            </Form.Field>

            <Form.Field>
                <label>Question Details</label>
                <CharacterCounter maxChars={500}>
                    {(handleDetailsChange) => (
                        <TextArea
                            placeholder='Describe your problem'
                            maxLength={500}
                            onChange={(e) => {
                                const details = e.target.value;
                                setContent(details);
                                handleDetailsChange(e);
                            }}
                        />
                    )}
                </CharacterCounter>
            </Form.Field>
        </div>
    );
};

export default PostFormQuestion;
