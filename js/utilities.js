// Getting values from input fields
function getInputFieldById(inputID) {
    
    
    const inputField = document.getElementById(inputID)
    const inputValue = parseFloat(inputField.value)
    inputField.value = ""

    return inputValue
}
// Getting elements by ID using innerText
function getElementsValueByID(elementsID) {
    
    const elementInput = document.getElementById(elementsID)
    const elementValue = parseFloat(elementInput.innerText)
    return elementValue
}

// Setting total value
function setValuesByID(elementsID, newVariable) {
    
    const newElement = document.getElementById(elementsID)
    newElement.innerText = newVariable
}
