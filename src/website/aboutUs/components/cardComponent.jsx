/* eslint-disable react/prop-types */

import ImageComponent from "./imageComponent";
import TextComponent from "./textComponent";

const CardComponent = ({ imgFirst, text, heading, imgUrl, idx }) => (
    <div>
        {/* big screen */}
        <div
            className={`hidden md:grid md:grid-cols-2 gap-3 md:gap-16 ${idx !== 0 ? 'mt-20' : 'mt-4'
                } items-center justify-center`}
        >            {imgFirst && <ImageComponent imgFirst={imgFirst} imgUrl={imgUrl} />}
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