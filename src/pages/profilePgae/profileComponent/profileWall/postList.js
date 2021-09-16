import React from 'react';
import PostItem from "./postItem";

const PostList = ({posts, remove}) => {
    return (
        <div className="wallList">

            {posts.map( (post, id) =>
                <PostItem post = {post} key = {id} remove = {remove}/>
            )}

        </div>
    );
};

export default PostList;