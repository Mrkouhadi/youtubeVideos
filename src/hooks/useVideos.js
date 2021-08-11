import React, {useState, useEffect} from 'react';
import YoutubeAPI from '../apis/YoutubeAPI';

const useVideos  =(defaultSearchText)=>{
    const [videos, setVideos] = useState([]);

  // useeffect 
  useEffect(() => {
    search(defaultSearchText);
  },[defaultSearchText]);

  const search = async text =>{
    try{
        const response = await YoutubeAPI.get('/search', {
          params:{
            q:text
          }
        });
      setVideos(response.data.items);
    }catch(err){
      console.log(err);
    }
  }

  return [videos, search]; // using arrays is a react convention
};

export default useVideos;