import { useNotes } from "../context/NotesContext";
import Message from "./Message";
<<<<<<< HEAD
function NoteStatus({ notes }) {
=======

function NoteStatus() {
  const notes= useNotes()
  // dervied state :
>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30
  const allNotes = notes.length;
  const completedNotes = notes.filter(n => n.completed).length;
  const unCompletedNotes = allNotes - completedNotes;
  if (!allNotes)
    return (
      <Message>
        <span>&#9785;</span>
        <span>No Notes has already been added</span>
      </Message>
    );

  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Copmleted <span>{completedNotes}</span>
      </li>
      <li>
        UnCompleted <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
