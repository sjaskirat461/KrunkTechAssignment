import botLogo from '../../public/BotLogo.jpg';
import verified from '../../public/verified.jpg';

export default function Header() {
  return (
    <div className="flex flex-row  justify-start gap-6 bg-blue-100 p-4 relative w-full rounded-t-2xl">
      <div className="w-[18%]">
        <div className="relative">
          <img
            src={botLogo}
            alt="Bot Logo"
            className="h-[45%] rounded-full relative"
          />
          <p className="text-xs absolute top-[74%] left-[74%] z-50">🟢</p>
        </div>
      </div>
      <div className="flex w-full flex-row justify-between flex-wrap">
        <div className="flex flex-col justify-between">
          <div className="flex flex-row items-center gap-2 text-blue-500 font-bold text-3xl">
            <p>Timpu</p>
            <img src={verified} alt="verified" className="h-4 rounded-full" />
          </div>
          <p className="text-blue-500 font-semibold text-xl">Chat assistant</p>
        </div>
        <div className="flex flex-row items-end gap-1">
          <div className="flex flex-row flex-nowrap items-center gap-2">
            <p className="text-xs">🟢</p>
            <p className="text-blue-500 font-semibold text-xl">Online</p>
          </div>
        </div>
      </div>
    </div>
  );
}
