import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandle() {
    setModalIsOpen(true);
  }

  function closeModalHandle() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandle}>
          Delete
        </button>
        {modalIsOpen && <Modal onCancel={closeModalHandle} onConfirm={closeModalHandle}/>}
        {modalIsOpen && <Backdrop onCancel={closeModalHandle}/>}
      </div>
    </div>
  );
}

export default Todo;
