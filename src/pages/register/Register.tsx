import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import AuthService from '../service/AuthService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);

    try {
      const { fullName, phone, email, password, avatarUrl } = values;
      const user = {
        fullName,
        phone,
        email,
        password,
        avatarUrl,
        role: 1, // Role mặc định là 1 (user)
      };

      // Gọi hàm register từ AuthService
      const response = await AuthService.register(user);

      // Kiểm tra xem có token trong response không, nếu có thì đăng ký thành công
      if (response && response.status === 200) {
        message.success('Registration successful');

        // Điều hướng về trang login sau khi đăng ký thành công
        setTimeout(() => {
          navigate('/'); // Điều hướng về trang đăng nhập
        }, 1000); // Đợi 1 giây để người dùng thấy thông báo
      } else {
        // Nếu không có status 200, hiển thị lỗi
        message.error('Registration failed');
      }
    } catch (error: any) {
      // Xử lý lỗi nếu có
      message.error(error.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

        <Form
          name="register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          {/* Full Name */}
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please enter your full name!" }]}
          >
            <Input size="large" placeholder="Enter your full name" className="rounded-lg" />
          </Form.Item>

          {/* Phone */}
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please enter your phone number!" }]}
          >
            <Input size="large" placeholder="Enter your phone number" className="rounded-lg" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: 'email', message: 'Please enter a valid email address!' }
            ]}
          >
            <Input size="large" placeholder="Enter your email" className="rounded-lg" />
          </Form.Item>

          {/* Password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password size="large" placeholder="Enter your password" className="rounded-lg" />
          </Form.Item>

          {/* Avatar URL */}
          <Form.Item
            label="Avatar URL"
            name="avatarUrl"
            rules={[{ required: true, message: "Please provide your avatar URL!" }]}
          >
            <Input size="large" placeholder="Enter your avatar URL" className="rounded-lg" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full"
              loading={loading}
            >
              Register
            </Button>
          </Form.Item>
        </Form>

        <p className="text-center mt-4">
          Already have an account?{' '}
          <a href="/" className="text-blue-500">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
