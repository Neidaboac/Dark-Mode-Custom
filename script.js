const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const process = $('.process')
const range = $('.range')
const value = $('.process span')
const body = $('body')
const input = $('.input')

function updateProcess(percent) {
    if (percent >= 5 && percent <= 100) {
        process.style.width = `${percent}%`
        value.innerHTML = `${percent}%`
        body.style.background = `rgba(0, 0, 0, ${percent}%)`
    }
}

updateProcess(100) // default

range.addEventListener('mousemove', function (e) {
    console.log(e);
    // console.log(e.pageX); // vị trí con trỏ chuột
    // console.log(this); // div.range
    // console.log(this.offsetLeft);
    var processWidth = e.pageX - this.offsetLeft
    var percent = Math.round((processWidth / this.offsetWidth) * 100)
    updateProcess(percent)
})

input.addEventListener('keydown', function (e) {
    let inputPercent = input.value.trim()
    // console.log(inputPercent);

    if (e.keyCode === 13) {
        updateProcess(inputPercent)
        input.value = ''
        input.focus()
    }
})
