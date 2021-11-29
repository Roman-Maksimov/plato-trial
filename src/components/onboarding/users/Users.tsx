import { Menu, Typography } from "antd";
import { SelectEventHandler } from "rc-menu/lib/interface";
import { FC, useCallback } from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useListUsersQuery } from "../../../redux/rtk/typicodeApi";
import { actions } from "../../../redux/slices/onboarding/usersSlice";
import styles from "./Users.module.scss";

export const Users: FC = () => {
  const dispatch = useAppDispatch();
  const { userId } = useAppSelector((state) => state.onboarding.users);
  const { data } = useListUsersQuery();

  const handleSelect = useCallback<SelectEventHandler>(
    (event) => {
      dispatch(actions.setUser(parseInt(event.key) || undefined));
    },
    [dispatch]
  );

  return (
    <div className={styles.users}>
      <Typography.Title level={2} className={styles.header}>
        Users
      </Typography.Title>
      <Menu onSelect={handleSelect} selectedKeys={userId ? [`${userId}`] : []}>
        {data
          ? data.map((user) => <Menu.Item key={user.id}>{user.name}</Menu.Item>)
          : null}
      </Menu>
    </div>
  );
};
