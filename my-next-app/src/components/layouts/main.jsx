
import Hero from "../modules/hero.jsx";
import Partners from "../modules/partners.jsx";
import Portfolio from "../modules/protfolio.jsx";
import Services from "../modules/services.jsx";
import About from "../modules/about.jsx";

const Main = () => {
    return (
        <main className="p-4 md:p-6 lg:p-12">
            <Hero/>
            <Services/>
            <Portfolio/>
            <Partners/>
            <About/>
        </main>
    )
}

export default Main;