/* eslint-disable react-hooks/exhaustive-deps */
// import TestPrepContent from "../../../pages/TestPrep/TestPrepOverviewContent";
import TestPrepHero from "./sections/testPrepHeroSection";
// import TestPrepForm from "../../../pages/TestPrep/TestPrepForm";
import TextPrepAbout from "./sections/testPrepAboutSection";
import TestPrepBatchDetaileSection from "./sections/testPrepBatchDetailSection";
import vectorLeftFlat from "../../../assets/vectoreLeftFlat.png";
import vectorleftNose from "../../../assets/vectorleftNose.png";
import vectorDownNose from "../../../assets/vectorDownNose.png";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import TextPrepFaqSection from "./sections/textPrepFaqSection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTestPrepDetailsById } from "../../../api/testPrepsApi";
import PageLoader from "../../../commons/components/loader/pageLoader";
import ContactUsForm from "../../comman/components/contactUsForm";
import TestPrepSimplifyThings from "./sections/testPrepSimplifyThings";
// import Blogs from "../../comman/components/blogs";
import { entity, razorpayKey, source } from "../../../constants/values";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRazorpay } from "react-razorpay";
import { setLeadSubscribeBatch } from "../../../api/leadsApi";

function TestPrepLayout() {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  // const { state: destinationDetails } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [testPrepsDetails, setTestPrepsDetails] = useState(null);
  const dispatch = useDispatch();

  async function fetchData() {
    try {
      const data = await getTestPrepDetailsById(id);

      if (data?.status === 200) {
        setTestPrepsDetails(data.data);
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

  const { error, isLoading: loading, Razorpay } = useRazorpay();

  const handlePayment = (data) => {
    const options = {
      key: razorpayKey,
      amount: parseFloat(data.fees) * 100,
      currency: "INR",
      name: "ABROAED",
      description: "Test Transaction",

      handler: (response) => {
        console.log(response);
        subscribeBatches(data, response.razorpay_payment_id);
        // toast.success("Payment Successful!");
      },
      prefill: {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        contact: user.mobile,
      },
      theme: {
        color: "#e2a303",
      },
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  };

  async function subscribeBatches(data, paymentId) {
    try {
      console.log(user._id, "test_prep", id, data._id, paymentId);
      const prep = await setLeadSubscribeBatch(
        user._id,
        "test_prep",
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

  console.log(testPrepsDetails);

  useEffect(() => {
    // window.scrollTo(0, 0);
    fetchData();
  }, [id]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="font-rethink">
      <Header testPrepsDetails={testPrepsDetails} isHeaderBgWhite={true} />
      <TestPrepHero testPrepsDetails={testPrepsDetails} />
      <TextPrepAbout testPrepsDetails={testPrepsDetails} />
      <div className="relative ">
        <TestPrepSimplifyThings testPrepsDetails={testPrepsDetails} />
        <div className="absolute bottom-20 left-0 z-0">
          <img
            className="rounded-lg max-w-full "
            src={vectorLeftFlat}
            alt="Counselling session"
          />
        </div>
      </div>

      {testPrepsDetails?.batches.length > 0 && (
        <div className="relative ">
          <TestPrepBatchDetaileSection
            onClickPayment={handlePayment}
            disabledPayment={loading}
            testPrepsDetails={testPrepsDetails}
          />
          <div className="absolute bottom-0 right-0 z-0">
            <img
              className="rounded-lg max-w-full "
              src={vectorleftNose}
              alt="Counselling session"
            />
          </div>
        </div>
      )}

      {testPrepsDetails?.faqs.length > 0 && (
        <div className="relative ">
          <TextPrepFaqSection testPrepsDetails={testPrepsDetails} />
          <div className="absolute -top-10 left-0 -z-10">
            <img
              className="rounded-lg max-w-full "
              src={vectorDownNose}
              alt="Counselling session"
            />
          </div>
        </div>
      )}

      {/* <Blogs /> */}

      <ContactUsForm
        onFormSubmit={handleAddLead}
        source={source.testPrep}
        entity={`${testPrepsDetails?.productName}_${entity.contactUs}`}
      />
      <Footer />
    </div>
  );
}

export default TestPrepLayout;
