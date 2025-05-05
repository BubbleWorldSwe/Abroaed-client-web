/* eslint-disable react-hooks/exhaustive-deps */
import vectorLeftFlat from "../../../assets/vectoreLeftFlat.png";
import vectorleftNose from "../../../assets/vectorleftNose.png";
import vectorDownNose from "../../../assets/vectorDownNose.png";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLanguagePrepDetailsById } from "../../../api/languagePrepsApi";

import { createOrder, paymentVerify } from "../../../api/studentsApi";

import LanguagePrepHero from "./sections/languagePrepHeroSection";
import LanguagePrepAbout from "./sections/languagePrepAboutSection";
import LanguagePrepSimplifyThings from "./sections/languagePrepSimplifyThings";
import LanguagePrepBatchDetaileSection from "./sections/languagePrepBatchDetailSection";
import LanguagePrepFaqSection from "./sections/languagePrepFaqSection";
// import Blogs from "../../comman/components/blogs";
import ContactUsForm from "../../comman/components/contactUsForm";
import PageLoader from "../../../commons/components/loader/pageLoader";
import { entity, razorpayKey, source } from "../../../constants/values";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import { useDispatch, useSelector } from "react-redux";
import { useRazorpay } from "react-razorpay";
import { setLeadSubscribeBatch } from "../../../api/leadsApi";
import { toast } from "react-toastify";
import SectionComponent from "../../styleComponents/sectionComponent";

function LanguagePrepLayout() {
  const { student } = useSelector((state) => state.auth);

  const { id } = useParams();
  // const { state: destinationDetails } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [languagePrepsDetails, setLanguagePrepsDetails] = useState(null);
  const dispatch = useDispatch();

  async function fetchData() {
    try {
      const data = await getLanguagePrepDetailsById(id);

      if (data?.status === 200) {
        setLanguagePrepsDetails(data.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddLead = (data) => {
    try {
      console.log("handleAddLead");
      console.log(data);

      dispatch(addLeadRequest(data));
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading: loading, Razorpay } = useRazorpay();

  const handlePayment = async (data) => {
    try {
      const res = await createOrder({
        userId: student._id,
        type: "language_prep",
        prepId: id,
        batchId: data._id,
        // amount: parseFloat(1) * 100,
        amount: parseFloat(data.fees),
      });

      if (res?.data) {
        const order = res.data;
        const options = {
          order_id: order.id,
          key: razorpayKey,
          amount: parseFloat(data.fees) * 100,
          currency: "INR",
          name: "ABROAED",
          description: "Test Transaction",

          handler: async (response) => {
            await paymentVerify({
              orderId: order.id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            });

            console.log(response);
            // subscribeBatches(data, response.razorpay_payment_id);
            toast.success("Payment Successful!");
          },
          prefill: {
            name: `${student.firstName} ${student.lastName}`,
            email: student.email,
            contact: student.mobile,
          },
          theme: {
            color: "#e2a303",
          },
        };

        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function subscribeBatches(data, paymentId) {
    try {
      console.log(student._id, "language_prep", id, data._id, paymentId);
      const prep = await setLeadSubscribeBatch(
        student._id,
        "language_prep",
        id,
        data._id,
        paymentId
      );
      console.log(prep);

      if (prep?.status === 200) {
        toast.success(prep?.message);
      } else {
        toast.error(prep?.message);
      }
      //  setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // window.scrollTo(0, 0);
    fetchData();
  }, [id]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="font-rethink">
      <Header />
      <LanguagePrepHero languagePrepsDetails={languagePrepsDetails} />

      <div className="grid grid-cols-1 gap-10 md:gap-16">
        <SectionComponent>
          <LanguagePrepAbout languagePrepsDetails={languagePrepsDetails} />
        </SectionComponent>
        <div className="relative ">
          <SectionComponent>
            <LanguagePrepSimplifyThings
              languagePrepsDetails={languagePrepsDetails}
            />
          </SectionComponent>
          <div className="absolute bottom-20 left-0 -z-10">
            <img
              className="rounded-lg max-w-full "
              src={vectorLeftFlat}
              alt="Counselling session"
            />
          </div>
        </div>

        {languagePrepsDetails?.batches.length > 0 && (
          <div className="relative ">
            <SectionComponent>
              <LanguagePrepBatchDetaileSection
                onClickPayment={handlePayment}
                disabledPayment={loading}
                languagePrepsDetails={languagePrepsDetails}
              />
            </SectionComponent>
            <div className="absolute bottom-0 right-0 z-0">
              <img
                className="rounded-lg max-w-full "
                src={vectorleftNose}
                alt="Counselling session"
              />
            </div>
          </div>
        )}

        {languagePrepsDetails?.faqs.length > 0 && (
          <div className="relative ">
            <SectionComponent>
              <LanguagePrepFaqSection
                languagePrepsDetails={languagePrepsDetails}
              />
            </SectionComponent>
            <div className="absolute -top-10 left-0 -z-10">
              <img
                className="rounded-lg max-w-full "
                src={vectorDownNose}
                alt="Counselling session"
              />
            </div>
          </div>
        )}
        {/* <SectionComponent>
          <Blogs />
        </SectionComponent> */}
        <SectionComponent>
          <ContactUsForm
            onFormSubmit={handleAddLead}
            source={source.languagePrep}
            entity={`${languagePrepsDetails?.productName}_${entity.contactUs}`}
          />
        </SectionComponent>
        <Footer />
      </div>
    </div>
  );
}

export default LanguagePrepLayout;
