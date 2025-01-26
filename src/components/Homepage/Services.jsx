import React from "react";
import { services } from "@/lib/services";
import ServiceCard from "../Cards/ServiceCard";

const Services = () => {
  return (
    <div className="p-10">
      <div>
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h2 className="text-5xl">Our Service Area</h2>
      </div>
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
