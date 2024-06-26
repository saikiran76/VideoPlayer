/**
 * Video Player Component where user can watch the embedded Youtube video
 */



import React, { useEffect, forwardRef } from 'react';
import { loadYouTubeAPI } from '../utils/VideoAPI';

const VideoPlayer = forwardRef(({ videoId }, ref) => {
  useEffect(() => {
    loadYouTubeAPI().then(YT => {
      ref.current = new YT.Player('player', {
        height: '600',
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

  return <div id="player" className="video-player shadow-lg rounded-lg overflow-hidden bg-gradient-to-b from-purple-300 via-pink-300 to-red-100 w-full max-w-[480px] h-[300px] sm:max-w-[720px] sm:h-[405px] md:max-w-[1220px] md:h-[600px] mx-auto"></div>

});

export default VideoPlayer;

