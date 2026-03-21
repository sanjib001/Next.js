'use client'

import { useState, useEffect } from "react";
import { portfolioApi } from "../../lib/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const Portfolios = () => {
    const [Portfolios, setPortfolios] = useState([])

    const fetchPortfolios = async () => {
        try {
            const response = await portfolioApi.getAllPortfolio();
            setPortfolios(response);
        } catch (error) {
            console.error("Failed to fetch Portfolios:", error);
        }
    }

    useEffect(() => {
        fetchPortfolios()
    }, [])

    return (

        <section id="portfolios" className="mb-10 pt-5 text-center">

            <div className="inline-block px-4 py-2 rounded-full bg-gray-200 text-sm mb-2 capitalize text-brand-gray">
                Portfolios
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">IT Solution Case Studies - Antbyte Labs Portfolios</h2>
            <p className="text-lg lg:text-xl leading-relaxed mb-6 text-brand-gray">
                Delivering excellence across industries with innovative software solutions from Nepal
            </p>
            <div className="flex flex-row flex-wrap justify-between gap-2">
                {Portfolios.map((portfolio, index) => (
                    <div
                        key={index}
                        className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] rounded-lg border border-gray-300 px-5 bg-white my-5 transition-transform duration-500 hover:-translate-y-1"
                    >
                        <div className="overflow-hidden h-80">
                            {portfolio.image && (
                                <img
                                    src={`${API_URL}/uploads/${portfolio.image}`}
                                    alt="portfolio"
                                    className="w-full h-80 transition-transform duration-500 hover:scale-110"
                                />
                            )}
                        </div>

                        <div className="text-left py-5">
                            <h3 className="text-xl mb-2 font-semibold">{portfolio.title}</h3>
                            <p className="text-sm mb-4 text-brand-gray">{portfolio.description}</p>

                            <div className="flex items-center gap-5">
                                <div className="flex flex-wrap gap-1">
                                    {portfolio.tags?.split(",").map((tag, i) => (
                                        <span key={i} className="px-3 py-2 bg-gray-200 text-black rounded-full text-xs mx-1">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolios;