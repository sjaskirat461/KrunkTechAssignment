import Tags from './Tags';
const TAGS = ['Clutch', 'Fabric Lining', 'Baggit', 'Multi Utility'];

export default function TagSection() {
  return (
    <div className="mr-auto">
      <p className="mb-2 text-[#949494]">Popular tags for handbag</p>
      <div className="flex flex-row flex-nowrap gap-4">
        <ul className="flex flex-row flex-wrap font-semibold gap-2">
          {TAGS.map((tag) => (
            <Tags key={tag} tag={tag} />
          ))}
        </ul>
        <button className="text-4xl text-[#4C82EF] font-bold flex flex-row items-center">
          {' '}
          &gt;
        </button>
      </div>
    </div>
  );
}
