import { Button } from "../ui/button.jsx";
const Main = () => {
    return (
        <main className="py-[40px] px-[40px]">
            <section className="flex gap-[40px]">
                <div className="basis-[50%]">
                    <div className="inline-block py-[8px] px-[16px] text-gray-600 text-[18px] font-medium bg-gray-100 border-1 rounded-3xl mb-[10px]">
                        Top tech company in nepal
                    </div>
                    <h2 className="text-5xl font-medium mb-[16px]">Leading IT solutions & Software Development
                        in Nepal</h2>
                    <p className="text-3xl/12 text-gray-600 mb-[24px]">Antbyte Labs is Nepal's trusted IT company delivering custom software
                        solutions,
                        cloud services, and digital transformation. Serving 150+ clients across 25+ countries with 8+ years
                        of
                        expertise.</p>
                    <div className="flex justify-between gap-[16px] mt-[18px] pb-[48px]">
                        <Button size="lg">strat your software project</Button>
                        <Button size="lg" variant="outline">view our IT solutions</Button>
                    </div>

                    <div className="flex justify-between gap-[12px]">
                        <div className="flex-row">
                            <div className="font-medium text-5xl mb-2">150+</div>
                            <div className="text-gray-600 text-3xl mb-5">Project Delivered</div>
                        </div>
                        <div className="flex-row gap-[4px]">
                            <div className="font-medium text-5xl mb-2">8+</div>
                            <div className="text-gray-600 text-3xl mb-5">Years Experience</div>
                        </div>
                        <div className="flex-row gap-[4px]">
                            <div className="font-medium text-5xl mb-2">IOS</div>
                            <div className="text-gray-600 text-3xl mb-5">Certified Company</div>
                        </div>
                    </div>
                </div>
                <div className="basis-[50%]">
                    <div class="light scale">
                        <div><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg></div>
                        <div>
                            <div class="headss">Lightning Fast</div>
                            <div class="parass">Optimized performance</div>
                        </div>

                    </div>
                    <div class="cloud scale">
                        <div><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg></div>
                        <div>
                            <div class="headss">Cloud Native</div>
                            <div class="parass">Scalable Solutions</div>
                        </div>
                    </div>
                    <button class="btn btn-black hero-top">Enterprise Grade</button>
                    <div class="hero-right-content">
                        <svg class="w-32 h-32 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                            </path>
                        </svg>
                    </div>
                </div>
            </section>
            <section id="service" class="services center">
                <div class="section-title cap">
                    our services
                </div>
                <h2 class="section-heading cap">Professional IT Services & Software Solutions in Nepal</h2>
                <p class="stext-gray-600 text-2xl mb-5 center">Comprehensive technology solutions from Antbyte Labs - Nepal's top IT company
                    serving businesses in Kathmandu, across Nepal, and worldwide
                </p>
                <div class="services-list">
                    <div class="service-cards nocenter card-transition">
                        <div class="service-icon icon-transition"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-monitor w-5 h-5 lg:w-6 lg:h-6 text-gray-900 dark:text-white"
                            aria-hidden="true">
                            <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                            <line x1="8" x2="16" y1="21" y2="21"></line>
                            <line x1="12" x2="12" y1="17" y2="21"></line>
                        </svg></div>
                        <div class="service-heading">Web Development</div>
                        <div class="stext-gray-600 text-2xl mb-5">Transform your vision into reality with custom web applications built
                            using
                            cutting-edge frameworks like React, Next.js, and Node.js. Our Kathmandu-based development team
                            creates scalable, high-performance solutions that drive business growth for Nepal businesses and
                            deliver exceptional user experiences across all devices.</div>
                        <div>
                            <ul>
                                <li>Responsive Design</li>
                                <li>SEO Optimized</li>
                                <li>Performance First</li>
                            </ul>
                        </div>
                    </div>
                    <div class="service-cards nocenter card-transition">
                        <div class="service-icon icon-transition"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-monitor w-5 h-5 lg:w-6 lg:h-6 text-gray-900 dark:text-white"
                            aria-hidden="true">
                            <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                            <line x1="8" x2="16" y1="21" y2="21"></line>
                            <line x1="12" x2="12" y1="17" y2="21"></line>
                        </svg></div>
                        <div class="service-heading">Web Development</div>
                        <div class="stext-gray-600 text-2xl mb-5">Transform your vision into reality with custom web applications built
                            using
                            cutting-edge frameworks like React, Next.js, and Node.js. Our Kathmandu-based development team
                            creates scalable, high-performance solutions that drive business growth for Nepal businesses and
                            deliver exceptional user experiences across all devices.</div>
                        <div>
                            <ul>
                                <li>Responsive Design</li>
                                <li>SEO Optimized</li>
                                <li>Performance First</li>
                            </ul>
                        </div>
                    </div>
                    <div class="service-cards nocenter card-transition">
                        <div class="service-icon icon-transition"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-monitor w-5 h-5 lg:w-6 lg:h-6 text-gray-900 dark:text-white"
                            aria-hidden="true">
                            <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                            <line x1="8" x2="16" y1="21" y2="21"></line>
                            <line x1="12" x2="12" y1="17" y2="21"></line>
                        </svg></div>
                        <div class="service-heading">Web Development</div>
                        <div class="stext-gray-600 text-2xl mb-5">Transform your vision into reality with custom web applications built
                            using
                            cutting-edge frameworks like React, Next.js, and Node.js. Our Kathmandu-based development team
                            creates scalable, high-performance solutions that drive business growth for Nepal businesses and
                            deliver exceptional user experiences across all devices.</div>
                        <div>
                            <ul>
                                <li>Responsive Design</li>
                                <li>SEO Optimized</li>
                                <li>Performance First</li>
                            </ul>
                        </div>
                    </div>
                    <div class="service-cards nocenter card-transition">
                        <div class="service-icon icon-transition"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-monitor w-5 h-5 lg:w-6 lg:h-6 text-gray-900 dark:text-white"
                            aria-hidden="true">
                            <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                            <line x1="8" x2="16" y1="21" y2="21"></line>
                            <line x1="12" x2="12" y1="17" y2="21"></line>
                        </svg></div>
                        <div class="service-heading">Web Development</div>
                        <div class="stext-gray-600 text-2xl mb-5">Transform your vision into reality with custom web applications built
                            using
                            cutting-edge frameworks like React, Next.js, and Node.js. Our Kathmandu-based development team
                            creates scalable, high-performance solutions that drive business growth for Nepal businesses and
                            deliver exceptional user experiences across all devices.</div>
                        <div>
                            <ul>
                                <li>Responsive Design</li>
                                <li>SEO Optimized</li>
                                <li>Performance First</li>
                            </ul>
                        </div>
                    </div>
                    <div class="service-cards nocenter card-transition">
                        <div class="service-icon icon-transition"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-monitor w-5 h-5 lg:w-6 lg:h-6 text-gray-900 dark:text-white"
                            aria-hidden="true">
                            <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                            <line x1="8" x2="16" y1="21" y2="21"></line>
                            <line x1="12" x2="12" y1="17" y2="21"></line>
                        </svg></div>
                        <div class="service-heading">Web Development</div>
                        <div class="stext-gray-600 text-2xl mb-5">Transform your vision into reality with custom web applications built
                            using
                            cutting-edge frameworks like React, Next.js, and Node.js. Our Kathmandu-based development team
                            creates scalable, high-performance solutions that drive business growth for Nepal businesses and
                            deliver exceptional user experiences across all devices.</div>
                        <div>
                            <ul>
                                <li>Responsive Design</li>
                                <li>SEO Optimized</li>
                                <li>Performance First</li>
                            </ul>
                        </div>
                    </div>
                    <div class="service-cards nocenter card-transition">
                        <div class="service-icon icon-transition"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-monitor w-5 h-5 lg:w-6 lg:h-6 text-gray-900 dark:text-white"
                            aria-hidden="true">
                            <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                            <line x1="8" x2="16" y1="21" y2="21"></line>
                            <line x1="12" x2="12" y1="17" y2="21"></line>
                        </svg></div>
                        <div class="service-heading">Web Development</div>
                        <div class="stext-gray-600 text-2xl mb-5">Transform your vision into reality with custom web applications built
                            using
                            cutting-edge frameworks like React, Next.js, and Node.js. Our Kathmandu-based development team
                            creates scalable, high-performance solutions that drive business growth for Nepal businesses and
                            deliver exceptional user experiences across all devices.</div>
                        <div>
                            <ul>
                                <li>Responsive Design</li>
                                <li>SEO Optimized</li>
                                <li>Performance First</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;