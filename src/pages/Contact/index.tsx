import { Menu } from "../../components/Menu";
import { ContactCard } from "../../components/ContactCard";
import styled from "styled-components";

const Dados = {
  Marcos: {
    name: "Marcos Vinicius Gulhotti",
    img: "https://ca.slack-edge.com/TQZR39SET-U01PPAZEEPQ-5eed9ffeb4a2-512",
    role: "Product Owner",
    cellphone: "(45) 9 9912-7745",
    linkedin: "https://www.linkedin.com/in/marcos-vinicius-gulhotti-35b4571a1/",
    gitlab: "https://gitlab.com/Markinn",
    github: "https://github.com/MarcosGulhotti",
  },
  Arthur: {
    name: "Arthur Felini Linemburg",
    img: "https://ca.slack-edge.com/TQZR39SET-U01SJTKSRRR-086832d3d4a5-512",
    role: "Teach Leader",
    cellphone: "(48) 9 9601-0693",
    linkedin: "https://www.linkedin.com/in/arthur-fenili-linemburg-ab8936184/",
    gitlab: "https://gitlab.com/tukinhafl",
    github: "https://github.com/tukinhafl",
  },
  Luiz: {
    name: "Luiz Victor B. Oliveira",
    img: "https://ca.slack-edge.com/TQZR39SET-U01SCCZS11T-26bf72c9a4b0-512",
    role: "Scrum Master",
    cellphone: "(11) 9 8079-9716",
    linkedin:
      "https://www.linkedin.com/in/luiz-victor-bispo-oliveira-bb6007170/",
    gitlab: "https://gitlab.com/LuizVictor19",
    github: "https://github.com/luizvictor19",
  },
};

const StyledContainer = styled.div`
  width: 100vw;
  background-color: var(--background);
  overflow-x: hidden;

  @media (min-width: 769px) {
    height: 100vh;
  }
`;

const StyledContactDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;

  @media (min-width: 769px) {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Contact = () => {
  const { Marcos, Arthur, Luiz } = Dados;
  return (
    <StyledContainer>
      <Menu />
      <StyledContactDiv>
        <ContactCard Dados={Marcos} />
        <ContactCard Dados={Arthur} />
        <ContactCard Dados={Luiz} />
      </StyledContactDiv>
    </StyledContainer>
  );
};
