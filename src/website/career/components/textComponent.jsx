/* eslint-disable react/prop-types */

import PrimaryBodyText from "../../typographies/primaryBodyText";
import SecondaryTitle from "../../typographies/secondaryTitle";

const TextComponent = ({ text, heading }) => (
    <div>
        <SecondaryTitle
            className="mb-4"
        >
            {heading}
        </SecondaryTitle>
        <PrimaryBodyText>
            {text}
        </PrimaryBodyText>
    </div>
);

export default TextComponent