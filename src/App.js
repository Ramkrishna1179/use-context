import UR1 from "./useRef/ur1";
import { UR2 } from "./useRef/ur1";
import { createContext, useState } from "react";
import CompD from "./CompD";
import CompA from "./CompA";
import CompE from "./CompE";
import Counter from "./useReducer/reduce1";
import ComplexComponent from "./useReducer/useReducer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { USR } from "./useReducer/USR";
const Value = createContext();
function App(props) {
  const Name = "Pablu-Pandey";
  const [state, setState] = useState({
    name: "Ram Yadav",
    profession: "Software engineer",
    designation: "Front-End Developer",
    ctc: "4cr",
  });
  return (
    <div className="App text-center">
      <Value.Provider value={{ state, setState }}>
        <CompA data={Name} />
        <CompD />
        <CompE />
      </Value.Provider>
      <UR1 />
      <UR2 />
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <br />
      <ComplexComponent />
      <br />
      <br />
      <br />
      <USR />
    </div>
  );
};
export default App;
export {Value};
