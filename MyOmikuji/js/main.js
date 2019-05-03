'use strict';

{
  const btn = document.getElementById('btn');


  btn.addEventListener('click' , () => {
    const n = Math.random();
    if (n < 0.3) {
      btn.textContent = '大吉'; //30%の確率で大吉が出る
    } else if (n < 0.5) {
      btn.textContent = '吉'; //20%の確率で吉が出る
    } else if (n < 0.6) {
      btn.textContent = '中吉'; //10%の確率で中吉が出る
    } else if (n < 0.7) {
      btn.textContent = '小吉'; //10%の確率で小吉が出る
    } else if (n < 0.8) {
      btn.textContent = '末吉'; //10%の確率で末吉が出る
    } else if (n < 0.9) {
      btn.textContent = '凶'; //10%の確率で凶が出る
    } else {
      btn.textContent = '大凶'; //10%の確率で大凶が出る
    }
  });

  btn.addEventListener('mousedown' , () => {
    btn.classList.add('pressed');
  });

  btn.addEventListener('mouseup' , () => {
    btn.classList.remove('pressed');
  });
}
