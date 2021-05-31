import React from "react";
import Page from "@/components/Page";
import ELContainer from "@/components/ELContainer";
import ELStructure from "@/components/ELStructure";
import ELEditor from "@/components/ELEditor/ELEditor";
import ELStack from "@/components/ELStack/ELStack";

const Home = () => {
  return (
    <Page>
      <ELContainer>
        <ELEditor />
        <ELStructure>
          <ELStack placeholder="Call Stack" />
          {/* <ELEditor placeholder="Call Stack" className="stack" /> */}
          {/* <ELStack className="api" placeholder="Web API" /> */}
          {/* <ELStack className="queue" placeholder="Callback Queue" /> */}
        </ELStructure>
      </ELContainer>
    </Page>
  );
};

export default Home;
