//your code here
var button = document.getElementById('swap');
var BackGround = document.getElementById('app');

console.log(button.classList.length);

button.addEventListener('click', () => {
    if(button.classList.length == 1){
        button.classList.add('button_night');
        BackGround.classList.add('night');
    }
    else{
        button.classList.remove('button_night');
        BackGround.classList.remove('night');
    }
})