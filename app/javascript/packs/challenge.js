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
let starttime, cleartime;
let correctAnswers = 0;

function andMeta(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.metaKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.metaKey) {
        if (event.key === 'Meta') {
            return;
        } else {
            missFlash();
        }
    } else {
        missFlash();
    }
    event.preventDefault();
}

function andCtrl(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.ctrlKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.ctrlKey) {
        if (event.key === 'Control') {
            return;
        } else {
            missFlash();
        }
    } else {
        missFlash();
    }
}

function andAlt(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.altKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.altKey) {
        if (event.key === 'Alt') {
            return;
        } else {
            missFlash();
        }
    } else {
        missFlash();
    }
}

function andShift(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.shiftKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.shiftKey) {
        if (event.key === 'Shift') {
            return;
        } else {
            missFlash();
        }
    } else {
        missFlash();
    }
}

function andMetaAlt(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.metaKey && event.altKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.metaKey || event.altKey) {
        if (event.key === 'Meta' || event.key === 'Alt') {
            return;
        } else {
            missFlash();
        }
    } else {
        missFlash();
    }
}

function andMetaShift(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.metaKey && event.shiftKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.metaKey || event.shiftKey) {
        if (event.key === 'Meta' || event.key === 'Shift') {
            return;
        } else {
            missFlash();
        }
    } else {
        missFlash();
    }
}

function andCtrlAlt(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.ctrlKey && event.altKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.ctrlKey || event.altKey) {
        if (event.key === 'Control' || event.key === 'Alt') {
            return;
        } else {
            missFlash();
        }
    } else {
        missFlash();
    }
}

function andCtrlShift(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.ctrlKey && event.shiftKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.ctrlKey || event.shiftKey) {
        if (event.key === 'Control' || event.key === 'Shift') {
            return;
        } else {
            missFlash();
        }
    } else {
        missFlash();
    }
}

function andAltShift(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.altKey && event.shiftKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.altKey || event.shiftKey) {
        if (event.key === 'Alt' || event.key === 'Shift') {
            return;
        } else {
            missFlash();
        }
    } else {
        missFlash();
    }
}

function andMetaAltShift(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.metaKey && event.altKey && event.shiftKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else {
        missFlash();
    }
}

function andCtrlAltShift(event, event_key, answer_key, modifier_key, question) {
    if (event_key === answer_key && event.ctrlKey && event.altKey && event.shiftKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else {
        missFlash();
    }
}

function replacement(answer_key, modifier_key, question) {
    correctAnswers++;
    rightFlash();
    if (correctAnswers == 10) {
        cleartime = Math.round((Date.now() - starttime) / 1000);
        result.style.visibility = "visible";
        document.querySelector('#game').style.display = "none";
        result.innerHTML = `クリアタイムは${cleartime}秒です`;
    } else {
        arrs.shift();
        problemStatement.innerHTML = arrs[0].question;
        document.querySelector('#answer').innerHTML = `${arrs[0].modifier_key} + ${arrs[0].answer_key}`;
        document.querySelector('#correctAnswers').innerHTML = `正解数:${correctAnswers}`;
    }
}

window.addEventListener('keydown',event => {
    if (event.metaKey && event.key === 'n') {
        event.stopPropagation();
        event.preventDefault();
    }
    if ( event.key === " ") {
        document.querySelector('#question').style.visibility = "visible";
        document.querySelector('#correctAnswers').style.visibility = "visible";
        document.querySelector('#description').style.visibility = "hidden";
        problemStatement.innerHTML = arrs[0].question;
        document.querySelector('#answer').innerHTML = `${arrs[0].modifier_key} + ${arrs[0].answer_key}`;
        starttime = Date.now();
        let checkbox = document.querySelector("#checkbox");
        if (checkbox.checked) {
            document.querySelector("#answer").style.visibility = "visible";
        }else{
            document.querySelector("#answer").style.visibility = "hidden";
        }
        document.body.addEventListener('keydown',event => {
            let answer_key = arrs[0].answer_key;
            let modifier_key = arrs[0].modifier_key;
            let question = arrs[0].question;
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
            }
            if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
                event.stopPropagation();
            }
        });
    }
    return
    }
);

(function($) {
    $.fn.flash_message = function(options) {
        options = $.extend({
            text: 'Done',
            time: 50,
            how: 'before',
            class_name: ''
        }, options);

        return $(this).each(function() {
            if( $(this).parent().find('.flash_message').get(0) )
                return;

            var message = $('<span />', {
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
        text: '正解！',
        how: 'append'
    });
}

function missFlash() {
    $('#status-area').flash_message({
        text: 'miss！',
        how: 'append'
    });
}
