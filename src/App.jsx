import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Stacks from "./components/Stacks"
import Secured from "./components/Secured"
import Mission from "./components/Mission"
import Footer from "./components/Footer"
function App() {
 

  return (
    <>
      <div className="bg-black pb-20 rounded-b-3xl">
        <Nav/>
        <Hero/>
      </div>
      <Stats/>
      <Stacks/>
      <Secured/>
      <Mission/>
      <Footer/>
    </>
  )
}

export default App
