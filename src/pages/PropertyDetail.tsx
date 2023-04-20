import { useParams } from "react-router-dom";

export const PropertyDetail = () => {
  const params = useParams();

  return <h1>{`This is the property detail page for property ${params.propertyId}`}</h1>;
};
