import Navbar from "../components/utils/Navbar"
import Footer from "../components/utils/Footer"
import { AboutPane } from "../components/main/About"


const About = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen justify-between w-full">
                <Navbar />
                <AboutPane />
                <Footer />
            </div>
        </>
  )
}

export default About;