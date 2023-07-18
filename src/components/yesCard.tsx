export default function YesCard() {
  return (
    <div className="card ml-8 w-[350px] p-2 mb-8 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer text-[#2E1503] ">
      <div className="card-body">
        <h2 className="card-title mb-2">Yes</h2>
        <div className="flex justify-between">
          <p className="text-xs text-left font-bold">Goerli</p>
          <p className="text-xs text-right font-bold">60%</p>
        </div>
        <progress
          className="progress progress-success w-auto"
          value={60}
          max="100"
        ></progress>
        <div className="flex justify-between">
          <p className="text-xs text-left font-bold">Mumbai</p>
          <p className="text-xs text-right font-bold">40%</p>
        </div>
        <progress
          className="progress progress-success w-auto"
          value={40}
          max="100"
        ></progress>
      </div>
    </div>
  )
}
