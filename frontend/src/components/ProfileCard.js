import React from 'react'

function ProfileCard() {
    return (
        <div className="profileCard">
            <div className="profile__details ">
                <div className="profile__pics">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor"  className="profile__picture" style={{margin: "0 auto", height: "250px", weight: "250px"}}>
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="profile__links flex flex-column " style={{textAlign : "center"}} >
                    <span className="pm__links font-bold font-mono text-lg">kingjamesegun</span>
                    <span className="status text-base font-sans" >Outdoor Photographer</span>
                </div>
                <div className="profile__mf" >
                    <div className="flex justify-between">
                            <button className="profile__message  rounded-sm text-base">
                                Message
                            </button>
                            <button className="profile__follow rounded-sm text-base font-sans">
                                Follow
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
