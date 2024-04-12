import bag from '../../public/Bag.jpg';
import verified from '../../public/verified.jpg';

export default function Product() {
  return (
    <div className="mr-auto mt-2">
      <div className="w-[85%] bg-gradient-to-r from-[#E5EEFF] rounded-2xl p-2">
        <button className="bg-white p-2 rounded-2xl flex flex-row items-center gap-4">
          <img src={bag} alt="bag" className="h-16 rounded-md" />
          <div className="flex flex-col w-full">
            <div className="flex flex-row gap-3 items-center justify-start gap-8">
              <p className="font-semibold">Bags on Timpu</p>
              <img src={verified} alt="verified" className="rounded-full h-4" />
            </div>
            <div className="flex flex-row gap-3 items-center  justify-start gap-8">
              <p className="text-[#949494]">1123 Products</p>
              <p className="flex flex-row items-center text-[#949494] font-bold text-xl">
                {' '}
                &gt;
              </p>
            </div>
          </div>
        </button>
        <p className="mt-1">
          Or set filter and help us choose the best bag for you.
        </p>
      </div>
      <p className="ml-2">4:48 PM</p>
    </div>
  );
}
