'use strict';

let container = document.querySelector('.container');

const text = 'Hello World!';

const doing = setTimeout(
    () => {
        const addMsgs = setInterval(() => {
            const MSG = document.createElement('div');
            MSG.classList.add('msg');
            MSG.classList.add('hidden');
            const MSGCONTENT = document.createElement('p');
            MSGCONTENT.innerHTML = text + ` ${container.childElementCount + 1}`;
            setTimeout(() => {
                MSG.classList.add('translated');
            }, 4);
            setTimeout(() => {
                MSG.classList.add('showed');
            }, 404);
            MSG.appendChild(MSGCONTENT);
            container.appendChild(MSG);
            if (container.childElementCount === 5) {
                clearInterval(addMsgs);
                clearTimeout(doing);
            }
        }, 408);
    }, 1000
);
