import {
    Container,
    Text,
} from './styles.js';

export function Footer ({counter, quantity}) {
    return (
        <Container data-test="footer">
            <Text>
                {counter}/{quantity} CONCLUÍDOS
            </Text>
        </Container>
    )
}