import React from "react";
import Page from "@/components/Page";
import ELContainer from "@/components/ELContainer";
import ELStructure from "@/components/ELStructure";
import ELEditor from "@/components/ELEditor/ELEditor";
import ELStack from "@/components/ELStack/ELStack";

// import CodeMirror from "@uiw/react-codemirror";
// import "codemirror/keymap/sublime";
// import "codemirror/theme/monokai.css";

// const code = "const a = 0;";

const Home = () => {
  return (
    <Page>
      <ELContainer>
        <ELEditor>
          {/* <CodeMirror
            value={code}
            options={{
              theme: "monokai",
              tabSize: 2,
              keyMap: "sublime",
              mode: "jsx"
            }}
          /> */}
          as
        </ELEditor>
        <ELStructure>
          <ELStack placeholder="Call Stack" />
          {/* <ELEditor placeholder="Call Stack" className="stack" /> */}
          <ELEditor className="api" placeholder="Web API" />
          <ELEditor className="queue" placeholder="Callback Queue" />
        </ELStructure>
      </ELContainer>
    </Page>
  );
};

export default Home;
