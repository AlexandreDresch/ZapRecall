import { useState } from "react";
import styled from "styled-components";

import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Container>
      {
        !isLoggedIn ?
        <SignIn setIsLoggedIn={setIsLoggedIn}/>
        :
        <Home />
      }
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

