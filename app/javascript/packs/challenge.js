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

function andMeta(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.metaKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.key === answer_key || event.metaKey) {
        return;
    } else {
        missFlash();
    }
}

function andCtrl(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.ctrlKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.key === answer_key || event.ctrlKey) {
        return;
    } else {
        missFlash();
    }
}

function andAlt(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.altKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.key === answer_key || event.altKey) {
        return;
    } else {
        missFlash();
    }
}

function andShift(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.shiftKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.key === answer_key || event.shiftKey) {
        return;
    } else {
        missFlash();
    }
}

function andMetaAlt(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.metaKey && event.altKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.key === answer_key || event.metaKey || event.altKey) {
        return;
    } else {
        missFlash();
    }
}

function andMetaShift(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.metaKey && event.shiftKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.key === answer_key || event.metaKey || event.shiftKey) {
        return;
    } else {
        missFlash();
    }
}

function andCtrlAlt(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.ctrlKey && event.altKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.key === answer_key || event.ctrlKey || event.altKey) {
        return;
    } else {
        missFlash();
    }
}

function andCtrlShift(event, answer_key, modifier_key, question) {
    if (event.key.toLowerCase() === answer_key && event.ctrlKey && event.shiftKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.key.toLowerCase() === answer_key || event.ctrlKey || event.shiftKey) {
        return;
    } else {
        missFlash();
    }
}

function andAltShift(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.altKey && event.shiftKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else if (event.key === answer_key || event.altKey || event.shiftKey) {
        return;
    } else {
        missFlash();
    }
}

function andMetaAltShift(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.metaKey && event.altKey && event.shiftKey) {
        event.preventDefault();
        replacement(answer_key, modifier_key, question);
    } else {
        missFlash();
    }
}

function andCtrlAltShift(event, answer_key, modifier_key, question) {
    if (event.key === answer_key && event.ctrlKey && event.altKey && event.shiftKey) {
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
        document.querySelector('#correctAnswers').innerHTML = correctAnswers;
    }
}

// スペーススタート処理 ロードして1回目のみ発火
window.addEventListener('keyup', onKeyPress, {once: true})
function onKeyPress(event) {
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
    }
    return
}

document.body.addEventListener('keydown',
    event => {
        if ( event.key === " ") {
            return;
        }
        let answer_key = arrs[0].answer_key;
        let modifier_key = arrs[0].modifier_key;
        let question = arrs[0].question;
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

(function($) {
    $.fn.flash_message = function(options) {
        options = $.extend({
            text: 'Done',
            time: 750,
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
        text: '不正解！',
        how: 'append'
    });
}
