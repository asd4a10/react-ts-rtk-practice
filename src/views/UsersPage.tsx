import React, { FC } from "react";
import { userAPI } from "../services/UserService";
import List from "../components/shared/List";
import UserItem from "../components/user/UserItem";

const UsersPage: FC = () => {
  const { data: users } = userAPI.useFetchAllUsersQuery();

  return (
    <div>
      {users && (
        <List
          items={users}
          renderItem={(user) => <UserItem key={user.id} user={user} />}
        />
      )}
    </div>
  );
};

export default UsersPage;
