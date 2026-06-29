import HomePage from "../pages/Home";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Home | Pradeep Yadav",
  description: "Full Stack Web Developer - React.js, Next.js, MERN Stack",
};

export default function Page() {
  return (
    <ClientLayout>
      <HomePage />
    </ClientLayout>
  );
}
