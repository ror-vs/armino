import React from "react";
import { Button, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getUsers, setloading, setloader } from "../../redux/feature/user";
import styles from "../../styles/Home.module.css";
import AppHeader from "../../comonents/Header";
import { useRouter } from "next/router";

const index = () => {
  // const editUser = useSelector((state) => state?.users?.edit);
  const users = useSelector((state) => state?.value);
  const [editBtn, setEditBtn] = useState(false);
  const editUser = {};
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

  const onUpdate = (values) => {
    dispatch(getUsers(users));
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
          {editBtn ? (
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
                  value: editUser?.values?.name,
                },
                {
                  name: ["email"],
                  value: editUser.values?.email,
                },
                {
                  name: ["address"],
                  value: editUser?.values?.address,
                },
                {
                  name: ["phone"],
                  value: editUser.values?.phone,
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
          ) : (
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
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              style={{ padding: "100px 20px" }}
              form={form}
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
                Add User
              </Button>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;