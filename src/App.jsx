import { useReducer, useState } from "react";
import "./App.css";
<<<<<<< HEAD
import AddNewNote from "./Components/AddNewNote";
import NoteHeader from "./Components/NoteHeader";
import NoteList from "./Components/NoteList";
import NoteStatus from "./Components/NoteStatus";
=======
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { NotesProvider } from "./context/NotesContext";

>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30
function App() {
  const [sortBy, setSortBy] = useState("latest");
<<<<<<< HEAD

  const handleAddNote = newNote => {
    setNotes(prevNotes => [...prevNotes, newNote]);
  };
  const handleDeleteNote = id => {
    setNotes(prevNotes => prevNotes.filter(n => n.id !== id));
  };
  const handleCompletedNote = e => {
    const noteId = Number(e.target.value);
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={e => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            onCompleted={handleCompletedNote}
          />
=======
  return (
    <NotesProvider>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
