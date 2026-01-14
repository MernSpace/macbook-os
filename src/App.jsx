import Dock from "#components/Dock"
import Home from "#components/Home"
import NavBar from "#components/NavBar"
import Welcome from "#components/Welcome"
import Contact from "#windows/Contact"
import Finder from "#windows/Finder"
import Image from "#windows/Image"
import Photos from "#windows/Photos"
import Resume from "#windows/Resume"
import Safari from "#windows/Safari"
import Terminal from "#windows/Terminal"
import Text from "#windows/Text"
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
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
      <Home/>
      <Photos/>
    </main>
  )
}


export default App