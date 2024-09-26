import { Link } from "react-router-dom"
import img from "../../assets/Frame.png"

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h2 className="text-[58px] font-bold text-[#0A0808]">Sorry,</h2>
      <p className="text-[39px] font-normal text-[#6C6B6B]">
        This page is not found.
      </p>
      <div className="text-center flex items-center justify-center mb-5">
        <img src={img} alt="" />
      </div>
      <Link to={"/"}>
        <button className="btn bg-[#F7A582] text-[#FFF] px-10 font-bold">
          Back to home
        </button>
      </Link>
    </div>
  )
}

export default ErrorPage
