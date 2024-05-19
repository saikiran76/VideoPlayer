import React, { useState, useEffect } from 'react';
import { Button } from './Button';

const Notes = ({ videoId, videoPlayer }) => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem(videoId)) || [];
    setNotes(savedNotes);
  }, [videoId]);

  const addOrUpdateNote = () => {
    if (!videoPlayer.current) {
      alert("Video player is not ready.");
      return;
    }

    const currentTime = Math.floor(videoPlayer.current.getCurrentTime());
    const updatedNotes = [...notes];
    const newNote = {
      content: noteText,
      timestamp: currentTime,
      dateCreated: new Date().toLocaleString()
    };

    if (editMode) {
      updatedNotes[editIndex] = newNote;
    } else {
      updatedNotes.push(newNote);
    }

    setNotes(updatedNotes);
    localStorage.setItem(videoId, JSON.stringify(updatedNotes));
    setNoteText('');
    setEditMode(false);
    setEditIndex(-1);
  };

  const editNote = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setNoteText(notes[index].content);
  };


  const deleteNote = (index) => {
    setNotes(currentNotes => {
        const updatedNotes = [...currentNotes];
        updatedNotes.splice(index, 1);
        localStorage.setItem(videoId, JSON.stringify(updatedNotes)); 
        return updatedNotes;
    });
};


  const jumpToTimestamp = (timestamp) => {
    if (videoPlayer.current && typeof videoPlayer.current.seekTo === 'function') {
      videoPlayer.current.seekTo(timestamp, true);
    }
  };

  console.log(notes[0]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
  
    const formattedMins = String(mins).padStart(2, '0');
    const formattedSecs = String(secs).padStart(2, '0');
  
    return `${formattedMins} min ${formattedSecs} secs`;
  };


  return (
    <div className="bg-white p-6 rounded-lg shadow-lg font-inter border-gray-300 border-l border-r border-b border-t">
      <h1 className="font-inter font-semibold text-xl mb-2">My Notes</h1>
      <p className='text-zinc-500 mb-4'>All your notes at a single place. Click on any note to go to specific timestamp in the video.</p>
      <hr></hr>
      <textarea
        className="w-full p-3 border mt-4 border-gray-300 rounded mb-4 shadow-lg"
        value={noteText}
        onChange={e => setNoteText(e.target.value)}
        placeholder="Enter your note here..."
      />
      <div className='flex justify-end' onClick={addOrUpdateNote}><Button name={editMode ? 'Update Note' : 'Add Note'} icon={true}/></div>

      {notes.map((note, index) => (
        <div key={index} className="mt-4 p-4 border border-gray-300 rounded">
          <div className='rounded-lg'>
          <p>{formatDate(note.dateCreated)} - <span className="text-blue-500 cursor-pointer block" onClick={() => jumpToTimestamp(note.timestamp)}><span className='text-gray-600'>TimeStamp:</span> {formatTime(note.timestamp)}</span></p>
          <p>{note.content}</p>
          </div>
          <div className='flex gap-4 justify-end items-center'>
            <div onClick={() => editNote(index)}><Button name='Edit' margin={""} /></div>
            <div onClick={() => deleteNote(index)}><Button name={"Delete"} /></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notes;
