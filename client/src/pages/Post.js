import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import PostTypeSelector from '../components/PostTypeSelector';
import PostFormQuestion from '../components/PostFormQuestion';
import PostFormArticle from '../components/PostFormArticle';
import TagsInput from '../components/TagsInput';
import PreviewModal from '../components/PreviewModal';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Post = () => {
    const [postType, setPostType] = useState('Question');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isPreviewOpen, setPreviewOpen] = useState(false);

    const handlePreview = () => {
        setPreviewOpen(true);
    };

    return (
        <div>
            <Header />
            <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
                <Form>
                    <PostTypeSelector postType={postType} setPostType={setPostType} />

                    {postType === 'Question' && (
                        <PostFormQuestion setTitle={setTitle} setContent={setContent} />
                    )}
                    {postType === 'Article' && (
                        <PostFormArticle setTitle={setTitle} setContent={setContent} />
                    )}

                    <TagsInput />

                    <Button type='button' primary onClick={handlePreview}>Preview</Button>
                    <Button type='submit' color='green' style={{ marginLeft: '10px' }}>Post</Button>
                </Form>

                <PreviewModal
                    open={isPreviewOpen}
                    onClose={() => setPreviewOpen(false)}
                    title={title}
                    content={content}
                />
            </div>
            <Footer />
        </div>
    );
};

export default Post;
