'use strict';

let container = document.querySelector('.container');
const DURATION = 1200
const DELAY = 200
container.style.setProperty('--duration', `${DURATION}ms`)

const text = 'Hello World!';

function produceMessage() {
    const addMsgs = setInterval(() => {
        const MSG = document.createElement('div');
        MSG.classList.add('msg');
        MSG.classList.add('hidden');
        const MSGCONTENT = document.createElement('p');
        MSGCONTENT.innerHTML = text.toUpperCase() + ` ${container.childElementCount + 1}`;
        setTimeout(() => {
            MSG.classList.add('translated');
        }, DELAY);
        setTimeout(() => {
            MSG.classList.add('showed');
        }, DURATION);
        MSG.appendChild(MSGCONTENT);
        container.appendChild(MSG);
        if (container.childElementCount === 5) {
            clearInterval(addMsgs);
        }
    }, DURATION + DELAY);
}

produceMessage()
