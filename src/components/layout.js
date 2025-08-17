import Navbar from "../components/Navbar";
import hero_bg from '../images/hero-bg.jpg'
import Slider from "./slider";

function Layout() {
    return(
        <div className="hero_area">
        <div className="bg-box">
            <img src={hero_bg} alt=""/>
            
            </div>
            <Navbar/>
        <Slider/>
    </div>
    );
}
export default Layout;