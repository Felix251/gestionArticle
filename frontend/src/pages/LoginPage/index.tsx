import { Button, Checkbox, Form, Input, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onFinish = (values: any) => {
    const { username, password } = values;
    console.log("Success:", { username, password });

    if (username === "Admin" && password === "Admin") {
      message.success("Login successful");
      navigate("/admin");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 16 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 700 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      {errorMessage && (
        <Form.Item wrapperCol={{ offset: 16, span: 16 }}>
          <div style={{ color: "red" }}>{errorMessage}</div>
        </Form.Item>
      )}

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 16, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 16, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
