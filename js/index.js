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

// for expances input validation 
// select All Expance  value;
const selectAllInputFeild = document.querySelectorAll('.expancesInput');
// run for loop for get id 
for (const selectExpanceFeild of selectAllInputFeild) {
    const getIdExpance = selectExpanceFeild.id;
    // now addEventListener
    getId(getIdExpance).addEventListener('keyup',function(event){
        const expancesValue = event.target.value;
        error(getIdExpance,expancesValue);
    })
  
    getId(getIdExpance).addEventListener('change',function(event){
        const expancesValue = event.target.value;
        error(getIdExpance,expancesValue);
    })
  

}

// totalExpances calculation 
getId('calculate').addEventListener('click',function(){
    const IncomeValue = parseFloat(getId('Income').value);
    const totalExpances = getId('total-expances');
    // select All Expance  value;
    const selectAllExpance = document.querySelectorAll('.expancesInput');
    // totalExpances
    let totalAddExpances = 0;

    // run for loop for get id 
    for (const selectExpance of selectAllExpance) {
        totalAddExpances += parseFloat(selectExpance.value);        
    }
    if(IncomeValue >= totalAddExpances){
        getId('enoughMsg').style.display = 'none'
        totalExpances.innerText = totalAddExpances;
        getId('balance').innerText = (IncomeValue - totalExpances.innerText);
    }
    else{
        totalExpances.innerText = 0;
        getId('balance').innerText = 0;

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
    const savingAmount = (getId('Income').value * getId('save').value)/100;
    

    const afterBalance = getId('balance').innerText;

    if(afterBalance > savingAmount){
        remaingBal();
    }
    // getId('saving').innerText = 
})


// remaing balance 
function remaingBal(){
    const totalExpances = parseFloat(getId('total-expances').innerText);
    const savingBalance = parseFloat(getId('saving').innerText);
    getId('remainigBal').innerText = totalExpances - savingBalance;
}

// for add item 
// getId('addItemButton').addEventListener('click',function(){
//     getId('addItem').style.display = 'flex';
// })