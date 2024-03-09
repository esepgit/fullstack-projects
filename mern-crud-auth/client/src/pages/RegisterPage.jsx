import { useForm } from "react-hook-form";
import {useAuth} from '../context/AuthContext'
import { useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom'

function RegisterPage() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const { signup, isAuthenticated, error } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/tasks')
    }
  }, [isAuthenticated])
  const onSubmit = handleSubmit(async (values) => {
      signup(values)
    });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {error.map((error, i) => {
        <div className="bg-red-500 p-2 text-white" key={i}>
          {error}
        </div>;
      })}
      <form onSubmit={onSubmit}>
        <input
          placeholder="username"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          type="text"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <p className="text-red-500">Username is required</p>
        )}
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
        <button type="submit">Register</button>
      </form>
      <p className="flex gap-x-2 justify-between">
        Already have an account?
        <Link className="text-sky-500" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
}

export default RegisterPage;
