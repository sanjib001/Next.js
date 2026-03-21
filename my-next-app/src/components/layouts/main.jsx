
import Hero from "../modules/hero.jsx";
import Partners from "../modules/partners.jsx";
import Portfolio from "../modules/protfolio.jsx";
import Services from "../modules/services.jsx";
import About from "../modules/about.jsx";

const Main = () => {
    return (
        <main className="py-[40px] px-[50px]">
            <Hero/>
            <Services/>
            <Portfolio/>
            <Partners/>
            <About/>
        </main>
    )
}

export default Main;