
const list = document.getElementById("ft_list");
const newButton = document.getElementById("new-btn");

function saveTodos() {
    const todos = [];

    list.querySelectorAll(".todo-item").forEach((item) => {
        todos.push(item.textContent);
    });

    document.cookie =
        "todos=" + encodeURIComponent(JSON.stringify(todos)) +
        "; max-age=31536000; path=/; SameSite=Lax";
}

function addTodo(text, save = true) {
    if (!text.trim()) return;

    const item = document.createElement("div");
    item.className = "todo-item";
    item.textContent = text;

    item.addEventListener("click", () => {
        if (confirm("Do you want to remove this task?")) {
            item.remove();
            saveTodos();
        }
    });

    list.prepend(item);

    if (save) {
        saveTodos();
    }
}

function loadTodos() {
    const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("todos="));

    if (!cookie) return;

    try {
        const todos = JSON.parse(
            decodeURIComponent(cookie.substring("todos=".length))
        );

        if (Array.isArray(todos)) {
            todos.reverse().forEach((todo) => {
                if (typeof todo === "string") {
                    addTodo(todo, false);
                }
            });
        }
    } catch (error) {
        console.error("Could not load saved tasks:", error);
    }
}

newButton.addEventListener("click", () => {
    const text = prompt("Enter a new task:");

    if (text !== null && text.trim() !== "") {
        addTodo(text);
    }
});

loadTodos();
