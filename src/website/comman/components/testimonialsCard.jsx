/* eslint-disable react/prop-types */
const TestimonialsCard = ({ data }) => {
  return (
    <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* Video Wrapper */}
      <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-t-lg border border-gray-300">
        <iframe
          id="ytplayer"
          type="text/html"
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${data}`}
          allowFullScreen
        ></iframe>
      </div>

      {/* User Info */}
      <div className="flex p-3 items-center space-x-4">
        <img
          className="w-14 h-14 rounded-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
          alt="Jese Leos avatar"
        />

        <div className="font-medium dark:text-white">
          <div className="text-lg font-body">Jese Leos</div>
          <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
            Arbaz
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
