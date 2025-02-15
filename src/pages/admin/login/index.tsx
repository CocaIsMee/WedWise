import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.target as HTMLFormElement);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        setTimeout(() => {
            if (email === 'admin@example.com' && password === 'admin123') {
                alert('Login successful!');
                navigate('/dashboard');
            } else {
                alert('Invalid email or password');
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="bg-white rounded-lg shadow-lg flex overflow-hidden max-w-4xl w-full">
                {/* Image Section */}
                <div className="hidden md:block w-1/2">
                    <img
                        src="https://i.pinimg.com/736x/d8/ab/ba/d8abba4b4fd6857b214aa357da816308.jpg"
                        alt="Admin login"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-center mb-6">Login as Admin User</h2>
                    <form onSubmit={onSubmit} className="space-y-4 mt-[100px] mb-[130px]">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="text-center">
                            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot your password?</a>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'Log In'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-600">
                        <a href="#" className="text-blue-500 hover:underline">Terms of use</a>
                        <span className="mx-2">|</span>
                        <a href="#" className="text-blue-500 hover:underline">Privacy policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;