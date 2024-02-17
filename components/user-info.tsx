import { ExtendedUser } from "@/next-auth";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

type UserInfoProps = {
  user?: ExtendedUser;
  label: string;
};

const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex item-center justify-between rounded-lg px-3 py-2 shadow-sm border border-secondary">
          <p className="text-sm font-medium">ID</p>
          <p className="truncate text-xs max-w-[150px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.id}
          </p>
        </div>
        <div className="flex item-center justify-between rounded-lg px-3 py-2 shadow-sm border border-secondary">
          <p className="text-sm font-medium">Username</p>
          <p className="truncate text-xs max-w-[150px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.name}
          </p>
        </div>
        <div className="flex item-center justify-between rounded-lg px-3 py-2 shadow-sm border border-secondary">
          <p className="text-sm font-medium">Email</p>
          <p className="truncate text-xs max-w-[150px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.email}
          </p>
        </div>
        <div className="flex item-center justify-between rounded-lg px-3 py-2 shadow-sm border border-secondary">
          <p className="text-sm font-medium">Role</p>
          <p className="truncate text-xs max-w-[150px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.role}
          </p>
        </div>
        <div className="flex item-center justify-between rounded-lg px-3 py-2 shadow-sm border border-secondary">
          <p className="text-sm font-medium">Two Factor Authentication</p>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
