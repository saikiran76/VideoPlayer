import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import Header from './components/Header';
import './App.css'

const App = () => {
  const [videoId, setVideoId] = useState('dQw4w9WgXcQ');

  return (
    <div className="App font-inter min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Header/>
        <VideoPlayer videoId={videoId} />
      </div>
    </div>
  );
};

export default App;
