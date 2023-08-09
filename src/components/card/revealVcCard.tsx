export default function RevealVcCard(props: any) {
  const handleButtonClick = async () => {
    if (document) {
      (
        document.getElementById("my_modal_4") as HTMLFormElement
      ).showModal();
    }
  }

  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <form method="dialog" className="modal-box p-8 h-1/2 flex flex-col">
          <h3 className="font-bold text-lg text-white">
            Please save your VC for verifying
          </h3>
        {props.vcData}
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}