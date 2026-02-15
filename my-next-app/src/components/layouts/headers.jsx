import MobileNav from "./mobile-nav.jsx";
import DesktopNav from "./desktop-nav.jsx";

const Headers = () => {
    return (
        <header className="p-5 bg-gray-50 border-2 border-b-gary-600">
            {/* <MobileNav /> */}
            <DesktopNav />
        </header>
    )
}

export default Headers;