import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    // console.log(post);
    const {id, title, body} = post;

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h4>ID: {id}</h4>
            <p><small>{title}</small></p>
            <Link to={`/post/${post.id}`}>Post details</Link>
            <button onClick={handleNavigate}>Show post details</button>
            
        </div>
    );
};

export default Post;