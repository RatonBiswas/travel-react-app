import { GiCommercialAirplane } from "react-icons/gi";
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineGoogle } from 'react-icons/ai';


const Footer = () => {
    return (
        <footer className='bg-black text-white py-20 '>
            <div className="flex justify-evenly">

                <div>
                    <h3 className="flex justify-start items-center gap-2">
                        <GiCommercialAirplane /> <span className="font-[Agbalumo] font-bold text-xl">Trisog</span>
                    </h3>
                    <p>Need any help?</p>
                    <p>Call Us: <span className="text-yellow-300">(888)1234 5678</span> </p>
                    <p>Love Street, Muscat, Oman</p>
                    <p>example@trisog.com</p>
                    <div className="flex gap-1 mt-2">
                        <AiOutlineTwitter /> <AiFillLinkedin /> <AiOutlineGoogle />
                    </div>
                </div>

                <div className="h-40 border-l border-gray-600"></div>

                <div className="flex justify-evenly gap-6">
                    <div>
                        <h3 className="mb-2 font-[Agbalumo]">Company</h3>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Travel Guide</p>
                        <p>Data Policy</p>
                    </div>
                    <div>
                        <h3 className="mb-2 font-[Agbalumo]">Top Destination</h3>
                        <p>Las Vegas</p>
                        <p>New York City</p>
                        <p>San Francisco</p>
                        <p>Hawaii</p>
                    </div>
                    <div className="mt-8">
                        <p>Tokyo</p>
                        <p>Sydney</p>
                        <p>Melbourne</p>
                        <p>Dubai</p>
                    </div>
                </div>

                <div className="h-40 border-l border-gray-600"></div>

                <div>
                    <h3 className="mb-2 font-[Agbalumo]">Sign up Newsletter</h3>
                    <div className=" flex flex-col items-start justify-center gap-2">
                        <input type="text" placeholder="Enter email..." className="p-2 rounded-md" />
                        <button className="bg-yellow-300 px-4 py-1 rounded-md">Submit</button>
                    </div>
                    <p className="mt-2">2023 Trisog All Right Reserved</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;