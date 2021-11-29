import CheckOutlined from "@ant-design/icons/CheckOutlined";
import { Checkbox } from "antd";
import { FC, useCallback } from "react";

import styles from "./Task.module.scss";

export interface ITaskBaseProps {
  title: string;
}

export interface ITaskCompletedProps extends ITaskBaseProps {
  isCompleted: true;
}

export interface ITaskNotCompletedProps extends ITaskBaseProps {
  isCompleted: false;
  onComplete: () => void;
}

export type ITaskProps = ITaskNotCompletedProps | ITaskCompletedProps;

export const Task: FC<ITaskProps> = (props) => {
  const handleComplete = useCallback(() => {
    if (!props.isCompleted) {
      (props as ITaskNotCompletedProps).onComplete();
    }
  }, [props]);

  return (
    <div className={styles.task}>
      {props.isCompleted ? (
        <div className={styles.checkbox}>
          <CheckOutlined className={styles.icon} />
          {props.title}
        </div>
      ) : (
        <Checkbox
          className={styles.checkbox}
          onChange={handleComplete}
          value={props.isCompleted}
        >
          {props.title}
        </Checkbox>
      )}
    </div>
  );
};
