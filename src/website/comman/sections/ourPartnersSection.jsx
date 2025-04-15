import SectionMainHeader from "../../styleComponents/sectionMainHeader";
import auxiloBank from "../../../assets/finance/auxiloBank.jpg"
import avanseBank from "../../../assets/finance/avanseBank.jpg"
import axisBank from "../../../assets/finance/axisBank.jpg"
import bankofBaroda from "../../../assets/finance/bankofBaroda.jpg"
import bankofMaharashtra from "../../../assets/finance/bankofMaharashtra.jpg"
import boi from "../../../assets/finance/boi.jpg"
import credilaBank from "../../../assets/finance/credilaBank.jpg"
import iciciBank from "../../../assets/finance/iciciBank.jpg"
import idfcBank from "../../../assets/finance/idfcBank.jpg"
import incred from "../../../assets/finance/incred.jpg"
import mpower from "../../../assets/finance/mpower.jpg"
import pnb from "../../../assets/finance/pnb.jpg"
import prodigy from "../../../assets/finance/prodigy.jpg"
import sarswatiBank from "../../../assets/finance/sarswatiBank.jpg"
import sbi from "../../../assets/finance/sbi.jpg"
import tataCapital from "../../../assets/finance/tataCapital.jpg"
import unionBank from "../../../assets/finance/unionBank.jpg"
import yesBank from "../../../assets/finance/yesBank.jpg"

const financeImages = [
  { src: auxiloBank, alt: "Auxilo Bank" },
  { src: avanseBank, alt: "Avanse Bank" },
  { src: axisBank, alt: "Axis Bank" },
  { src: bankofBaroda, alt: "Bank of Baroda" },
  // { src: bankofMaharashtra, alt: "Bank of Maharashtra" },
  { src: boi, alt: "Bank of India" },
  { src: credilaBank, alt: "Credila Bank" },
  { src: iciciBank, alt: "ICICI Bank" },
  { src: idfcBank, alt: "IDFC Bank" },
  { src: incred, alt: "InCred" },
  { src: mpower, alt: "Mpower" },
  { src: pnb, alt: "PNB" },
  // { src: prodigy, alt: "Prodigy Finance" },
  { src: sarswatiBank, alt: "Sarswati Bank" },
  { src: sbi, alt: "SBI" },
  { src: tataCapital, alt: "Tata Capital" },
  { src: unionBank, alt: "Union Bank" },
  { src: yesBank, alt: "Yes Bank" },
];


function OurPartners() {
  return (
    <div>
      <section className="bg-white relative ">
        <div className=" relative z-10">
          <SectionMainHeader className={`mb-1 text-center`}>
            Our Partners
          </SectionMainHeader>
          <div className="flex mb-10 justify-center items-center ">
            <p className="text-center  text-[#52525B] text-[18px] font-semibold">
              We work closely with trusted international partners who share our goal—making every student’s study abroad smoother, safer, and more supportive.
            </p>
          </div>
          <div className="gap-10 mt-8 sm:grid grid-cols-1 md:grid-cols-4 sm:grid-rows-[auto] sm:mt-10">
            {financeImages.map((img, index) => (
              <div
                key={index}
                className="h-[6rem]   flex items-center justify-center rounded-lg overflow-hidden"
              >
                <img
                  className="w-full h-full object-contain"
                  src={typeof img === 'string' ? img : img.src}
                  alt={typeof img === 'string' ? `finance-img-${index + 1}` : img.alt}
                />

              </div>
            ))}

          </div>

        </div>
      </section>
    </div>
  );
}

export default OurPartners;
