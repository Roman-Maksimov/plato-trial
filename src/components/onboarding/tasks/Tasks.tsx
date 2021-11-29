import { skipToken } from "@reduxjs/toolkit/query";
import { Spin, Typography } from "antd";
import { FC, useCallback } from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useGetTodosQuery } from "../../../redux/rtk/typicodeApi";
import { ITodo } from "../../../redux/scheme/typicode";
import { actions } from "../../../redux/slices/onboarding/tasksSlice";
import { Task } from "./Task";
import styles from "./Tasks.module.scss";

export const Tasks: FC = () => {
  const dispatch = useAppDispatch();
  const { userId } = useAppSelector((state) => state.onboarding.users);
  const { completedTasks } = useAppSelector((state) => state.onboarding.tasks);
  const { data, isLoading } = useGetTodosQuery(userId ?? skipToken);

  const handleSetCompleted = useCallback(
    (taskId: ITodo["id"]) => () => {
      dispatch(actions.setTaskCompleted(taskId));
    },
    [dispatch]
  );

  const items = data
    ? data.map((item) => (
        <Task
          key={item.id}
          title={item.title}
          isCompleted={Boolean(completedTasks[item.id])}
          onComplete={handleSetCompleted(item.id)}
        />
      ))
    : null;

  return (
    <div className={styles.tasks}>
      <Typography.Title level={2}>Tasks List</Typography.Title>
      {isLoading ? (
        <div className={styles.loader}>
          <Spin />
        </div>
      ) : (
        items
      )}
    </div>
  );
};
