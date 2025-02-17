import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, message } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

interface LoginValues {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onFinish = (values: LoginValues) => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            if (values.email === "phuanh@gmail.com" && values.password === "12345") {
                message.success("Login successful!");
                navigate("/home");
            } else {
                message.error("Incorrect email or password!");
            }
        }, 1500);
    };

    return (
        <div 
    className="flex items-center justify-center min-h-screen bg-cover bg-center p-6" 
    style={{ backgroundImage: "url('/src/assets/Login.jpg')" }}>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-lg"></div>

    <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-2xl flex flex-col md:flex-row max-w-3xl w-full overflow-hidden border border-gray-300">

                {/* Image Section */}
                <div 
                        className="hidden md:block md:w-2/3 bg-cover bg-center" 
                        style={{ backgroundImage: "url('/src/assets/Hand.png')" }}>
                </div>

                {/* Login Form Section */}
                <div className="w-full md:w-2/3 p-8 flex flex-col justify-center">
                    <div className="text-center">
                        <img src="/src/assets/Wedwise.png" alt="Logo" className="mx-auto w-16" />
                        <h2 className="text-2xl font-bold mt-4 text-gray-700">Welcome Back</h2>
                        <p className="text-gray-500 text-sm">Sign in to continue</p>
                    </div>

                    <Form layout="vertical" onFinish={onFinish} className="mt-6">
                        <Form.Item
                            label="Email or phone number"
                            name="email"
                            rules={[{ required: true, message: "Please enter your email!" }]}
                        >
                            <Input size="large" placeholder="Enter your email" className="rounded-lg border-gray-300" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: "Please enter your password!" }]}
                        >
                            <Input.Password size="large" placeholder="Enter password" className="rounded-lg border-gray-300" />
                        </Form.Item>

                        <div className="flex items-center justify-between text-sm">
                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
                        </div>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 transition-all"
                                size="large"
                                loading={loading}
                            >
                                Sign in
                            </Button>
                        </Form.Item>
                    </Form>

                    <Button
                        icon={<GoogleOutlined />}
                        className="w-full bg-gray-900 text-white py-3 rounded-lg mt-2 flex items-center justify-center hover:bg-gray-700 transition-all"
                        size="large"
                    >
                        Sign in with Google
                    </Button>

                    <p className="text-center text-gray-600 mt-4">
                        Don’t have an account? <a href="#" className="text-blue-500 hover:underline">Sign up now</a>
                    </p>
                </div>  
            </div>
        </div>
    );
};

export default Login;
