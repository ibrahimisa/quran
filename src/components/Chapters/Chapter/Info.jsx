import React, { useRef, useState } from 'react';
import { Modal } from 'react-bootstrap';
import infoIcon from './info.png';
import infoHover from './info-hover.png';
import axios from 'axios';

function Info({ style, id, name }) {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const infoTextRef = useRef(null);

  const fetchChapterInfo = (id) => {
    axios
      .get(`https://api.quran.com/api/v4/chapters/${id}/info?language=en`)
      .then((res) => {
        setInfo(res.data.chapter_info);
      });
  };

  return (
    <div style={style}>
      <Modal
        show={show}
        centered
        onHide={() => {
          handleClose();
        }}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p ref={infoTextRef}>
            {(() => {
              if (infoTextRef.current) {
                infoTextRef.current.innerHTML = info.text;
              }
            })()}
          </p>
          <p>~{info.source}</p>
        </Modal.Body>
      </Modal>

      <img
        src={infoIcon}
        alt='info'
        style={{ width: '50px', height: '50px' }}
        onMouseOver={(e) => {
          e.target.src = infoHover;
        }}
        onMouseOut={(e) => {
          e.target.src = infoIcon;
        }}
        onClick={(e) => {
          handleShow(true);
          fetchChapterInfo(id);
        }}
      />
    </div>
  );
}

export default Info;
