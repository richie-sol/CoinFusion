function Nav() {
  return (
    <>
    <div className="font-sans flex justify-around items-center p-4 max-w-6xl mx-auto relative">
      <h1 className="font-semibold text-primary absolute left-2 top-8 px-2 hidden md:block">CoinFusion</h1>
    <nav className="bg-white px-16 py-4 fixed top-4 z-10 rounded-full hidden md:flex shadow-md">
        <ul className="flex space-x-10">
            <li><a href="">Learn</a></li>
            <li><a href="">Build</a></li>
            <li><a href="">Explore</a></li>
            <li><a href="">Join</a></li>
            <li><a href="">Help</a></li>
        </ul>
    </nav>
    <nav className="bg-white px-4 text-xs py-4 fixed top-4 z-10 rounded-full shadow-md md:hidden flex">
        <ul className="flex space-x-6">
            <li><a href="">Learn</a></li>
            <li><a href="">Build</a></li>
            <li><a href="">Explore</a></li>
            <li><a href="">Join</a></li>
            <li><a href="">Help</a></li>
        </ul>
    </nav>
    </div>
    </>
  );
}

export default Nav;
