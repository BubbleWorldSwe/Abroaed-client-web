/* eslint-disable react/prop-types */

import ImageComponent from "./imageComponent";
import TextComponent from "./textComponent";

const CardComponent = ({ imgFirst, text, heading, imgUrl }) => (
    <div className="grid md:grid-cols-2 gap-10 mt-14 items-center justify-center">
        {imgFirst && <ImageComponent imgFirst={imgFirst} imgUrl={imgUrl} />}
        <TextComponent text={text} heading={heading} />
        {!imgFirst && <ImageComponent imgFirst={imgFirst} imgUrl={imgUrl} />}
    </div>
);

export default CardComponent