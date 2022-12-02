import { ButtonContainer, Text } from "./styles.js";

export function Button({ text, color, onClick, dataTest }) {
  return (
    <ButtonContainer color={color} onClick={onClick} data-test={dataTest}>
      <Text>{text}</Text>
    </ButtonContainer>
  );
}
