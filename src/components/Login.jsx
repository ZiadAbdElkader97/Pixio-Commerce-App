/* eslint-disable react/prop-types */

export default function Login({ openSignUp }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-4 flex justify-between items-center">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-chekbox" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a href="#" className="text-blue-700">
            Forget Password?
          </a>
        </div>
        <div className="mb-4">
          <button type="submit" className="w-full bg-blue-600 text-white py-2">
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Don’t Have an Account? </span>
        <button className="text-blue-700" onClick={openSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
