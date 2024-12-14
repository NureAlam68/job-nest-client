import Banner from "../../components/banner/Banner";
import BrowseByCategory from "../../components/section/BrowseByCategory";
import HiringBanner from "../../components/section/HiringBanner";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrowseByCategory></BrowseByCategory>
            <HiringBanner></HiringBanner>
        </div>
    );
};

export default Home;