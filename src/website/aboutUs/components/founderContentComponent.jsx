/* eslint-disable react/prop-types */
import PrimaryBodyText from "../../styleComponents/primaryBodyText"
import TextComponent from "./textComponent"

const FounderContentComponent = ({ text, role, name, imgUrl }) => {
    return (
        <div>
            <div className="">
                <PrimaryBodyText className="mb-2">
                    <strong className="text-[24px]">{name}</strong>
                </PrimaryBodyText>
                <PrimaryBodyText className="">
                    {role}
                </PrimaryBodyText>
                <div className="relative">
                    <div className="">
                        <img
                            src={imgUrl}
                            alt="img"
                            className="w-full md:w-2/5 h-96  float-end object-contain rounded-lg ml-10 mb-2"
                        />
                    </div>
                    <TextComponent text={text} />
                </div>
            </div>
        </div>
    )
}

export default FounderContentComponent