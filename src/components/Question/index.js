import { useState } from "react";

import { Button } from "./Button/index.js";

import {
  Container,
  Text,
  Image,
  OpenedContainer,
  TurnCardImage,
} from "./styles.js";

import { IMAGES } from "../../utils/utils.js";

import TurnImage from "../../assets/seta_virar.png";

const colors = ["#333333", "#FF3030", "#FF922E", "#2FBE34"];

export function Question({
  questionNumber,
  question,
  answer,
  openedQuestionCounter,
  setOpenedQuestionCounter,
  resultsArray,
  setResultsArray,
}) {
  const [openQuestion, setOpenQuestion] = useState(false);
  const [turnCard, setTurnCard] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [userResponse, setUserResponse] = useState(0);

  function handleOpenQuestion() {
    setOpenQuestion(true);
  }

  function handleOpenAnswer() {
    setTurnCard(true);
  }

  function handleResponse(response) {
    setUserResponse(response);
    setResultsArray([...resultsArray, response]);
    setOpenQuestion(false);
    setShowIcons(true);
    setOpenedQuestionCounter(openedQuestionCounter + 1);
  }

  return (
    <>
      {!openQuestion ? (
        <Container data-test="flashcard">
          <Text
            color={colors[userResponse]}
            decoration={userResponse === 0 ? "none" : "line-through"}
            data-test="flashcard-text"
          >
            Pergunta {questionNumber + 1}
          </Text>
          {!showIcons && (
            <Image
              src={IMAGES[userResponse]}
              onClick={handleOpenQuestion}
              data-test="play-btn"
            />
          )}

          {userResponse === 1 && (
            <Image src={IMAGES[userResponse]} data-test="no-icon" />
          )}

          {userResponse === 2 && (
            <Image src={IMAGES[userResponse]} data-test="partial-icon" />
          )}

          {userResponse === 3 && (
            <Image src={IMAGES[userResponse]} data-test="zap-icon" />
          )}
        </Container>
      ) : (
        <>
          {!turnCard ? (
            <OpenedContainer data-test="flashcard">
              <Text data-test="flashcard-text">{question}</Text>

              <TurnCardImage
                src={TurnImage}
                onClick={handleOpenAnswer}
                data-test="turn-btn"
              />
            </OpenedContainer>
          ) : (
            <OpenedContainer data-test="flashcard">
              <Text data-test="flashcard-text">{answer}</Text>

              <div>
                <Button
                  text={"Não lembrei"}
                  color={"#FF3030"}
                  onClick={() => handleResponse(1)}
                  dataTest="no-btn"
                />
                <Button
                  text={"Quase não lembrei"}
                  color={"#FF922E"}
                  onClick={() => handleResponse(2)}
                  dataTest="partial-btn"
                />
                <Button
                  text={"Zap!"}
                  color={"#2FBE34"}
                  onClick={() => handleResponse(3)}
                  dataTest="zap-btn"
                />
              </div>
            </OpenedContainer>
          )}
        </>
      )}
    </>
  );
}
