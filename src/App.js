import Customers from "./components/customers/Customers";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Purchase from "./components/purchase/Purchase";
import Quality from "./components/quality/Quality";
import Testimonials from "./components/testimonials/Testimonials";
import TopDishes from "./components/topDishes/TopDishes";
import TopRestaurants from "./components/topRestaurants/TopRestaurants";

function App() {
  return (
    <div className="App bg-[#F9F9F9]">
      <Header/>
      <HeroSection/>
      <Customers/>
      <Quality/>
      <TopRestaurants/>
      <TopDishes/>
      <Purchase/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
