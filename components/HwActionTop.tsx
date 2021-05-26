import styled from "styled-components";
import HwButton from "./HwButton";

const HwActionTopBase = styled(HwButton)`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  display: none;

  &:hover {
    background-color: gray;
  }
`;
export default function HwActionTop() {
  // TODO: func for redirect and display
  return <HwActionTopBase>UP</HwActionTopBase>;
}
