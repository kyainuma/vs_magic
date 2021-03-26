import 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/mode-html'

// 開始時間、クリア時間
let starttime, cleartime;

// 総問題数
const totalQuestions= document.querySelectorAll('.answer').length;

// 出題問題数
let questionRange = 5;

//　問題セット
const setQuestions = randomizing();

// 結果テキスト
let result = document.querySelector('#result');

// 重複しない乱数生成
function randomizing(){
    let arr = [];
    let numArr = [];
    for(let i=0; i < totalQuestions; i++){
        arr[i]=i+1;
    }

    for(let j = 0, len = arr.length; j < questionRange; j++, len--) {
        let rndNum = Math.floor(Math.random()*len);
        numArr.push(arr[rndNum]);
        arr[rndNum] = arr[len-1];
    }
    return numArr;
}

// ゲーム開始処理
function startGame() {
    // 残り問題数表示
    result.style.display="block";

    // 出題問題表示
    let question = document.querySelector(`#question-${setQuestions[0]}`);
    question.style.display="block";

    // ace設定
    let editor = ace.edit(document.querySelector(`#editor-${setQuestions[0]}`));
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/html");

    // エディタの先頭にフォーカス
    document.querySelector(`#editor-${setQuestions[0]} .ace_text-input`).focus();

    // 解答判定
    editor.getSession().on('change', function(){
        // 解答取得
        let answer = document.querySelector(`#answer-${setQuestions[0]}`).textContent;

        // ユーザー解答取得
        let editorValue = ace.edit(document.querySelector(`#editor-${setQuestions[0]}`)).getValue().trim();

        if (editorValue == answer) {
            correctAnswer(question);
        }
    })
}

// 指定された時間待つ関数を内包したPromiseオブジェクトを返す
const wait = (sec) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, sec*1000);
    });
};

// 正解処理
async function correctAnswer(question) {
    try {
        await wait(0.5); // ここで0.5秒間止まります
        question.style.display="none";
        setQuestions.shift();
        questionRange--;
        result.innerHTML = `残り${questionRange}問`;
        if (questionRange == 0) {
            cleartime = Math.round((Date.now() - starttime) / 1000);
            result.innerHTML = `クリアタイムは${cleartime}秒です`;
            document.querySelector("#finish").style.display="block";
        } else {
            startGame();
        }
    } catch (err) {
        console.error(err);
    }
}

// スペーススタート処理 ロードして1回目のみ発火
window.addEventListener('keyup', onKeyPress, {once: true})
function onKeyPress(e) {
    if ( e.keyCode === 32) {
        startGame();
        starttime = Date.now();
        result.innerHTML = `残り${questionRange}問`;
        document.querySelector("#description :first-child").innerHTML = '間違えた場合はCommand-Zで戻してください';
    }
    return
}

// ヒント表示切り替え
window.onload = function(){
    document.querySelector("#checkbox").onclick = function(){
        if (this.checked) {
            document.querySelectorAll(".hint").forEach(hint => hint.style.display = "block");
        }else{
            document.querySelectorAll(".hint").forEach(hint => hint.style.display = "none");
        }
    }
}

// pre > codeと.answer直下の特殊文字をエスケープ
document.querySelectorAll('pre > code, .answer').forEach(function (elem) {
    elem.textContent = elem.innerHTML.trim();
});

import 'ace-builds/webpack-resolver'
