const btn = document.querySelector('#button-addon2');
const notes = document.querySelector('.notes__list');
const input = document.querySelector('.form-control');

btn.addEventListener("click", () => {
    const noteContent = input.value;
    const newNote = document.createElement('div');
    newNote.classList.add('note-item');
    newNote.innerText = noteContent;
    notes.appendChild(newNote);
    input.value = '';
})