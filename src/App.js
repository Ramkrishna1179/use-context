import UR1 from './useRef/ur1'
import { UR2 } from "./useRef/ur1";
import { createContext } from "react";
import CompD from "./CompD";
import CompA from "./CompA";
import CompE from "./CompE";
const Value = createContext();
function App(props) {
  const Name = "Pablu-Pandey";
  return (
    <div className="App">
    <Value.Provider value={"Guru ghantal dhaniya pandey"}>
    <CompA data={Name} />
    <CompD />
    <CompE/>
      </Value.Provider>
      <UR1 />
      <UR2 />
    </div>
  );
}
export default App;
export {Value}