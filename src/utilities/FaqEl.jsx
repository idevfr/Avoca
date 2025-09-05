import { useState } from "react";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";

function FaqEl({ ques, ans }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((open) => !open);
  }
  return (
    <div className="border-y border-green-950">
      <div className="space-y-6 px-4 py-3 select-none">
        <div
          onClick={handleClick}
          className="flex w-full items-center justify-between gap-2"
        >
          <h3 className="font-semibold tracking-wider hover:cursor-pointer hover:underline">
            {ques}
          </h3>
          <div className="h-5 w-5 text-center">
            {!isOpen && <CiCircleChevDown />}
            {isOpen && <CiCircleChevUp />}
          </div>
        </div>
        <p className={`pl-4 ${isOpen ? "block" : "hidden"} `}>{ans}</p>
      </div>
    </div>
  );
}

export default FaqEl;
