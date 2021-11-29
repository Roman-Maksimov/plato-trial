import { Spin, Typography } from "antd";

import { useListUsersQuery } from "../../redux/rtk/typicodeApi";
import { Tasks } from "./tasks/Tasks";
import styles from "./Tracker.module.scss";
import { Users } from "./users/Users";

export const Tracker = () => {
  const { isLoading } = useListUsersQuery();

  return (
    <section className={styles.tracker}>
      <Typography.Title className={styles.header}>
        Onboarding tracker
      </Typography.Title>
      <div className={styles.container}>
        {isLoading ? (
          <div className={styles.loader}>
            <Spin />
          </div>
        ) : (
          <>
            <Users />
            <Tasks />
          </>
        )}
      </div>
    </section>
  );
};
