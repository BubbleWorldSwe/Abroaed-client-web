/* eslint-disable react/prop-types */

import ImageComponent from "./imageComponent";
import TextComponent from "./textComponent";

const CardComponent = ({ imgFirst, text, heading, imgUrl }) => (
    <div>
        {/* big screen */}
        <div className="   hidden    md:grid md:grid-cols-2 gap-3 md:gap-10 -space-y-12 mt-8  items-center justify-center">
            {imgFirst && <ImageComponent imgFirst={imgFirst} imgUrl={imgUrl} />}
            <TextComponent text={text} heading={heading} />
            {!imgFirst && <ImageComponent imgFirst={imgFirst} imgUrl={imgUrl} />}
        </div>
        {/* mobile screen */}
        <div className=" md:hidden  flex flex-col gap-6 mt-8  items-center justify-center">
            {<ImageComponent imgFirst={imgFirst} imgUrl={imgUrl} />}
            <TextComponent text={text} heading={heading} />
        </div>

    </div>

);

export default CardComponent