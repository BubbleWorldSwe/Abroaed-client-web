import { COLORS } from "../../../../constants/colors"
import FaqLeftContent from "../../components/faqLeftContent"
import FaqRightContent from "../../components/faqRightContent"

const FaqsHeader = () => {
    return (
        <section className="px-10 pt-12 mt-10 mx-auto">
            <div className=" px-4 py-6 flex flex-col gap-6 mx-auto max-w-screen-2xl mt-5">
                {/* Content */}
                <div className="relative z-10">
                    <h2 className={`mb-2 text-[45px]  font-extrabold text-[${COLORS.GRAY_PRIMARY}] dark:text-white`}>
                        Frequently Asked Questions                    </h2>

                    <div className=" border-t border-gray-300"></div>
                    <div className="flex py-7">
                        <div className="w-[20%] py-5  ">
                            <FaqLeftContent />
                        </div>

                        <div className="w-[80%] py-5 flex flex-col gap-10">
                            <FaqRightContent />

                            <FaqRightContent />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqsHeader