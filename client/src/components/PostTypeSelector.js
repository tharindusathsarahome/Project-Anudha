import React from 'react';
import { Radio, Form } from 'semantic-ui-react';

const PostTypeSelector = ({ postType, setPostType }) => {
    return (
        <>
            <Form.Field>
                Selected Post Type: <b>{postType}</b>
            </Form.Field>
            <Form.Field>
                <Radio
                    label='Question'
                    name='postType'
                    value='Question'
                    checked={postType === 'Question'}
                    onChange={() => setPostType('Question')}
                    style={{ marginRight: '10px' }}
                />
            </Form.Field>
            <Form.Field>
                <Radio
                    label='Article'
                    name='postType'
                    value='Article'
                    checked={postType === 'Article'}
                    onChange={() => setPostType('Article')}
                />
            </Form.Field>
        </>
    );
};

export default PostTypeSelector;
