import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"

const Services = () => {
    const [services, setServices] = useState([]);
    
      useEffect(() => {
        fetch("services.json")
          .then((res) => res.json())
          .then((data) => setServices(data))
          .catch((err) => console.log(err));
      }, []);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mt-20">
        {services.map((service) => (
          <motion.div initial={{ scale: 0.5 }} animate={{
    scale: 1,
    transition: { duration: 1 }
  }}  className="card bg-base-100 w-85 shadow-sm">
            <figure>
              <img className="w-full h-70 object-cover"
                src={service?.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service?.serviceName}</h2>
              <div className="flex justify-between">
                <p>Price: {service?.price} $</p>
                <p>Rating: {service?.rating}</p>

              </div>
              <div className="card-actions justify-end">
                <Link to= {`/details/${service?.serviceId}`}><button className="btn btn-primary">View Details</button></Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
};

export default Services;