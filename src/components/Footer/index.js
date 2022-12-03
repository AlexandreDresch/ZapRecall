import {
  Container,
  Text,
  InnerText,
  ImagesContainer,
  Image,
  ResultContainer,
} from "./styles.js";

import { IMAGES } from "../../utils/utils.js";

const dataTesters = ["", "no-icon", "partial-icon", "zap-icon"];

export function Footer({ counter, quantity, resultsArray }) {
  return (
    <Container data-test="footer">
      {counter === quantity && resultsArray.includes(1) && (
        <ResultContainer data-test="finish-text">
          <Text>&#128549; Putz...</Text>
          <InnerText>Ainda faltam alguns...</InnerText>
          <InnerText>Mas não desanime!</InnerText>
        </ResultContainer>
      )}

      {counter === quantity && !resultsArray.includes(1) && (
        <ResultContainer data-test="finish-text">
          <Text>&#129395; Parabéns!</Text>
          <InnerText>Você não esqueceu de</InnerText>
          <InnerText>nenhum flashcard!</InnerText>
        </ResultContainer>
      )}
      <Text>
        {counter}/{quantity} CONCLUÍDOS
      </Text>
      {resultsArray.length !== 0 && (
        <ImagesContainer>
          {resultsArray.map((item, index) => (
            <Image
              key={index}
              src={IMAGES[item]}
              data-test={dataTesters[+item]}
            />
          ))}
        </ImagesContainer>
      )}
    </Container>
  );
}
