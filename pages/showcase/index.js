import Navbar from "../../components/utils/Navbar"
import Footer from "../../components/utils/Footer"
import { ShowGallery } from "../../components/main/Gallery"


const Gallery = () => {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen w-full">
        <Navbar />
        <ShowGallery />
        <Footer />
      </div>
    </>
  )
}

export default Gallery;