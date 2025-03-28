import PrimaryBodyText from "../../../typographies/primaryBodyText"
import SectionMainHeader from "../../../typographies/sectionMainHeader"

const AccommodationHeaderTextSection = () => {
    return (
        <div className="relative mx-auto px-10">
            <div className="mx-auto w-full px-2 max-w-screen-2xl relative">
                <section className="dark:bg-gray-900">
                    <div className="py-14">
                        <SectionMainHeader
                            className="mb-4"
                        >
                            Accommodation Made Easy at ABROAED
                        </SectionMainHeader>
                        <PrimaryBodyText
                            className={'mb-4'}
                        >
                            Choosing a place to live is one of the first major steps in relocating to a new country, and it can be a little intimidating. There are many factors to consider, ranging from various housing styles to determining what is affordable, safe, and close by. Having someone to help you navigate it all is crucial for this reason. We at ABROAED streamline the process so that your lodging is taken care of before you even pack your bags!
                        </PrimaryBodyText>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AccommodationHeaderTextSection