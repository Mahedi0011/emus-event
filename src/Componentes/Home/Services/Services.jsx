import { useEffect, useState } from "react";
import Service from "./Service";



const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div>

            <h3 className='text-4xl text-center font-Pacifico space-y-3'>Our <span className='text-cyan-600 ml-2'>Services</span></h3>
            <div className="grid md:grid-cols-3 gap-4 mt-6 sm:grid grid-cols-1 m-2">

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;

