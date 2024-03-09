import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

function LoginPage() {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const {signin, errors: signinErrors} = useAuth()

  const onSubmit = handleSubmit(data => {
    signin(data)
  })

  return (
    <div className="flex items-center justify-center h-[calc(100vh-100px)]">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {signinErrors.map((error, i) => {
          <div className="my-2 bg-red-500 p-2 text-center text-white" key={i}>
            {error}
          </div>;
        })}
        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            placeholder="email"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            placeholder="password"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">password is required</p>
          )}
          <button type="submit">Login</button>
        </form>

        <p className='flex gap-x-2 justify-between'>
          Don't have an account? <Link className='text-sky-500' to ="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage