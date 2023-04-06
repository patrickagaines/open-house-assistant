import { useDeleteOpenHouse } from "../hooks/openhouses/useDeleteOpenHouse";
import { useOpenHouses } from "../hooks/openhouses/useOpenHouses";

export const Dashboard = () => {
  const { isLoading, error, data } = useOpenHouses();
  const mutation = useDeleteOpenHouse();

  if (isLoading) console.log("Loading...");

  if (error) console.log(error);

  if (data) console.log(data);

  const handleClick = () => {
    mutation.mutate(6);
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
