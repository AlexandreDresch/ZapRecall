import PlayImage from "../assets/seta_play.png";
import RightAnswerImage from "../assets/icone_certo.png";
import AlmostAnswerImage from "../assets/icone_quase.png";
import WrongAnswerImage from "../assets/icone_erro.png";

export const IMAGES = [
  PlayImage,
  WrongAnswerImage,
  AlmostAnswerImage,
  RightAnswerImage,
];

export const CARDS = [
  { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
  {
    question: "O React é __",
    answer: "Uma biblioteca JavaScript para construção de interfaces",
  },
  { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
  { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
  {
    question: "O ReactDOM nos ajuda __",
    answer: "Interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    question: "Usamos o npm para __",
    answer: "Gerenciar os pacotes necessários e suas dependências",
  },
  {
    question: "Usamos props para __",
    answer: "Passar diferentes informações para componentes",
  },
  {
    question: "Usamos estado (state) para __",
    answer:
      "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  },
];
