import React from "react";

interface IButtonProps {
  canClick: boolean;
  loading: boolean;
  actionText: string;
}

export const Button: React.FC<IButtonProps> = ({
  canClick,
  loading,
  actionText,
}) => (
  <button
    className={`text-lg font-medium focus:outline-none text-white py-4  transition-colors ${
      canClick
        ? "bg-purple-700 bg-opacity-75 hover:bg-purple-700"
        : "bg-gray-300 pointer-events-none "
    }`}
  >
    {loading ? "Loading..." : actionText}
  </button>
);
