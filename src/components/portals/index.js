/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Modal from "./Modal";

const Portals = () => {
  const [showModal, toggleModal] = useState(false);
  return (
    <div className="pa4">
      <h2 data-cy="title" className="tl">
        Portals
      </h2>
      <p className="tl">Modal Dialog with Portals</p>
      <button
        id="show-modal"
        data-cy="show-modal"
        onClick={() => toggleModal(!showModal)}
      >
        Toggle Modal
      </button>
      {showModal ? (
        <Modal>
          <div className="flex items-center justify-center fixed h-100 w-100 top-0 left-0 bg-black-90 z-9999">
            <div className="pa4 bg-white">
              <h1 data-cy="modal-title">
                Would you like to reach me on Github?
              </h1>
              <div className="tc buttons">
                <a
                  id="github-link"
                  className="mh2 no-underline pa2 bg-red black-80 ba br2 b--transparent dim"
                  href="https://github.com/saadaouad"
                >
                  Yes
                </a>
                <button
                  id="hide-modal"
                  data-cy="hide-modal"
                  className="mh2 pa2 bg-red black-80 ba br2 b--transparent dim pointer"
                  href="/#"
                  onClick={() => toggleModal(!showModal)}
                >
                  No, I'm not interested
                </button>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Portals;
