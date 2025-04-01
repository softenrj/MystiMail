import React, { useState } from 'react';
import { FaPaperPlane, FaSignature } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import { updateSignature } from '@/features/Email/EmailSlice';
import { RootState } from "@/app/store/store";
import axios from 'axios';
import { toast } from 'react-toastify';  // Import toastify

// Make sure to import the CSS for react-toastify in your main app file (like _app.tsx)
// import 'react-toastify/dist/ReactToastify.css';

export default function Sendopt() {
  const sig = useSelector((st: RootState) => st.Email.AttachSignature);
  const dispatch = useDispatch();
  const Email = useSelector((st: RootState) => st.Email);
  const [isSending, setIsSending] = useState(false);  // State to track if the email is being sent

  const handleSendEmail = async () => {
    setIsSending(true);  // Disable the button

    try {
      // Sending the email using axios
      await axios.post('/api/Emailsend', { Email });
      
      toast.success("Email sent successfully!");

      console.log('Email sent with signature:', sig);
    } catch (err) {
      // Show error toast if something went wrong
      toast.error("Failed to send email. Please try again.");
      console.error("Error sending email:", err);
    } finally {
      setIsSending(false); 
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md w-full">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={sig}
          onChange={() => dispatch(updateSignature(!sig))}
          className="mr-2"
        />
        <label className="flex items-center">
          Attach Signature <FaSignature className="ml-2" />
        </label>
      </div>
      <button
        onClick={handleSendEmail}
        disabled={isSending}  // Disable the button when sending
        className={`bg-blue-500 text-white px-4 py-2 rounded flex items-center hover:bg-blue-600 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isSending ? 'Sending...' : 'Send Email'} <FaPaperPlane className="ml-2" />
      </button>
    </div>
  );
}
