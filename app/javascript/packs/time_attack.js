let startTime, clearTime;
let correctAnswers = 0, missCount = 0, timeUpCount = 0, remainingProblems = 10;
let answer_key = '', modifier_key = '', question = '', display_key = '';
let modifier = { meta: '', ctrl: '', alt: '', shift: '' }
const command = document.querySelector('#command');
const Json = document.querySelector('.shortcut_keys_json').value;
const keys = JSON.parse(Json);
const os = document.querySelector('.os').value;

// 正解判定
function andMeta(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.metaKey) {
        rightFlash();
        correctAnswer();
    } else if (e.key === 'Meta') {
        command.innerHTML = `${modifier.meta}`;
    } else if (event_key !== answer_key && e.metaKey) {
        missFlash(e.key);
    } else {
        missFlash(e.key);
    }
}

function andCtrl(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.ctrlKey) {
        rightFlash();
        correctAnswer();
    } else if (e.key === 'Control') {
        command.innerHTML = `${modifier.ctrl}`;
    } else if (event_key !== answer_key && e.ctrlKey) {
        missFlash(e.key);
    } else {
        missFlash(e.key);
    }
}

function andAlt(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.altKey) {
        rightFlash();
        correctAnswer();
    } else if (e.key === 'Alt') {
        command.innerHTML = `${modifier.alt}`;
    } else if (event_key !== answer_key && e.altKey) {
        missFlash(e.key);
    } else {
        missFlash(e.key);
    }
}

function andShift(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.shiftKey) {
        rightFlash();
        correctAnswer();
    } else if (e.key === 'Shift') {
        command.innerHTML = `${modifier.shift}`;
    } else if (event_key !== answer_key && e.shiftKey) {
        missFlash(e.key);
    } else {
        missFlash(e.key);
    }
}

function andMetaCtrl(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.metaKey && e.ctrlKey) {
        rightFlash();
        correctAnswer();
    } else if (e.key === 'Meta' && e.ctrlKey || e.key === 'Control' && e.metaKey) {
        command.innerHTML = `${modifier.meta} ${modifier.alt}`
    } else if (event_key !== answer_key && e.metaKey && e.altKey ) {
        missFlash(e.key);
    } else if (e.key === 'Meta' && e.metaKey) {
        command.innerHTML = `${modifier.meta}`;
    } else if (e.key === 'Control' && e.ctrlKey) {
        command.innerHTML = `${modifier.ctrl}`;
    } else {
        missFlash(e.key);
    }
}

function andMetaAlt(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.metaKey && e.altKey) {
        rightFlash();
        correctAnswer();
    } else if (e.key === 'Meta' && e.alttKey || e.key === 'Alt' && e.metaKey) {
        command.innerHTML = `${modifier.meta} ${modifier.alt}`
    } else if (event_key !== answer_key && e.metaKey && e.altKey ) {
        missFlash(e.key);
    } else if (e.key === 'Meta' && e.metaKey) {
        command.innerHTML = `${modifier.meta}`;
    } else if (e.key === 'Alt' && e.altKey) {
        command.innerHTML = `${modifier.alt}`;
    } else {
        missFlash(e.key);
    }
}

function andMetaShift(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.metaKey && e.shiftKey) {
        rightFlash();
        correctAnswer();
    } else if (event_key === 'meta' && e.shiftKey || event_key === 'shift' && e.metaKey) {
        command.innerHTML = `${modifier.meta} ${modifier.shift}`
    } else if (event_key !== answer_key && e.metaKey && e.shiftKey) {
        missFlash(e.key);
    } else if (e.key === 'Meta' && e.metaKey) {
        command.innerHTML = `${modifier.meta}`;
    } else if (e.key === 'Shift' && e.shiftKey) {
        command.innerHTML =  `${modifier.shift}`;
    } else {
        missFlash(e.key);
    }
}

function andCtrlAlt(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.ctrlKey && e.altKey) {
        rightFlash();
        correctAnswer();
    } else if (e.key === 'Control' && e.alttKey || e.key === 'Alt' && e.ctrlKey) {
        command.innerHTML = `${modifier.ctrl} ${modifier.alt}`
    } else if (event_key !== answer_key && e.ctrlKey && e.altKey ) {
        missFlash(e.key);
    } else if (e.key === 'Control' && e.ctrlKey) {
        command.innerHTML = `${modifier.ctrl}`;
    } else if (e.key === 'Alt' && e.altKey) {
        command.innerHTML = `${modifier.alt}`;
    } else {
        missFlash(e.key);
    }
}

function andCtrlShift(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.ctrlKey && e.shiftKey) {
        rightFlash();
        correctAnswer();
    } else if (e.key === 'Control' && e.shiftKey || e.key === 'Shift' && e.ctrlKey) {
        command.innerHTML = `${modifier.ctrl} ${modifier.shift}`
    } else if (event_key !== answer_key && e.ctrlKey && e.shiftKey ) {
        missFlash(e.key);
    } else if (e.key === 'Control' && e.ctrlKey) {
        command.innerHTML = `${modifier.ctrl}`;
    } else if (e.key === 'Shift' && e.shiftKey) {
        command.innerHTML = `${modifier.shift}`;
    } else {
        missFlash(e.key);
    }
}

function andAltShift(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key && e.shiftKey && e.altKey) {
        rightFlash();
        correctAnswer();
    } else if (e.key === 'Shift' && e.altKey || e.key === 'Alt' && e.shiftKey) {
        command.innerHTML = `${modifier.alt} ${modifier.shift}`
    } else if (event_key !== answer_key && e.shiftKey && e.altKey ) {
        missFlash(e.key);
    } else if (e.key === 'Shift' && e.shiftKey) {
        command.innerHTML = `${modifier.shift}`;
    } else if (e.key === 'Alt' && e.altKey) {
        command.innerHTML = `${modifier.alt}`;
    } else {
        missFlash(e.key);
    }
}

function noModifier(e) {
    let event_key = e.key.toLowerCase();
    if (event_key === answer_key) {
        rightFlash();
        correctAnswer();
    } else {
        missFlash(e.key);
    }
}
// ここまで正解判定

// 問題差し替え
function problemReplacement() {
    if (!keys?.length) {
        return false;
    }
    $('#timer').timer(10);
    answer_key = keys[0].answer_key;
    modifier_key = keys[0].modifier_key;
    display_key = keys[0].display_key;
    question = keys[0].question;
    document.querySelector('#question').innerHTML = `${keys[0].question}`;
    document.querySelector('#remainingProblems').innerHTML = `${remainingProblems}`;
    document.querySelector('#answer').innerHTML = `<span>${keys[0].display_key}</span>`;
    document.querySelector('#img').setAttribute('src', `${keys[0].image.url}`);
}

// 終了判定
function correctAnswer() {
    remainingProblems--;
    if (remainingProblems == 0) {
        finishGame();
    } else {
        keys.shift();
        problemReplacement();
    }
}

//ajax用CSRFトークン設定
function set_csrftoken() {
    $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
        if (!options.crossDomain) {
            const token = $('meta[name="csrf-token"]').attr('content');
            if (token) {
                return jqXHR.setRequestHeader('X-CSRF-Token', token);
            }
        }
    });
}

// ゲーム終了
function finishGame() {
    clearTime = Math.round((Date.now() - startTime) / 1000);
    const additionTime = (missCount * 3) + (timeUpCount * 5);
    const resultTime = clearTime + additionTime;
    document.querySelector('#finish').style.display = "block";
    document.querySelector('#game').style.display = "none";
    document.querySelector('#result').innerHTML = `<p>クリアタイムは${clearTime}秒です。</p>
                                                   <p>正解数は${correctAnswers}問です。</p>
                                                   <p>タイムアップは${timeUpCount}問なので${timeUpCount * 5}秒加算されます。</p>
                                                   <p>ミス入力は${missCount}回なので${missCount * 3}秒加算されます。</p>
                                                   <p>最終結果は${resultTime}秒です。</p>`;
    const resultTwitter = document.querySelector('#result-twitter');
    resultTwitter.href = resultTwitter.href.replace('result', String(resultTime)).
                                            replace('cleartime', String(clearTime)).
                                            replace('miss', String(missCount)).
                                            replace('timeup', String(timeUpCount));

    set_csrftoken();
    $.ajax({
        url: '/user_time_attacks',
        type: 'POST',
        data: {
            user_time_attack: {
                user_id: document.querySelector('.user_id').value,
                finish_time: clearTime,
                miss_count: missCount,
                incorrect_answer: timeUpCount,
                addition_time: additionTime,
                result_time: resultTime
            }
        },
        dataType: 'json'
    });
}

// Mac/windowsコマンド切り替え
window.onload = () => {
    modifier.meta  = (os === 'Mac')? '<span id="meta"> ⌘ </span>'  : '<span id="meta"> Win </span>';
    modifier.ctrl  = (os === 'Mac')? '<span id="ctrl"> ⌃ </span>'  : '<span id="ctrl"> Ctrl </span>';
    modifier.alt   = (os === 'Mac')? '<span id="alt"> ⌥ </span>'   : '<span id="alt"> Alt </span>';
    modifier.shift = (os === 'Mac')? '<span id="shift"> ⇧ </span>' : '<span id="shift"> Shift </span>';
};

// ゲームスタート
document.addEventListener('keydown',e => {
    if ( e.key === " " && typeof startTime === "undefined" ) {
        problemReplacement();
        startTime = Date.now();
        document.querySelector('#game').style.display = "block";
        document.querySelector('#description').style.display = "none";
        let checkbox = document.querySelector("#checkbox");
        if (checkbox.checked) {
            document.querySelector("#answer").style.display = "inline-block";
        }else{
            document.querySelector("#answer").style.display = "none";
        }
        // 解答定義
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
    }
    return false;
    }
);

// 入力中キーを離したら非表示
document.addEventListener('keyup', e => {
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
});

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
    Command: toastr["success"](`${display_key}  正解です！`)
    correctAnswers++;
    command.innerHTML = `<span id="right">${display_key}</span>`;
    $('#right').delay(500).queue(function(next) {
        $(this).remove();
    });
}

function missFlash(message) {
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
    Command: toastr["error"](`${message}  不正解です！`)
    missCount++;
}

// タイマー定義
(function($) {
    $.fn.timer = function(totalTime) {
        // 既に起動済のものがある場合は削除しておく
        clearTimeout(this.data('id_of_settimeout'));
        this.empty();

        // ターゲット内に要素を作成
        // this.append('<h4><span></span> seconds left.</h4>');
        this.append('<div class="progress"></div>');
        this.children('.progress').append('<div class="progress-bar progress-bar-info"></div>');
        this.find('.progress-bar').css({
            cssText: '-webkit-transition: none !important; transition: none !important;',
            width: '100%'
        });

        let countdown = (function(timeLeft) {
            let $progressBar = this.find('div.progress-bar');
            let $header = this.children('h4');

            if (timeLeft <= 0) {
                timeUpCount++;
                missFlash('TimeUp!');
                correctAnswer();
                $header.empty().text('Time Up!').addClass('text-danger');
                return;
            }

            // $header.children('span').text(timeLeft);

            let width = (timeLeft - 1) * (100/totalTime); // unit in '%'
            if (width < 20) { // less than 20 %
                $progressBar.removeClass();
                $progressBar.addClass('progress-bar progress-bar-danger');
            } else if (width < 50) { // less than 50 % (and more than 20 %)
                $progressBar.removeClass();
                $progressBar.addClass('progress-bar progress-bar-warning');
            }

            $progressBar.animate({
                width:  width + '%'
            }, 1000, 'linear');

            let id = setTimeout((function() {
                countdown(timeLeft - 1);
            }), 1000);
            this.data("id_of_settimeout", id);
        }).bind(this);

        countdown(totalTime);
    };
})(jQuery);
