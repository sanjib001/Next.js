const Footer = () => {
    return (
        <footer className="px-5 py-10 bg-brand-light border-t border-gray-300 lg:px-20">
            <div className="flex flex-col gap-8 pb-6 lg:flex-row">
                <div className="lg:flex-[0_0_calc(33%-16px)]">
                    <div className="flex items-center gap-3 text-3xl font-semibold mb-4">
                        <span className="font-extrabold text-white h-10 w-10 bg-black flex items-center justify-center rounded-lg">A</span>
                        <div>AntByte labs</div>
                    </div>
                    <p className="text-base py-4 text-brand-gray">
                        Nepal's leading IT company transforming businesses through innovative technology solutions. Based
                        in Kathmandu, serving clients worldwide with excellence since 2020.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="rounded bg-gray-200 h-10 w-10 flex items-center justify-center hover:bg-black group">
                            <svg className="w-5 h-5 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                            </svg>
                        </a>
                        <a href="#" className="rounded bg-gray-200 h-10 w-10 flex items-center justify-center hover:bg-black group">
                            <svg className="w-5 h-5 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                            </svg>
                        </a>
                        <a href="#" className="rounded bg-gray-200 h-10 w-10 flex items-center justify-center hover:bg-black group">
                            <svg className="w-5 h-5 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="lg:flex-[0_0_calc(33%-16px)] lg:px-4">
                    <h3 className="text-base pb-4 font-semibold">Services</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="text-base text-brand-gray">Web Development</li>
                        <li className="text-base text-brand-gray">Cloud Solutions</li>
                        <li className="text-base text-brand-gray">Mobile Apps</li>
                        <li className="text-base text-brand-gray">Consulting</li>
                    </ul>
                </div>

                <div className="lg:flex-[0_0_calc(33%-16px)] lg:px-4">
                    <h3 className="text-base pb-4 font-semibold">Company</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="text-base text-brand-gray">About us</li>
                        <li className="text-base text-brand-gray">Contact</li>
                        <li className="text-base text-brand-gray">Careers</li>
                        <li className="text-base text-brand-gray">Privacy Policy</li>
                    </ul>
                </div>
            </div>

            <div className="pt-6 border-t border-gray-300 text-base text-center text-brand-gray">
                © 2025 Antbyte Labs. All rights reserved. | Top IT Company in Nepal
            </div>
        </footer>
    )
}

export default Footer;