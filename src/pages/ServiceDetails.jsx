import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const { myId } = useParams();

  const myIdNumber = Number(myId);

  useEffect(() => {
    fetch("/services.json")
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.log(err));
  }, []);

    const findResult =services.find(service=> service.serviceId===myIdNumber)
    console.log(findResult);



  return <div>
    <h2>{findResult.serviceName}</h2>
  </div>;

};

export default ServiceDetails;
