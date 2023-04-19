import React from "react";
import "../../../styles/login.css";
import undraw_medicine_b1ol from "../../../assets/undraw_medicine_b-1-ol.svg";
import { Button, Checkbox, Form, Input, message } from "antd";
import jaypee_logo from "../../../assets/jaypee_logo.png";
const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = (values) => {
    console.log(values.email);
    if (values.email && values.password) {
      if (
        values.email === "admin@gmail.com" ||
        values.email === "admin@neuralsift.com"
      ) {
        if (values.password === "rsingh@neural") {
          localStorage.setItem("jaypee", values.email);
          window.location.reload(false);
        } else {
          messageApi.open({
            type: "error",
            content: "Password is not correct!",
          });
        }
      } else {
        messageApi.open({
          type: "error",
          content: "User is not registered!",
        });
      }
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="outside-container">
      {contextHolder}
      <section className="main overflow-hidden">
        <div
          className="flex flex-col align-middle justify-center rounded-md  drop-shadow-xl"
          style={{
            width: 400,
            backgroundColor: "rgb(255, 255, 255,.3)",
            // backgroundColor: "rgb(210, 247, 126,.3)",
            boxShadow: "5px 10px 10px #f28021",
          }}
        >
          <div className="rounded-lg">
            {/* <h1 className="text-center font-bold text-6xl mt-2 mb-4 drop-shadow-md hover:drop-shadow-xl">
              Logo
            </h1> */}
            <div className="flex justify-center items-center">
              <img
                className="w-40 h-18 mt-2 mb-4 ml-auto mr-auto hover:drop-shadow-xl"
                src={jaypee_logo}
                alt="jaypee_logo"
              />
            </div>

            <div
              className="separator ml-auto mr-auto hover:drop-shadow-xl"
              style={{ backgroundColor: "#f28021" }}
            ></div>
            <p
              className="text-green-900 mb-3 text-center font-bold drop-shadow-md hover:drop-shadow-xl"
              style={{ color: "#f28021" }}
            >
              Giving Power to your Health
            </p>
          </div>
          <Form
            name="login"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="w-3/4 ml-auto mr-auto"
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
              className="min-w-full"
            >
              <Input
                placeholder="Email"
                className="min-w-full rounded-xl pt-2 pb-2"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Password"
                className="min-w-full rounded-xl pt-2 pb-2"
              />
            </Form.Item>

            {/* <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            ></Form.Item> */}
            <div className="forget-area flex flex-row align-middle justify-between w-full mt-0 relative bottom-2 ml-auto">
              <Checkbox>Remember me</Checkbox>
              <div className="div cursor-pointer">Forgot Password</div>
            </div>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                type="primary"
                className=" text-white hover:bg-green-300 mt-2"
                htmlType="submit"
                style={{ backgroundColor: "#0153a5" }}
              >
                <text className="text-white pl-2 pr-2 min-h-fit min-w-fit text-md uppercase tracking-widest">
                  Login
                </text>
              </Button>
            </Form.Item>
          </Form>
        </div>
        <section className="relative top-14 -left-6">
          <img
            src={undraw_medicine_b1ol}
            alt="svg img"
            style={{ width: 550 }}
          />
        </section>
      </section>
    </div>
  );
};

export default Login;
