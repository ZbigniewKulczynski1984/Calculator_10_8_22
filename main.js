const numbs = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear')
const del = document.querySelector('.delete')
const equal = document.querySelector('.equality')
const resultPrev = document.querySelector('.previous-acion')
const resultAct = document.querySelector('.currant-action')

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
    return
}

switch (operation) {
    case '+':
        action = previous + current
        break
    case '-':
        action = previous - current
        break
    case '*':
        action = previous * current
        break
    case '/':
        action = previous / current
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