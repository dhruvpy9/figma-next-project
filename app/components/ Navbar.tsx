const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">TechPlazz</h1>
      <ul className="flex gap-4 text-gray-600 font-medium">
        <li className="hover:text-black cursor-pointer">Home</li>
        <li className="hover:text-black cursor-pointer">Features</li>
        <li className="hover:text-black cursor-pointer">About</li>
        <li className="hover:text-black cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
