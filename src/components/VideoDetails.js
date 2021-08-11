import React from 'react';

const VideoDetails =({video})=>{
    if(!video){
        return (
            <div className="ui segment">
                <div className="ui active dimmer" style={{minHeight:'500px'}}>
                    <div className="ui massive text loader">Loading...</div>
                </div>
            </div>
        )

    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className='videodetails'>
            <div className="video__player">
                <iframe title="video player" src={videoSrc}/>
            </div>
            <div className="details__box">
                <h2 > { video.snippet.title}</h2>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}
export default VideoDetails;