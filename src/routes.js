import About from "./Pages/About/About"
import Education from "./Pages/Education/Education"
import Experience from "./Pages/Experience/Experience"
import Knowledge from "./Pages/Knowledge/Knowledge"
import Portfolio from "./Pages/Portfolio/Portfolio"
import Contact from "./Pages/Contact/Contact"

let routes = [
    {path : '/' , element : <About />},
    {path : '/Experience' , element : <Experience />},
    {path : '/Knowledge' , element : <Knowledge />},
    {path : '/Portfolio' , element : <Portfolio />},
    {path : '/Contact' , element : <Contact />},
]

export default routes