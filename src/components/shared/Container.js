import React, { useState } from 'react';
import "./Container.css";
import { NavLink } from "react-router-dom";
import Tabs from "./Tabs";
import FeedbackModal from "./FeedbackModal";

const Container = ({ children, basePath, tabs, pageName, selectBox }) => {
    const [showModal, setShowModal] = useState(false);

    const handleIconClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return <>
        <Tabs basePath={basePath} tabs={tabs} />
        <section className="section-header">
            <div className="header-left">{pageName}</div>
            <div className="header-center">{selectBox}</div>
            <div className="header-right">
                <img
                    src="https://i.ibb.co/DKqPS20/icon-flat-info.png"
                    alt="Info Icon"
                    onClick={handleIconClick}
                    style={{ cursor: 'pointer' }}
                />
            </div>
        </section>
        <section className="section-body">
            <div className="content-section">{children}</div>
        </section>
        <FeedbackModal show={showModal} handleClose={handleCloseModal} />
    </>
}

export default Container;