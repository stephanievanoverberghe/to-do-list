// OUVRIR L'ACCORDEON

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const arrowIcon = this.querySelector('.arrow-icon img');

        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            arrowIcon.style.transform = 'rotate(180deg)'; // Pour faire pivoter l'icône de flèche
        } else {
            content.style.display = 'none';
            arrowIcon.style.transform = 'rotate(0deg)';
        }
    });
});

// OUVRIR LES ETAPES

document.querySelector('.task-arrow-icon').addEventListener('click', function() {
    const stepContainer = document.querySelector('.step-container');
    const taskArrowIcon = this.querySelector('img'); // Sélectionnez l'image à l'intérieur de .task-arrow-icon

    if (stepContainer.style.display === 'none' || stepContainer.style.display === '') {
        stepContainer.style.display = 'block';
        taskArrowIcon.style.transform = 'rotate(180deg)'; // Pour faire pivoter l'icône de flèche
    } else {
        stepContainer.style.display = 'none';
        taskArrowIcon.style.transform = 'rotate(0deg)';
    }
});

// MODALES

const modal = document.getElementById('taskModal');
const openModalBtn = document.querySelector('.add-task');
const closeModalBtn = document.querySelector('.close');
const addTaskBtn = document.getElementById('addTaskBtn');
const newTaskInput = document.getElementById('newTask');

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

addTaskBtn.addEventListener('click', function() {
    const taskName = newTaskInput.value;
    if (taskName) {
        const taskList = document.querySelector('.accordion-body');
        const newTask = document.createElement('p');
        newTask.textContent = taskName;
        taskList.insertBefore(newTask, taskList.firstChild);
        newTaskInput.value = '';
        modal.style.display = 'none';
    }
});

// Ajoute la tache dans le H2
document.querySelector('.accordion-body').addEventListener('click', function(event) {

    if (event.target.tagName.toLowerCase() === 'p') {
        const contenuTache = event.target.textContent;
        document.querySelector('.task-content h2').textContent = contenuTache;
    }
});



// LOCAL STORAGE