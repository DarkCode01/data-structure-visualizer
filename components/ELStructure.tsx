import styled from "styled-components";

const ELStructure = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 0.6fr 1fr;
  grid-template-rows: 0.8fr auto;
  grid-template-areas: "stack api" "queue queue";

  div.stack {
    grid-area: stack;
  }

  div.api {
    grid-area: api;
  }

  div.queue {
    grid-area: queue;
  }
`;

export default ELStructure;
