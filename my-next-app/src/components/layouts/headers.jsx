import MobileNav from "./mobile-nav.jsx";
import DesktopNav from "./desktop-nav.jsx";

const Headers = () => {
    return (
        <header className="px-10 py-3 bg-transparent backdrop-blur-xl border-1 border-b-gary-600 sticky top-0 shawdow-md z-1000">
            {/* <MobileNav /> */}
            <DesktopNav />
        </header>
    )
}

export default Headers;