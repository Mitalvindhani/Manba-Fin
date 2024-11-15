import Homeabout from "../components/homeabout";
import Homebanner from "../components/homebanner";
import Homecashloan from "../components/homecashloan";
import Homeprovide from "../components/homeprovide";
import Homeservice from "../components/homeservice";
import Homesuccess from "../components/homesuccess";


const Home = () =>{
    return(
        <>
        <Homebanner/>
        <Homeprovide/>
        <Homeabout/>
        <Homeservice/>
        <Homesuccess/>
        <Homecashloan/>
        </>
    );
}

export default Home;