import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8"
      >
        <h2 className="text-sm font-semibold text-center text-blue-500">Welcome back!</h2>
        <h1 className="text-2xl font-bold text-center text-gray-800">Member Login</h1>
        <p className="text-sm text-center text-gray-500 mb-6">
          Access to all features. No credit card required.
        </p>

        <button
          type="button"
          className="flex items-center justify-center w-full px-4 py-2 mb-4 font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google logo"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>

        <div className="relative flex items-center justify-center mb-4">
          <span className="absolute px-2 text-sm text-gray-500 bg-white">Or continue with</span>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="usernameOrEmail" className="block text-sm font-medium text-gray-700">
              Username or Email address *
            </label>
            <input
              type="text"
              id="usernameOrEmail"
              name="usernameOrEmail"
              value={formData.usernameOrEmail}
              onChange={handleChange}
              placeholder="Enter your username or email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-100"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-100"
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <span className="text-sm text-blue-500 cursor-pointer">Forgot Password</span>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 font-medium text-white bg-[#05264e] rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an Account? <span className="text-blue-500 cursor-pointer">Sign up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;