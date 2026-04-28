import DesktopNav from "./desktop-nav.jsx";

const Headers = () => {
    return (
        <header className="px-4 py-2 md:px-6 lg:px-12 bg-transparent backdrop-blur-xl border-1 border-b-gary-600 sticky top-0 shawdow-md z-1000">
            <DesktopNav />
        </header> 
    )
}

export default Headers;