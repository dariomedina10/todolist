import React, { Fragment } from "react";
import '../hojas_de_estilos/checkbox.css';


const Checkbox = props => {
  // (A)
  const {
    onChange,
    data: { id, description, done }
  } = props;
  return (
    <Fragment>
      <label className="todo new-item">
        {/*(B) (C)*/}
        <input
          className="todo__state"
          name={id}
          type="checkbox"
          style={{ color: 'red', accentColor: 'green' }}
         
                   defaultChecked={done}
          onChange={onChange}
          
        />
        <div className="todo__text">{description}</div>
      </label>
    </Fragment>
  );
};


/*const Checkbox = () => {
	return <div>Checkbox!</div>;
};*/

export default Checkbox;