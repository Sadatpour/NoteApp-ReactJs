<<<<<<< HEAD
function NoteHeader({ notes, onSort, sortBy }) {
=======
import { useNotes } from "../context/NotesContext";

function NoteHeader({sortBy, onSort }) {
const notes= useNotes()
>>>>>>> 9c64cdf88bf4fd03fdde97db902d37645cc64b30
  return (
    <div className="note-header">
      <h1>My Notes({notes.length})</h1>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">Sort based on Latest Notes</option>
        <option value="earliest">Sort based on earliest Notes</option>
        <option value="uncompleted">Sort based on Uncompleted Notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;
