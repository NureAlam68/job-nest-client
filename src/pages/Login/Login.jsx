import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginLottie from "../../assets/lottie/login.json";
import Lottie from "lottie-react";
import AuthContext from "../../context/AuthContext/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { logInUser, setUser, signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((res) => {
        setUser(res.user);
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(
          "Incorrect email or password! Please try again:" + error.message
        );
      });
  };

  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((res) => {
        setUser(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Failed to login: " + error.message);
      });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
      <div className="lg:w-[400px]">
        <form onSubmit={handleSubmit} className="w-full max-w-lg p-3">
          <h2 className="text-sm font-semibold text-center text-blue-500">
            Welcome back!
          </h2>
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Member Login
          </h1>
          <p className="text-sm text-center text-gray-500 mb-6">
            Access to all features. No credit card required.
          </p>

          <button
            onClick={handleGoogleLogIn}
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
            <span className="absolute px-2 text-sm text-gray-500 bg-white">
              Or continue with
            </span>
            <div className="w-full border-t border-gray-300"></div>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="usernameOrEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Email address *
              </label>
              <input
                type="email"
                id="Email"
                name="email"
                placeholder="Enter your username or email"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-100"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-100"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <span className="text-sm text-blue-500 cursor-pointer">
              Forgot Password
            </span>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 font-medium text-white bg-[#05264e] rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>

          <p className="mt-4 text-sm text-center text-gray-600">
            Don’t have an Account?{" "}
            <Link to="/register" className="text-blue-500 cursor-pointer">
              Sign up
            </Link>
          </p>
        </form>
      </div>
      <div className="md:w-96">
        <Lottie animationData={loginLottie}></Lottie>
      </div>
    </div>
  );
};

export default Login;
