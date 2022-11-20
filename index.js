let display = document.getElementById('display');
let previous = document.getElementById('previous');
let opArray = ['+', '-', '*', '/'];


let keypad = Array.from(document.getElementsByClassName('pressed'));

keypad.map(button =>{
    button.addEventListener('click', (b)=>{
        
        switch(b.target.innerText){
            case '÷':
                if(display.innerText.includes('/')) return;
                if(display.innerText !== '0'){
                    if(previous.innerText.includes('=')){
                        previous.innerText = `${display.innerText}${b.target.value}`
                        display.innerText = b.target.value;
                    }else if(display.innerText =='+' || display.innerText =='*' || display.innerText =='-'){
                        display.innerText = b.target.value;
                        previous.innerText = `${previous.innerText.slice(0, -1)}${b.target.value}`
                    } else{
                        previous.innerText += b.target.value;
                        display.innerText = b.target.value;
                    }
                }
                break;

            case '*':
                if(display.innerText.includes('*')) return;
                if(display.innerText !== '0'){
                    if(previous.innerText.includes('=')){
                        previous.innerText = `${display.innerText}${b.target.innerText}`
                        display.innerText = b.target.innerText;
                    }else if(display.innerText =='+' || display.innerText =='/' || display.innerText =='-'){
                        display.innerText = b.target.innerText;
                        previous.innerText = `${previous.innerText.slice(0, -1)}${b.target.innerText}`
                    } else{
                        previous.innerText += b.target.innerText;
                        display.innerText = b.target.innerText;
                    }
                }
                break;

            case '+':
                if(display.innerText.includes('+')) return;
                if(display.innerText !== '0'){
                    if(previous.innerText.includes('=')){
                        previous.innerText = `${display.innerText}${b.target.innerText}`
                        display.innerText = b.target.innerText;
                    }else if(display.innerText =='*' || display.innerText =='/' || display.innerText =='-'){

                        if(previous.innerText.includes('*-')){
                            previous.innerText = previous.innerText.slice(0, -2)+ '+';
                            display.innerText = b.target.innerText;
                        }else{
                            display.innerText = b.target.innerText;
                            previous.innerText = `${previous.innerText.slice(0, -1)}${b.target.innerText}`
                        }
                    }else{
                        previous.innerText += b.target.innerText;
                        display.innerText = b.target.innerText;
                    }
                }
                break;
                
            case '-':
                if(display.innerText !== '0'){
                    if(previous.innerText.includes('=')){
                        previous.innerText = `${display.innerText}${b.target.innerText}`
                        display.innerText = b.target.innerText;
                    }else if(display.innerText =='+' || display.innerText =='/' || display.innerText =='-' || display.innerText =='*'){
                        display.innerText = b.target.innerText;
                        previous.innerText = `${previous.innerText}${b.target.innerText}`
                    } else{
                        previous.innerText += b.target.innerText;
                        display.innerText = b.target.innerText;
                    }
                }
                break;

            case '=':
                display.innerText = eval(previous.innerText)
                previous.innerText = `${previous.innerText} = ${display.innerText}`
                break;
          
            case '.':
                if (display.innerText.includes('.')) return;
                if (display.innerText === '0'){
                    display.innerText += b.target.innerText
                    previous.innerText += '0.'
                }else{
                    display.innerText += b.target.innerText
                    previous.innerText += b.target.innerText
                }
                break;

            case '←':
                if (display.innerText == '0') return
                if(display.innerText.length > 1){
                    display.innerText = display.innerText.slice(0, -1)
                previous.innerText = previous.innerText.slice(0, -1)
                }else{
                    display.innerText = 0;
                    previous.innerText = previous.innerText.slice(0, -1);
                }
                break;

            case 'CLEAR':
                display.innerText = '0';
                previous.innerText = '';
                break;

            default:
                if(b.target.innerText == '0' && display.innerText == '0'){
                    previous.innerText = b.target.innerText
                    return
                }
                if(b.target.innerText !== '.' && display.innerText == '0'){
                    display.innerText = b.target.innerText
                    previous.innerText += b.target.innerText
                }else if(opArray.indexOf(display.innerText)>=0){
                    previous.innerText += b.target.innerText
                    display.innerText = b.target.innerText
                } else {
                    display.innerText += b.target.innerText
                    previous.innerText += b.target.innerText
                }
                    break;
        }
    })
})











// let keypadArray = [...keypad];
// console.log(keypadArray);


// console.log(keypadArray)
// function keypadArray (){
//     // let keypad = document.getElementsByClassName('pressed');
//     let newArray = [];
//     for (i=0; i<keypad.length; i++){
//         newArray.push(keypad[i])
//     }
//     console.log(newArray);
//     return newArray;
// }

// keypadArray();
