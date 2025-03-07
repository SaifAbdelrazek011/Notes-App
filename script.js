const notesContainer = document.querySelector('.notes-container');
const addNoteButton = document.querySelector('.container button');

function showNotes() {
notesContainer.innerHTML = localStorage.getItem('notes') || '';
const deleteButtons = document.querySelectorAll('.input-box img');
}
function updateLocalStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

addNoteButton.addEventListener('click', () => {
    const note = ` <p contenteditable="true" class="input-box"><span class="protected" contenteditable="false"><img onclick='remove(this)' src="images/delete.png" alt=""></span></p>
    </div>`;
    notesContainer.innerHTML += note;
    updateLocalStorage();
});

notesContainer.addEventListener('input', updateLocalStorage);

showNotes();

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      document.execCommand('insertLineBreak');
        event.preventDefault();
    }
});

function remove(element) {
    element.parentElement.parentElement.remove();
    updateLocalStorage();
}
