import Banner from "../../components/banner/Banner";
import BrowseByCategory from "../../components/section/BrowseByCategory";
import HeroSection from "../../components/section/HeroSection";
import HiringBanner from "../../components/section/HiringBanner";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrowseByCategory></BrowseByCategory>
            <HiringBanner></HiringBanner>
            <HeroSection></HeroSection>
        </div>
    );
};

export default Home;