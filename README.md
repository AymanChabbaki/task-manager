src/
  components/
    Auth/   (Teammate 1) yassine
    Tasks/  (Teammate 2) ayman
  context/
    AuthContext.js   (Teammate 1)
    TaskContext.js   (Teammate 2)
  pages/
    Login.js         (Teammate 1)
    Register.js      (Teammate 1)
    Dashboard.js     (Teammate 2)
    TaskDetail.js    (Teammate 2)
    AddTask.js       (Teammate 2)
  routes/
    ProtectedRoute.js (Teammate 1)
  App.js             (Shared)
  index.js           (Shared)


🧑‍💻 Teammate 1 – Auth & User Flows

Focus: Authentication, forms, and validation.

Responsibilities:

Authentication

Implement /login and /register pages.

Add Zod validation (email, password rules).

Setup AuthContext + useReducer for:

LOGIN

LOGOUT

REGISTER

Persist auth state in localStorage (bonus).

Protected Routes

Wrap private pages (/dashboard, /add-task, /task/:id) in a ProtectedRoute component.

Navigation

Implement React Router setup (routes + redirects).

Events

Handle login form onSubmit + input onChange.

Logout button event.

🧑‍💻 Teammate 2 – Tasks & Dashboard

Focus: Task CRUD, fetching, and state management.

Responsibilities:

Task Management

Create TaskContext + useReducer with actions:

ADD_TASK

EDIT_TASK

DELETE_TASK

TOGGLE_TASK

Fetching Tasks

Use useEffect to fetch mock API data (JSON file / JSON server).

Store fetched tasks in context.

Dashboard

/dashboard: list tasks with toggle event.

/task/:id: detail view of a single task.

/add-task: form to add new tasks (with Zod validation).

Events

onClick → toggle task complete.

onSubmit → add/edit tasks.

onChange → update inputs.