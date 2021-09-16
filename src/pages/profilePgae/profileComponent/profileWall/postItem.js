import React from 'react';

const PostItem = ({post, remove}) => {



    return (
        <div className="postContainer">

            <div className="userInfo">
                <div className="profileImage"></div>
                <div className="firstName">Вадим</div>
                <div className="secondName">Паневин</div>
            </div>
            <div className="postTime">{post.id}</div>

            <div className="postContent">
                {post.body}
            </div>

            <div className="deletePost" onClick={() => remove(post)}>Удалить</div>
        </div>
    );
};

export default PostItem;