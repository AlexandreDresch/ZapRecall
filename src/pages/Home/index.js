import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Question } from "../../components/Question";

import { cards } from "../../assets/cards.js";

import { Container, ContentContainer } from "./styles";

export function Home() {
    return (
        <Container>
            <Header />

            <ContentContainer>
                {
                    cards.map((card, index) => (
                        <Question 
                            key={index}
                            
                            questionNumber={index}
                            question={card.question}
                            answer={card.answer}
                        />
                    ))
                }
            </ContentContainer>

            <Footer 
                counter={0}
                quantity={cards.length}
            />
        </Container>
    )
}