import { useEffect, useState } from "react";

import { Button } from "./Button/index.js";

import { 
    Container, 
    Text, 
    Image,
    OpenedContainer,
    TurnCardImage
} from "./styles.js";

import { IMAGES } from "../../utils/utils.js";

import PlayImage from "../../assets/seta_play.png";
import TurnImage from "../../assets/seta_virar.png";
import RightAnswerImage from "../../assets/icone_certo.png";
import AlmostAnswerImage from "../../assets/icone_quase.png";
import WrongAnswerImage from "../../assets/icone_erro.png";

const colors = [
  '#333333',
  '#FF3030',
  '#FF922E',
  '#2FBE34'
];

const images = [
  PlayImage,  
  WrongAnswerImage,
  AlmostAnswerImage,
  RightAnswerImage,
]



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
    setOpenedQuestionCounter(openedQuestionCounter+1)
  }

  return (
    <>
      {!openQuestion ? (
        <Container data-test="flashcard">
          <Text 
            color={colors[userResponse]}
            decoration={userResponse === 0 ? 'none' : 'line-through'}
            data-test="flashcard-text"
          >
            Pergunta {questionNumber + 1}
          </Text>
          {
            !showIcons &&
            <Image src={IMAGES[userResponse]} onClick={handleOpenQuestion} data-test="play-btn" />            
          }

          {
            userResponse === 1 && 
            <Image src={IMAGES[userResponse]} data-test="no-icon" />
          }

          {
            userResponse === 2 && 
            <Image src={IMAGES[userResponse]} data-test="partial-icon" />
          }

          {
            userResponse === 3 && 
            <Image src={IMAGES[userResponse]} data-test="zap-icon" />
          }
          
        </Container>
      )
      :
      (
        <>
          {
            !turnCard ? (
                <OpenedContainer>
                    <Text data-test="flashcard-text">{question}</Text>

                    <TurnCardImage src={TurnImage} onClick={handleOpenAnswer} data-test="turn-btn"/>
                </OpenedContainer>
            ) : (
                <OpenedContainer>
                    <Text data-test="flashcard-text">{answer}</Text>

                    <div>
                        <Button 
                            text={'Não lembrei'}
                            color={'#FF3030'}
                            onClick={() => handleResponse(1)}
                            data-test="no-btn"
                        />
                        <Button 
                            text={'Quase não lembrei'}
                            color={'#FF922E'}
                            onClick={() => handleResponse(2)}
                            data-test="partial-btn"
                        />
                        <Button 
                            text={'Zap!'}
                            color={'#2FBE34'}
                            onClick={() => handleResponse(3)}
                            data-test="zap-btn"
                        />
                    </div>
                </OpenedContainer>
            )
          }
        </>
      )
    }
    </>
  );
}
