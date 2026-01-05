import Dock from "#components/Dock"
import NavBar from "#components/NavBar"
import Welcome from "#components/Welcome"
import Safari from "#windows/Safari"
import Terminal from "#windows/Terminal"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable);

const App =()=>{
  return(
    <main>
      <NavBar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
    </main>
  )
}


export default App