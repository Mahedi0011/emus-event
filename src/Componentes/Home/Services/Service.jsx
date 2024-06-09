
 
import { SiLogitechg } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";

const Service = ({ service }) => {
    const { event_name, details, location } = service;
    return (
        <div className="card  bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title"><SiLogitechg></SiLogitechg>{event_name}</h2>
                <p className="flex items-center"><FaLocationArrow className="mr-2 text-3xl"></FaLocationArrow>{details}</p>        
                <p className="flex items-center"><FaLocationDot className="mr-2"></FaLocationDot>{location}</p>
            </div>
        </div>
    );
};

export default Service;