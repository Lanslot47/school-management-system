const Profile = () => {
    return (
        <section className="p-5">
            <div className="bg-white h-[80vh] rounded-xl w-[30vw] shadow-2xl p-6 ml-66 items-center">
                <div className="h-25 w-25  border-4 rounded-full border-green-600 ml-32 mb-5"></div>
                <h1 className="font-bold text-xl font-sans text-center">Super Admin</h1>
                <p className="text-md text-gray-400 text-center mb-3">admin@example.com</p>
                <p className="text-green-600 text-center text-sm font-normal mb-3">system Administrator</p>
                <div className="grid grid-cols-1 justify-center p-4">
                    <button className="text-white bg-green-600 w-80 h-10 p-2 rounded-md font-extralight mb-5 cursor-pointer">Edit Profile</button>
                    <button className="w-80 h-10 p-2 rounded-md bg-gray-200 cursor-pointer mb-5">Change Password</button>
                    <button className="w-80 h-10 p-2 rounded-md cursor-pointer bg-red-200 text-red-400 font-semibold">Logout</button>

                </div>
            </div>
        </section>
    )
}
export default Profile