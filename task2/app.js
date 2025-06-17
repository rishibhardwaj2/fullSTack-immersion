// This file contains the JavaScript code for the note-taking application.
// It handles the functionality such as adding, editing, and deleting notes, as well as managing local storage.

document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('note-input');
    const addNoteButton = document.getElementById('add-note');
    const notesList = document.getElementById('notes-list');

    // Load notes from local storage
    const loadNotes = () => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.forEach(note => {
            addNoteToDOM(note);
        });
    };

    // Add note to the DOM
    const addNoteToDOM = (note) => {
        const noteItem = document.createElement('li');
        noteItem.textContent = note;
        notesList.appendChild(noteItem);
    };

    // Add note to local storage
    const addNoteToLocalStorage = (note) => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
    };

    // Handle adding a new note
    addNoteButton.addEventListener('click', () => {
        const noteText = noteInput.value.trim();
        if (noteText) {
            addNoteToDOM(noteText);
            addNoteToLocalStorage(noteText);
            noteInput.value = '';
        }
    });

    // Load existing notes on page load
    loadNotes();
});