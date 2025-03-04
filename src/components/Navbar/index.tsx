export default function Navbar(){


    return(
        <nav className="w-full bg-gray-800 p-4 fixed top-0 ">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-white text-xl font-bold">
            Brand
          </a>
          <div className="space-x-4">
            <a
              href="#"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    )
}