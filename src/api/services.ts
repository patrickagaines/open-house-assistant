export const handleErrors = (response: Response) => {
  if (response.status === 404) {
    throw new Error("The requested resource could not be found.")
  } else if (!response.ok) {
    throw new Error("Oops! Something went wrong.");
  }

  return response;
};

export const handleNetworkError = () => {
  throw new Error("Oops! There was a network error. Please try again.")
}
