function Todo(props) {
    function deleteHandle() {
        
    }

    return (
      <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandle}>Delete</button>
        </div>
      </div>
    );
}

export default Todo;