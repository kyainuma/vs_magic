// arr_json取得
let Json = document.querySelector('.shortcut_keys_json').value;
// arr_jsonをパースし配列にする
let arrs = JSON.parse(Json);
const result = document.querySelector('#result');
let problemStatement = document.querySelector('#question');
let command = document.querySelector('#command');
let answer_key = '';
let modifier_key = '';
let question = '';


function andMeta(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.metaKey) {
        rightFlash(answer_key, modifier_key);
    } else if (event.metaKey) {
        if (event.key === 'Meta') {
            command.innerHTML = '<span id="meta">meta</span>';
            return;
        } else {
            missFlash(event);
        }
    } else {
        missFlash(event);
    }
}

function andCtrl(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.ctrlKey) {
        rightFlash(answer_key, modifier_key);
    } else if (event.ctrlKey) {
        if (event.key === 'Control') {
            command.innerHTML = '<span id="control">control</span>';
            return;
        } else {
            missFlash(event);
        }
    } else {
        missFlash(event);
    }
}

function andAlt(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.altKey) {
        rightFlash(answer_key, modifier_key);
    } else if (event.altKey) {
        if (event.key === 'Alt') {
            command.innerHTML = '<span id="alt">alt</span>';
            return;
        } else {
            missFlash(event);
        }
    } else {
        missFlash(event);
    }
}

function andShift(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.shiftKey) {
        rightFlash(answer_key, modifier_key);
    } else if (event.shiftKey) {
        if (event.key === 'Shift') {
            command.innerHTML = '<span id="shift">shift</span>';
            return;
        } else {
            missFlash(event);
        }
    } else {
        missFlash(event);
    }
}

function andMetaCtrl(event, event_key, answer_key, modifier_key, question) {
    // 正解
    if (event_key === answer_key && event.metaKey && event.ctrlKey) {
        rightFlash(answer_key, modifier_key);
    } else if (event.metaKey || event.ctrlKey) {
        if (event.key === 'Meta' || event.key === 'Control') {
            return;
        } else {
            missFlash(event);
        }
    } else {
        missFlash(event);
    }
}

function andMetaAlt(event, event_key, answer_key, modifier_key, question) {
    // 正解
    if (event_key === answer_key && event.metaKey && event.altKey) {
        rightFlash(answer_key, modifier_key);
    } else if (event.metaKey || event.altKey) {
        if (event.key === 'Meta' || event.key === 'Alt') {
            return;
        } else {
            missFlash(event);
        }
    } else {
        missFlash(event);
    }
}

function andMetaShift(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.metaKey && event.shiftKey) {
        rightFlash(answer_key, modifier_key);
    } else if (event.metaKey || event.shiftKey) {
        if (event.key === 'Meta' || event.key === 'Shift') {
            return;
        } else {
            missFlash(event);
        }
    } else {
        missFlash(event);
    }
}

function andCtrlAlt(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.ctrlKey && event.altKey) {
        rightFlash(answer_key, modifier_key);
    } else if (event.ctrlKey || event.altKey) {
        if (event.key === 'Control' || event.key === 'Alt') {
            return;
        } else {
            missFlash(event);
        }
    } else {
        missFlash(event);
    }
}

function andCtrlShift(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.ctrlKey && event.shiftKey) {
        rightFlash(answer_key, modifier_key);
    } else if (event.ctrlKey || event.shiftKey) {
        if (event.key === 'Control' || event.key === 'Shift') {
            return;
        } else {
            missFlash(event);
        }
    } else {
        missFlash(event);
    }
}

function andAltShift(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.altKey && event.shiftKey) {
        rightFlash(answer_key, modifier_key);
    } else if (event.altKey || event.shiftKey) {
        if (event.key === 'Alt' || event.key === 'Shift') {
            return;
        } else {
            missFlash(event);
        }
    } else {
        missFlash(event);
    }
}

function andMetaAltShift(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.metaKey && event.altKey && event.shiftKey) {
        rightFlash(answer_key, modifier_key);
    } else {
        missFlash(event);
    }
}

function andCtrlAltShift(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.ctrlKey && event.altKey && event.shiftKey) {
        event.preventDefault();
        rightFlash(answer_key, modifier_key);
    } else {
        missFlash(event);
    }
}

function noModifier(event, event_key, answer_key) {
    if (event_key === answer_key) {
        replacement(answer_key);
    } else {
        missFlash(event);
    }
}

document.body.addEventListener('keydown',event => {
    event.preventDefault();
    let answer_key = arrs.answer_key;
    let modifier_key = arrs.modifier_key;
    let question = arrs.question;
    let event_key = event.key.toLowerCase();
    switch (modifier_key) {
        case 'cmd':
            andMeta(event, event_key, answer_key, modifier_key, question);
            break;
        case 'ctrl':
            andCtrl(event, event_key, answer_key, modifier_key, question);
            break
        case 'alt':
            andAlt(event, event_key, answer_key, modifier_key, question);
            break;
        case 'shift':
            andShift(event, event_key, answer_key, modifier_key, question);
            break;
        case 'cmd + ctrl':
            andMetaCtrl(event, event_key, answer_key, modifier_key, question);
            break;
        case 'cmd + alt':
            andMetaAlt(event, event_key, answer_key, modifier_key, question);
            break;
        case 'cmd + shift':
            andMetaShift(event, event_key, answer_key, modifier_key, question);
            break;
        case 'ctrl + alt':
            andCtrlAlt(event, event_key, answer_key, modifier_key, question);
            break;
        case 'ctrl + shift':
            andCtrlShift(event, event_key, answer_key, modifier_key, question);
            break;
        case 'alt + shift':
            andAltShift(event, event_key, answer_key, modifier_key, question);
            break;
        case 'cmd + alt + shift':
            andMetaAltShift(event, event_key, answer_key, modifier_key, question);
            break;
        case 'ctrl + alt + shift':
            andCtrlAltShift(event, event_key, answer_key, modifier_key, question);
            break;
        default :
            noModifier(event, event_key, answer_key);
            break;
    }
    // if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
    //     event.preventDefault();
    // }
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

            let message = $('<strong />', {
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

function rightFlash(answer_key, modifier_key) {
    $('#status-area').flash_message({
        text: `" ${arrs.display_key} " 正解！`,
        time: 500,
        how: 'append',
        class_name: 'alert alert-success'
    });
}

function missFlash(event) {
    $('#status-area').flash_message({
        text: `" ${event.key} " is miss command！`,
        time: 500,
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
    } else if (e.shiftKey) {
        command.innerHTML = '<span id="shift"> ⇧ </span>';
    } else if (e.metaKey) {
        command.innerHTML = '<span id="meta"> ⌘ </span>';
    } else if (e.ctrlKey) {
        command.innerHTML = '<span id="control"> ⌃ </span>';
    } else if (e.altKey) {
        command.innerHTML = '<span id="alt"> ⌥ </span>';
    }
}

function upKey(e) {
    if (e.key === 'Meta') {
        document.querySelector('#meta').remove();
    } else if (e.key === 'Shift') {
        document.querySelector('#shift').remove();
    } else if (e.key === 'Control') {
        document.querySelector('#control').remove();
    } else if (e.key === 'Alt') {
        document.querySelector('#alt').remove();
    }
}
