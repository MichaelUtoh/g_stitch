import Navbar from "../components/utils/Navbar"
import Footer from "../components/utils/Footer"
import ContactPane from "../components/main/Contact"


const Contact = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between w-full">
        <Navbar />
        <ContactPane />
        <Footer />
      </div>
    </>
  )
}

export default Contact;