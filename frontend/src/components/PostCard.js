import React from 'react';
import ProfilePics from "../assests/bigMama.jpg"

function PostCard() {
    return (
        <div className="postcard ">
            <div className="post mb-3 rounded-lg">
                {/* POST HEADER */}
                <div 
                    className="post__header "
                    style={{"padding" : "10px 20px"}}
                >
                    <div className="profile flex justify-between">
                        <div className="profile__pics flex">
                            <img 
                                src={ProfilePics} 
                                alt="profile_pics pz" 
                                className="pr-2"
                                style={{"width" : "40px", "height": "40px", "borderRadius": "50%"}}
                            />
                            <span className="profile__username pm__links" style={{"paddingTop": "8px"}}>
                                Imoleoluwa
                            </span>
                        </div>

                        <div></div>

                        <div className="detail flex justify-end"   >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                        </div>
                    </div>
                </div>
                <div 
                    className="post__image"
                    style={{"height": "50%"}} 
                >
                    <img 
                        src={ProfilePics}
                        alt="post__image"
                        className="post__img"
                    />
                </div>


                {/* POST ICONS */}

                <div 
                    className="post__icons flex justify-between"
                    style={{"padding" : "25px 20px 20px 20px"}}
                >
                    <div className="icons__heart">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="icons__comment">
                        <span className="relative inline-block">
                            <svg className="w-6 h-6 text-gray-700 fill-current" viewBox="0 0 20 20">
                                <path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" fillRule="evenodd"></path>
                            </svg>
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">99</span>
                        </span>
                    </div>
                    <div className="icons__save">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                    </div>
                </div>
                <div className="post__input">
                    <input className=" border border-red-700 rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="comment" type="type" placeholder="Enter comment..."/>

                </div>
            </div>
            
        </div>
    )
}

export default PostCard
