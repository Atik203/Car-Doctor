import login from "../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const Login = () => {
  const { SignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    SignIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;

        const user = { email };
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });
        // if (location?.state) {
        //   navigate(location?.state ? location?.state : "/");
        // }
      })
      .then((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen mb-10">
      <div className="hero-content flex-col gap-8 lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 border-2 border-gray-200 max-w-md lg:w-1/2">
          <h1 className="text-center font-bold text-4xl mt-5">Log In</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-500 text-white hover:text-black">
                Login
              </button>
            </div>
            <div>
              <h1 className="text-center my-4">Or Login in with</h1>

              <div className="flex items-center gap-8 justify-center text-3xl my-2">
                <div className="cursor-pointer">
                  <BsFacebook></BsFacebook>
                </div>
                <div className="cursor-pointer">
                  <BiLogoLinkedin></BiLogoLinkedin>
                </div>
                <div className="cursor-pointer">
                  <FcGoogle></FcGoogle>
                </div>
              </div>
              <h1 className="text-center my-4 mt-3">
                Don't Have a account?{" "}
                <Link to={"/signup"}>
                  <span className="text-red-500 hover:underline">Sign up</span>
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
