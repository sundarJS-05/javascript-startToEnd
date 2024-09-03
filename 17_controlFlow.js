// 1st - if  statgement


if(false){
    console.log('code NOt eecuted')
}
// above block is NOT executed; Notice that its faded in coulur

if(true){
    console.log('code is eecuted')
}

//  = means assignment; == meanms comparison if = or not
// !=  means NOT equal to; though its single = sign
// simialrly !== meaNS val & data type NOT equal

if (2==='2'){
    console.log('1st')
}
else{
    console.log('2nd')

}
console.log('this is outside if-else; always runs \n')

// implicit scope - wihtout using {} - only 1 line of code should be written
if(2=='2') console.log('success')

console.log('----------')

const itemSelected = true
const hasMoney = true
const googleLogin = true
const emailLogin = false

// || - either 1 condn is true
if(googleLogin || emailLogin){
    console.log('user is logged in')

}

// && - both condn are true
if(itemSelected && hasMoney){
    console.log('proceed to payment & shipping')

}

console.log('----------')
// switvhc case statment; thing to be checked is KEY; the condn ouptut are VALUES
// use SHIFT + ALT + DOWN ARROW key to copy switch cases

let direction = 'e'
switch (direction) {
    case 'e':
        console.log('east')       
        break;
    case 'w':
        console.log('west')       
        break;
    case 'n':
        console.log('north')       
        break;
    case 's':
        console.log('south')       
        break;

    default:
        console.log('direction acronym incorrect')
        break;
}

/* if we do NOT use 'break' in each case;  
whenever a condition matches; all cases below that will also be excuted
to avoid that & outut ONLy the matching case, we necessarily use 'break' */