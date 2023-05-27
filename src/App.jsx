import Img from "./assets/signIn11.png"
import bgImg from "./assets/signIn1.jpg"


export default function App() {
  return (
    <div className="flex min-h-screen">
      <div className="relative w-1/2 before:absolute before:w-full before:inset-0 before:bg-gradient-to-b from-[#020e25] to-[#041332] before:opacity-75 before:h-full before:z-[1]">
        <img 
        src={bgImg} 
        alt="" 
        className="absolute inset-0 h-full z-0 " 
        />
        <div className="relative flex flex-col justify-center z-[2] pt-[5rem] px-12 pb-10">
          
          <div className="pl-10">
          <h1 className="text-white  text-[3.25rem] leading-[3.625rem]">Join Our <span className="text-accent-blue block">Tech Community</span></h1>
            <p className="text-white/80 mt-3">Find your people in tech, connect, brainstorm and create.</p>
          </div>
          
          <div className="mt-[90px]">
            <img 
            src={Img} 
            alt="" 
            className="h-[300px]"
            />
          </div>
        </div>
      </div>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-1/2">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-grey-dark/90">
            Hello! Welcome Back.
          </h2>
          <p className="text-center mt-2">Please enter your login details to continue</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email ..."
                  required
                  className="block w-full rounded-lg border-0 py-4 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="**********"
                  required
                  className="block w-full rounded-lg border-0 py-4 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex justify-between mt-6">
              <div className="flex  gap-1 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                Remember Me
                    </label>
              </div>
              <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gradient-to-b from-[#2D65B4] to-[#182978]  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
      
            </div>
          </form>

          <p className=" text-center text-sm text-gray-500 mt-[70px]">
            Dont have an account?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
