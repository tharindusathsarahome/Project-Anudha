import React from 'react';
import { Form, TextArea, Input } from 'semantic-ui-react';
import CharacterCounter from '../components/CharacterCounter';

const PostFormArticle = ({ setTitle, setContent }) => {

    return (
        <>
            <Form.Field>
                <label>Title</label>
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
                <label>Abstract</label>
                <CharacterCounter maxChars={300}>
                    {(handleDetailsChange) => (
                        <TextArea
                            placeholder='Enter a 1-paragraph abstract'
                            maxLength={300}
                            onChange={(e) => {
                                handleDetailsChange(e);
                            }}
                        />
                    )}
                </CharacterCounter>
            </Form.Field>
            <Form.Field>
                <label>Article Text</label>
                <CharacterCounter maxChars={500}>
                    {(handleDetailsChange) => (
                        <TextArea
                            placeholder='Enter the article text'
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
        </>
    );
};

export default PostFormArticle;
