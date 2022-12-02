import { useState } from "react";

import { Header } from "../../components/Header";
import { Question } from "../../components/Question";
import { Footer } from "../../components/Footer";

import { cards } from "../../assets/cards.js";

import { Container, ContentContainer } from "./styles";

export function Home() {
    const [openedQuestionCounter, setOpenedQuestionCounter] = useState(0);
    const [resultsArray, setResultsArray] = useState([]);
    console.log(resultsArray)
    return ( 
        <Container>
            <Header />

            <ContentContainer>
                {
                    cards.map((card, index) => (
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
                    ))
                }
            </ContentContainer>

            <Footer 
                counter={openedQuestionCounter}
                quantity={cards.length}
                resultsArray={resultsArray}
            />
        </Container>
    )
}