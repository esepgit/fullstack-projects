import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) => {
      const res = await registerRequest(values);
      console.log(res);
    });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form
        onSubmit={onSubmit}
      >
        <input
          placeholder="username"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          type="text"
          {...register("username", { required: true })}
        />
        <input
          placeholder="email"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          type="email"
          {...register("email", { required: true })}
        />
        <input
          placeholder="password"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          type="password"
          {...register("password", { required: true })}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
