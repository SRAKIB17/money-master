// get id 
function getId(id){
    return document.getElementById(id);
}
// errot message 
function error(id,value){
    // check value
    const check = getId(id);
    const message = getId(id+'-label');
    if(value > 0 && (value != ' ' || value !='')){
        check.classList.remove('error')
        check.classList.add('done')
        message.classList.remove('msg-error')
    }
    else{
        check.classList.add('error')
        message.classList.add('msg-error')
        check.classList.remove('done')
    }
}
// for income 
getId('Income').addEventListener('keyup',function(event){
    const IncomeValue = event.target.value;
    error('Income',IncomeValue)
    
})
getId('Income').addEventListener('change',function(event){
    const IncomeValue = event.target.value;
    error('Income',IncomeValue)
    
})
// totalExpances calculation 
getId('calculate').addEventListener('click',function(){
    const IncomeValue = parseFloat(getId('Income').value);
    const totalExpances = getId('total-expances');

    const totalCalcExpances = 3634;
    if(IncomeValue >= totalCalcExpances){
        getId('enoughMsg').style.display = 'none'
        console.log(556)
        totalExpances.innerText = '6456564';
        getId('balance').innerText = (IncomeValue - totalExpances.innerText);
    }
    else{
        getId('enoughMsg').style.display = 'block'
    }
})



// for saving option 
getId('save').addEventListener('keyup',function(event){
    const saveValue = event.target.value;
    error('save',saveValue)
})
// saving calculation
getId('saveCal').addEventListener('click',function(){
    getId('saving').innerText = (getId('Income').value * getId('save').value)/100;
    remaingBal()
})


// remaing balance 
function remaingBal(){
    const totalExpances = parseFloat(getId('total-expances').innerText);
    const savingBalance = parseFloat(getId('saving').innerText);
    getId('remainigBal').innerText = totalExpances - savingBalance;
}