export default function Secondnav() {
  const Link = [
    { name: "Quiz", link: "/" },
    { name: "Test", link: "/" },
    { name: "Game", link: "/" },
    { name: "Others", link: "/" },
  ];
  return (
    <>
      <div>
        <div className="md:px-10 py-4 px-40 md:flex justify-center items-center bg-white">
          {/*nav Link section*/}
          <ul className="md:flex pl-9 md:pl-0">
            <li className="font-bold text-blue-800 py-2 my-7  md:my-0 md:ml-8">
              <a href="/">Study</a>
            </li>
            {Link.map((link) => (
              <li
                className="font-semibold py-2 my-7 md:my-0 md:ml-8"
                key={link.name}
              >
                <a href="/">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
