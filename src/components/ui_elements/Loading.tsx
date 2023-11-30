const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center text-3xl font-bold">
        <p>Loading</p>
        <span className="loading loading-spinner loading-lg" />
      </div>
    </div>
  );
};

export default Loading;
