import React from "react";
import { Button, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  getUsers,
  setloading,
  setloader,
  updateUser,
} from "../../redux/feature/user";
import styles from "../../styles/Home.module.css";
import AppHeader from "../../comonents/Header";
import { useRouter } from "next/router";

const index = () => {
  const editUser = {};
  const users = useSelector((state) => state?.value);
  const router = useRouter();
  const getId = router.query.userId;

  const user = users?.find((item) => {
    return item.id == getId;
  });

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onUpdate = (values) => {
    dispatch(updateUser({ id: user.id, values: values }));
    form.resetFields();
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
          <Form
            name="basic"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onUpdate}
            autoComplete="off"
            style={{ padding: "100px 20px" }}
            form={form}
            fields={[
              {
                name: ["name"],
                value: user?.values?.name,
              },
              {
                name: ["email"],
                value: user?.values?.email,
              },
              {
                name: ["address"],
                value: user?.values?.address,
              },
              {
                name: ["phone"],
                value: user?.values?.phone,
              },
            ]}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input initialvalues={editUser?.values?.name} />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "170px", margin: "0 auto", display: "block" }}
            >
              Update
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default index;
