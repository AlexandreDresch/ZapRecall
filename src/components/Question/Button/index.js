import { ButtonContainer, Text } from "./styles.js";

export function Button({ text, color, onClick }) {
  return (
    <ButtonContainer color={color} onClick={onClick}>
      <Text>{text}</Text>
    </ButtonContainer>
  );
}
