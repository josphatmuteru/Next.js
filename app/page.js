import Navigation from "@/app/_components/Navigation";

import Link from "next/link";

export const metadata = {
  title: "Welcome",
};

export default function Page() {
  return (
    <div>
      <h1>The Wild Oasis. Welcome to paradise.</h1>
      <Navigation />
    </div>
  );
}
