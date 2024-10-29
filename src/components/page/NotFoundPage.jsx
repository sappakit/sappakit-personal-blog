import { useNavigate } from "react-router-dom";

import { NavBar, Footer } from "../NavBar";
import { CustomButton } from "../CustomUi";

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
        <CustomButton type="Primary" onClick={() => navigate("/")}>
          Go To Homepage
        </CustomButton>
      </section>

      <Footer />
    </>
  );
}

export default NotFoundPage;
