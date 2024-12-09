import { Link } from "react-router-dom";
import Logo from '../assets/logo-bg.png';
import Dropdown from "./Dropdown";
import { BiChevronDown } from "react-icons/bi";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate();

    const HandleNavigate = () => {
        navigate("/predict");
    };
    
    return (
        <header className="top-0 mt-0 p-3 pt-0">
            <nav>
                <div className="container mx-auto flex items-center justify-between py-4">
                    <Link to="/" className="w-28">
                        <img src={Logo} alt="Logo" className="w-10" />
                    </Link>
                    <ul className="flex items-center space-x-11">
                        <li>
                            <div>
                                <Link to="/" className="text-black hover:text-teal-900">Home</Link>
                                
                            </div>
                        </li>
                        <li>
                            <div>
                                <Link to="/about" className="text-black hover:text-teal-900">Models</Link>
                                <Dropdown icon={<BiChevronDown size={20} className="pt-2" />}>
                                    {/* Options */}
                                    <ul className="p-2 space-y-1">
                                        <li className="px-4 py-2 hover:bg-teal-900 cursor-pointer"><Link to="/models/districts">Districts education</Link></li>
                                        <li className="px-4 py-2 hover:bg-teal-900 cursor-pointer"><Link to="/models/students">Students</Link></li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Link to="/contact" className="text-black hover:text-teal-900">Data</Link>
                                <Dropdown icon={<BiChevronDown size={20} className="pt-2"/>}>
                                    {/* Options */}
                                    <ul className="p-2 space-y-1">
                                        <li className="px-4 py-2 hover:bg-teal-900 cursor-pointer"><Link to="/data/districts">Districts education</Link></li>
                                        <li className="px-4 py-2 hover:bg-teal-900 cursor-pointer"><Link to="/data/students">Students</Link></li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </li>
                        <li>
                            <Link to="/about" className="text-black hover:text-teal-900">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-black hover:text-teal-900">Contact us</Link>
                        </li>
                    </ul>
                    <Button label="Predict" onClick={HandleNavigate}/>
                </div>
            </nav>
        </header>
    );
};