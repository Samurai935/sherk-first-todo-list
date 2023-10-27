document.addEventListener("DOMContentLoaded", function() {
    const ajoutdeTruc = document.getElementById("ajoutdeTruc");
    const fairePlusButton = document.getElementById("fairePlus");
    const trucAfaire = document.getElementById("trucAfaire");

    fairePlusButton.addEventListener("click", function() {
        const taskText = ajoutdeTruc.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.addEventListener("click", function() {
            taskItem.remove();
        });

        taskItem.appendChild(deleteButton);
        trucAfaire.appendChild(taskItem);
        ajoutdeTruc.value = "";
    });
});
