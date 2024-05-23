import { useState, useCallback } from "react";
import QUESTION from "../questions.js";
import Summary from "./Summary.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
  //  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsCompleted = activeQuestionIndex === QUESTION.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      //setAnswerState('answered');
      setUserAnswers((preUserAnswer) => {
        return [...preUserAnswer, selectedAnswer];
      });

      //   setTimeout(() => {
      //     if (selectedAnswer === QUESTION[activeQuestionIndex].answers[0]) {
      //       setAnswerState("correct");
      //     } else {
      //       setAnswerState("wrong");
      //     }
      //   }, 1000);
    },
    //  [activeQuestionIndex]
    []
  );

  const handleskipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsCompleted) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        // questionText={QUESTION[activeQuestionIndex].text}
        // answers={QUESTION[activeQuestionIndex].answers}
        // answerState = {answerState}
        // selectedAnswer = {userAnswers[userAnswers.length - 1]}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleskipAnswer}
      />
    </div>
  );
}
