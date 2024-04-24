// "use client"

import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>   
          <div>
          <h1>Welcome to Lyrix</h1>
          <LoginForm/>
          
          Don't have an account? <Link href="/signup">signup</Link> 
        </div>   
    </main>  
  );
}
