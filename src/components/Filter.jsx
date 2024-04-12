import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';

export default function Filter({ filt }) {
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick((c) => !c);
  }

  let cssClass = 'p-0 m-0  rounded-lg text-l';
  if (click) {
    cssClass += 'text-[#4C82EF] border-[#4C82EF] border-2';
  } else {
    cssClass += 'bg-[#F4F4F4] text-[#737373]';
  }

  return (
    <div className={cssClass}>
      <button
        className="px-2 py-1 flex flex-row items-center gap-2"
        onClick={handleClick}
      >
        <p>{filt}</p>
        <RxCross2 className="font-bold" />
      </button>
    </div>
  );
}
