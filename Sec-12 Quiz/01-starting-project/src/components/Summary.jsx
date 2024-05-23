import quizend from "../assets/quiz-complete.png";
import QUESTION from "../questions.js";

export default function Summary({ index, userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswer = userAnswers.filter(
    (answer, index) => answer === QUESTION[index].answers[0]
  );

  const skippedAnswerShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswerShare = Math.round(
    (correctAnswer.length / userAnswers.length) * 100
  );
  const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;

  return (
    <div id="summary">
      <img src={quizend} alt="end game image" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span>{skippedAnswerShare}%</span>
          <span>skipped</span>
        </p>
        <p>
          <span>{correctAnswerShare}%</span>
          <span>answered correctly</span>
        </p>
        <p>
          <span>{wrongAnswerShare}%</span>
          <span>answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTION[index].answers[0]) {
            cssClass += "correct";
          } else {
            cssClass += "wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTION[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
