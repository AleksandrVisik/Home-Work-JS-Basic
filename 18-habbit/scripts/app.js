"use strict";

let habbits = [];
const HABBIT_KEY = "HABBIT_KEY";
let globalActiveHabbitId;

// page
const page = {
    menu: document.querySelector(".menu__list"),
    header: {
        h1: document.querySelector(".h1"),
        progressPercent: document.querySelector(".progress__percent"),
        progressCoverBar: document.querySelector(".progress__cover-bar"),
    },
    content: {
        daysContainer: document.getElementById("days"),
        nextDay: document.querySelector(".habbit__day"),
        target: document.querySelector(".target"),
        newDay: document.querySelector(".habbit__newDay")
    },
    popup: {
        index: document.getElementById("add-habbit-popup"),
        iconField: document.querySelector('.popup__form input[name="icon"]')
    }
}
// utils

function loadData() {
    const habbitsString = localStorage.getItem(HABBIT_KEY);
    const habbitArray = JSON.parse(habbitsString);
    if (Array.isArray(habbitArray)) {
        habbits = habbitArray;
    }
}

function saveData() {
    localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

function togglePopup() {
    if (page.popup.index.classList.contains("cover_hidden")) {
        page.popup.index.classList.remove("cover_hidden");
    } else {
        page.popup.index.classList.add("cover_hidden");
    }
}

function resetForm(form, fields) {
    for (const field of fields) {
        form[field].value = ""
    }

}

function validateAndGetFormData(form, fields) {
    const formData = new FormData(form);
    const res = {};
    for (const field of fields) {
        const fieldValue = (formData.get(field));
        form[field].classList.remove("error");
        if (!fieldValue) {
            form[field].classList.add("error");
            return;
        }
        res[field] = fieldValue;
    }
    let isValid = true;
    for (const field of fields) {
        if (!res[field]) {
            isValid = false;
        }
    }
    if (!isValid) {
        return;
    }
    return res;
}

// render
function rerenderMenu(activeHabbit) {
    // page.menu.innerHTML = ""; рендерит все меню
    for (const habbit of habbits) {
        const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
        if (!existed) {
            const element = document.createElement("button");
            element.setAttribute("menu-habbit-id", habbit.id);
            element.classList.add("menu__item");
            element.addEventListener("click", () => rerender(habbit.id));
            element.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}"/>`;
            if (activeHabbit.id === habbit.id) {
                element.classList.add("menu__item_active");
            }
            page.menu.appendChild(element);
            continue;
        }
        if (activeHabbit.id === habbit.id) {
            existed.classList.add("menu__item_active");
        } else {
            existed.classList.remove("menu__item_active");
        }
    }
}

function rerenderHead(activeHabbit) {
    page.header.h1.innerHTML = `${activeHabbit.name} <button class="habbit__delete habbit__delete_all" onclick="deleteHabbit()">
              <img src="./images/delete.svg" alt="Удалить привычку" />
            </button> `;

    const progress = activeHabbit.days.length / activeHabbit.target > 1
        ? 100
        : activeHabbit.days.length / activeHabbit.target * 100;
    page.header.progressPercent.innerText = progress.toFixed(0) + "%";
    page.header.progressCoverBar.setAttribute("style", `width: ${progress}%`);
}

function dayTitle(number) {
    const last_num = number % 10;
    if (number > 10 && [11, 12, 13, 14].includes(number % 100)) {
        return "дней";
    }
    if (last_num == 1) {
        return "день";
    }
    if ([2, 3, 4].includes(last_num)) {
        return "дня";
    }
    if ([5, 6, 7, 8, 9, 0].includes(last_num)) {
        return "дней";
    }
};

function rerenderContent(activeHabbit) {
    const userTarget = `<div class="target">В ближайшие ${activeHabbit.target} ${dayTitle(activeHabbit.target)}, ваша цель:</div>`;
    page.content.target.innerHTML = userTarget;
    page.content.newDay.classList.remove("habbit__newDay");
    page.content.daysContainer.innerHTML = "";

    for (const index in activeHabbit.days) {
        const element = document.createElement("div");
        element.classList.add("habbit");
        element.classList.remove("habbit__newDay")
        element.innerHTML = `<div class="habbit__day"> День ${Number(index) + 1}</div>
        <div class="habbit__comment">
          ${activeHabbit.days[index].comment}
        </div>
        <button class="habbit__delete" onclick="deleteDay(${index})">
          <img src="./images/delete.svg" alt="Удалить день ${Number(index) + 1}" />
        </button>`;
        page.content.daysContainer.appendChild(element);
        page.content.target.innerHTML = "";
        if (activeHabbit.days.length / activeHabbit.target * 100 === 100) {
            page.content.target.innerHTML = `<div class="target__completed">Вы достигли своей цели:</div>`;
            page.content.newDay.classList.add("habbit__newDay")
        } else {
            page.content.target.innerHTML = userTarget;
        }
    }
    page.content.nextDay.innerHTML = `День ${activeHabbit.days.length + 1} `;
}

function rerender(activeHabbitId) {
    globalActiveHabbitId = activeHabbitId

    const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);
    if (!activeHabbit) {
        return;
    }
    document.location.replace(document.location.pathname + "#" + activeHabbitId);
    rerenderMenu(activeHabbit);
    rerenderHead(activeHabbit);
    rerenderContent(activeHabbit);
}

/* work with days */

function addDays(event) {
    event.preventDefault(); // игнорирует дефолтное поведениие события
    const data = validateAndGetFormData(event.target, ["comment"]);
    if (!data) {
        return;
    }
    habbits = habbits.map(habbit => {
        if (habbit.id === globalActiveHabbitId) {
            return {
                ...habbit,
                days: habbit.days.concat([{ comment: data.comment }])
            }
        }
        return habbit;
    });
    resetForm(event.target, ["comment"]);
    rerender(globalActiveHabbitId);
    saveData();
}

function deleteDay(index) {
    habbits = habbits.map(habbit => {
        if (habbit.id === globalActiveHabbitId) {
            habbit.days.splice(index, 1);
            return {
                ...habbit,
                day: habbit.days
            };
        }
        return habbit;
    });
    rerender(globalActiveHabbitId);
    saveData();
}

// working with habbits

function setIcon(context, icon) {
    page.popup.iconField.value = icon;
    const activeIcon = document.querySelector(".icon.icon_active");
    activeIcon.classList.remove("icon_active");
    context.classList.add("icon_active");
}

function addHabbit(event) {
    event.preventDefault(); // игнорирует дефолтное поведениие события
    const data = validateAndGetFormData(event.target, ["name", "icon", "target"]);
    if (!data) {
        return;
    }
    const maxId = habbits.reduce((acc, habbit) => acc > habbit.id ? acc : habbit.id, 0);
    habbits.push({
        id: maxId + 1,
        name: data.name,
        target: data.target,
        icon: data.icon,
        days: []
    });
    resetForm(event.target, ["name", "target"]);
    togglePopup();
    rerender(maxId + 1)
    saveData();
}

function deleteHabbit() {
    const index = habbits.findIndex(
        (habbit) => habbit.id === globalActiveHabbitId
    );
    if (index < 0) {
        return;
    }
    page.menu.querySelector(`[menu-habbit-id="${globalActiveHabbitId}"`).remove();
    habbits.splice(index, 1);
    const maxId = habbits.reduce(
        (acc, habbit) => (acc > habbit.id ? acc : habbit.id),
        0
    );
    rerender(maxId);
    saveData();
}

// init
(() => {
    loadData();
    const hashId = Number(document.location.hash.replace("#", ""));
    const ulrHabbit = habbits.find(habbit => habbit.id == hashId)
    if (ulrHabbit) {
        rerender(ulrHabbit.id)
    } else {
        rerender(habbits[0].id)
    }
})();
