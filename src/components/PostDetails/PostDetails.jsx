import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post);
    return (
        <div>
            <h4>ID: {post.id}</h4>
            <h5>Title: {post.title}</h5>
            <p>Body: {post.body}</p>
        </div>
    );
};

export default PostDetails;