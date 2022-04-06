import React from 'react';
import "./scroll.css";

function Scroll({children, style}) {
  return (<div className="container">
    <div className="container__content" style={style}>
        {children}
    </div>

    <div className="container__fading"></div>
</div>);
}

export default Scroll;
