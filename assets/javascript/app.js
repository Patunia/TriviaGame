$(document).on("click", "#startClock", function() {
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

    function finish () {
    $.each($("input[id='q1b']:checked"), function() {
    if ($(this).val() === q1b) {
        game.correct++;
    }
    else {
        game.incorrect++;
    }
    });

    $.each($("input[id='q2d']:checked"), function() {
    if ($(this).val() === q2d) {
        game.correct++;
    }
    else {
        game.incorrect++;
    }
    });

    $.each($("input[id='q3c']:checked"), function() {
    if ($(this).val() === q3c) {
        game.correct++;
    }
    else {
        game.incorrect++;
    }
    });

    $.each($("input[id='q4a']:checked"), function() {
    if ($(this).val() === q4a) {
        game.correct++;
    }
    else {
        game.incorrect++;
    }
    });

    $.each($("input[id='q5b']:checked"), function() {
    if ($(this).val() === q5b) {
        game.correct++;
    }
    else {
        game.incorrect++;
    }
    });

    this.result();

    }

    function result() {
    clearInterval(timer);
    $("#sresults h2").remove();
    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }

    function finish(){
    number = 1;
    clearInterval(timer);
    }

    function restart(){
    number = 50;
    start();
    }
    };

$(document).on("click", "#restart", function() {
    game.restart();
  });

  $(document).on("click", "#submit", function() {
    game.done();
});