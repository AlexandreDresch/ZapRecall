import { useState } from "react";

import { Header } from "../../components/Header";
import { Question } from "../../components/Question";
import { Footer } from "../../components/Footer";

import { CARDS } from "../../utils/utils.js";

import { Container, ContentContainer } from "./styles";

export function Home() {
  const [openedQuestionCounter, setOpenedQuestionCounter] = useState(0);
  const [resultsArray, setResultsArray] = useState([]);

  return (
    <Container>
      <Header />

      <ContentContainer>
        {CARDS.map((card, index) => (
          <Question
            key={card.question}
            openedQuestionCounter={openedQuestionCounter}
            setOpenedQuestionCounter={setOpenedQuestionCounter}
            resultsArray={resultsArray}
            setResultsArray={setResultsArray}
            questionNumber={index}
            question={card.question}
            answer={card.answer}
          />
        ))}
      </ContentContainer>

      <Footer
        counter={openedQuestionCounter}
        quantity={CARDS.length}
        resultsArray={resultsArray}
      />
    </Container>
  );
}
