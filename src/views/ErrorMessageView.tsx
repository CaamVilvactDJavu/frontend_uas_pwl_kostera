import useKosts from "@/hooks/useKosts";

const ErrorMessageView = () => {
  const { error } = useKosts();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <span className="text-3xl text-red-600 font-extrabold">
          Error : {error.message} !
        </span>
      </div>
    </div>
  );
};
export default ErrorMessageView;
