import 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/webpack-resolver'
let editor = ace.edit(document.querySelector(`#editor`));
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/html");

// arr_json取得
let Json = document.querySelector('.shortcut_keys_json').value;
// arr_jsonをパースし配列にする
let arrs = JSON.parse(Json);
const result = document.querySelector('#result');


function andMeta(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.metaKey) {
        event.preventDefault();
        result.innerHTML = answer_key + modifier_key + question;
    }
}

function andCtrl(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.ctrlKey) {
        event.preventDefault();
        result.innerHTML = answer_key + modifier_key + question;
    }
}

function andAlt(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.altKey) {
        event.preventDefault();
        result.innerHTML = answer_key + modifier_key + question;
    }
}

function andShift(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.shiftKey) {
        event.preventDefault();
        result.innerHTML = answer_key + modifier_key + question;
    }
}

function andMetaAlt(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.metaKey && event.altKey) {
        event.preventDefault();
        result.innerHTML = answer_key + modifier_key + question;
        event.preventDefault();
    }
}

function andMetaShift(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.metaKey && event.shiftKey) {
        event.preventDefault();
        result.innerHTML = answer_key + modifier_key + question;
    }
}

function andCtrlAlt(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.ctrlKey && event.altKey) {
        event.preventDefault();
        result.innerHTML = answer_key + modifier_key + question;
    }
}

function andCtrlShift(event, answer_key, modifier_key, question) {
    if (event.key.toLowerCase() === answer_key && event.ctrlKey && event.shiftKey) {
        event.preventDefault();
        result.innerHTML = answer_key + modifier_key + question;
    }
}

function andAltShift(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.altKey && event.shiftKey) {
        event.preventDefault();
        result.innerHTML = answer_key + modifier_key + question;
    }
}

function andMetaAltShift(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.metaKey && event.altKey && event.shiftKey) {
        event.preventDefault();
        result.innerHTML = answer_key + modifier_key + question;
    }
}

function andCtrlAltShift(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.ctrlKey && event.altKey && event.shiftKey) {
        event.preventDefault();
        result.innerHTML = answer_key + modifier_key + question;
    }
}

document.body.addEventListener('keydown',
    event => {
        let answer_key = arrs.answer_key;
        let modifier_key = arrs.modifier_key;
        let question = arrs.question;
        switch (modifier_key) {
            case 'cmd':
                andMeta(event, answer_key, modifier_key, question);
                break;
            case 'ctrl':
                andCtrl(event, answer_key, modifier_key, question);
                break
            case 'alt':
                andAlt(event, answer_key, modifier_key, question);
                break;
            case 'shift':
                andShift(event, answer_key, modifier_key, question);
                break;
            case 'cmd + alt':
                andMetaAlt(event, answer_key, modifier_key, question);
                break;
            case 'cmd + shift':
                andMetaShift(event, answer_key, modifier_key, question);
                break;
            case 'ctrl + alt':
                andCtrlAlt(event, answer_key, modifier_key, question);
                break;
            case 'ctrl + shift':
                andCtrlShift(event, answer_key, modifier_key, question);
                break;
            case 'alt + shift':
                andAltShift(event, answer_key, modifier_key, question);
                break;
            case 'cmd + alt + shift':
                andMetaAltShift(event, answer_key, modifier_key, question);
                break;
            case 'ctrl + alt + shift':
                andCtrlAltShift(event, answer_key, modifier_key, question);
                break;
        }
    }
);
