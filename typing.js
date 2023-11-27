class Typing {
    constructor({ el, interval, delay }) {
        this.el = document.querySelector(el);
        this.interval = interval || 500
        this.delay = delay == undefined ? 1000 : delay
        this.text = this.el.innerHTML.trim()
        this.el.innerHTML = ""
        setTimeout(() => this.write(), this.delay);
    }
    write(i = 0) {
        this.el.innerHTML += this.text[i]
        i++
        if (i < this.text.length) {
            setTimeout(() => this.write(i), this.interval);
        }
    }
}
new Typing({
    el: ".header__content h1",
    interval: 300,
    delay: 1000
})
new Typing({
    el: ".header__content p",
    interval: 200,
    delay: 500
})
new Typing({
    el: ".info__scroll-desc",
    interval: 100,
    delay: 0
})

const header = document.querySelector('.header__content');
header.addEventListener('mouseover', function () {
    random(header)
    function random(rand) {
        let q =  total()
        const x = window.innerWidth - rand.offsetWidth,
            y = window.innerHeight - rand.offsetHeight,
            left = Math.round(Math.random() * x),
            right = Math.round(Math.random() * y);
        rand.style.marginLeft = `${left}px`
        rand.style.marginTop = `${right}px`
        rand.style.color = `${q}`
        rand.style.transition = `1s`
        // setTimeout(() => {
        //    total()
        // }, 1000);
    }
});
 let w = ['red','blue','green','pink','sienna','yellow','aqua','gold','tomato','sienna','indigo','darkkhaki']
function total() {
    let i = Math.round(Math.random()*(11-0)+0)
    return w[i]
}
total()
console.log(total());


// const title = document.querySelector('.header__content h1');
// let text = title.innerHTML
// title.innerHTML = ''
// function write(i = 0) {
//     title.innerHTML += text[i]
//     i++
//     if (i < text.length) {
//         setTimeout(() => {
//             write(i)
//         }, 100)
//     }
//     ;
// }
// write()