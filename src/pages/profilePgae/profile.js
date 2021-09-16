import React from 'react';
import './profile.css'
import FriendList from "./profileComponent/friendList/friendList";
import ProfileInfo from "./profileComponent/profileInfo/profileInfo";
import ProfileWall from "./profileComponent/profileWall/profileWall";

const Profile = () => {
    return (
        <div className='profileContent'>
            <div className="profile">
                <div className="profilePicture"> </div>
                <h4 className='changePhoto'>изменить фото</h4>
            </div>


            <ProfileInfo/>
            <FriendList/>
            <ProfileWall/>



        </div>
    );
};

export default Profile;