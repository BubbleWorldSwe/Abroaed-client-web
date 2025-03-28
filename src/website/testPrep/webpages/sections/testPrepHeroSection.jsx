/* eslint-disable react/prop-types */
import ieltsImg from "../../../../assets/ieltsImg.png";

function TestPrepHero({ testPrepsDetails }) {
  return (
    <div className="font-rethink">
      <section className="relative px-12 mx-auto pt-24 mt-10   bg-cover bg-center h-2/3">
        <div className="flex items-center  gap-32">
          <div className="w-72">
            <img
              src={ieltsImg}
              alt="ielts-img"
              className="object-cover w-full"
            />
          </div>
          {/* <h1 className="text-5xl font-extrabold text-black">
            {testPrepsDetails.productName}
          </h1> */}
        </div>
      </section>
    </div>
  );
}

export default TestPrepHero;
