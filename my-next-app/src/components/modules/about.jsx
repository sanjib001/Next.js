const About = () => {
    return (
        <section className="mb-10 pt-5 text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-gray-200 text-sm mb-2 capitalize text-brand-gray">
                About Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">About Antbyte Labs - Leading IT Company in Kathmandu, Nepal</h2>
            <p className="text-lg lg:text-xl leading-relaxed mb-6 text-brand-gray">
                Antbyte Labs is a leading IT company in Nepal specializing in custom software development, cloud
                solutions, and digital transformation. Based in Kathmandu, our team of 50+ expert developers, designers,
                and strategists has successfully delivered 150+ projects for clients across 25+ countries. With 8+ years
                of experience and ISO certification, we help Nepal businesses leverage technology for growth and
                competitive advantage.
            </p>

            <div className="flex justify-between items-center gap-6 flex-wrap my-10">
                <div className="flex flex-col gap-1">
                    <div className="text-3xl lg:text-4xl font-bold">150+</div>
                    <div className="text-sm text-brand-gray">Projects Delivered</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-3xl lg:text-4xl font-bold">8+</div>
                    <div className="text-sm text-brand-gray">Years of experience</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-3xl lg:text-4xl font-bold">50+</div>
                    <div className="text-sm text-brand-gray">Team Members</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-3xl lg:text-4xl font-bold">25+</div>
                    <div className="text-sm text-brand-gray">Countries Served</div>
                </div>
            </div>
        </section>
    )
}

export default About;