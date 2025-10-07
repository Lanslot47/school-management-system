const page = () => {
    return (
        <section className="p-5">
            <form className="bg-gray-100 h-[80vh] rounded-xl  w-[30vw] shadow-2xl p-6 ml-66 items-center">
                <h1 className=" text-green-600 font-semibold text-2xl mb-10">Student Managment</h1>
                <div className="space-y-6 ">
                    <input type="text" placeholder="Name" className="w-full p-2 text-gray-500 border-[0.5] outline-0  border-gray-300 rounded" required />
                    <input type="email" placeholder="Email" className="w-full p-2 text-gray-500 border-[0.5] outline-0  border-gray-300 rounded" required />
                    <input type="number" placeholder="Number" className="w-full p-2 text-gray-500 border-[0.5] outline-0  border-gray-300 rounded " required />
                    <button className="w-full text-white bg-green-600 rounded-md font-extralight h-10 text-md font-sans p-2 cursor-pointer">Create Student</button>
                </div>
            </form>
        </section>
    );
}

export default page