import About from "./Pages/About/About"
import Experience from "./Pages/Experience/Experience"
import Skills from "./Pages/Skills/Skills"
import Portfolio from "./Pages/Portfolio/Portfolio"
import Contact from "./Pages/Contact/Contact"

let routes = [
    {path : '/' , element : <About />},
    {path : '/Experience' , element : <Experience />},
    {path : '/Skills' , element : <Skills />},
    {path : '/Portfolio' , element : <Portfolio />},
    {path : '/Contact' , element : <Contact />},
]

export default routes