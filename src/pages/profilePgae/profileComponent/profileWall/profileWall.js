import React, {useState} from 'react';
import PostList from "./postList";
const ProfileWall = () => {

    const [posts, setPosts] = useState([
        {id: 1, body: "привет"}
    ])

    const [post, setPost] =useState('')
    const DATA = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']


    const addNewPost = () => {

        if(post === ''){
        }else{
            var now = new Date()
            now =`${now.getDate()} ${DATA[now.getMonth()]} в ${now.getHours()}:${now.getMinutes()}`

            const newPost = [{
                id : now,
                body : post,
            }, ...posts]

            setPosts(newPost)
            setPost('')
        }
    }

    const remove = (post) => {
        setPosts(posts.filter( p => p.id !== post.id))

    }




    return (
        <div className="profileWall">

            <div className="wallInput">
                <textarea className='wallInputSubmit' placeholder="опубликуйте пост" value = {post} onChange={e => setPost(e.target.value)}/>


                <button className='wallButton' onClick={addNewPost}
                        >Опубликовать</button>
            </div>

            <PostList posts ={posts} remove = {remove} />


        </div>
    );
};

export default ProfileWall;