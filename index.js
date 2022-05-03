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
        this.op = undefined
    }
    addNumber(num){
    if (num === ',' && this.valueDown.includes(',')) return
    this.valueDown = this.valueDown + num

    }
    printDisplay(){
        this.downText.innerText = this.valueDown
        this.upText.innerText = this.valueUp
    }

    delete(){
        this.valueDown = this.valueDown.slice(0,-1)
    }

    operator(op){
        if (this.valueDown == '') return
        if (this.valueUp != '') {
            this.doCalculation()
        }
    this.op = op
    this.valueUp = this.valueDown
    this.valueDown = ""
    }

    allClear(){
        this.valueDown = ''
        this.valueUp = ''
        this.op = ''
    }

doCalculation(){
    let result
    let convertUpValue = parseFloat(this.valueUp)
    let convertDownValue = parseFloat(this.valueDown)
    if (isNaN(convertUpValue) || isNaN(convertDownValue))return 
    switch (this.op){
        case '+':
            result= convertUpValue + convertDownValue
        break;

        case '-':
            result= convertUpValue - convertDownValue
        break;

        case '*': 
            result= convertUpValue * convertDownValue
        break;

        case '/':
            result= convertUpValue / convertDownValue
        break;

        case '%':
            result= (convertUpValue * convertDownValue) / 100
        break
        default: return;
    }

    this.valueDown = result
    this.op = undefined 
    this.valueUp= ''

}


}

const calculator = new Calculator (upText , downText)

buttonNumber.forEach(button => {
    button.addEventListener('click',() =>{
        calculator.addNumber(button.innerText)
        calculator.printDisplay()
    })
})

buttonDelete.addEventListener('click', () =>{
        calculator.delete()
        calculator.printDisplay()
    }
)

buttonOperator.forEach(button => {
    button.addEventListener('click', () => {
        calculator.operator(button.innerText)
        calculator.printDisplay()
    })
    }
)


buttonEqual.addEventListener('click',() =>{
    calculator.doCalculation()
    calculator.printDisplay()

} )


buttonAllClear.addEventListener('click',() =>{
    calculator.allClear()
    calculator.printDisplay()

} )





// keywords 


















// * TO DO 
// -applly visual efect key
// -using the keysnmbers 
//-percent 