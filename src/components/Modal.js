function Modal(props) {
    function cancelHandle() {
      props.onCancel();
    };

    function confirmHandle() {
      props.onConfirm();
    }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandle}>Cancel</button>
      <button className="btn" onClick={confirmHandle}>Confirm</button>
    </div>
  );
}

export default Modal;
