const form = document.querySelector(".quiz");
const result = document.querySelector(".results");
const scoreResults = document.querySelector("span");
const correctAnswers = ["B", "B", "B", "B"];

const clickButton = form.addEventListener("submit", (e) => {
  e.preventDefault();

  //we need to update score
  //need to have results populate after a half a second.

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  scrollTo(0, 0);
  result.classList.remove("none");

  let output = 0;
  const timer = setInterval(() => {
    scoreResults.innerText = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 20);
});
