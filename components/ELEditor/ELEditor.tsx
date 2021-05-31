import dynamic from "next/dynamic";
import styled from "styled-components";
import ELBox from "@/components/ELBox";

// import code editor using dynamic import
const AceEditor = dynamic(() => import("react-ace"), { ssr: false });
dynamic(() => import("ace-builds/src-noconflict/mode-javascript"), { ssr: false });
dynamic(() => import("ace-builds/src-noconflict/theme-github"), { ssr: false });

const ELEditorBase = styled(ELBox)`
  padding: 0;

  div#code {
    font-family: "Fira Code", monospace;
    border-radius: 20px;
  }
`;

const ELEditorWrappers = styled.div`
  display: flex;
  position: absolute;
  /* top: 20px; */
  /* left: 600px; */
  grid-gap: 10px;
`;

const ELEditorButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid gray;
  cursor: pointer;
`;

export default function ELEditor() {
  return (
    <ELEditorBase placeholder="">
      <AceEditor
        placeholder="Hello :D"
        mode="javascript"
        theme="monokai"
        name="code"
        maxLines={40}
        minLines={40}
        onChange={(s) => console.log(s)}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        fontSize={18}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2
        }}
        width="100%"
        wrapEnabled={true}
      />
      <ELEditorWrappers>
        {/* <ELEditorButton>Undo</ELEditorButton> */}
        {/* <ELEditorButton>Stop</ELEditorButton> */}
        <ELEditorButton>Run</ELEditorButton>
      </ELEditorWrappers>
    </ELEditorBase>
  );
}
