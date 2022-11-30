import Logo from '../../assets/logo.png';

import { 
    Container,
    Image,
    Text,
} from './styles.js';

export function Header() {
    return (
        <Container>
            <Image src={Logo}/>
            
            <Text>
                ZapRecall
            </Text>
        </Container>
    )
}