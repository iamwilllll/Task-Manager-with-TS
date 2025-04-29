const tasks: string[] = []; //Define the tasks array

function createTask(tsk: string) {
    tasks.push(tsk); //Push the task to tasks array
}

createTask('aa');

tasks.forEach((pendingTsk, index) => {
    index++;
    console.log(`Tareas pendientes: ${index}) ${pendingTsk}`);
});
