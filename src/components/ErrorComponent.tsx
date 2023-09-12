import React, { useState, useEffect } from "react";
import "../scss/components/_errorComponent.scss";

const ErrorComponent = ({ error, httpStatus }) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(true);
  }, [error]);

  const closeModal = () => {
    setModalVisible(false);
  };
  const apiErrorHandler = (error, httpStatus) => {
    console.log("вызывается компонент", error);
    if (httpStatus === null || httpStatus === undefined) {
      return error;
    }
    if (httpStatus === 400 ) {
      console.log("заходим сюда начало 400", error);
      if (error.errors && error.errors[0]) {
        const fieldError = error.errors[0].field;
        const messageError = error.errors[0].message;
        return fieldError + ": " + messageError;
      } else if (error && error.data && error.data.error) {
        return error.data.error + ": " + error.data.path;
      } else {
        console.log("заходим   error.message", error);
        return error.message;
      }
    }
    if (httpStatus === 401) {
      if (error.data) {
        return error.data.message;
      } else {
        return error.message;
      }
    }
    if (httpStatus === 403) {
      return error.data.message;
    } 
    if ( httpStatus === 500 ) {
      return error.data.error + ": " + error.data.path;
    }
    else {
      console.log("заходим else", error);
      return error.data.message;
    }
  };
  const errorMessage = apiErrorHandler(error, httpStatus);

  return (
    <div>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="centered-text">Error</div>
            <p className="error-message">{errorMessage}</p>
            <button className="custom-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorComponent;
