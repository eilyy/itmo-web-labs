const form = document.querySelector('.notes__input');
const notes = document.querySelector('.notes__list');
const input = document.querySelector('.form-control');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const noteContent = input.value;
    const newNote = document.createElement('div');
    newNote.classList.add('note-item');
    newNote.innerText = noteContent;
    notes.appendChild(newNote);
    input.value = '';
})