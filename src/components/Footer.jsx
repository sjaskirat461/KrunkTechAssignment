import label from '../../public/label.png';
import { ImAttachment } from 'react-icons/im';

export default function Footer() {
  return (
    <div className="bg-blue-100 p-2 rounded-b-2xl w-full">
      <div className="flex flex-row flex-wrap gap-3">
        <div className="flex flex-row justify-between p-3 rounded-2xl bg-white text-xl w-[75%]">
          <input
            type="text"
            placeholder="Type your message"
            className="focus:outline-none"
          />
          <button>
            <ImAttachment />
          </button>
        </div>
        <button className="px-8 py-1 text-4xl bg-[#4C82EF] rounded-2xl text-white font-semibold flex flex-row items-center">
          &gt;
        </button>
      </div>
      <div className="flex flex-row justify-center gap-1">
        <div className="text-[#B1B1B1] flex flex-row gap-2 items-center">
          <p>Powered by</p>{' '}
          <p className="font-semibold text-[#7A7F8C]">Krunk.io</p>
        </div>
        <img src={label} alt="label" className="h-12" />
      </div>
    </div>
  );
}
