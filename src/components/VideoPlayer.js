import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
  const opts = {
    height: '600',
    width: '1250',
    playerVars: {
      autoplay: 0,
      controls:1,
      enablejsapi:1,
    },
  };

  return (
    <div className="video-player shadow-lg rounded-lg overflow-hidden bg-gradient-to-b from-purple-300 via-pink-300 to-red-100">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default VideoPlayer;