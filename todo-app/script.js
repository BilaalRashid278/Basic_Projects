const add_todos = document.querySelector(".add");
const items = document.querySelector(".items");
const todos = document.querySelector("#todos");


let New_todos_Add = () => {
    let html = `<li class="item" type="none">
        <span class="text">${todos.value}</span>
        <img src="./icons8-delete-64.png" alt="delete" width="25px" class="delete">
        </li>`;
    items.innerHTML += html;
    todos.value = "";
    items.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
        }
    });
};

add_todos.addEventListener("click", () => {
    if (todos.value == "") {
        console.log("hello");
    } else {
        New_todos_Add();
    };


});

items.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});


// ##################### search filter ############################
const search_todo = document.querySelector("#filter");

const filter_todo = (term) => {
    Array.from(items.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(items.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};
search_todo.addEventListener("keyup", () => {
    const term = search_todo.value.trim().toLowerCase();
    filter_todo(term);
});















