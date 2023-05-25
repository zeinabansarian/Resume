import About from "./Pages/About/About"
import Education from "./Pages/Education/Education"
import Experience from "./Pages/Experience/Experience"
import Knowledge from "./Pages/Knowledge/Knowledge"
import Portfolio from "./Pages/Portfolio/Portfolio"

let routes = [
    {path : '/' , element : <About />},
    {path : '/Experience' , element : <Experience />},
    {path : '/Education' , element : <Education />},
    {path : '/Knowledge' , element : <Knowledge />},
    {path : '/Portfolio' , element : <Portfolio />},
]

export default routes