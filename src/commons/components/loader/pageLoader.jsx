const PageLoader = ({ loading }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500"></div>
    </div>
  );
};

export default PageLoader;
