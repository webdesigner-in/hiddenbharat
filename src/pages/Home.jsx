import HeroSection from "@/components/Home/HeroSection";
import SearchBar from "@/components/Home/SearchBar";
import MustVisitCarousel from "@/components/Home/Crousel";
import WhyUs from "@/components/Home/WhyUs";
import WantToConnect from "@/components/Home/WantToConnect";
import ReviewsSection from "@/components/Home/ReviewsSection";

export default function Home(){
  return(
   <>
   {/* Hero section */}
<HeroSection/>
<SearchBar/>

    {/* Must visit palces  */}
  <MustVisitCarousel/>

  <WhyUs/>
  <ReviewsSection/>
  <WantToConnect/>
   </>
  )
}