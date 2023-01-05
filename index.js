
let binaryInput=document.getElementById('binary-number')
let convertButton=document.getElementById('submit')
function binary(e){
    e.preventDefault()
    let decimalInput=document.getElementById('decimal-number').value
    if(decimalInput==='' || decimalInput<0 ){
        alert('Enter a valid number')
    }
    let binaryNumber=Number(decimalInput).toString(2)
    binaryInput.setAttribute('value',binaryNumber)
}
convertButton.addEventListener('click',binary)