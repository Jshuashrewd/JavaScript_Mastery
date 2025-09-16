class Todo {
    #id;
    #title;
    #completed;

    constructor(id, title) {
        this.#id = id;
        this.#title = title;
        this.#completed = false;
    };

    toggle() {
        this.#completed = !this.completed;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get completed() {
        return this.#completed;
    }

    toJson() {
        return {
            id: this.#id,
            title: this.#title,
            completed: this.#completed
        };
    }

    static fromJson(json) {
        const todo = new Todo(json.id, json.title);
        if (json.completed) {
            todo.toggle();
        }
        return todo;
    }
}

class TodoList {
    constructor(){
        this.todos = [];
        this.load();
    }

    addTodo(title) {
        const id = Date.now();
        const todo = new Todo(id, title);
        this.todos.push(todo);
        this.save();
        return todo;
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.save();
    }

    toggleTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo)
            todo.toggle();
        this.save();
    }

    getTodos() {
        return this.todos;
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos.map(todo => todo.toJson())));
    }

    load() {
        const json = JSON.parse(localStorage.getItem('todos')) || [];
        this.todos = json.map(Todo.fromJson);
    }
}