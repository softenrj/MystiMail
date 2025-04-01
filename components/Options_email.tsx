"use client";
import React, { useState } from "react";
import { FiUser, FiMail, FiChevronDown, FiEdit3 } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import {
  updateFrom,
  updateTo,
  updateBcc,
  updateSubject,
} from "@/features/Email/EmailSlice";
import { RootState } from "@/app/store/store";

export default function OptionsEmail() {
  const dispatch = useDispatch();
  const { from, to, bcc, subject } = useSelector((state: RootState) => state.Email);
  const [subjectInput, setSubjectInput] = useState(subject);
  const [toInput, setToInput] = useState(to);
  const [bccInput, setBccInput] = useState(bcc.join(", ")); // Join the array into a string initially

  

  const handleEmailChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(updateFrom(e.target.value));

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToInput(e.target.value);
    dispatch(updateTo(e.target.value));
  };

  const handleBccChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBccInput(value);
    const emails = value.split(",").map((email) => email.trim());
    dispatch(updateBcc(emails)); // dispatching an array
  };
  

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubjectInput(e.target.value);
    dispatch(updateSubject(e.target.value));
  };

  return (
    <div className="max-w-full bg-white flex flex-col space-y-3 ml-12">
      {/* From & To in compact grid */}
      <div className="flex justify-center self-start items-center gap-3">
        {/* From Field */}
        <div className="space-y-1 w-full md:w-auto">
          <label className="text-xs text-gray-500 font-medium">From</label>
          <div className="relative">
            <FiMail className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <select
              className="w-full pl-8 pr-6 py-1.5 text-sm border border-gray-200 rounded-md focus:border-blue-500 
                        focus:ring-1 focus:ring-blue-500 transition-all appearance-none bg-white"
              value={from}
              onChange={handleEmailChange}
              aria-label="From Email Address"
            >
              <option value="rjsharmase@gmail.com">rjsharmase@gmail.com</option>
              <option value="fastgame308@gmail.com">fastgame308@gmail.com</option>
            </select>
            <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          </div>
        </div>

        {/* To Field */}
        <div className="space-y-1 w-full md:w-auto">
          <label className="text-xs text-gray-500 font-medium">To</label>
          <div className="relative">
            <FiUser className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="email"
              className="w-full pl-8 pr-4 py-1.5 text-sm border border-gray-200 rounded-md
                        focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              placeholder="Recipient email"
              value={toInput}
              onChange={handleToChange}
              aria-label="Recipient Email"
              required
            />
          </div>
        </div>

        {/* BCC Field */}
        <div className="space-y-1 w-full md:w-2/5">
          <div className="flex justify-between items-center">
            <label className="text-xs text-gray-500 font-medium">BCC</label>
            <span className="text-xs text-gray-400">Separate emails with commas</span>
          </div>
          <div className="relative">
            <FiUser className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="email"
              className="w-full pl-8 pr-4 py-1.5 text-sm border border-gray-200 rounded-md
                      focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              placeholder="e.g., email1@domain.com, email2@domain.com"
              value={bccInput}
              onChange={handleBccChange}
              aria-label="BCC Emails"
            />
          </div>
        </div>
      </div>

      {/* Subject Field */}
      <div className="space-y-1 w-[80%]">
        <label className="text-xs text-gray-500 font-medium">Subject</label>
        <div className="relative">
          <FiEdit3 className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            className="w-full pl-8 pr-4 py-1.5 text-sm border border-gray-200 rounded-md
                      focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            placeholder="Email subject"
            value={subjectInput}
            onChange={handleSubjectChange}
            aria-label="Email Subject"
            required
          />
        </div>
      </div>
    </div>
  );
}
