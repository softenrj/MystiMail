import React, { useState } from 'react';
import { FaPaperPlane, FaSignature } from 'react-icons/fa';

export default function Sendopt() {
  const [attachSignature, setAttachSignature] = useState(false);

  const handleSendEmail = () => {
    // Logic to send email
    console.log('Email sent with signature:', attachSignature);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md w-full">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={attachSignature}
          onChange={() => setAttachSignature(!attachSignature)}
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
