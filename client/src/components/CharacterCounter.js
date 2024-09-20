import React, { useState } from 'react';

const CharacterCounter = ({ maxChars, children }) => {
    const [charCount, setCharCount] = useState(0);

    const handleChange = (e) => {
        const text = e.target.value;
        setCharCount(text.length);
    };

    return (
        <div>
            {children(handleChange)}
            <div style={{ textAlign: 'right', fontSize: '12px', color: 'grey' }}>
                {charCount}/{maxChars} characters
            </div>
        </div>
    );
};

export default CharacterCounter;
