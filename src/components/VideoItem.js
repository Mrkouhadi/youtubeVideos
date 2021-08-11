import React from 'react';

const VideoItem =({video, onVideoSelect})=>{

    return(
        <div onClick={()=> onVideoSelect(video)} className="video__item item"> {/* never use only onVideoSelect */} 

                <img
                alt={video.snippet.title}
                className="image"
                src={video.snippet.thumbnails.medium.url}
                />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
        );
}
export default VideoItem;