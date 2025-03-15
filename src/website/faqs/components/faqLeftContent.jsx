
const FaqLeftContent = () => {
    const leftMenu = [
        {
            text: "Latest Updates",
            link: ""
        },
        {
            text: "Exam Overview",
            link: ""
        },
        {
            text: "Important Dates",
            link: ""
        },
        {
            text: "Eligibility Criteria",
            link: ""
        },
        {
            text: "Steps To Apply",
            link: ""
        },
        {
            text: "Examination Fees",
            link: ""
        },
        {
            text: "Conclusion",
            link: ""
        },
    ]
    return (
        <div>
            <h5 className="text-[#27272A] mb-5 text-[22px] font-semibold ">CONTENTS</h5>
            {
                leftMenu.map((data, index) => (
                    <div className="text-[18px] mb-2 text-[#52525B] font-normal " key={index}>
                        <a>
                            {data.text}
                        </a>
                    </div>
                ))
            }
        </div>)
}

export default FaqLeftContent