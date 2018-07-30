function startTimer(){
    var timer = 50;
    setInterval(function() {
        timer--;
      if (timer >= 0) {
        span = document.getElementById("count");
        span.innerHTML = timer;
      }
      if (timer === 0) {
          alert('time is up!');
          clearInterval(timer);
      }
    }, 1000);
  }
  $("#startClock").click(function(){
      startTimer();
   });
