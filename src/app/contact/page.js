import ContactPage from "../../pages/Contact";
import ClientLayout from "../ClientLayout";

export const metadata = {
  title: "Contact | Pradeep Yadav",
  description: "Get in touch with Pradeep Yadav",
};

export default function Page() {
  return (
    <ClientLayout>
      <ContactPage />
    </ClientLayout>
  );
}
