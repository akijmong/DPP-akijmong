
$(document).ready(function () {
    const cookieName = "ft_list";

    function saveTasks() {
        const tasks = [];

        $("#ft_list .todo").each(function () {
            tasks.push($(this).text());
        });

        document.cookie =
            cookieName + "=" + encodeURIComponent(JSON.stringify(tasks)) +
            "; max-age=31536000; path=/; SameSite=Lax";
    }

    function addTask(text, save = true) {
        const task = $("<div>")
            .addClass("todo")
            .text(text);

        task.on("click", function () {
            if (confirm("Do you want to delete this task?")) {
                $(this).remove();
                saveTasks();
            }
        });

        $("#ft_list").prepend(task);

        if (save) {
            saveTasks();
        }
    }

    $("#new").on("click", function () {
        const text = prompt("Enter a new task:");

        if (text !== null && text.trim() !== "") {
            addTask(text.trim());
        }
    });

    function loadTasks() {
        const prefix = cookieName + "=";
        const cookies = document.cookie.split(";");

        for (let cookie of cookies) {
            cookie = cookie.trim();

            if (cookie.startsWith(prefix)) {
                try {
                    const tasks = JSON.parse(
                        decodeURIComponent(cookie.substring(prefix.length))
                    );

                    if (Array.isArray(tasks)) {
                        tasks.forEach(function (task) {
                            if (typeof task === "string" && task.trim() !== "") {
                                addTask(task, false);
                            }
                        });
                    }
                } catch (error) {
                    console.error("Could not load saved tasks.");
                }

                break;
            }
        }
    }

    loadTasks();
});
