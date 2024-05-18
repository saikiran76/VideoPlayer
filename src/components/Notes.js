import React, { useState, useEffect } from 'react';
import Button from './Button';

const Notes = ({ videoId }) => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [videoTimestamp, setVideoTimestamp] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem(videoId)) || [];
    setNotes(savedNotes);
  }, [videoId]);

  const handleAddNote = () => {
    const newNote = {
      content: noteText,
      timestamp: videoTimestamp,
      dateCreated: new Date().toLocaleString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    localStorage.setItem(videoId, JSON.stringify(newNotes));
    setNoteText('');
    setVideoTimestamp('');
  };

  const handleEditNote = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setNoteText(notes[index].content);
  };

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    localStorage.setItem(videoId, JSON.stringify(newNotes));
  };


  return (
    <div className="bg-white p-6 rounded-lg shadow-lg font-inter">
      <div className='flex justify-between items-center m-2 font-semibold'>
        <h2 className="text-lg font-bold mb-4">My Notes</h2>
        <div onClick={handleAddNote}><Button name={editMode ? 'Update Note' : 'Add Note'} icon={true}/></div>
      </div>

      <div className="space-y-4">
        {notes.map((note, index) => (
          <div key={index} className="p-4 rounded shadow">
            <p>{note.content}</p>
            <div className='flex justify-end gap-3'>
            {/* <button onClick={() => handleEditNote(index)} className="mr-2 p-3 text-sm border-gray-300 border-l border-r border-b border-t flex items-center gap-4">
              Edit
            </button> */}
            <div onClick={() => handleEditNote(index)}><Button margin={"mr-2"} /></div>
            <div onClick={() => handleDeleteNote(index)}><Button name={"Edit"} /></div>
            </div>
          </div>
        ))}
      </div>
      <textarea value={noteText} className='m-5' onChange={(e) => setNoteText(e.target.value)} />      
    </div>
  );
};

export default Notes;