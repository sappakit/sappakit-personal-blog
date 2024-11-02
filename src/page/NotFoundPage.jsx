import { useNavigate } from "react-router-dom";

import { NavBar, Footer } from "@/components/NavBar";
import { CustomButton } from "@/components/CustomUi";

// Lucide icons
import { CircleAlert } from "lucide-react";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />

      <section className="flex h-screen flex-col items-center justify-center gap-7">
        <CircleAlert className="size-20" />
        <h1 className="text-xl font-bold">Page Not Found</h1>
        <CustomButton buttonType="Primary" onClick={() => navigate("/")}>
          Go To Homepage
        </CustomButton>
      </section>

      <Footer />
    </>
  );
}

export default NotFoundPage;
