// 条件分岐（if ... else）

let condition = 5;
// let condition = -3;
// let condition = 0;
// let condition = "0";

// if ... elseは、上から順番に条件式が評価され、trueとなった節以降の条件は無視される
if (condition > 0){
    console.log("condetionは、正の数です");
}
else if (condition === 0){
    console.log("condetionは、0です");
}
else if (condition < 0){
    console.log("condetionは、負の数です");
}
else{
    console.log("condetionに格納されている値は、数字ではありません");
}

// 引数で指定された数字によって、いろいろな言語で「こんにちは」を表示する関数
function hello(language){
    // 表示する文字列を格納する変数
    let message = "";

    // languageに入っている値で、（１：日本語、２：英語、３：中国語、４：韓国語）
    if (language === 1){
        message = "こんにちは";
    }
    else if (language === 2){
        message = "Hello";
    }
    else if (language === 3){
        message = "你好";
    }
    else if (language === 4){
        message = "안녕하세요";
    }
    else{
        message = "想定されていない引数です";
    }

    //  コンソールに表示
    console.log(message);

    // HTMLを書き換えたい場合
    // HTMLの要素を取得する
    const p_hello = document.querySelector("#hello");
    console.log(p_hello);

    // 取得したHTML要素の文字列を置き換える
    p_hello.textContent = message;

}

// 関数のテスト
// hello(1);

// 繰り返し（while）
// ループに複雑な条件処理を組み合わせる場合に使うことが多い
let count = 0;
while (count < 5){
    console.log("while文のテスト：" + count + "回目のループです")

    // 途中でループ空けいた場合は、break文を使う
    if (count === 3){
        break;
    }

    // count = count + 1;
    count++;
}

// 繰り返し（for）
// 事前にループの回数が分かっている場合や配列と組み合わせる場合に使うことが多い。
for (let i = 0; i < 5; i++){
    console.log("for文のテスト：" + i + "回目のループです");
}

let player_hand = ["グー", "チョキ", "パー"];
// console.log(player_hand[0]);

for (let i = 0; i < 5; i++){
    console.log(player_hand[i]);
}

// 配列名.lengthで配列の要素数（長さ）を取得できる
console.log(player_hand.length)

// 配列の長さに合わせて自動ループ
for(let i = 0; i < player_hand.length; i++){
    console.log(player_hand[i]);
}

//  さらにスマートに
for (const hand of player_hand){
    console.log("じゃんけん：" + hand);
}

let aiueo = "じゃんけん";
for (const str of aiueo){
    console.log("じゃんけん：" + str);
}