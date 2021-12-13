const form = document.querySelector('.notes__form');
const notes = document.querySelector('.notes__list');
const input = document.querySelector('.notes__input');
const button = document.querySelector('.notes__btn');

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
        newNote.innerHTML = `<div class="note-content">${note}</div><div class="close-btn"><i class="fas fa-times"></i></div>`;
        notes.appendChild(newNote);
        input.value = '';
    });

    const closeBtns = document.querySelectorAll('.close-btn');

    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const noteContent = closeBtn.previousSibling.textContent;
            closeBtn.closest('.note-item').remove();
            const notes = getNotesFromStorage();
            const newNotes = notes.filter((item) => item !== noteContent);

            localStorage.setItem('notes', JSON.stringify(newNotes));
        });
    });
});

input.addEventListener('input', () => {
    button.disabled = input.value === '';
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const noteContent = input.value;

    if(noteContent === '') {
        button.disabled = true;
        return;
    }

    const notesFromStorage = getNotesFromStorage();
    notesFromStorage.push(noteContent);
    const newNote = document.createElement('div');
    newNote.classList.add('note-item');
    newNote.innerHTML = `<div class="note-content">${noteContent}</div><div class="close-btn"><i class="fas fa-times"></i></div>`;
    const newNoteCloseBtn = newNote.querySelector('.close-btn');
    newNoteCloseBtn.addEventListener('click', () => {
        const noteContent = newNoteCloseBtn.previousSibling.textContent;
        newNoteCloseBtn.closest('.note-item').remove();
        const notes = getNotesFromStorage();
        const newNotes = notes.filter((item) => item !== noteContent);

        localStorage.setItem('notes', JSON.stringify(newNotes));
    });
    notes.appendChild(newNote);
    input.value = '';
    button.disabled = true;

    localStorage.setItem('notes', JSON.stringify(notesFromStorage));
});