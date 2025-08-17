import AboutS from '../components/aboutS';
import Booking from '../components/Booking';
import ClientRVU from '../components/clientRvu';
import Foods from '../components/food_section';
import Layout from '../components/layout';
import Offer from '../components/offer';


function Home() {
    return(
        <div>
        <Layout/>
        <Offer/>
        <Foods/>
        <AboutS/>
        <Booking/>
        <ClientRVU/>
        </div>
    

    );
}
export default Home;