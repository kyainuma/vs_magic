const Json = document.querySelector('.shortcut_keys_json').value;
const shortcut_key = JSON.parse(Json);
const answer_key = shortcut_key.answer_key;
const modifier_key = shortcut_key.modifier_key;
const command = document.querySelector('#command');
const os = document.querySelector('.os').value;
let modifier = { meta: '', ctrl: '', alt: '', shift: '' }

function andMeta(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.metaKey) {
        rightFlash();
    } else if (e.key === 'Meta') {
        command.innerHTML = `${modifier.meta}`;
    } else if (event_key !== answer_key && e.metaKey) {
        missFlash(e);
    } else {
        missFlash(e);
    }
}

function andCtrl(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.ctrlKey) {
        rightFlash();
    } else if (e.key === 'Control') {
        command.innerHTML = `${modifier.ctrl}`;
    } else if (event_key !== answer_key && e.ctrlKey) {
        missFlash(e);
    } else {
        missFlash(e);
    }
}

function andAlt(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.altKey) {
        rightFlash();
    } else if (e.key === 'Alt') {
        command.innerHTML = `${modifier.alt}`;
        return;
    } else if (event_key !== answer_key && e.altKey) {
        missFlash(e);
    } else {
        missFlash(e);
    }
}

function andShift(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.shiftKey) {
        rightFlash();
    } else if (e.key === 'Shift') {
        command.innerHTML = `${modifier.shift}`;
        return;
    } else if (event_key !== answer_key && e.shiftKey) {
        missFlash(e);
    } else {
        missFlash(e);
    }
}

function andMetaCtrl(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.metaKey && e.ctrlKey) {
        rightFlash();
    } else if (e.key === 'Meta' && e.ctrlKey || e.key === 'Control' && e.metaKey) {
        command.innerHTML = `${modifier.meta} ${modifier.alt}`
    } else if (event_key !== answer_key && e.metaKey && e.altKey ) {
        missFlash(e);
    } else if (e.key === 'Meta' && e.metaKey) {
        command.innerHTML = `${modifier.meta}`;
    } else if (e.key === 'Control' && e.ctrlKey) {
        command.innerHTML = `${modifier.ctrl}`;
    } else {
        missFlash(e);
    }
}

function andMetaAlt(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.metaKey && e.altKey) {
        rightFlash();
    } else if (e.key === 'Meta' && e.alttKey || e.key === 'Alt' && e.metaKey) {
        command.innerHTML = `${modifier.meta} ${modifier.alt}`
    } else if (event_key !== answer_key && e.metaKey && e.altKey ) {
        missFlash(e);
    } else if (e.key === 'Meta' && e.metaKey) {
        command.innerHTML = `${modifier.meta}`;
    } else if (e.key === 'Alt' && e.altKey) {
        command.innerHTML = `${modifier.alt}`;
    } else {
        missFlash(e);
    }
}

function andMetaShift(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.metaKey && e.shiftKey) {
        rightFlash();
    } else if (event_key === 'meta' && e.shiftKey || event_key === 'shift' && e.metaKey) {
        command.innerHTML = `${modifier.meta} ${modifier.shift}`
    } else if (event_key !== answer_key && e.metaKey && e.shiftKey) {
        missFlash(e);
    } else if (e.key === 'Meta' && e.metaKey) {
        command.innerHTML = `${modifier.meta}`;
    } else if (e.key === 'Shift' && e.shiftKey) {
        command.innerHTML =  `${modifier.shift}`;
    } else {
        missFlash(e);
    }
}

function andCtrlAlt(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.ctrlKey && e.altKey) {
        rightFlash();
    } else if (e.key === 'Control' && e.alttKey || e.key === 'Alt' && e.ctrlKey) {
        command.innerHTML = `${modifier.ctrl} ${modifier.alt}`
    } else if (event_key !== answer_key && e.ctrlKey && e.altKey ) {
        missFlash(e);
    } else if (e.key === 'Control' && e.ctrlKey) {
        command.innerHTML = `${modifier.ctrl}`;
    } else if (e.key === 'Alt' && e.altKey) {
        command.innerHTML = `${modifier.alt}`;
    } else {
        missFlash(e);
    }
}

function andCtrlShift(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.ctrlKey && e.shiftKey) {
        rightFlash();
    } else if (e.key === 'Control' && e.shiftKey || e.key === 'Shift' && e.ctrlKey) {
        command.innerHTML = `${modifier.ctrl} ${modifier.shift}`
    } else if (event_key !== answer_key && e.ctrlKey && e.shiftKey ) {
        missFlash(e);
    } else if (e.key === 'Control' && e.ctrlKey) {
        command.innerHTML = `${modifier.ctrl}`;
    } else if (e.key === 'Shift' && e.shiftKey) {
        command.innerHTML = `${modifier.shift}`;
    } else {
        missFlash(e);
    }
}

function andAltShift(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.shiftKey && e.altKey) {
        rightFlash();
    } else if (e.key === 'Shift' && e.altKey || e.key === 'Alt' && e.shiftKey) {
        command.innerHTML = `${modifier.alt} ${modifier.shift}`
    } else if (event_key !== answer_key && e.shiftKey && e.altKey ) {
        missFlash(e);
    } else if (e.key === 'Shift' && e.shiftKey) {
        command.innerHTML = `${modifier.shift}`;
    } else if (e.key === 'Alt' && e.altKey) {
        command.innerHTML = `${modifier.alt}`;
    } else {
        missFlash(e);
    }
}

function noModifier(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key) {
        rightFlash();
    } else {
        missFlash(e);
    }
}

function rightFlash() {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "3000",
        "hideDuration": "1000",
        "timeOut": "1000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    Command: toastr["success"](`${shortcut_key.display_key}  正解です！`)

    command.innerHTML = `<span id="right">${shortcut_key.display_key}</span>`;
    $('#right').delay(500).queue(function(next) {
        $(this).remove();
    });
}

function missFlash(e) {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "3000",
        "hideDuration": "1000",
        "timeOut": "1000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    Command: toastr["error"](`${e.key}  不正解です！`)
}

function upKey(e) {
    if (e.key === 'Meta') {
        document.querySelectorAll('#meta').forEach(elm => {
            elm.remove();
        });
    } else if (e.key === 'Shift') {
        document.querySelectorAll('#shift').forEach(elm => {
            elm.remove();
        });
    } else if (e.key === 'Control') {
        document.querySelectorAll('#ctrl').forEach(elm => {
            elm.remove();
        });
    } else if (e.key === 'Alt') {
        document.querySelectorAll('#alt').forEach(elm => {
            elm.remove();
        });
    }
}

window.onload = () => {
    modifier.meta  = (os === 'Mac')? '<span id="meta"> ⌘ </span>'  : '<span id="meta"> Win </span>';
    modifier.ctrl  = (os === 'Mac')? '<span id="ctrl"> ⌃ </span>'  : '<span id="ctrl"> Ctrl </span>';
    modifier.alt   = (os === 'Mac')? '<span id="alt"> ⌥ </span>'   : '<span id="alt"> Alt </span>';
    modifier.shift = (os === 'Mac')? '<span id="shift"> ⇧ </span>' : '<span id="shift"> Shift </span>';
};

document.addEventListener('keyup', upKey);
document.addEventListener('keydown',e => {
    e.preventDefault();
    switch (modifier_key) {
        case 'cmd':
            andMeta(e);
            break;
        case 'ctrl':
            andCtrl(e);
            break
        case 'alt':
            andAlt(e);
            break;
        case 'shift':
            andShift(e);
            break;
        case 'cmd  ctrl':
            andMetaCtrl(e);
            break;
        case 'cmd  alt':
            andMetaAlt(e);
            break;
        case 'cmd  shift':
            andMetaShift(e);
            break;
        case 'ctrl  alt':
            andCtrlAlt(e);
            break;
        case 'ctrl  shift':
            andCtrlShift(e);
            break;
        case 'alt  shift':
            andAltShift(e);
            break;
        default :
            noModifier(e);
            break;
    }
});
