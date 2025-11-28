import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const ServiceDetails = () => {
    const [services, setServices] = useState([]);
    const { myId } = useParams();

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  const findResult = services.find(service=>service.serviceId==myId)
  console.log(findResult);
  if (!findResult) return <p class className="text-center p-10">Loading...</p>
  const handleBookNow = (e)=>{
    e.preventDefault();
    toast.success("Service booked successfully");
    e.target.reset();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
        <div className="shadow-lg rounded-xl p-5 border bg-white">
            <img src={findResult.image} alt="findResult.title" className="w-full rounded-lg mb-4"/>
            <h2 className="text-2xl font-bold mb-2">{findResult.title}</h2>
            <p><strong>Category: </strong>{findResult.category}</p>
            <p><strong>Price: </strong>{findResult.price}</p>
            <p><strong>Description: </strong>{findResult.description}</p>
            <h3 className="text-xl font-semibold mb-3">Book This Service</h3>
            <form onSubmit={handleBookNow} className="space-y-3">
                <input type="text" name="name" required placeholder="Your Name" className="border w-full p-2 rounded" />
                <input type="email" name="email" required placeholder="Your Email" className="border w-full p-2 rounded" />
                <button type="submit" className="btn btn-primary w-full">Book Now</button>
            </form>
        </div>
           
    </div>
  )
  
};

export default ServiceDetails;
