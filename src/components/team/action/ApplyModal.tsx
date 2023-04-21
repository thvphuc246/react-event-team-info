import ReactModal from "react-modal";
import "./ApplyModal.scss";
import { SetStateAction, useState } from "react";
import { buttonClasses, searchBarLabelClasses, textareaInputClasses } from "utils/classes";

const ApplyModal = (): JSX.Element => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [content, setcontent] = useState("");
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const openModal = () => {
    setmodalIsOpen(true);
  };

  const closeModal = () => {
    setmodalIsOpen(false);
  };

  const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
    setcontent(event.target.value);
  };

  const submitApp = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log({ content });
    closeModal();
  };

  return (
    <>
      <button
        type="button"
        className={buttonClasses.join(" ")}
        data-ripple-light="true"
        onClick={openModal}
      >
        Apply
      </button>

      <ReactModal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Team Apply Modal"
      >
        <form className="flex flex-col gap-4" onSubmit={submitApp}>
          <div>Send your motivation message to the team</div>
          <div className="w-[500px] h-[500px]">
            <div className="relative w-full min-w-[200px]">
              <textarea
                className={textareaInputClasses.join(" ")}
                placeholder=""
                onChange={handleChange}
              ></textarea>
              <label className={searchBarLabelClasses.join(" ")}>Message</label>
            </div>
          </div>
          <button type="submit" className={buttonClasses.join(" ")} data-ripple-light="true">
            Send Application
          </button>
        </form>
      </ReactModal>
    </>
  );
};

export default ApplyModal;
