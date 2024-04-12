export default function ChatSection() {
  return (
    <div className="flex flex-col relative gap-4">
      <div className=" flex-flex-col items-start w-[75%]">
        <p className="p-3 rounded-2xl bg-gradient-to-r from-[#E5EEFF]">
          Hi Sam! I am your personal shopping assistant , how can i help you
          today ?
        </p>
        <p className="ml-2">4:45 PM</p>
      </div>
      <div className=" flex flex-col w-[75%] ml-auto">
        <p className="p-3 rounded-2xl bg-[#DCF7C5]">
          I am looking for a hand bag, with long strap .
        </p>
        <p className="flex ml-auto pr-2">4:46 PM</p>
      </div>
    </div>
  );
}
