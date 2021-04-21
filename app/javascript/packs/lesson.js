// json取得
const Json = document.querySelector('.shortcut_keys_json').value;
// jsonをパースし配列にする
const shortcut_key = JSON.parse(Json);
const answer_key = shortcut_key.answer_key;
const modifier_key = shortcut_key.modifier_key;
const command = document.querySelector('#command');

function andMeta(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.metaKey) {
        rightFlash();
    } else if (e.metaKey) {
        if (e.key === 'Meta') {
            command.innerHTML = '<span id="meta">meta</span>';
            return;
        } else {
            missFlash(e);
        }
    } else {
        missFlash(e);
    }
}

function andCtrl(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.ctrlKey) {
        rightFlash();
    } else if (e.ctrlKey) {
        if (e.key === 'Control') {
            command.innerHTML = '<span id="control">control</span>';
            return;
        } else {
            missFlash(e);
        }
    } else {
        missFlash(e);
    }
}

function andAlt(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.altKey) {
        rightFlash();
    } else if (e.altKey) {
        if (e.key === 'Alt') {
            command.innerHTML = '<span id="alt">alt</span>';
            return;
        } else {
            missFlash(e);
        }
    } else {
        missFlash(e);
    }
}

function andShift(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.shiftKey) {
        rightFlash();
    } else if (e.shiftKey) {
        if (e.key === 'Shift') {
            command.innerHTML = '<span id="shift">shift</span>';
            return;
        } else {
            missFlash(e);
        }
    } else {
        missFlash(e);
    }
}

function andMetaCtrl(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.metaKey && e.ctrlKey) {
        rightFlash();
    } else if (e.metaKey || e.ctrlKey) {
        if (e.key === 'Meta' || e.key === 'Control') {
            return;
        } else {
            missFlash(e);
        }
    } else {
        missFlash(e);
    }
}

function andMetaAlt(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.metaKey && e.altKey) {
        rightFlash();
    } else if (e.metaKey || e.altKey) {
        if (e.key === 'Meta' || e.key === 'Alt') {
            return;
        } else {
            missFlash(e);
        }
    } else {
        missFlash(e);
    }
}

function andMetaShift(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.metaKey && e.shiftKey) {
        rightFlash();
    } else if (e.metaKey || e.shiftKey) {
        if (e.key === 'Meta' || e.key === 'Shift') {
            return;
        } else {
            missFlash(e);
        }
    } else {
        missFlash(e);
    }
}

function andCtrlAlt(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.ctrlKey && e.altKey) {
        rightFlash();
    } else if (e.ctrlKey || e.altKey) {
        if (e.key === 'Control' || e.key === 'Alt') {
            return;
        } else {
            missFlash(e);
        }
    } else {
        missFlash(e);
    }
}

function andCtrlShift(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.ctrlKey && e.shiftKey) {
        rightFlash();
    } else if (e.ctrlKey || e.shiftKey) {
        if (e.key === 'Control' || e.key === 'Shift') {
            return;
        } else {
            missFlash(e);
        }
    } else {
        missFlash(e);
    }
}

function andAltShift(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.altKey && e.shiftKey) {
        rightFlash();
    } else if (e.altKey || e.shiftKey) {
        if (e.key === 'Alt' || e.key === 'Shift') {
            return;
        } else {
            missFlash(e);
        }
    } else {
        missFlash(e);
    }
}

function andMetaAltShift(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.metaKey && e.altKey && e.shiftKey) {
        rightFlash();
    } else {
        missFlash(e);
    }
}

function andCtrlAltShift(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.ctrlKey && e.altKey && e.shiftKey) {
        rightFlash();
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

document.body.addEventListener('keydown',event => {
    event.preventDefault();
    switch (modifier_key) {
        case 'cmd':
            andMeta(event);
            break;
        case 'ctrl':
            andCtrl(event);
            break
        case 'alt':
            andAlt(event);
            break;
        case 'shift':
            andShift(event);
            break;
        case 'cmd + ctrl':
            andMetaCtrl(event);
            break;
        case 'cmd + alt':
            andMetaAlt(event);
            break;
        case 'cmd + shift':
            andMetaShift(event);
            break;
        case 'ctrl + alt':
            andCtrlAlt(event);
            break;
        case 'ctrl + shift':
            andCtrlShift(event);
            break;
        case 'alt + shift':
            andAltShift(event);
            break;
        case 'cmd + alt + shift':
            andMetaAltShift(event);
            break;
        case 'ctrl + alt + shift':
            andCtrlAltShift(event);
            break;
        default :
            noModifier(event);
            break;
    }
});

(function($) {
    $.fn.flash_message = function(options) {
        options = $.extend({
            text: 'Done',
            time: 500,
            how: 'before',
            class_name: ''
        }, options);

        return $(this).each(function() {
            if( $(this).parent().find('.flash_message').get(0) )
                return;

            const message = $('<strong />', {
                'class': 'flash_message ' + options.class_name,
                text: options.text
            }).hide().fadeIn('fast');

            $(this)[options.how](message);

            message.delay(options.time).fadeOut('normal', function() {
                $(this).remove();
            });

        });
    };
})(jQuery);

function rightFlash() {
    $('#status-area').flash_message({
        text: `" ${shortcut_key.display_key} " 正解！`,
        time: 100,
        how: 'append',
        class_name: 'alert alert-success'
    });
}

function missFlash(e) {
    $('#status-area').flash_message({
        text: `" ${e.key} " is miss command！`,
        time: 100,
        how: 'append',
        class_name: 'alert alert-danger'
    });
}

document.addEventListener('keydown', downKey);
document.addEventListener('keyup', upKey);
function downKey(e) {
    if (e.metaKey && e.shiftKey) {
        command.innerHTML = '<span id="meta"> ⌘ </span><span id="shift"> ⇧ </span>';
    } else if (e.metaKey && e.ctrlKey) {
        command.innerHTML = '<span id="meta"> ⌘ </span><span id="control"> ⌃ </span>';
    } else if (e.metaKey && e.altKey) {
        command.innerHTML = '<span id="meta"> ⌘ </span><span id="alt"> ⌥ </span>';
    } else if (e.shiftKey && e.ctrlKey) {
        command.innerHTML = '<span id="shift"> ⇧ </span><span id="control"> ⌃ </span>';
    } else if (e.shiftKey && e.altKey) {
        command.innerHTML = '<span id="shift"> ⇧ </span><span id="alt"> ⌥ </span>';
    } else if (e.altKey && e.ctrlKey) {
        command.innerHTML = '<span id="alt"> ⌥ </span><span id="control"> ⌃ </span>';
    } else if (!(e.shiftKey || e.metaKey || e.ctrlKey || e.altKey)) {
        $('#command').prepend(`<span id="key"> ${e.key} </span>`);
    } else if (e.shiftKey) {
        $('#command').prepend(`<span id="shift"> ${e.key} </span>`);
    } else if (e.metaKey) {
        $('#command').prepend('<span id="meta"> ⌘ </span>');
    } else if (e.ctrlKey) {
        $('#command').prepend('<span id="control"> ⌃ </span>');
    } else if (e.altKey) {
        $('#command').prepend('<span id="alt"> ⌥ </span>');
    }
}

function upKey(e) {
    if (e.key === 'Meta') {
        document.querySelectorAll('#meta').forEach(elm => {
            elm.remove();
        })
    } else if (e.key === 'Shift') {
        document.querySelectorAll('#shift').forEach(elm => {
            elm.remove();
        })
    } else if (e.key === 'Control') {
        document.querySelectorAll('#ctrl').forEach(elm => {
            elm.remove();
        })
    } else if (e.key === 'Alt') {
        document.querySelectorAll('#alt').forEach(elm => {
            elm.remove();
        })
    } else {
        document.querySelectorAll('#key').forEach(elm => {
            elm.remove();
        })
    }
}
