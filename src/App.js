import { useState, useRef } from "react";
import { Node, LinkedList } from "libs/data-structure/linked_list";

const list = new LinkedList();

function App() {
  const inputRef = useRef(null);
  const [nodes, setNodes] = useState([]);
  const createNode = (value) => {
    return new Node(value);
  };

  const addNode = () => {
    list.append(createNode(inputRef.current.value));

    clearInput();
    updateNodes();
  };

  const updateNodes = () => setNodes(list.get_nodes());
  const clearInput = () => (inputRef.current.value = "");

  return (
    <div>
      <div>
        <input ref={inputRef} type="text" placeholder="valor" />
        <button onClick={addNode}>s</button>
      </div>
      <hr />
      <div>
        {nodes.map((n, index) => (
          <li key={`${index}-node`}>{n}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
