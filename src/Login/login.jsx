function Login() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="min-h-screen flex items-center justify-center overflow-y-hidden">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
            Wonder Bank
          </h1>
          <form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-600"
              >
                Username
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
              <a
                href="#"
                className="block text-right text-xs text-cyan-600 mt-2"
              >
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-32 bg-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6"
            >
              Proceed
            </button>
          </form>
          <div className="text-center">
            <p className="text-sm">
              Don't have an account?
              <a href="#" className="text-cyan-600">
                Register here
              </a>
            </p>
          </div>
          <p className="text-xs text-gray-600 text-center mt-10">
            © 2024 Wonder Bank
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
