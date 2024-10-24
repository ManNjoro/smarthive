import Image from "next/image";
import AuthProvider from '@/app/AuthProvider';
import LandingPage from "@/components/homepage/landing";

export default function Home() {
  return (
    <AuthProvider>
    <main>
      <section>
        <LandingPage/>
      </section>
    </main>
    </AuthProvider>
  );
}

