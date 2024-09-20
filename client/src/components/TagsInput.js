import React, { useState } from 'react';
import { Input, Label, Form } from 'semantic-ui-react';

const TagsInput = () => {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue) {
            setTags([...tags, inputValue]);
            setInputValue('');
        }
    };

    const handleRemoveTag = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <Form.Field>
            <label>Tags</label>
            <Input
                value={inputValue}
                placeholder='Add a tag and press Enter'
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <div style={{ marginTop: '10px' }}>
                {tags.map((tag, index) => (
                    <Label key={index} onRemove={() => handleRemoveTag(index)}>
                        {tag}
                    </Label>
                ))}
            </div>
        </Form.Field>
    );
};

export default TagsInput;
