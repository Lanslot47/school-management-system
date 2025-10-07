import Hero from "@/component/Hero";
import Nav from "@/component/Nav";
import Login from "./(auth)/Admin-login/page";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero/>
    </div>
  );
}