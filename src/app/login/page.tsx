import LoginForm from "@/components/forms/LoginForm";

export default function page() {
  return (
    <div className="w-1/2 mx-auto px-20 py-5 text-center border rounded-md border-blue mt-2 mb-32">
      <h1 className="font-bold text-xl text-blue">Welcome back</h1>
      <LoginForm />
    </div>
  );
}
