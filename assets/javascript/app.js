var timer = 50;
var interval = setInterval(function(){
  document.getElementById('timer').innerHTML=count;
  timer--;
  if (timer === 0){
    clearInterval(interval);
    document.getElementById('timer').innerHTML='Done';
  }
}, 1000);