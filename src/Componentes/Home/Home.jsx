 
import About from "./About/About";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import Price from "./Price/Price";
import Review from "./Review/Review";
import Services from "./Services/Services";
import Contract from "./Contract/Contract";

 

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Services></Services>
             <About></About>
             <Gallery></Gallery>
             <Price></Price>
             <Review></Review>
             <Contract></Contract>
        </div>
    );
};

export default Home;