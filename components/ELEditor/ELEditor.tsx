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
    </ELEditorBase>
  );
}
