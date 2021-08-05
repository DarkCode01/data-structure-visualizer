import styled from "styled-components";
import ELBox from "@/components/ELBox";

const ELQueue = styled(ELBox)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(5, 20%);
  justify-content: flex-start;
`;

const ELQueueItem = styled.div`
  border-radius: 10px;
  border: 2px dashed gray;
  padding: 10px 15px;
  color: whitesmoke;
  font-weight: bold;
`;

export interface IELQueue {
  placeholder: string;
}

export default function ELStack({ placeholder }: IELQueue) {
  return (
    <ELQueue placeholder={placeholder} className="queue">
      <ELQueueItem>dassd</ELQueueItem>
      <ELQueueItem>dassd</ELQueueItem>
      <ELQueueItem>dassd</ELQueueItem>
      <ELQueueItem>dassd</ELQueueItem>
    </ELQueue>
  );
}
