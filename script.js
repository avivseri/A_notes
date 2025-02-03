// Elements
const noteInput = document.getElementById("noteInput");
const fontSelector = document.getElementById("fontSelector");
const fontSizeInput = document.getElementById("fontSize");
const fontColorInput = document.getElementById("fontColor");
const saveNoteButton = document.getElementById("saveNote");
const notesList = document.getElementById("notesList");

// Update text area styles
fontSelector.addEventListener("change", () => {
    noteInput.style.fontFamily = fontSelector.value;
});

fontSizeInput.addEventListener("input", () => {
    noteInput.style.fontSize = `${fontSizeInput.value}px`;
});

fontColorInput.addEventListener("input", () => {
    noteInput.style.color = fontColorInput.value;
});

// Save a note
saveNoteButton.addEventListener("click", () => {
    const noteText = noteInput.value.trim();
    if (noteText === "") {
        alert("הפתק ריק, נא להוסיף תוכן!");
        return;
    }

    // Create a new note element
    const noteElement = document.createElement("li");
    noteElement.textContent = noteText;
    noteElement.style.fontFamily = fontSelector.value;
    noteElement.style.fontSize = `${fontSizeInput.value}px`;
    noteElement.style.color = fontColorInput.value;

    // Add the note to the list
    notesList.appendChild(noteElement);

    // Clear the textarea
    noteInput.value = "";
});
