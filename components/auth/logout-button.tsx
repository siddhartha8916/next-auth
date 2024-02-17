import { logout } from "@/actions/logout";
import React from "react";

type LogoutButtonProps = {
  children?: React.ReactNode;
};

const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};

export default LogoutButton;
