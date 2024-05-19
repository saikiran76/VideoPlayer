import React, { useState, useRef } from 'react';
import VideoPlayer from './components/VideoPlayer';
import Notes from './components/Notes';
import Header from './components/Header';
import './App.css';
import Description from './components/Description';

const App = () => {
  const [videoId, setVideoId] = useState('dQw4w9WgXcQ');  
  const videoPlayerRef = useRef(null);

  return (
    <div className="App font-inter min-h-screen py-8 bg-gray-100 m-4">
      <div className="container mx-auto px-4">
        <Header/>
        <VideoPlayer ref={videoPlayerRef} videoId={videoId} />
        <Description/>
        <Notes videoId={videoId} videoPlayer={videoPlayerRef} />
      </div>
    </div>
  );
};

export default App;

