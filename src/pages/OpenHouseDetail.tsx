import { useParams } from "react-router-dom";

export const OpenHouseDetail = () => {
  const params = useParams();

  return <h1>{`This is the detail page for Open House ${params.openHouseId}`}</h1>;
};
