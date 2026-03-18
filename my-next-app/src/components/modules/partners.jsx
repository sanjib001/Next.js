const Partners = () => {
    return (
        <section className="mb-10 pt-5 text-center" >
            <div className="inline-block px-4 py-2 rounded-full bg-gray-200 text-sm mb-2 capitalize text-brand-gray">
                Trusted By
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">Leading Brands We've Partnered With in Nepal</h2>
            <p className="text-lg lg:text-xl leading-relaxed mb-6 text-brand-gray">
                Trusted by 1+ leading companies across various industries
            </p>

            <div className="flex items-center justify-between gap-6 flex-wrap my-16">
                <div className="flex-[0_0_100%] p-6 rounded-lg bg-white border border-gray-300 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-18px)]">
                    <img src="/techaxis.webp" className="h-36 w-36 mx-auto" alt="techaxis" />
                </div>
                <div className="flex-[0_0_100%] p-6 rounded-lg bg-white border border-gray-300 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-18px)]">
                    <img src="techaxis.webp" className="h-36 w-36 mx-auto" alt="techaxis" />
                </div>
                <div className="flex-[0_0_100%] p-6 rounded-lg bg-white border border-gray-300 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-18px)]">
                    <img src="/techaxis.webp" className="h-36 w-36 mx-auto" alt="techaxis" />
                </div>
                <div className="flex-[0_0_100%] p-6 rounded-lg bg-white border border-gray-300 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-18px)]">
                    <img src="/techaxis.webp" className="h-36 w-36 mx-auto" alt="techaxis" />
                </div>
            </div>

            <p className="text-lg lg:text-xl leading-relaxed mb-6 text-brand-gray">
                Join these leading brands and transform your business with Nepal's top IT company
            </p>
        </section >
    )
}

export default Partners