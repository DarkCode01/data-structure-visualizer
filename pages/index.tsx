import React from "react";
import Page from "@/components/Page";
import ELNav from "@/components/ELNav";
import ELContainer from "@/components/ELContainer";
import ELStructure from "@/components/ELStructure";
import ELEditor from "@/components/ELEditor/ELEditor";
import ELStack from "@/components/ELStack/ELStack";
import ElQueue from "@/components/ELQueue";
import { push, pop } from "@/app/store/stackSlice";
import { useAppDispatch } from "@/app/store/hooks";

const Home = () => {
  const dispatch = useAppDispatch();

  return (
    <Page>
      <ELNav addItemToCallStack={() => dispatch(push("func2()"))} removeItemFromCallStack={() => dispatch(pop())} />
      <ELContainer>
        <ELEditor />
        <ELStructure>
          <ELStack placeholder="Call Stack" />
          {/* <ELEditor placeholder="Call Stack" className="stack" /> */}
          {/* <ELStack className="api" placeholder="Web API" /> */}
          {/* <ELStack className="queue" placeholder="Callback Queue" /> */}
          <ElQueue placeholder="" />
        </ELStructure>
      </ELContainer>
    </Page>
  );
};

export default Home;
