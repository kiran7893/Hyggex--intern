export default function Mainnav() {
  const Link = [
    { name: "Home", link: "/" },
    { name: "Flashcard", link: "/" },
    { name: "Contact", link: "/" },
    { name: "FAQ", link: "/" },
  ];
  return (
    <>
      <div className="shadow-md w-full  top-0 left-0 ">
        <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
          {/*logo section*/}
          <div className="flex text-2xl cursor-pointer items-center gap-2">
            <span className="font-bold text-blue-800">
              Hygge<span className="text-blue-900">X</span>
            </span>
          </div>
          {/*nav Link section*/}
          <ul className="md:flex pl-9 md:pl-0">
            {Link.map((link) => (
              <li
                className="font-semibold py-2 my-7 md:my-0 md:ml-8"
                key={link.name}
              >
                <a href="/">{link.name}</a>
              </li>
            ))}
            <button className="btn bg-blue-800 text-white py-2 px-8 md:ml-8 rounded-3xl md:static">
              Login
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}
