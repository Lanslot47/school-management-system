const Section = () => {
    return (
        <section className="md:w-full p-1 md:h-full overflow-x-hidden">
            <div className="w-full p-5 h-18 bg-white flex justify-between items-center rounded mb-10">
                <h1 className="text-green-600 font-semibold md:text-md">Admin Dashboard</h1>
                <p className="text-gray-400">Logged in as admin@example.com</p>
            </div>
            <div className="p-7 md:flex md:justify-between grid gap-10">
                <button className="h-24 w-74 bg-white border border-l-7 border-l-green-600 text-start p-4 border-gray-300 rounded-xl">
                    <p className="">Number of Student</p>
                    <p className="font-bold text-2xl">0</p>
                </button>
                <button className="h-24 w-74 bg-white border border-l-7 border-l-blue-600 text-start p-4 border-gray-300 rounded-xl">
                    <p>Number of Staff</p>
                    <p className="font-bold text-2xl">0</p>
                </button>
                <button className="h-24 w-74 bg-white border border-l-7 border-l-amber-400 text-start p-4 border-gray-300 rounded-xl">
                    <p>Pending Leave request</p>
                    <p className="font-bold text-2xl">0</p>
                </button>
            </div>
            <div className="p-7">
                <button className="text-white cursor-pointer text-md bg-green-600 w-64 p-3 h-12 font-sans rounded ">Manage Result</button>
            </div>
        </section>
    )
}
export default Section;
//Introvert