import Image from "next/image";
import stream from "./Images/stream.png";
import Link from "next/link";

export default function Home() {
  return (
    <section class="bg-white dark:bg-gray-900 h-screen flex justify-center items-center">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Could this be the best project showcase?
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            This project packs everything from Authentication, APIs, and even an
            AI assistant. Please Login to continue
          </p>

          {/* Sign up Link */}
          {/* <Link
            href="/chat"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Lets Chat
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link> */}

          <Link
            href="https://github.com/kadianAnirudh/Stream"
            className="inline-flex items-center justify-center px-5 py-3 mx-4 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Github
          </Link>

          <Link
            href="https://maple-cheese-7fb.notion.site/Stream-Documentation-ccf487c908b74341a655cf4b3db2e85d?pvs=4"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Documentation
          </Link>
        </div>
        <div class="flex justify-center items-center lg:mt-0 lg:col-span-5">
          <Image src={stream} alt="mockup" className="h-full" />
        </div>
      </div>
    </section>
  );
}
