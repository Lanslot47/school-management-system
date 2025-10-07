import Image from "next/image";
const Hero = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row px-6 pt-24 pb-16 bg-white justify-between items-center">
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl text-gray-900 mb-6 font-extrabold">Welcome to <span className="text-green-600">ZIT</span><br /> Empowering Learning Like Never Before</h1>
                <p className="text-gray-600 mb-8 text-base md:text-lg">Explore a wide range of courses, connect with top instructors, and unlock your potential today.</p>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                    <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">Get Started</button>
                    <button className="border border-green-500 text-green-600 px-6 py-3 rounded-md hover:bg-green-100 transition hover:text-green-500">Learn More</button>
                </div>
            </div>
            <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
                <Image src='/img/log1.jpg' alt="hero img" width={500} height={400} className="shadow-lg object-cover rounded-full"/>
            </div>
        </section>
    );
}

export default Hero;