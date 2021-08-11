import React from 'react';
import VideoItem from './VideoItem';

const VideoList=({videos, onVideoSelect})=>{ // to avoid repeating 'props.' in our code, we turn (props) into ({videos}) to destruct only videos from props

    const renderedList = videos.map(video => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;
      })
    return(
        <div className="videolist">
          {
                renderedList
          }
        </div>
        );
}
export default VideoList;