import Marquee from "react-fast-marquee"
import img1 from "../../../public/pic1111.svg"
import img2 from "../../../public/pic2.svg"
import img3 from "../../../public/pic3.svg"
import img4 from "../../../public/pic4.svg"
import img5 from "../../../public/pic5.svg"
import img6 from "../../../public/pic6.svg"
import img7 from "../../../public/pic7.svg"
import img8 from "../../../public/pic8.svg"
import img9 from "../../../public/pic9.svg"
import img10 from "../../../public/pic10.svg"

const LatestCompanies = () => {
  return (
    <div>
      <Marquee pauseOnHover={true} className="md:mt-20">
        <img className="md:mr-36 mr-10" src={img1} alt="" />
        <img className="md:mr-36 mr-10" src={img1} alt="" />
        <img className="md:mr-36 mr-10" src={img2} alt="" />
        <img className="md:mr-36 mr-10" src={img3} alt="" />
        <img className="md:mr-36 mr-10" src={img4} alt="" />
        <img className="md:mr-36 mr-10" src={img5} alt="" />
        <img className="md:mr-36 mr-10" src={img6} alt="" />
        <img className="md:mr-36 mr-10" src={img7} alt="" />
        <img className="md:mr-36 mr-10" src={img8} alt="" />
        <img className="md:mr-36 mr-10" src={img9} alt="" />
        <img className="md:mr-36 mr-10" src={img10} alt="" />
      </Marquee>
    </div>
  )
}

export default LatestCompanies
