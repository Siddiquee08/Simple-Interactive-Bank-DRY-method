document.getElementById('btn-withdraw').addEventListener('click', function () {
    
    const withdrawField = getInputFieldById('withdraw-field')
    const previousWithdrawTotal = getElementsValueByID('withdraw')
    const newWithdrawTotal = withdrawField + previousWithdrawTotal

    const previousBalanceTotal = getElementsValueByID('balance')

    const newBalanceTotal = previousBalanceTotal - withdrawField

    if (newBalanceTotal >= 0) {
        
        setValuesByID('withdraw', newWithdrawTotal)
        setValuesByID('balance', newBalanceTotal)
    }

    else {
        alert("Insufficient Amount")

    }
    
})