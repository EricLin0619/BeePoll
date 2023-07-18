export default function NoCard() {
  return (
    <div className="card ml-8 w-[350px] p-2 mb-8 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer text-[#2E1503] ">
      <div className="card-body">
        <h2 className="card-title mb-2">No</h2>
        <div className="flex justify-between">
          <p className="text-xs text-left font-bold">Goerli</p>
          <p className="text-xs text-right font-bold">35%</p>
        </div>
        <progress
          className="progress progress-error w-auto"
          value={35}
          max="100"
        ></progress>
        <div className="flex justify-between">
          <p className="text-xs text-left font-bold">Mumbai</p>
          <p className="text-xs text-right font-bold">65%</p>
        </div>
        <progress
          className="progress progress-error w-auto"
          value={65}
          max="100"
        ></progress>
      </div>
    </div>
  )
}
