import Personalloanapply from "../components/personalloanapply";
import Personalloanbanner from "../components/personalloanbanner";
import Personalloanbenefit from "../components/personalloanbenefit";
import Personalloantypes from "../components/personalloantypes";





const Personalloan = () => {
    return(
        <div>
            <Personalloanbanner/>
            <Personalloanbenefit/>
            <Personalloantypes/>
            <Personalloanapply/>
            
        </div>
    );
}

export default Personalloan;