import { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';
import useVideos from './hooks/useVideos';

///APP 
const App =()=> {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('flowers'); // our custom hook
  
  // setSelectedVideo(response.data.items[0]);
  useEffect(()=>{
    setSelectedVideo(videos[0]);
  }, [videos])

    return (
      <div className='app'>
          <Searchbar onFormSubmit={search}/>

          <div className="main">

              <div className="videodetails__box">
                <VideoDetails video={selectedVideo}/>
              </div>

              <div className="videolist__box">
                <VideoList onVideoSelect={setSelectedVideo} videos={videos}/>
              </div>

          </div>

      </div>
    );
      }

export default App;
