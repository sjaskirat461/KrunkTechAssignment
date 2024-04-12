import { IoFilter } from 'react-icons/io5';
const FILTERS = ['Strap - Long', 'Color', 'Size', 'Brand', 'Material'];
import Filter from './Filter';

export default function Filters() {
  return (
    <div className="w-full">
      <div className="flex flex-row flex-wrap w-full justify-between items-center text-l  text-[#949494] mb-1">
        <p>Select Filters</p>
        <button className="flex flex-row flex-wrap items-center gap-1 font-semibold">
          <IoFilter />
          <p>Filter</p>
        </button>
      </div>
      <div className="flex flex-row flex-wrap gap-3">
        {FILTERS.map((filt) => (
          <Filter key={filt} filt={filt} />
        ))}
      </div>
    </div>
  );
}
