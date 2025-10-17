const fs = require("fs");

// File where we’ll store all todos
const FILE = "todos.json";

// ✅ Step 1: Read todos from file (or start with an empty list)
function loadTodos() {
  if (!fs.existsSync(FILE)) {
    fs.writeFileSync(FILE, "[]"); // create empty file if not there
  }
  const data = fs.readFileSync(FILE, "utf-8");
  return JSON.parse(data);
}

// ✅ Step 2: Save todos back to file
function saveTodos(todos) {
  fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));
}

// ✅ Step 3: Get command and input from user
const command = process.argv[2]; // add / delete / done / list
const input = process.argv[3];   // task or id

let todos = loadTodos(); // load existing todos

// ✅ Step 4: Perform actions based on command
if (command === "add") {
  // add new todo
  const newTodo = { id: Date.now(), task: input, done: false };
  todos.push(newTodo);
  saveTodos(todos);
  console.log("✅ Todo added:", input);
}

else if (command === "delete") {
  // delete todo by id
  const id = Number(input);
  todos = todos.filter(t => t.id !== id);
  saveTodos(todos);
  console.log("🗑️ Todo deleted:", id);
}

else if (command === "done") {
  // mark todo as done
  const id = Number(input);
  todos.forEach(t => {
    if (t.id === id) t.done = true;
  });
  saveTodos(todos);
  console.log("🎉 Todo marked as done:", id);
}

else if (command === "list") {
  // list all todos
  console.log("\n📋 Your Todos:");
  todos.forEach(t => {
    console.log(`${t.id}: ${t.task} [${t.done ? "✔" : "❌"}]`);
  });
}

else {
  // if wrong command
  console.log("❓ Commands: add <task> | delete <id> | done <id> | list");
}
