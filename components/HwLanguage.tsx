import styled from "styled-components";
import { LanguageProps } from "@/app/props/Language";

const HwLanguageBase = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  padding: 20px;
  width: auto;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    background-color: gray;
    color: white;

    p {
      color: white;
    }
  }
`;

const HwLanguageContainer = styled.div`
  width: auto;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  grid-gap: 30px;
`;

// const HwLanguageLogo = styled.div`
//   width: auto;
//   height: auto;

//   i {
//     font-size: 2.5rem;
//   }
// `;

const HwLanguageBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const HwLanguageTitle = styled.h1`
  font-size: 18px;
  text-transform: uppercase;
`;

const HwLanguageSubTitle = styled.p`
  font-size: 12px;
  color: gray;

  &::before {
    content: "Ext: ";
  }
`;

export default function HwLanguage({ name, ext }: LanguageProps) {
  return (
    <HwLanguageBase>
      <HwLanguageContainer>
        <HwLanguageBody>
          <HwLanguageTitle>{name}</HwLanguageTitle>
          <HwLanguageSubTitle>{ext}</HwLanguageSubTitle>
        </HwLanguageBody>
      </HwLanguageContainer>
    </HwLanguageBase>
  );
}
