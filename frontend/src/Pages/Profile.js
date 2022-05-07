import React from 'react'
import GalleryPicsCard from '../components/GalleryPicsCard'
import ProfileCard from '../components/ProfileCard'
import '../styles/Profile.css'

function Profile() {
    return (
        <div className="profile" >
            <div className="">
                <div style={{paddingTop: "2%"}}>
                    <ProfileCard/>
                </div>
            </div>
            <div className="body">
                <div  className="body" style={{borderTop: "1px solid rgb(194, 193, 193)", marginTop: "20px"}}>
                </div>
                <div className=" flex ffp" >
                    <p className="mr-3">
                        <span className="mr-1" style={{fontWeight: "bold"}}>20</span> 
                        posts
                    </p>
                    <p className="mr-3">
                        <span className="mr-1" style={{fontWeight: "bold"}}>2022</span> 
                        Followers
                    </p>
                    <p className="mr-3">
                        <span className="mr-1" style={{fontWeight: "bold"}}>270</span> 
                        Following
                    </p>
                </div>
                <div className="gallery mt-3">
                    <div className="row">
                        <GalleryPicsCard/>
                        <GalleryPicsCard/>
                        <GalleryPicsCard/>
                        <GalleryPicsCard/>
                        <GalleryPicsCard/>
                        <GalleryPicsCard/>
                        <GalleryPicsCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
