/* eslint-disable react/prop-types */

import PrimaryBodyText from "../../styleComponents/primaryBodyText";
import SecondaryTitle from "../../styleComponents/secondaryTitle";

const TextComponent = ({ text, heading }) => (
    <div>
        <SecondaryTitle
            className="mb-2 md:mb-4"
        >
            {heading}
        </SecondaryTitle>
        <PrimaryBodyText>
            {text}
        </PrimaryBodyText>
    </div>
);

export default TextComponent