import React, { useState } from 'react';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

export const InputEmail = () => {
  const [isValid, setIsValid] = useState('');
  const handleInput = (evt) => {
    const { value } = evt.target;
    const emailRegex = /[a-zA-Z]/i;

    if (emailRegex.test(value.trim())) {
      setIsValid('valid');
    } else {
      setIsValid('invalid');
    }

    if (!value) {
      setIsValid('');
    }
  };
  return (
    <>
      <div className="con-input">
        <input
          type="text"
          onInput={handleInput}
          placeholder="Email"
          className={isValid}
        />
        <div className="icons">
          <i className="check">
            <CheckCircleOutlined />
          </i>
          <i className="x">
            <CloseCircleOutlined />
          </i>
        </div>
      </div>
      <style jsx>
        {`
          .con-input {
            position: relative;
            display: flex;
            align-items: center;
          }

          .con-input input {
            padding: 11px 15px;
            border-radius: 25px;
            border: 0px;
            box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
            transition: all 0.25s ease;
            min-width: 258px;
          }

          i {
            position: absolute;
            transition: all 0.25s ease;
            font-size: 1.3rem;
            opacity: 0;
            visibility: hidden;
            transform: scale(0.5);
          }

          .icons {
            position: absolute;
            right: 12px;
            top: 15%;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
            width: 20px;
            height: 20px;
            transition: all 0.25s ease;
          }

          .check {
            color: #3aba6f;
            text-shadow: 0px, 5px, 10px, rgba(58, 186, 111, 0.3);
          }

          .x {
            color: rgb(240, 90, 92);
            text-shadow: 0px, 5px, 10px, rgba(240, 90, 92, 0.3);
          }

          input.valid ~ .icons .check {
            opacity: 1;
            visibility: visible;
            transform: scale(1);
          }
          input.invalid ~ .icons .x {
            opacity: 1;
            visibility: visible;
            transform: scale(1);
          }

          .con-input input:focus {
            transform: translate(0, -6px);
            box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.09);
            padding-left: 20px;
          }

          .con-input input:focus ~ .icons {
            transform: translate(0, -6px);
          }
        `}
      </style>
    </>
  );
};
