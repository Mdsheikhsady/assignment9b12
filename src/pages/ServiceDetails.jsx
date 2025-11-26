import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const { myId } = useParams();

  useEffect(() => {
    fetch("/services.json")
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.log(err));
  }, []);

    const findResult =services.find(service=> service.serviceId==myId)
    console.log(findResult);



  return <div>
  </div>;

};

export default ServiceDetails;
