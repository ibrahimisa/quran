import React from 'react';
import "./scroll.css";

function Scroll({children}) {
  return (<div class="container">
    <div class="container__content">
        {children}
    </div>

    <div class="container__fading"></div>
</div>);
}

export default Scroll;
