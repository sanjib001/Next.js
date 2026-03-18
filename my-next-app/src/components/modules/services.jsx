'use client'
import { useState, useEffect } from "react";
import { serviceAPI } from "../../lib/api";

const Services = () => {
    const [services, setServices] = useState([])

    const fetchServices = async () => {
        try {
            const response = await serviceAPI.getAllServices();
            setServices(response);
        } catch (error) {
            console.error("Failed to fetch services:", error);
        }
    }

    useEffect(() => {
        fetchServices()
    }, [])

    return (
        <section className="mb-10 pt-5 text-center" >
            <div className="inline-block px-4 py-2 rounded-full bg-gray-200 text-sm mb-2 capitalize text-brand-gray">
                Our services
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
                Professional IT Services & Software Solutions in Nepal
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed mb-6 text-brand-gray">
                Comprehensive technology solutions from Antbyte Labs - Nepal's top IT company serving businesses in
                Kathmandu, across Nepal, and worldwide
            </p>

            <div className="flex flex-col gap-6 md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap">
                {/* <!-- Service Card  --> */}
                {
                    services.map((service, index) => (
                        <div className="bg-gray-100 p-5 rounded-2xl flex flex-col gap-2 text-left border border-gray-300 transition-transform duration-500 hover:-translate-y-1 md:flex-[0_0_calc(50%-12px)] lg:order-4 lg:flex-[0_0_30%]" key={index}>
                            <div className="h-12 w-12 flex items-center justify-center bg-white rounded-lg border border-gray-300 transition-transform duration-500 group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                    className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900">
                                    <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                                    <line x1="8" x2="16" y1="21" y2="21"></line>
                                    <line x1="12" x2="12" y1="17" y2="21"></line>
                                </svg>
                            </div>

                            <h3 className="text-lg font-semibold">{service.title}</h3>

                            <p className="text-sm leading-relaxed text-brand-gray">
                                {service.description}
                            </p>

                            {/* <ul className="ml-4 flex flex-col gap-1 list-disc">
                                <li className="text-xs text-brand-gray">Responsive Design</li>
                                <li className="text-xs text-brand-gray">SEO Optimized</li>
                                <li className="text-xs text-brand-gray">Performance First</li>
                            </ul> */}
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Services;