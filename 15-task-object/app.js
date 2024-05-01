"use strict";

const toDoList = {
    tasks: [
        {
            title: "Помыть посуду",
            id: 1,
            priority: 1
        },
    ],
    addTask(data) {
        let lastId = this.tasks.at(-1)?.id;
        data.id = ++lastId
        this.tasks.push(data);
        console.log("Задача добавлена");
    },
    deleteTaskByID(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        console.log(`Задача id - ${id}, удалена`)
    },
    updateTaskById(id, newData) {
        const index = this.tasks.findIndex((task) => task.id == id);
        const updateTask = [];
        for (const [key, value] of Object.entries(newData)) {
            if (value) {
                updateTask.push(newData);
            }
        }
        this.tasks[index] = { ...this.tasks[index], ...newData };
        console.log(`Задача id - ${id}, обновлена`);
    },
    sortTasksByPriority() {
        this.tasks.sort((task1, task2) => task1.priority - task2.priority);
        console.log("Задачи отсортированы по приоритету")
    },
    sortTasksById() {
        this.tasks.sort((task1, task2) => task1.id - task2.id);
        console.log("Задачи отсортированы по id")
    },


};


const newTask = {
    title: "Вынести мусор",
    priority: 3,
};
const newTask2 = {
    title: "Купить хлеб",
    priority: 4,
};

const newTask3 = {
    title: "Выгулять собаку",
    priority: 2,
};
const newTask4 = {
    title: "Лечь спать",
    priority: 6,
};


console.log(...toDoList.tasks);
// Добавление задачи
toDoList.addTask(newTask);
console.log(...toDoList.tasks);

toDoList.addTask(newTask2);
console.log(...toDoList.tasks);

toDoList.addTask(newTask3);
console.log(...toDoList.tasks);

toDoList.addTask(newTask4);
console.log(...toDoList.tasks);

// Удаление задачи
toDoList.deleteTaskByID(2);
console.log(...toDoList.tasks);

// Изменение задачи 
const newData = {
    title: "Сварить суп",
    priority: 5
};
toDoList.updateTaskById(3, newData);
console.log(...toDoList.tasks);

toDoList.sortTasksByPriority();
console.log(...toDoList.tasks);

toDoList.sortTasksById();
console.log(...toDoList.tasks);