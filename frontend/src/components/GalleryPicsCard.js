import React from 'react'
import GalleryPicture from '../assests/bigMama.jpg'

function GalleryPics() {
    return (
        <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="mb-4" style={{  position: "relative"}}>
                <img 
                    className="gallery__img"
                    src={GalleryPicture}
                    alt="gallery__img"
                    style={{ width: "344px", height: "344px", objectFit : "cover",}}
                />
                <div className="overlay" >
                    <div className="bg__overlay"></div>
                    <div style={{ position: 'absolute', top: "40%", left: "40%", color: "#fff", }}>
                        <div className="flex justify-between">
                            <div className="icons__heart mr-2" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="icons__comment ml-2">
                                <span className="relative inline-block">
                                    <svg className="w-6 h-6 text-gray-700 fill-current" viewBox="0 0 20 20">
                                        <path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">99</span>
                                </span>
                            </div> 

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryPics
