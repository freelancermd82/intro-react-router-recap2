import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    // console.log(post);
    const {id, title, body} = post;
    return (
        <div className='post'>
            <h4>ID: {id}</h4>
            <p><small>{title}</small></p>
            <Link to={`/post/${post.id}`}>Post details</Link>
            <button>Show post details</button>
            
        </div>
    );
};

export default Post;