
import { useEffect, useState } from "react"
import useDebounceFunc from "./utils/useDebounceFunc";
import { debounce } from 'lodash';
import './App.css';


function App() {
  const [idx, setIdx] = useState(0);
  const sections = 3
  const DELAY = 3000



  const wheelHandler = (e) => {


    if (e.deltaY > 0) {     //scroll down
      if (idx !== sections) {
        setIdx(idx + 1)
      }
    } else if (e.deltaY < 0) { //scroll up
      if (idx !== 0) {
        setIdx(idx - 1)
      }
    }
    console.log(idx)

  }


  const mouseScrollHandler = () => {
    console.log(idx)
    window.scrollTo({ top: window.innerHeight * idx, behavior: "smooth" });

  }

  useEffect(() => {
    window.addEventListener("wheel", debounce(wheelHandler, 300))
  })



  // useDebounceFunc({ func: () => wheelScrollHandler(idx, setIdx, sections), delay: DELAY, deps: [] })
  console.log(idx)
  useEffect(() => {
    console.log(idx)

    mouseScrollHandler()


  }, [idx])





  return (
    <div className="App">
      <div style={{ backgroundColor: "yellow", width: "100%", height: "100vh" }}></div>
      <div style={{ backgroundColor: "red", width: "100%", height: "100vh" }}></div>
      <div style={{ backgroundColor: "purple", width: "100%", height: "100vh" }}></div>

    </div >
  );
}

export default App;
