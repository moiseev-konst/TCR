const TCR_radio_btn = document.querySelector('#TCR_radio_btn')
const perecent_radio_btn = document.querySelector('#perecent_radio_btn')
const numb1 = document.querySelector('#number_1 ')
const numb2 = document.querySelector('#number_2')
let r1 = undefined
let r2 = undefined
let t = undefined
const t1 = document.querySelector('#t1')
const t2 = document.querySelector('#t2')
const btn_Сalculation = document.querySelector('#btn_Сalculation')
const fieldset_T = document.querySelector('fieldset')
const result = document.querySelector('#result')
    //console.log(TCR_radio_btn)

//window.addEventListener('touchend', (e) => { console.log(e.target) })
/*const TCR_form = (e) => {
    fieldset_T.style.visibility = 'visible'
}

const perecent_form = (e) => {
    fieldset_T.style.visibility = 'hidden'
}*/

const calculation = (e) => {

    // result.value = TCR_radio_btn.checked ? tcrCalculation : result.value = perecentCalculation
    let str = TCR_radio_btn.checked ? tcrCalculation() : perecentCalculation()
    console.log(result.innerHTML = str.toString())
}
const tcrCalculation = () => {
    return r1 && r2 ? (((r2 - r1) / (r1 * (20 - t))) * 10 ** 6).toFixed(2) : 'error'
}
const perecentCalculation = () => {

    return r1 && r2 ? (((r2 - r1) / r1) * 100).toFixed(2) : 'error'
}


TCR_radio_btn.addEventListener("change", () => {
    fieldset_T.style.visibility = 'visible'
    console.log(TCR_radio_btn.checked)
})
perecent_radio_btn.addEventListener("change", () => {
    fieldset_T.style.visibility = 'hidden'
    console.log(TCR_radio_btn.checked)
})
numb1.addEventListener("change", (e) => { r1 = Number(e.target.value) })
numb2.addEventListener("change", (e) => { r2 = Number(e.target.value) })
t1.addEventListener("change", (e) => { t = Number(e.target.value) })
t2.addEventListener("change", (e) => { t = Number(e.target.value) })
btn_Сalculation.addEventListener('click', calculation)