<<<<<<< HEAD
function NoteList({ notes, onDelete, onCompleted, sortBy }) {
=======
import { useNotes, useNotesDispatch } from "../context/NotesContext";

function NoteList({ sortBy }) {
  const notes = useNotes();

>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30
  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sortBy === "uncompleted")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
  return (
    <div className="note-list">
<<<<<<< HEAD
      {sortedNotes.map(note => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onCompleted={onCompleted}
        />
=======
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30
      ))}
    </div>
  );
}

export default NoteList;

<<<<<<< HEAD
function NoteItem({ note, onDelete, onCompleted }) {
=======
function NoteItem({ note }) {
  const dispatch = useNotesDispatch();

>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={`note-item ${note.completed ? "completed" : ""} `}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
<<<<<<< HEAD
          <button onClick={() => onDelete(note.id)}>&#10006;</button>
=======
          <button
            onClick={() => dispatch({ type: "delete", payload: note.id })}
          >
            ❌
          </button>
>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30
          <input
            type="checkbox"
            onChange={onCompleted}
            value={note.id}
<<<<<<< HEAD
            name={note.id}
=======
            checked={note.completed}
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "complete", payload: noteId });
            }}
>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
