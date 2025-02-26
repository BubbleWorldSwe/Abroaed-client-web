import vectorRightRing from "../../../../assets/vectorRightRing.png";

const LanguagePrepSimplifyThings = ({ languagePrepsDetails }) => {
  return (
    <div className="relative mx-auto px-10">
      <div className="mx-auto w-full px-2 max-w-screen-2xl relative z-10">
        <section className="dark:bg-gray-900">
          <div className="py-8 lg:py-16">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                How We Simplify Things?
              </h2>
              <p className="mb-4 font-light">
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tristique felis non odio accumsan laoreet. Integer
                cursus libero placerat ex volutpat posuere. Quisque non nisl
                ultricies, volutpat mauris sed, venenatis dui. Integer eget
                eleifend augue, ac consequat dui. Nam arcu libero, blandit vel
                ipsum sagittis, lacinia tincidunt quam. Donec volutpat sodales
                tincidunt. Praesent pharetra nisi placerat diam fringilla, ac
                fermentum erat commodo. Quisque semper arcu sit amet auctor
                consequat. Mauris diam urna, dignissim sed metus eu, congue
                porttitor nisi. Nulla facilisi.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-3 py-5">
              {["", "", ""]?.map((data, i) => (
                <div
                  key={i}
                  className="flex relative flex-col gap-3 h-full w-200 p-6 bg-black border border-gray-200 rounded-lg shadow"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50  pointer-events-none"
                    style={{
                      left: "auto", // Ensure it starts from the right edge
                      right: 0, // Anchor the gradient to the right
                      width: "70%", // Adjust the width of the gradient area
                      height: "100%", // Full height to cover the parent div
                    }}
                  ></div>
                  <div>
                    <span className="block text-4xl font-bold text-white dark:text-primary-400">
                      {i + 1}
                    </span>
                  </div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                    Lorem Ipsum Dolor
                  </h5>
                  <p className="font-normal text-white dark:text-gray-400">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur tristique felis non odio accumsan laoreet. Integer
                    cursus libero placerat ex volutpat posuere. Quisque non nisl
                    ultricies, volutpat mauris sed, venenatis dui. Integer eget
                    eleifend augue, ac consequat dui. Nam arcu libero, blandit
                    vel ipsum sagittis, lacinia tincidunt quam. Donec volutpat
                    sodales tincidunt. Praesent pharetra nisi placerat diam
                    fringilla, ac fermentum erat commodo. Quisque semper arcu
                    sit amet auctor consequat. Mauris diam urna, dignissim sed
                    metus eu, congue porttitor nisi. Nulla facilisi.
                  </p>
                  <div className="absolute top-0 right-0">
                    <img src={vectorRightRing} alt="vector" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LanguagePrepSimplifyThings;
