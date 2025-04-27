 Calendar To-Do List

Overview

This is a simple **Calendar To-Do List** web application that allows users to add, edit, and manage tasks for specific dates. The calendar is dynamically generated, and tasks are stored locally using **localStorage** to persist across browser refreshes. The app also features a colorful, neon-themed design with smooth animations, task categorization, and task prioritization (important vs. normal).

 Features

- Calendar View: Month-by-month view with days displayed in a grid format.
- Task Management: 
  - Add tasks for specific dates.
  - Mark tasks as Important or Normal.
  - Edit and delete tasks.
- Neon Glow: Smooth neon glow effects on buttons and elements.
- Task Prioritization: 
  - Important tasks are highlighted with a specific color.
  - Normal tasks have a distinct color.
  - Combined task categories are also supported.
- LocalStorage: Tasks are saved in the browser’s localStorage, ensuring they persist across page refreshes.
- Responsive Design: Layout adjusts to different screen sizes for better usability.
- Notifications (Reminder System): A simple notification system to remind you of tasks on specific dates.

Installation

1. Clone or download this repository to your local machine.
2. Open the project folder.
3. Ensure you have a modern web browser (such as Google Chrome or Firefox).
4. Open the 'index.html' file in your browser to run the app.

File Structure


/Calendar-ToDo-List
  /index.html        # The main HTML file
  /style.css         # The CSS file for styling
  /script.js         # The JavaScript file for functionality
  /README.md         # The README file you are reading


Usage

1. Select a Date: Click on a date in the calendar to select it.
2. Add Tasks: Type your task in the input field and click the "Add" button to add it to the selected date.
3. Task Priorities: Tasks can be categorized as Normal or Important by using the 'normal' or 'important' class when adding tasks.
4. Task Editing: Click on a task to edit or delete it.
5. Search Tasks: Use the search bar to quickly find tasks for a specific date.

Technologies Used

- HTML5: Structure of the application.
- CSS3: Styling, animations, and transitions.
- JavaScript: Logic for generating the calendar, managing tasks, and handling localStorage.
- localStorage: Used to persist tasks across page refreshes.

Screenshots

- Calendar View: A grid of days for the selected month.
- Task List: Tasks listed for a specific day with options to edit and delete.

Future Improvements

- Task Reminders: Implement a reminder system that notifies users of upcoming tasks.
- UI Enhancements: Additional visual effects, such as background particles or animations.
- Mobile Optimization: Further enhance the mobile experience for better usability.
- Cloud Sync: Sync tasks across devices using a backend database.

Contributing

Feel free to fork this project, submit pull requests, or suggest features! Contributions are always welcome.
