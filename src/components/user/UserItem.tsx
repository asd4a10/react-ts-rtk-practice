import React, { FC } from "react";
import { IUser } from "../../models/IUser";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div
      style={{
        padding: 15,
        border: "1px grey solid",
      }}
    >
      {user.id}. {user.name} lives in {user.address.city} city (
      {user.address.street} street)
    </div>
  );
};

export default UserItem;
