const buttonNumber = document.querySelectorAll('[data-num]')
const buttonOperator = document.querySelectorAll('[data-operator]')
const buttonEqual = document.querySelector('[data-equal]')
const buttonAllClear = document.querySelector('[data-allclear]')
const buttonDelete = document.querySelector('[data-delete]')
const upText = document.getElementById('value-1')
const downText = document.getElementById('value-2')

// mouse 

class Calculator {
    constructor(upText , downText) {
        this.downText = downText
        this.upText = upText
        this.valueDown = ''
        this.valueUp = ''
        this.operator = undefined
    }
    addNumber(num){
    this.valueDown = this.valueDown + num
    }
    printDisplay(){
        this.downText.innerText = this.valueDown
    }

    
}

const calculator = new Calculator (upText , downText)

buttonNumber.forEach(button => {
    button.addEventListener('click',() =>{
        calculator.addNumber(button.innerText)
        calculator.printDisplay()
    })
})
