import Image from "next/image";
import streamLogo from "../Images/streamLogo.png";

const Navbar = () => {
  return (
    <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" class="flex items-center h-[50px] w-[50px]">
            <Image
              src={streamLogo}
              className="mr-3 h-full"
              alt="Flowbite Logo"
            />
            <span class="hidden lg:self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Stream
            </span>
          </a>
          <div class="flex items-center lg:order-2">
            <a
              href="#"
              class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-semibold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Log in
            </a>
            <a
              href="#"
              class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-semibold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Get started ➔
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
