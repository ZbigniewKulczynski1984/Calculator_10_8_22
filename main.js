const number = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear')
const del = document.querySelector('.delete')
const equal = document.querySelector('.equality')
const resultPrev = document.querySelector('.previous-acion')
const resultCur = document.querySelector('.currant-action')

let currentAction = ''
let operation = undefined
let previousAction = ''

const calculate = () => {
    let action 
    if(!previousAction || !currentAction)
    return
}

const previous = parseFloat(previousAction)
const current = parseFloat(currentAction)

if(isNaN(previous) || isNaN(current)) {
    // return
}

switch (operation) {
    case '+':
        action = previous + current
        break
    case '-':
        action = previous - current
        break
    case '×':
        action = previous * current
        break
    case '÷':
        if(current === 0) {
            clearResult()
            return
        }
        action = previous / current
        break
    case '^':
        action = Math.exp(previous, current)
        break
    case '%':
        action = previous / 100 * current
        break
    case '√':
        action = Math.exp(previous, 1/ current)
        break
    case 'log':
        action = Math.log(previous) / Math.log(current)
        break
        default:
            return
}

currentAction = action
operation = undefined
previousAction = ''

const choseOperation = (operator) => {
    if(currentAction === '') {
        return
    }
    if(previousAction !== '') {
        const previous = resultPrev.innerText
        if(currentAction.toString() === '0' && previous[previous.length -1] === '÷'){
            clearResult()
        }
        calculate()
    }
    operation = operator
    previousAction = currentAction
    currentAction = ''
}

const addNumber = (number) => {
    if (number === '•') {
        if(currentAction.includes('.')) {
        return
    }
    number = '.'
 }

 currentAction = currentAction.toString() + number.toString()
}

const removeNumber = () => {
    currentAction = currentAction.toString().slice(0,-1)
}

const updateResult = () => {
    resultCur.innerText = currentAction 

    if(operation != null) {
        resultPrev.innerText = previousAction + operation
    } else {
        resultPrev.innerText = ''
    }
}

const clearResult = () => {
    currentAction = ''
    operation = undefined
    previousAction
}

number.forEach ((number) => {  
    number.addEventListener('click', () => {
        addNumber(number.innnerText)
        updateResult()
    })
})


equal.addEventListener('click', () => {
    calculate()
    updateResult()
})

del.addEventListener('click', () => {
    deleteNumber()
    updateResult()
})

clear.addEventListener('click', () => {
    clearResult()
    updateResult()
})
