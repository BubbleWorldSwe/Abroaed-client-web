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
import { entity, razorpayKey } from "../../../constants/values";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRazorpay } from "react-razorpay";
import { setLeadSubscribeBatch } from "../../../api/leadsApi";
import SectionComponent from "../../styleComponents/sectionComponent";
import { createOrder, paymentVerify } from "../../../api/studentsApi";

function TestPrepLayout() {
  const { id } = useParams();
  const { student } = useSelector((state) => state.auth);
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
      dispatch(addLeadRequest(data));
    } catch (error) {
      console.log(error);
    }
  };

  const { error, isLoading: loading, Razorpay } = useRazorpay();

  const handlePayment2 = (data) => {
    const options = {
      key: razorpayKey,
      amount: parseFloat(data.fees) * 100,
      currency: "INR",
      name: "ABROAED",
      description: "Test Transaction",

      handler: (response) => {
        subscribeBatches(data, response.razorpay_payment_id);
        // toast.success("Payment Successful!");
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
  };

  const handlePayment = async (data) => {
    try {
      const res = await createOrder({
        userId: student._id,
        type: "test_prep",
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
      const prep = await setLeadSubscribeBatch(
        student._id,
        "test_prep",
        id,
        data._id,
        paymentId
      );

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
      <Header testPrepsDetails={testPrepsDetails} isHeaderBgWhite={true} />
      <div className="grid grid-cols-1 gap-10 md:gap-16">
        <SectionComponent>
          <TestPrepHero testPrepsDetails={testPrepsDetails} />
        </SectionComponent>
        <SectionComponent>
          <TextPrepAbout testPrepsDetails={testPrepsDetails} />
        </SectionComponent>
        <div className="relative ">
          <SectionComponent>
            <TestPrepSimplifyThings testPrepsDetails={testPrepsDetails} />
          </SectionComponent>
          <div className="absolute bottom-20 left-0 -z-10">
            <img
              className="rounded-lg max-w-full "
              src={vectorLeftFlat}
              alt="Counselling session"
            />
          </div>
        </div>

        {testPrepsDetails?.batches.length > 0 && (
          <div className="relative ">
            <SectionComponent>
              <TestPrepBatchDetaileSection
                onClickPayment={handlePayment}
                disabledPayment={loading}
                testPrepsDetails={testPrepsDetails}
              />
            </SectionComponent>
            <div className="absolute bottom-0 right-0 -z-10">
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
            <SectionComponent>
              <TextPrepFaqSection testPrepsDetails={testPrepsDetails} />
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
            entity={entity.testPrep}
            source={`Website`}
          />
        </SectionComponent>
        <Footer />
      </div>
    </div>
  );
}

export default TestPrepLayout;
