import PortfolioPage from "../../pages/Portfolio";
import ClientLayout from "../ClientLayout";

export const metadata = {
  title: "Portfolio | Pradeep Yadav",
  description: "Projects by Pradeep Yadav - Full Stack Developer",
};

export default function Page() {
  return (
    <ClientLayout>
      <PortfolioPage />
    </ClientLayout>
  );
}
