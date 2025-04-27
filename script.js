const calendar = document.getElementById('calendar');
const selectedDateTitle = document.getElementById('selected-date-title');
const taskInput = document.getElementById('task-input');
const prioritySelect = document.getElementById('priority');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

let selectedDate = null;
const tasks = {}; // { '2025-04-27': [ { task: 'Buy milk', priority: 'normal' }, { task: 'Meeting at 5', priority: 'important' } ] }

generateCalendar();

function generateCalendar() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-indexed

  const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Clear previous calendar
  calendar.innerHTML = '';

  // Add the header row for days of the week
  daysOfWeek.forEach(day => {
    const dayHeader = document.createElement('div');
    dayHeader.className = 'day-header';
    dayHeader.innerText = day;
    calendar.appendChild(dayHeader);
  });

  // Add blank days before 1st
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement('div');
    calendar.appendChild(emptyDiv);
  }

  // Add days
  for (let day = 1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';
    dayDiv.innerText = day;
    const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    dayDiv.addEventListener('click', () => {
      selectDate(dateKey, dayDiv);
    });

    calendar.appendChild(dayDiv);
  }
}

function selectDate(dateKey, dayDiv) {
  selectedDate = dateKey;
  selectedDateTitle.innerText = `Tasks for ${dateKey}`;

  // Unselect previous
  document.querySelectorAll('.day').forEach(day => day.classList.remove('selected'));
  dayDiv.classList.add('selected');

  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = '';
  if (tasks[selectedDate]) {
    tasks[selectedDate].forEach((task, index) => {
      const li = document.createElement('li');
      li.className = 'task-item';
      let taskClass = '';

      if (task.priority === 'normal') {
        taskClass = 'task-normal';
      } else if (task.priority === 'important') {
        taskClass = 'task-important';
      } else if (task.priority === 'both') {
        taskClass = 'task-both';
      }

      li.innerHTML = `
        <span class="task-text ${taskClass}">${task.task}</span>
        <div class="task-actions">
          <button class="edit-btn" onclick="editTask(${index})">Edit</button>
          <button onclick="deleteTask(${index})">Delete</button>
        </div>
      `;
      taskList.appendChild(li);
    });
  }
}

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (taskText === '' || !selectedDate) {
    alert('Please select a date and enter a task!');
    return;
  }

  if (!tasks[selectedDate]) {
    tasks[selectedDate] = [];
  }

  tasks[selectedDate].push({ task: taskText, priority });
  taskInput.value = '';
  renderTasks();
  saveTasksToLocalStorage();
});

function deleteTask(index) {
  tasks[selectedDate].splice(index, 1);
  renderTasks();
  saveTasksToLocalStorage();
}

function editTask(index) {
  const task = tasks[selectedDate][index];
  taskInput.value = task.task;
  prioritySelect.value = task.priority;
  deleteTask(index);
}

function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    Object.assign(tasks, JSON.parse(savedTasks));
    renderTasks();
  }
}

// Load tasks when the page is loaded
loadTasksFromLocalStorage();
