import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import Notes from './components/Notes';
import Header from './components/Header';
import './App.css'

const App = () => {
  const [videoId, setVideoId] = useState('dQw4w9WgXcQ');

  return (
    <div className="App min-h-screen py-8 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 ">
        <Header/>
        <VideoPlayer videoId={videoId}/>
        <Notes videoId={videoId} />
      </div>
    </div>
  );
};

export default App;