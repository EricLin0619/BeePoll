export default function ProposalCard() {
  return (
    <div className="card w-80 bg-neutral text-neutral-content p-4 bg-white shadow-md mt-3">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Cookies!</h2>
        <p>We are using cookies for no reason.</p>
        <progress
          className="progress progress-info w-56"
          value={0}
          max="100"
        ></progress>
        <progress
          className="progress progress-info w-56"
          value={25}
          max="100"
        ></progress>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Accept</button>
          <button className="btn btn-ghost">Deny</button>
        </div>
      </div>
    </div>
  );
}
