import styled from "styled-components";
import ELBox from "@/components/ELBox";
import ELStackItem from "./ELItem";
import { useAppSelector } from "@/app/store/hooks";

const ELStackBase = styled(ELBox)`
  display: flex;
  flex-direction: column-reverse;
  grid-gap: 10px;
`;

export interface IELStackProps {
  placeholder: string;
}

export default function ELStack({ placeholder }: IELStackProps) {
  const items = useAppSelector((state) => state.call.items);

  return (
    <ELStackBase placeholder={placeholder} className="stack">
      {items.map((value, index) => (
        <ELStackItem key={index}>{value}</ELStackItem>
      ))}
    </ELStackBase>
  );
}
