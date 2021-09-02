import NetflixNavbarcomponent from "./NetflixNavbarcomponent";
import Netflixsectioncomponent from "./Netflixsectioncomponent";

export default function Netflixindexcomponent(){
    return(
        <>
        <div className="container-fluid" style={{height:'500px'}}>
            <div>
                <NetflixNavbarcomponent/>
            </div>
            <div>
                <Netflixsectioncomponent/>
            </div>
        </div>
        </>
    )
}