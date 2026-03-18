const Portfolio = () => {
    return (
        <section className="mb-10 pt-5 text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-gray-200 text-sm mb-2 capitalize text-brand-gray">
                Portfolio
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">IT Solution Case Studies - Antbyte Labs Portfolio</h2>
            <p className="text-lg lg:text-xl leading-relaxed mb-6 text-brand-gray">
                Delivering excellence across industries with innovative software solutions from Nepal
            </p>

            <div className="flex items-center gap-6 flex-wrap">
                <div className="flex-[0_0_100%] rounded-lg border border-gray-300 px-5 bg-white my-16 transition-transform duration-500 hover:-translate-y-1 md:flex-[0_0_calc(50%-12px)]">
                    <div className="overflow-hidden">
                        <img src="/portfolio.jpeg" alt="portfolio" className="w-full h-66 transition-transform duration-500 hover:scale-110" />
                    </div>
                    <div className="text-left py-5">
                        <h3 className="text-xl mb-2 font-semibold">Ecommerce</h3>
                        <p className="text-sm mb-4 text-brand-gray">A fully built clean ecommerce</p>

                        <div className="flex items-center gap-5">
                            <div className="inline-block px-4 py-2 rounded-full bg-gray-200 text-xs text-brand-gray">E-commerce</div>
                            <div className="inline-block px-4 py-2 rounded-full bg-gray-200 text-xs text-brand-gray">Website</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;