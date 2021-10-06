import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import classes from "./Question.module.css";
import { fetchData } from "../ApiCalls";

const Questions = () => {
  const [data, setData] = useState(null);
  const [answer, setAnswer] = useState("");
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [showResponse, setShowResponse] = useState(null);

  const loadData = () => {
    fetchData()
      .then((data) => {
        if (data.error) {
          console.log("error in loading data");
        } else {
          setData(data);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadData();
  }, [nextQuestion]);

  const answerHandler = (event) => {
    setAnswer(event.target.value);
  };

  const nextQuestionHandler = () => {
    setAnswer("");
    setShowResponse(null);
    setNextQuestion(!nextQuestion);
  };

  const checkAnswerHandler = () => {
    setShowResponse(true);
    const correctAnswer = data[0].answer;
    if (correctAnswer === answer) {
      setCheckAnswer(true);
    } else {
      setCheckAnswer(false);
    }
  };

  return (
    <Card className={classes.card}>
      <center>
        {data && <p>{data[0].question}</p>}
        <form>
          <input
            type="text"
            name="answer"
            value={answer}
            onChange={answerHandler}
          />
        </form>
        {showResponse &&
          (checkAnswer ? (
            <p>Correct Answer</p>
          ) : (
            <p>Wrong Correct answer is: {data[0].answer}</p>
          ))}
      </center>
      <Button onClick={checkAnswerHandler}>Check Answer</Button>
      <Button className={classes.button} onClick={nextQuestionHandler}>
        Next Question
      </Button>
    </Card>
  );
};

export default Questions;
