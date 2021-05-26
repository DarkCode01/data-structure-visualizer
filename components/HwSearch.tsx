import styled from "styled-components";

const HwForm = styled.form`
  width: auto;
`;

const HwInput = styled.input`
  width: 100%;
  border-radius: 10px;
  border: 0.1px solid gray;
  padding: 10px 40px;
  font-size: 18px;
`;

export default function HwSearch() {
  return (
    <HwForm>
      <HwInput placeholder="search" />
    </HwForm>
  );
}
