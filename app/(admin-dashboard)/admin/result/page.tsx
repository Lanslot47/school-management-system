import { Folder } from "lucide-react";
import Image from "next/image";
import { CloudUpload } from "lucide-react";
const page = () => {
    return (
        <section className="w-[65vw] h-[85vh] bg-white rounded-md ml-30 shadow-md p-3">
            <div className="p-3">
                <h1 className="flex items-center gap-3 font-bold text-3xl justify-center p-2 mb-3">
                    <Image src="/img/images.jpeg" height={50} width={50} alt="" />
                    <span>Bulk Upload Student Result</span>
                </h1>
                <p className="text-lg text-gray-500 text-center font-sans space-x-3 mb-5">Drag & Drop PDF result files below. Each file should be named with student's registration <br /> number(e.g.<span className="font-bold text-black"> STU001.pdf</span>).</p>
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-10 w-full h-64 mx-auto mb-6">
                    <CloudUpload className="text-blue-600 cursor-pointer" size={100}/>
                    <p>Drop PDF files here or click to select</p>
                </div>
                <button className="w-full text-white h-12 p-3 bg-blue-600 rounded-lg cursor-pointer">Upload All Results</button>
            </div>
            {/* <h1>my name is ishaq auwal inuwa from the gren college jos. </h1> */}
        </section>
    )
}
export default page;