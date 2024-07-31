// マウスに足跡をつける
let lastX = 0;
let lastY = 0;
const distanceThreshold = 30; // 表示するためのマウス移動の距離

document.addEventListener('mousemove', function (event) {
    const deltaX = event.pageX - lastX;
    const deltaY = event.pageY - lastY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance > distanceThreshold) {
        // マウスの動きの方向を基準に角度を計算
        const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

        let footpoint = document.createElement('div');
        footpoint.className = 'footpoint';
        footpoint.style.left = event.pageX + 'px';
        footpoint.style.top = event.pageY + 'px';
        footpoint.style.transform = `rotate(${angle + 90}deg)`; // 角度に90度を追加
        footpoint.style.opacity = '1'; // 足跡マークを可視化
        document.body.appendChild(footpoint);

        setTimeout(function () {
            footpoint.remove();
        }, 250); // 足跡マークを0.25秒後に削除します

        lastX = event.pageX;
        lastY = event.pageY;
    }
});

// homeに最初に足跡マークを出す
document.querySelectorAll('.footprint').forEach((footprint, index) => {
    footprint.addEventListener('animationend', function handleAnimationEnd() {
        // アニメーションが終了した後に要素を削除
        setTimeout(() => {
            this.remove();
        }, 10000); // インデックスに応じた遅延を追加することも可能
        // イベントリスナーを削除してメモリリークを防ぐ
        this.removeEventListener('animationend', handleAnimationEnd);
    });
});

// homeに最初にYOARIKIを表示する
const textContainer = document.getElementById('text-container');
const text = textContainer.innerText;
textContainer.innerHTML = ''; // 元のテキストをクリア

text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.classList.add('char');
    span.style.animationDelay = `${0.65 + index * 0.35}s`; // 0.1秒ごとに遅延
    span.textContent = char;
    textContainer.appendChild(span);
});

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}