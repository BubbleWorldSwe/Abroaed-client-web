/* eslint-disable react/prop-types */
// import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const SocialIconNavModal = ({ handleMouseEnter,
    handleMouseLeave, }) => {

    const socialLinks = [
        {
            icon: "📞",
            name: "+91 73033 68820",
            // url: "https://www.instagram.com/abroaed/?igsh=MW9qenltenBzZDIxeg%3D%3D#",
            // url: "",
        },
        // { icon: <FaFacebook size={20} />, url: "#" },
        {
            icon: "📞",
            name: "+91 73033 68819",
            // url: "https://www.linkedin.com/company/abroaed/posts/?feedView=all",
        },
        {
            icon: "📧",
            name: "info@abroaed.com",
            // url: "https://x.com/i/flow/login?redirect_after_login=%2Fabroaed",
        }, // X (formerly Twitter)
        // { icon: <FaYoutube size={20} />, url: "#" } // YouTube
    ];

    return (
        <div
            className="absolute right-0 translate-x-6 top-full w-[10vw] py-[5px]  z-50"
            onMouseEnter={() => handleMouseEnter("socialIcon")}
            onMouseLeave={() => setTimeout(handleMouseLeave, 200)}
        >
            <ul className="grid grid-cols-1 shadow-lg w-[15vw] items-center mt-[1px]  rounded-b-lg bg-white" >
                {socialLinks?.map((link, index) => (
                    <li
                        key={index}
                        className="flex  items-center justify-between  text-sm text-gray-600 font-semibold hover:text-gray-900   border-b border-gray-200  px-3 py-1 hover:bg-gray-100 rounded-lg transition-all"
                    >
                        {/* <div className="   items-center "> */}
                        <a
                            key={index}
                            // href={link.url}
                            className=" text-gray-primary flex w-full gap-1  rounded-full"
                            aria-label="Social Link"
                            target="_blank"
                        >
                            {link.icon}
                            <p className="whitespace-nowrap">{link?.name}</p>
                        </a>
                        {/* </div> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default SocialIconNavModal