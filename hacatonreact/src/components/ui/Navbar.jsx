const Navbar = () => {
  return (
    <>
      <header className="w-full bg-transparent p-4 mt-22">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 md:ml-4">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-brown-400" href="/">
                <span className="sr-only">Home</span>
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-black transition hover:text-brown-400 hover:text-opacity-75 font-bold uppercase"
                      href="/"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-brown-400 hover:text-opacity-75 font-bold uppercase"
                      href="/"
                    >
                      Careers
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-brown-400 hover:text-opacity-75 font-bold uppercase"
                      href="/"
                    >
                      History
                    </a>
                  </li>
                  <li>
                    <button className="text-black transition hover:text-brown-400 hover:text-opacity-75 font-bold uppercase">
                      Cart
                    </button>
                  </li>
                  <li>
                    <button className="text-black transition hover:text-brown-400 hover:text-opacity-75 font-bold uppercase">
                      Add Product
                    </button>
                  </li>
                  <li>
                    <button className="text-black transition hover:text-brown-400 hover:text-opacity-75 font-bold uppercase">
                      Product
                    </button>
                  </li>
                  <li>
                    <button className="text-black transition hover:text-brown-400 hover:text-opacity-75 font-bold uppercase">
                      Register
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
