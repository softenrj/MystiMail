import React, { useState } from 'react';
import { FaPaperPlane, FaSignature } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import { updateSig } from '@/features/Signature/sigSlice';
import { RootState } from "@/app/store/store";

export default function Sendopt() {
  const sig = useSelector((st: RootState) => st.signature);
  const dispatch = useDispatch();

  const handleSendEmail = () => {
    console.log('Email sent with signature:', sig);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md w-full">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={sig}
          onChange={() => dispatch(updateSig(!sig))}
          className="mr-2"
        />
        <label className="flex items-center">
          Attach Signature <FaSignature className="ml-2" />
        </label>
      </div>
      <button
        onClick={handleSendEmail}
        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
      >
        Send Email <FaPaperPlane className="ml-2" />
      </button>
    </div>
  );
}
