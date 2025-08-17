import AboutS from '../components/aboutS';
import Booking from '../components/Booking';
import ClientRVU from '../components/clientRvu';
import Foods from '../components/food_section';
import Navbar from '../components/Navbar';
import Offer from '../components/offer';
import Slider from '../components/slider';
import hero_bg from '../images/hero-bg.jpg'


function Home() {
    return(
        <div>
        <div className="hero_area">
              <div className="bg-box">
                <img src={hero_bg} alt="Restaurant background" />
              </div>
                <Navbar/>
                <Slider/>
        </div>
            <Offer/>
            <Foods/>
            <AboutS/>
            <Booking/>
            <ClientRVU/>
       
        </div>
      
    

    );
}
export default Home;