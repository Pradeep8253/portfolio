import AboutPage from "../../pages/About";
import ClientLayout from "../ClientLayout";

export const metadata = {
  title: "About | Pradeep Yadav",
  description: "About Pradeep Yadav - Full Stack Web Developer",
};

export default function Page() {
  return (
    <ClientLayout>
      <AboutPage />
    </ClientLayout>
  );
}
