const form = document.querySelector('.notes__input');
const notes = document.querySelector('.notes__list');
const input = document.querySelector('.form-control');

const getNotesFromStorage = () => {
    if(localStorage.getItem('notes')) {
        return JSON.parse(localStorage.getItem('notes'));
    }
    return [];
}

window.addEventListener('DOMContentLoaded', () => {
    const notesFromStorage = getNotesFromStorage();

    notesFromStorage.forEach(note => {
        const newNote = document.createElement('div');
        newNote.classList.add('note-item');
        newNote.innerText = note;
        notes.appendChild(newNote);
        input.value = '';
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const noteContent = input.value;
    const notesFromStorage = getNotesFromStorage();
    notesFromStorage.push(noteContent);
    const newNote = document.createElement('div');
    newNote.classList.add('note-item');
    newNote.innerText = noteContent;
    notes.appendChild(newNote);
    input.value = '';

    localStorage.setItem('notes', JSON.stringify(notesFromStorage));
});