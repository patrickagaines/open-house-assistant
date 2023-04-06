import { useCreateProperty } from "../hooks/properties/useCreateProperty";
import { usePropertyById } from "../hooks/properties/usePropertyById";
import { Property } from "../ts/interfaces";

export const Dashboard = () => {
  const { isLoading, error, data } = usePropertyById(7);
  const mutation = useCreateProperty();

  if (isLoading) console.log("Loading...");

  if (error) console.log(error);

  if (data) console.log(data);

  const newProperty: Property = {
    streetAddress: "400 E Ohio Street",
    unitNumber: "1702",
    city: "Chicago",
    state: "IL",
    zipCode: "60611",
  };

  const handleClick = () => {
    mutation.mutate(newProperty);
  };

  return (
    <>
      <h1>This is the Dashboard page.</h1>
      <button onClick={handleClick}>Submit</button>

      {mutation.isError && <p>error</p>}

      {mutation.isSuccess && <p>Success!</p>}
    </>
  );
};
