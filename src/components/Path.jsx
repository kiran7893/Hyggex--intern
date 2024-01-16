import { IoHomeOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
export default function Path() {
  return (
    <>
      <div className="py-7 px-10 flex gap-2">
        <IoHomeOutline className="py-30" />
        <IoChevronForward />
        <span>FlashCard</span>
        <IoChevronForward />
        <span>Mathematics</span>
        <IoChevronForward />
        <span className="text-blue-800 font-semibold">
          Relation and Function
        </span>
      </div>
    </>
  );
}
