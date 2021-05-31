import React from "react";
import Page from "@/components/Page";
import ELContainer from "@/components/ELContainer";
import ELStructure from "@/components/ELStructure";
import ELEditor from "@/components/ELEditor/ELEditor";

const Home = () => {
  return (
    <Page>
      <ELContainer>
        <ELEditor />
        <ELStructure>
          <ELEditor placeholder="Call Stack" className="stack" />
          <ELEditor className="api" placeholder="Web API" />
          <ELEditor className="queue" placeholder="Callback Queue" />
        </ELStructure>
      </ELContainer>
    </Page>
  );
};

export default Home;
