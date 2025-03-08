import Blogs from "../../comman/components/blogs"
import ContactUsForm from "../../comman/components/contactUsForm"
import Testimonials from "../../comman/components/testimonials"
import Footer from "../../comman/sections/footerSection"
import Header from "../../comman/sections/headerSection"
import LeaguageOfExcellenceExplorePlan from "./sections/leaguageOfExcellenceExplorePlan"
import LeaguageOfExcellenceFaq from "./sections/leaguageOfExcellenceFaq"
import LeaguageOfExcellenceHero from "./sections/leaguageOfExcellenceHero"
import LeaguageOfExcellenceServicesOverviews from "./sections/leaguageOfExcellenceServicesOverviews"
import LeaguageOfExcellenceUniversity from "./sections/leaguageOfExcellenceUniversity"
import vectoreLeftFlat from "../../../assets/vectoreLeftFlat.png"
import vectorleftNose from "../../../assets/vectorleftNose.png"
import vectorDownNose from "../../../assets/vectorDownNose.png"
import vectorLeftNoseSmall from "../../../assets/vectorLeftNoseSmall.png"

const LeaguageOfExcellencePage = () => {
    return (
        <div className="font-rethink">
            <Header />
            <LeaguageOfExcellenceHero />
            <LeaguageOfExcellenceServicesOverviews />
            <div className="relative">
                <LeaguageOfExcellenceUniversity />
                <div className="absolute bottom-72 left-0 -z-10">
                    <img
                        className="rounded-lg w-full h-full object-cover"
                        src={vectoreLeftFlat}
                        alt="Counselling session"
                    />
                </div>
            </div>
            <div className="relative">
                <LeaguageOfExcellenceExplorePlan />
                <div className="absolute top-20 right-0 -z-10">
                    <img
                        className="rounded-lg w-full h-full object-cover"
                        src={vectorleftNose}
                        alt="Counselling session"
                    />
                </div>
            </div>
            <LeaguageOfExcellenceFaq />
            <div className="relative">
                <Testimonials />
                <div className="absolute top-32 left-0 -z-10">
                    <img
                        className="rounded-lg w-full h-full object-cover"
                        src={vectorDownNose}
                        alt="Counselling session"
                    />
                </div>
            </div>
            <Blogs />
            <div className="relative">
                <ContactUsForm />
                <div className="absolute -top-16 right-0 -z-10">
                    <img
                        className="rounded-lg w-full h-full object-cover"
                        src={vectorLeftNoseSmall}
                        alt="Counselling session"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LeaguageOfExcellencePage