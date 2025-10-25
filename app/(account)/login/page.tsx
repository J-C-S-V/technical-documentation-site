// import Link from "next/link";
"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <h1>Login</h1>
      {/* <Link href="/">Home</Link> */}
      <button onClick={handleClick}>Home</button>
    </>
  );
}
