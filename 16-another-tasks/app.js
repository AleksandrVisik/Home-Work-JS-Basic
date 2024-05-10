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
        console.log(`Задача id ${data.id} добавлена`);
    },
    deleteTaskByID(id) {
        const index = this.tasks.findIndex((task) => task.id == id);
        if (index === -1) {
            console.log(`Задача id ${id} не удалось найти, введите другой id.`)
        } else {
            this.tasks = this.tasks.filter((task) => task.id !== id);
            console.log(`Задача id ${id}, удалена`);
        }
    },
    updateTaskById(id, newData) {
        const index = this.tasks.findIndex((task) => task.id == id);
        if (index === -1) {
            console.log(`Задача id ${id} не удалось найти, введите другой id.`)
        } else {
            this.tasks[index] = { ...this.tasks[index], ...newData };
            console.log(`Задача id ${id}, обновлена`);
        }
    },
    sortTasksByPriority() {
        this.tasks.sort((task1, task2) => task1.priority - task2.priority);
        console.log("Задачи отсортированы по приоритету")
    },

    sortTasksById() {
        this.tasks.sort((task1, task2) => task2.id - task1.id);
        console.log("Задачи отсортированы по id")
    },
};

const newTask = {
    tasks: [
        {
            id: 1,
            name: "тест",
            description: "описание",
            order: 0
        }
    ]
};

const newTaskAddTask = toDoList.addTask.bind(newTask);
const newTaskDeleteTaskById = toDoList.deleteTaskByID.bind(newTask);
const newTaskUpdateTaskById = toDoList.updateTaskById.bind(newTask);
const newTaskSortTasksById = toDoList.sortTasksById.bind(newTask);
const newTaskSortTasksByOrder = toDoList.sortTasksByPriority.bind(newTask);

const tasks1 =
{
    name: "Купить продукты",
    description: "Яблоко, молока, вода",
    order: 2
};
const tasks2 =
{
    name: "Ремонт машины",
    description: "Замена тормозных дисков",
    order: 1
};
const tasks3 =
{
    name: "Просмотр ТВ",
    description: "В мире животных",
    order: 3
};
console.log(...newTask.tasks);

// добавление задачи
newTaskAddTask(tasks1);
console.log(...newTask.tasks);
newTaskAddTask(tasks2);
console.log(...newTask.tasks);
newTaskAddTask(tasks3);
console.log(...newTask.tasks);

// удалении задачи
newTaskDeleteTaskById(7);
console.log(...newTask.tasks);
newTaskDeleteTaskById(1);
console.log(...newTask.tasks);

// изменение задачи
const updateTask = {
    name: "Уборка квартиры",
    description: "Помыть полы",
    order: 5
}


newTaskUpdateTaskById(4, updateTask);
console.log(...newTask.tasks);

newTaskSortTasksById();
console.log(...newTask.tasks);


