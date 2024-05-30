import { useState } from "react";
<<<<<<< HEAD
function AddNewNote({ onAddNote }) {
  const [title, setTitle] = useState("");
=======
import { useNotesDispatch } from "../context/NotesContext";

function AddNewNote() {
  const dispatch = useNotesDispatch();
  const [title, setTtile] = useState("");
>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description)
      return alert("Please Enter Title and Description");
    const newNote = {
      title,
      description,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      completed: false,
    };
<<<<<<< HEAD
    onAddNote(newNote);
    setTitle("");
=======
    dispatch({ type: "add", payload: newNote });
    setTtile("");
>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30
    setDescription("");
  }
  return (
    <div className="add-new-note">
      <h2 className="">Add New Note</h2>
      <form onSubmit={handleSubmit} className="note-form">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="text-field"
          type="text"
          placeholder="Note Title"
        />
        <input
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="text-field"
          type="text"
          placeholder="Note Description..."
        />
        <button className="btn btn--primary" type="submit">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
