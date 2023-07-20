export default function SelectBar() {
  return (
    <div className="w-[170px] ml-4 mr-auto  mb-2 rounded-lg p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div>
        <select className="bg-white text-black select select-bordered w-[150px] max-w-xs">
          <option disabled selected>
            Status
          </option>
          <option>All</option>
          <option>Open</option>
          <option>Closed</option>
        </select>
      </div>
    </div>
  );
}
