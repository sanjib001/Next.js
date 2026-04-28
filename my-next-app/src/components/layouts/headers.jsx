import DesktopNav from "./desktop-nav.jsx";

const Headers = () => {
    return (
        <header className="p-4 md:p-6 lg:p-12 bg-transparent backdrop-blur-xl border-1 border-b-gary-600 sticky top-0 shawdow-md z-1000">
            <DesktopNav />
        </header> 
    )
}

export default Headers;