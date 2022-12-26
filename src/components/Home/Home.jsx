import "./Home.css";
import Carousel from "react-material-ui-carousel";
import bg from "../../Assets/background.jpg";
import bg2 from "../../Assets/background2.jpg";
// import ProductCard from "../Product/ProductCard";
import Header from "./Header";
import MetaData from "../more/Metadata";
import Footer from "../more/Footer";
import ProductCard from "../Product/ProductCard";

const products = [
  {
    id: "1",
    name: "toyota",
    description: "bgwdiquwdiqw",
    images: "https://cdnimg.vietnamplus.vn/uploaded/ngtnnn/2021_01_21/2101xe2.jpg",
    offerPrice:10,
    price: 1000
  },
  {
    id: "2",
    name: "toyota",
    description: "bgwdiquwdiqw",
    images: "https://cdnimg.vietnamplus.vn/uploaded/ngtnnn/2021_01_21/2101xe2.jpg",
    offerPrice:10,
    price: 1000
  },
  {
    id: "3",
    name: "toyota",
    description: "bgwdiquwdiqw",
    images: "https://cdnimg.vietnamplus.vn/uploaded/ngtnnn/2021_01_21/2101xe2.jpg",
    offerPrice:10,
    price: 1000
  },
]

const Home = () => {
  return (
   
        <>
          <MetaData title="Home" />
          <Header />
          {/* Carousel */}
          <div className="banner">
            <Carousel>
              <img alt="" src={bg} className="bgImg" />
              <img alt="" src={bg2} className="bgImg" />
            </Carousel>
          </div>

          <h2 className="homeHeading">Outstanding car model</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <Footer />
        </>
      
  );
};

export default Home;
