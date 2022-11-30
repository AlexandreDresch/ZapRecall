import styled from "styled-components";

import { Home } from "./pages/Home";


function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

