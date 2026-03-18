const Hero = () => {
    return (
        <section className="mb-10 pt-5 lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 text-sm mb-2 capitalize text-brand-gray">
                    <span className="h-2 w-2 bg-brand-green rounded-full animate-flicker"></span>
                    Top tech company in nepal
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
                    Leading IT Solutions & Software Development in Nepal
                </h2>
                <p className="text-lg lg:text-xl leading-relaxed mb-6 text-brand-gray">
                    Antbyte Labs is Nepal's trusted IT company delivering custom software solutions, cloud services, and
                    digital transformation. Serving 150+ clients across 25+ countries with 8+ years of expertise.
                </p>
                <div className="flex flex-col gap-4 pb-12 border-b border-gray-300 lg:flex-row lg:pb-12">
                    <button className="w-full text-center  font-medium px-8 py-4 rounded-lg text-lg bg-black text-white border border-brand-dark capitalize">
                        Start your software project
                    </button>
                    <button className="w-full text-center font-medium  py-4 rounded-lg text-lg bg-gray-100 text-black border border-brand-dark capitalize">
                        View our IT solutions
                    </button>
                </div>

                <div className="flex justify-between gap-5 pt-6">
                    <div className="flex flex-col gap-4">
                        <div className="text-3xl lg:text-4xl font-bold">150+</div>
                        <div className="text-sm text-brand-gray">Projects Delivered</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="text-3xl lg:text-4xl font-bold">8+</div>
                        <div className="text-sm text-brand-gray">Years of experience</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="text-3xl lg:text-4xl font-bold">ISO</div>
                        <div className="text-sm text-brand-gray">Certified Company</div>
                    </div>
                </div>
            </div>

            <div className="my-5 flex flex-col gap-5 lg:w-1/2 lg:border lg:border-gray-300 lg:rounded-2xl lg:h-[60vh] lg:relative">
                <div className="p-4 rounded-2xl border border-gray-300 inline-flex gap-2 items-center bg-white lg:absolute lg:-bottom-5 lg:-right-5">
                    <div className="flex items-center text-white h-10 min-w-8 rounded-lg bg-blue-500">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <div>
                        <b className="text-sm">Lightning Fast</b>
                        <p className="text-xs text-brand-gray">Optimized performance</p>
                    </div>
                </div>

                <div className="p-4 rounded-2xl border border-gray-300 inline-flex gap-2 items-center bg-white lg:absolute lg:-top-5 lg:-left-5">
                    <div className="flex items-center text-white h-10 min-w-8 rounded-lg bg-green-500">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <div>
                        <b className="text-sm">Cloud Native</b>
                        <p className="text-xs text-brand-gray">Scalable solutions</p>
                    </div>
                </div>

                <div className="hidden lg:block absolute w-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg className="w-full h-auto mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                        </path>
                    </svg>
                </div>

                <button className="w-full text-center px-8 py-4 rounded-full text-sm bg-black text-white border border-brand-dark capitalize lg:absolute lg:top-10 lg:right-10 lg:w-auto">
                    Enterprise Grade
                </button>
            </div>
        </section>
    )
}

export default Hero;