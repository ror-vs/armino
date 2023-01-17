import React from "react";
import { Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/feature/user";
import styles from "../../styles/Home.module.css";
import AppHeader from "../../components/Header";
import { useRouter } from "next/router";
import UserForm from "../../components/UserForm";

const Index = () => {
  const users = useSelector((state) => state?.value);
  const router = useRouter();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    dispatch(
      getUsers([
        ...users,
        {
          id: Number((Math.random() * 100).toFixed(0)),
          values: values,
        },
      ])
    );
    form.resetFields();
    router.push("/users");
  };

  return (
    <div>
      <div className={styles.main}>
        <AppHeader />
        <div
          style={{
            maxWidth: "800px",
            margin: "100px auto",
            boxShadow: "0px 2px 25px rgba(51, 51, 51, 0.1)",
          }}
        >
          <UserForm onFinish={onFinish} btnText="Add User" />
        </div>
      </div>
    </div>
  );
};

export default index;
