import { Container, Image, Text, Button, ButtonText } from "./styles.js";

import LogoImage from "../../assets/logo.png";

export function SignIn({ setIsLoggedIn }) {
  function handleLogIn() {
    console.log("answer");
    setIsLoggedIn(true);
  }

  return (
    <Container>
      <Image src={LogoImage} />
      <Text>ZapRecall</Text>
      <Button onClick={handleLogIn} data-test="start-btn">
        <ButtonText>Iniciar Recall!</ButtonText>
      </Button>
    </Container>
  );
}
