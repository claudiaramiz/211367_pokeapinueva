import React from "react";
import './navbar.css'

const Pagination = (props) => {

    const { onLeftClick, onRightClick, page, totalPages } = props;

    return (
        <div className="pagination">
            <button onClick={onLeftClick} className="pagination-btn">Anterior</button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick} className="pagination-btn" >Siguiente</button>
        </div>
    );
}

export default Pagination;