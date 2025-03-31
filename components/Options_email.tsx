import React from "react";
import { FiUser, FiMail, FiChevronDown } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { updateEmail } from "@/features/Emailchange/Slice";
import { RootState } from "@/app/store/store";

export default function OptionsEmail() {
  const dispatch = useDispatch();
  const Email: string = useSelector((state: RootState) => state.email);

  const handleEmailChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateEmail(event.target.value));
  };

  return (
    <div className="max-w-2xl p-6 bg-white flex items-center space-x-6">
      <div className="relative flex-1">
        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <select
          className="w-full pl-10 pr-12 py-3 text-lg border-2 border-gray-200 rounded-xl appearance-none
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          value={Email}
          onChange={handleEmailChange}
        >
          <option value="rjsharmase@gmail.com" className="text-lg">
            rjsharmase@gmail.com
          </option>
          <option value="fastgame308@gmail.com" className="text-lg">
            fastgame308@gmail.com
          </option>
        </select>
        <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>

      <span className="text-blue-500 font-medium">To</span>

      <div className="relative flex-1">
        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          className="w-full pl-10 pr-4 py-3 text-lg border-2 border-gray-200 rounded-xl
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          placeholder="Enter recipient email"
        />
      </div>
    </div>
  );
}
