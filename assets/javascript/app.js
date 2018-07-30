$(document).ready(function(){
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

    for (var i = 0; i < questions.length; i++) {
        panel.append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
          panel.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
        }
      }

      panel.append("<button id='done'>Done</button>");
    },

     function done() {
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

    },

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

    $("#startClock").on("click", startTimer);
    $("#restart").on("click", restart);
    $("#submit").on("click", finish);

});