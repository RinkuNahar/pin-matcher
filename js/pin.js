// 4 pin randomly will come
function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin+'';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

// 1 2 3 4 5 6 7 8 9 0 will show by pressing the button

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calc = document.getElementById('typed-number');
    if(isNaN(number)){
        if(number == 'C'){
            calc.value='';
        }
    }
    else{
        const previousCalc = calc.value;
    const newCalc = previousCalc + number;
    calc.value = newCalc;
    }
});

// Verifying the random number and given number
function verify(){
    const Pin = document.getElementById('display-pin').value;
    const typed = document.getElementById('typed-number').value;
    const successMessage = document.getElementById('success');
    const failMessage = document.getElementById('fail');
    if( Pin==typed){
        successMessage.style.display = 'block';
    }
    else{
        failMessage.style.display = 'block';
    }
}