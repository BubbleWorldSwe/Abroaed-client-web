import { FaGooglePlay, FaApple } from "react-icons/fa";


const AppStoreButton = () => {
    return (
        <div className="flex gap-4">
            {/* Google Play */}
            <a
                href="#"
                className="flex items-center px-4 py-2 bg-black hover:border-blue-600 hover:border text-white rounded-lg hover:scale-105 transition-transform"
            >
                <FaGooglePlay className="text-xl mr-2" />
                <div className="text-left leading-tight text-sm">
                    <p className="text-xs">Get it on</p>
                    <p className="text-sm font-semibold">Google Play</p>
                </div>
            </a>

            {/* App Store */}
            <a
                href="#"
                className="flex items-center px-4 py-2 bg-black hover:border-blue-600 hover:border text-white rounded-lg hover:scale-105 transition-transform"
            >
                <FaApple className="text-xl mr-2" />
                <div className="text-left leading-tight text-sm">
                    <p className="text-xs">Download on the</p>
                    <p className="text-sm font-semibold">App Store</p>
                </div>
            </a>
        </div>
    );
}

export default AppStoreButton