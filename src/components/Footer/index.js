import {
    Container,
    Text,
} from './styles.js';

export function Footer ({counter, quantity}) {
    return (
        <Container>
            <Text>
                {counter}/{quantity} CONCLUÍDOS
            </Text>
        </Container>
    )
}