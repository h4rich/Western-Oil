import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData"; 

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return <div className="text-center mt-20 text-2xl">Service not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
      <p className="text-lg">{service.fullDescription}</p>
    </div>
  );
}
