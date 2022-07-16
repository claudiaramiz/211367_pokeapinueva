import React from "react";
import './navbar.css';
import { useTranslation } from 'react-i18next';

const Pagination = (props) => {

    const { onLeftClick, onRightClick, page, totalPages } = props;
    const { t } = useTranslation();

    return (
        <div className="pagination">
            <div className="pagination-container">
                <button onClick={onLeftClick} className="btn-lang">{t("last")}</button>
                <div className="pagination-text" >{page} de {totalPages}</div>
                <button onClick={onRightClick} className="btn-lang" >{t("next")}</button>
            </div>
        </div>
    );
}

export default Pagination;