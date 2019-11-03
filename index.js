let number = prompt('Введи число');
if (number>0 && number<=2 || number==12){
    alert('Зима. брр');
} else if(number>=2 && number<=5){
    alert('Весна! Все квітне');
} else if (number>=5 && number<=8){
    alert('Літо:)))');
} else if (number>=8 && number<=11){
    alert('Осінь...');
} else if(number==''){
    alert('Ви нічого не ввели');
} else if(number == null){
    alert('Ви скасували запит')
} else {
    console.log(undefined);
}