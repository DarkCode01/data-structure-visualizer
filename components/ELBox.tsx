import styled from "styled-components";

const ELBox = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  background-color: var(--primary-light);
  padding: 10px;
  color: ;

  box-shadow: 0px 14px 36px 6px var(--primary-dark);
  -webkit-box-shadow: 0px 14px 36px 6px var(--primary-dark);
  -moz-box-shadow: 0px 14px 36px 6px var(--primary-dark);

  &::before {
    content: "${({ placeholder }) => placeholder}";
    position: relative;
    top: 10px;
    left: 10px;
    color: whitesmoke;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export default ELBox;
