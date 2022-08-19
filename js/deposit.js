
document.getElementById('btn-deposit').addEventListener('click', function () {
    
    const newDepositAmount = getInputFieldById('deposit-field')

    const previousDepositTotal = getElementsValueByID('deposit')

    const presentDepositTotal = newDepositAmount + previousDepositTotal

    setValuesByID('deposit', presentDepositTotal)


    const previousBalanceTotal = getElementsValueByID('balance')

    const newBalanceTotal = previousBalanceTotal + newDepositAmount

    setValuesByID('balance', newBalanceTotal)

})

