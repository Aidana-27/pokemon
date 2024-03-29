
import { NavLink } from 'react-router-dom'

function SignUp({openRegister,closeBoth}) {
  return (
    <>
     {openRegister && <div class="signup bg-grey-lighter min-h-screen flex flex-col">
            <div class="container mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-gray-950 px-6 py-8 rounded shadow-md text-white">
                <NavLink to="/">
                <i
              className="fa-solid fa-xmark"
              onClick={closeBoth}
              style={{ color: "#ffffff" }}
            ></i>
                </NavLink>
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />
                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>
                    <div class="text-center text-sm text-white mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-white" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-white" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>
                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
            
        </div>}
    </>
  )
}

export default SignUp