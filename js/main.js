const onHandler = () => {
    if (state.rightMenu) {
        document.getElementById("info").style.display = "none";
        document.getElementById("arrow-click").style.transform = "rotate(180deg)";
        state.rightMenu = false;
    } else {
        document.getElementById("info").style.display = "block";
        document.getElementById("arrow-click").style.transform = "rotate(0)";
        state.rightMenu = true;
    }
};

!(function (e) {
    "function" != typeof e.matches &&
    (e.matches =
        e.msMatchesSelector ||
        e.mozMatchesSelector ||
        e.webkitMatchesSelector ||
        function (e) {
            for (
                var t = this,
                    o = (t.document || t.ownerDocument).querySelectorAll(e),
                    n = 0;
                o[n] && o[n] !== t;

            )
                ++n;
            return Boolean(o[n]);
        }),
    "function" != typeof e.closest &&
    (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType;) {
            if (t.matches(e)) return t;
            t = t.parentNode;
        }
        return null;
    });
})(window.Element.prototype);

document.addEventListener("DOMContentLoaded", function () {
    /* Записываем в переменные массив элементов-кнопок и подложку.
             Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll(".js-open-modal"),
        overlay = document.querySelector(".js-overlay-modal"),
        closeButtons = document.querySelectorAll(".js-modal-close");

    /* Перебираем массив кнопок */
    modalButtons.forEach(function (item) {
        /* Назначаем каждой кнопке обработчик клика */
        item.addEventListener("click", function (e) {
            /* Предотвращаем стандартное действие элемента. Так как кнопку разные
                                 люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
                                 Нужно подстраховаться. */
            e.preventDefault();

            /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
                                 и будем искать модальное окно с таким же атрибутом. */
            var modalId = this.getAttribute("data-modal"),
                modalElem = document.querySelector(
                    '.modal[data-modal="' + modalId + '"]'
                );

            /* После того как нашли нужное модальное окно, добавим классы
                                 подложке и окну чтобы показать их. */
            modalElem.classList.add("active");
            overlay.classList.add("active");
        }); // end click
    }); // end foreach

    closeButtons.forEach(function (item) {
        item.addEventListener("click", function (e) {
            var parentModal = this.closest(".modal");

            parentModal.classList.remove("active") &&
            overlay.classList.remove("active");
        });
    }); // end foreach

    document.body.addEventListener(
        "keyup",
        function (e) {
            var key = e.keyCode;

            if (key == 27) {
                document.querySelector(".modal.active").classList.remove("active");
                document.querySelector(".overlay").classList.remove("active");
            }
        },
        false
    );

    overlay.addEventListener("click", function () {
        document.querySelector(".modal.active").classList.remove("active");
        this.classList.remove("active");
    });
}); // end ready

const leftBarLists = {
    profile: "modal_content_account__container",
    voice: "modal_content_voice__container",
    confidentiality: "modal_content_confidentiality__container",
};
const state = {
    select: "profile",
    room: 1,
};
const showHide = (point) => {
    if (!point in leftBarLists || state.select === point) {
        return null;
    }
    (document.getElementById(leftBarLists[point]).style.display = "block") &&
    (document.getElementById(leftBarLists[state.select]).style.display =
        "none");

    state.select = point;
};
const chats = {
    2561: {
        messages: [
            {
                id: 3,
                userId: 5116,
                text: "Can help?",
                createdAt: 1660561200000,
                content: {
                    type: "img",
                    typeFile: "jpg",
                    src: "img/123.jpg",
                },
            },
            {
                id: 2,
                userId: 1916,
                text: "Of course",
                createdAt: 1660539600000
            },
        ],
    },
};

const users = [
    {
        id: 5116,
        login: "Macwel",
        avatar: "img/av.jpg",
        status: "Everthyng hi!",
        online: true,
        email: "w@mail.ru",
    },
    {
        id: 1916,
        login: "Maxim",
        avatar: "img/av2.png",
        status: "Всем пискам пис!",
        online: false,
        email: "maxim@pussy.com",
    },
];

const usersWithId = {
    5116: {
        id: 5116,
        login: "Macwel",
        avatar: "img/av.jpg",
        status: "Everthyng hi!",
        online: true,
        email: "w@mail.ru",
    },
    1916: {
        id: 1916,
        login: "Maxim",
        avatar: "img/av2.png",
        status: "Всем пискам пис!",
        online: false,
        email: "maxim@pussy.com",
    },
};

const rooms = [
    {
        id: 1,
        name: "Dota 2",
        color: "orange",
        channels: [
            {
                tag: {
                    id: 1,
                    name: "general",
                    chatId: 2561,
                },
            },
            {
                tag: {
                    id: 2,
                    name: "support",
                    chatId: 5161,
                },
            },
            {
                tag: {
                    id: 3,
                    name: "marketing",
                    chatId: 1612,
                },
            },
            {
                tag: {
                    id: 4,
                    name: "thailand",
                    chatId: 5612,
                },
            },
            {
                tag: {
                    id: 5,
                    name: "bali",
                    chatId: 2612,
                },
            },
        ],
    },
    {
        id: 2,
        name: "Dota 3",
        color: "red",
        channels: [
            {
                tag: {
                    id: 6,
                    name: "help",
                    chatId: 1111,
                },
            },
            {
                tag: {
                    id: 7,
                    name: "support",
                    chatId: 2222,
                },
            },
            {
                tag: {
                    id: 8,
                    name: "marketing",
                    chatId: 3333,
                },
            },
            {
                tag: {
                    id: 9,
                    name: "thailand",
                    chatId: 4444,
                },
            },
        ],
    },
    {
        id: 3,
        name: "Dota 5",
        color: "blue",
        channels: [
            {
                tag: {
                    id: 10,
                    name: "chatik",
                    chatId: 5555,
                },
            },
            {
                tag: {
                    id: 11,
                    name: "support",
                    chatId: 6666,
                },
            },
            {
                tag: {
                    id: 12,
                    name: "marketing",
                    chatId: 7777,
                },
            },
            {
                tag: {
                    id: 13,
                    name: "thailand",
                    chatId: 8888,
                },
            },
        ],
    },
];



const ChatChannel = document.getElementById("changeChat");
const changeChatChannel = (id) => {
    ChatChannel.innerHTML = ""
    chats[id].messages.forEach((message) => {
        let div = document.createElement("div");
        div.className = "chat1";
        if (message?.content) {
            div.innerHTML = `<div class="chat1_top">
        <div class="chat1_nickname">
            <p2>${usersWithId[message.userId].login}</p2>
        </div>
        <div class="chat1_time">
            <p2>5:38 PM</p2>
            </div>
            </div>
            <div class="chat1_bottom">
        <div class="chat1_txt">
        <p2> ${[message.text]}</p2>
        </div>
    </div>
    <div class="chat1_img">
        <img src="${[message.content.src]}" alt="">
    </div>
    `;
        } else {
            div.innerHTML = `<div class="chat1_top">
            <div class="chat1_nickname">
                <p2>${usersWithId[message.userId].login}</p2>
            </div>
            <div class="chat1_time">
                <p2>6:38 PM</p2>
                </div>
                </div>
                <div class="chat1_bottom">
            <div class="chat1_txt">
            <p2> ${[message.text]}</p2>
            </div>
        </div>
        `;
        }
        ChatChannel.append(div);
    });
};
const headerChannel = document.getElementById("channelName");
const changeHeaderChannel = (id, i) =>
    rooms.forEach((room) => {
        if (room.id === state.room) {
            room.channels.forEach((channel, index) => {
                if (channel.tag.id === id) {
                    headerChannel.innerText = `# ${channel.tag.name}`;
                    changeChatChannel(channel.tag.chatId);
                } else if (index === i) {
                    changeChatChannel(channel.tag.chatId);
                    headerChannel.innerText = `# ${channel.tag.name}`;
                }
            });
        }
    });




const friends_list = document.getElementById("friends_list");
const amount_friends = document.getElementById("amount-friends");
amount_friends.innerText = users.length;

const updateUsersList = () => {
    users.forEach((user) => {
        let div = document.createElement("div");
        div.className = "friends_list-1";
        div.innerHTML = `<div class="friends_list-1_status">
                <img src="/img/green.png" alt="">
            </div>
            <div class="friends_list-1_av">
                <img src="${user.avatar}" alt="">
            </div>
            <div class="friends_list-1_name">
                <p2>${user.login}</p2>
            </div>`;
        friends_list.append(div);
    });
};
updateUsersList();

const channels_pg = document.getElementById("channels_pg");
const channels_txt = document.getElementById("channels_txt");
const amount_channels = document.getElementById("amount-channels");
const sidebar = document.getElementById("sidebar-header");

rooms.forEach((i) => {
    let div = document.createElement("div");
    div.className = "temp-svg-container";
    div.innerHTML = `<div onClick="update(${i.id})" class ="temp-svg-container__container" style="background-color: ${i.color}"></div>`;
    sidebar.append(div);
});

const updateChannels = () =>
    rooms.forEach((room) => {
        if (room.id === state.room) {
            amount_channels.innerText = room.channels.length;
            channels_pg.innerHTML = "";
            room.channels.forEach((channel) => {
                const div = document.createElement("div");
                div.className = "channels_pg_channel";
                div.innerHTML = `<p onclick="changeHeaderChannel(${channel.tag.id})"># ${channel.tag.name}</p>`;
                channels_pg.append(div);
            });
        }
    });
const update = (id) => {
    state.room = id;
    updateChannels();
    changeHeaderChannel(null, 0);
};
changeHeaderChannel(null, 0);
updateChannels();

const NameChannel = {
    general: "general",
    support: "support",
    marketing: "marketing",
    thailand: "thailand",
    bali: "bali",
};

// const changeChannel = (id) => {
//     console.log(rooms[state.room].channels[id].tag.name)
// }

const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
checkBoxes.forEach((e) => (e.checked = !e.checked));

// document.getElementById('channelName').innerHTML = `<p>#${i.channels[i].tag.name}</p>`
