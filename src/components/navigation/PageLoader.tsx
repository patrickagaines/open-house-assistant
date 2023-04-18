import { PageLoaderIcon } from "../../assets/icons";

export const PageLoader = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0">
      <div className="flex h-full w-full items-center justify-center">
        <PageLoaderIcon />
      </div>
    </div>
  );
};
