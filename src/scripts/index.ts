document.addEventListener('DOMContentLoaded', () => {
    /* VARIABLES WAREHOUSE */
    const formTsk = document.querySelector('#form-task') as HTMLFormElement; // Get the task form element
    const taskBoard = document.querySelector('#task-board') as HTMLDivElement; // Get the container where tasks will be added
    const inputTsk = document.querySelector('#task-input') as HTMLInputElement; // Get the input field for new tasks

    let tskIndex: number = 0; // Counter to assign unique IDs to each task

    /* EVENT LISTENERS */
    formTsk.addEventListener('submit', event => {
        event.preventDefault(); // Prevent form submission from reloading the page

        if (inputTsk.value) {
            // Check if input is not empty
            const tskToEnter: string = inputTsk.value;
            addTsk(tskToEnter); // Call function to add task to the board

            inputTsk.value = ''; // Clear the input field
        } else {
            alert('Please enter a valid value'); // Alert if input is empty
        }
    });

    /* FUNCTION TO ADD TASK TO THE BOARD */
    function addTsk(tskToEnter: string): void {
        const tsk: HTMLDivElement = createElement(tskToEnter); // Create task element

        taskBoard.appendChild(tsk); // Add task element to the board
    }

    /* FUNCTION TO CREATE A TASK ELEMENT */
    function createElement(tskToEnter: string): HTMLDivElement {
        const div: HTMLDivElement = document.createElement('div'); // Create task container
        const button: HTMLButtonElement = document.createElement('button'); // Create delete button
        const p: HTMLParagraphElement = document.createElement('p'); // Create paragraph for task text

        button.textContent = 'X'; // Set button text to 'X'
        button.classList = 'delete-task'; // Add class for styling
        button.id = String(tskIndex); // Set a unique ID

        // Add click event to remove task when button is clicked
        button.addEventListener('click', () => {
            div.remove();
        });

        p.textContent = tskToEnter; // Set the task text

        div.appendChild(p); // Add paragraph to task container
        div.appendChild(button); // Add delete button to task container

        div.classList.add('task'); // Add class for styling
        div.id = String(tskIndex); // Set a unique ID to the task container

        tskIndex++; // Increment the task index

        return div; // Return the created task element
    }
});
