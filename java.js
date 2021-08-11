function display(val) {
    document.getElementById('prev').value += val
}
let evaluate = document.getElementById('evaluate');

evaluate.onclick = function () {

    let x = document.getElementById('prev').value,
        y = eval(x);
    if (x === '' || x === undefined) {
        y = 'Enter numbers plz'
    }
    document.getElementById('current').value = y
}
let clear = document.getElementById('clear');
clear.onclick = function () {
    document.getElementById('current').value = '';
    document.getElementById('prev').value = ''
}

let theme1 = document.getElementById('c1');
theme1.onclick = function () {
    let calcu = document.getElementById('calcu');
    clear = document.getElementById('clear'),
        evaluate = document.getElementById('evaluate'),
        the = document.getElementById('the');
    calcu.setAttribute('style', 'background-color: #3b4664')
    clear.setAttribute('style', 'background-color: #647299')
    evaluate.setAttribute('style', 'background-color: #d13f30')
    the.setAttribute('style', 'color:white')
}
let theme2 = document.getElementById('c2');
theme2.onclick = function () {
    let calcu = document.getElementById('calcu'),
        clear = document.getElementById('clear'),
        evaluate = document.getElementById('evaluate');
    let the = document.getElementById('the');
    calcu.setAttribute('style', 'background-color: #e6e6e6')
    clear.setAttribute('style', 'background-color: #388187')
    evaluate.setAttribute('style', 'background-color:#c85401')
    the.setAttribute('style', 'color:black')
}
let theme3 = document.getElementById('c3');
theme3.onclick = function () {
    let calcu = document.getElementById('calcu'),
        clear = document.getElementById('clear'),
        cu = document.getElementById('current'),
        pe = document.getElementById('prev'),
        evaluate = document.getElementById('evaluate');
    let the = document.getElementById('the');
    calcu.setAttribute('style', 'background-color: #17062a')
    clear.setAttribute('style', 'background-color: #56077c;color:#fee42f')
    evaluate.setAttribute('style', 'background-color:#00decf;color:#fee42f')
    the.setAttribute('style', 'color:white')
        cu.setAttribute('style', 'color:#fee42f')
    pe.setAttribute('style', 'color:#fee42f')

}
let theme4 = document.getElementById('c4');
theme4.onclick = function () {
    let calcu = document.getElementById('calcu'),
        clear = document.getElementById('clear'),
        cu = document.getElementById('current'),
        pe = document.getElementById('prev'),
        evaluate = document.getElementById('evaluate');
    let the = document.getElementById('the');
    calcu.setAttribute('style', 'background: linear-gradient(to right, #00aaff,#00ff6c)')
    clear.setAttribute('style', 'background-color: #56077c;color:#fee42f')
    evaluate.setAttribute('style', 'background-color:white')
    the.setAttribute('style', 'color:white')
        cu.setAttribute('style', 'color:#fee42f')
    pe.setAttribute('style', 'color:#fee42f')

}