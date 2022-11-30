import {
    Container,
    Text,
    Image,
} from './styles.js';

import PlayImage from '../../assets/seta_play.png'

export function Question({questionNumber, question, answer}) {
    return (
        <Container>
            <Text>
                Pergunta {questionNumber +1}
            </Text>

            <Image src={PlayImage}/>
        </Container>
    )
}