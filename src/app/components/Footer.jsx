import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaHome, FaUser, FaPhone } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-6 px-4">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-4">

                {/* Enlaces de navegación */}
                <nav className="flex space-x-6">
                    <Link href="/" className="flex items-center space-x-2 hover:text-white">
                        <FaHome />
                        <span>Home</span>
                    </Link>
                    <Link href="/about" className="flex items-center space-x-2 hover:text-white">
                        <FaUser />
                        <span>About me</span>
                    </Link>
                    <Link href="/contact" className="flex items-center space-x-2 hover:text-white">
                        <FaPhone />
                        <span>Contact</span>
                    </Link>
                </nav>

                {/* Redes sociales */}
                <div className="flex space-x-4 my-4 md:my-0">
                    <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-white hover:text-gray-800 transition">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-white hover:text-gray-800 transition">
                        <FaInstagram />
                    </a>
                    <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-white hover:text-gray-800 transition">
                        <FaTwitter />
                    </a>
                    <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-white hover:text-gray-800 transition">
                        <FaYoutube />
                    </a>
                </div>

                {/* Términos y privacidad */}
                <p className="text-sm">
                    <Link href="#" className="hover:underline">Terms of Service</Link> - <Link href="#" className="hover:underline">Privacy Policy</Link>
                </p>
            </div>
        </footer>
    );
}