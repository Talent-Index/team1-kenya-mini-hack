import { useEffect } from "react";
import { LUMA_URL } from "@/components/ApplyButton";
import { ApplyButton } from "@/components/ApplyButton";

const Apply = () => {
  useEffect(() => {
    // Auto-redirect to official Luma page
    window.location.replace(LUMA_URL);
  }, []);

  return (
    <div className="container py-24 text-center">
      <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
        Redirecting you to Luma…
      </h1>
      <p className="mt-3 text-muted-foreground">
        Applications are managed on the official Team1 Kenya Luma page.
      </p>
      <div className="mt-8 flex justify-center">
        <ApplyButton location="apply_redirect" label="Open Luma" size="lg" />
      </div>
    </div>
  );
};

export default Apply;
