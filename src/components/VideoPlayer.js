import React, { useEffect, forwardRef } from 'react';
import { loadYouTubeAPI } from '../utils/VideoAPI';

const VideoPlayer = forwardRef(({ videoId }, ref) => {
  useEffect(() => {
    loadYouTubeAPI().then(YT => {
      ref.current = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: videoId,
        events: {
          'onReady': (event) => console.log("YouTube Player is ready")
        }
      });
    }).catch(error => {
      console.error("YouTube API failed to load", error);
    });
  }, [videoId, ref]);

  return <div id="player" className="video-player shadow-lg rounded-lg overflow-hidden bg-gradient-to-b from-purple-300 via-pink-300 to-red-100 w-[1250px] h-[600px]"></div>;
});

export default VideoPlayer;

