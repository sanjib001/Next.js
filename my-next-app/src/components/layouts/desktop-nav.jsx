import { Button } from "../ui/button";
const DesktopNav = () => {
    return (
        <div className="flex justify-between items-center py-2 px-2">
            <div className="flex items-center text-3xl font-bold"><span>A</span>
                <div class="logo-text">Antbytes Labs</div>
            </div>
            <nav>
                <ul className="flex gap-5 list-none">
                    <li>
                        <a className="bg-gray-100 hover:bg-gray-500 hover:text-white rounded-lg text-base px-3 py-3" href="#">Services</a>
                    </li>
                    <li>
                        <a className="bg-gray-100 hover:bg-gray-500 hover:text-white rounded-lg text-base px-3 py-3" href="#">Products</a>
                    </li>
                    <li>
                        <a className="bg-gray-100 hover:bg-gray-500 hover:text-white rounded-lg text-base px-3 py-3" href="#">Projects</a>
                    </li>
                    <li>
                        <a className="bg-gray-100 hover:bg-gray-500 hover:text-white rounded-lg text-base px-3 py-3" href="#">About</a>
                    </li>
                    <li>
                        <a className="bg-gray-100 hover:bg-gray-500 hover:text-white rounded-lg text-base px-3 py-3" href="#">Contact</a>
                    </li>
                </ul>
            </nav>
            <Button variant="default" size="lg">Get Started</Button>
        </div>
    )
}

export default DesktopNav;