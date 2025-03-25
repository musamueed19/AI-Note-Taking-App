"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LogoutButton = () => {
  // loading state
  const [loading, setLoading] = useState(false);

  // useRouter
  const router = useRouter();

  async function handleLogOut() {
    // first we'll show waiting state to the user 
      setLoading(true);

    //   the waiting time will be how much is done here
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      //   then, we will check the error message, if we have, we will show this and simply return. 
    //   if, we don't have this means we are logged out successfully
    const errorMessage = null;
    if (errorMessage === null) {
      toast.success("Success", {
        description: "Your are logged out successfully",
        position: "bottom-right",
      });
      router.push("/");
    } else {
      toast.error("Error", {
        description: errorMessage,
        position: "bottom-right",
      });
    }
    setLoading(false);
  }

  return (
    <Button
      className="w-20"
      variant={"outline"}
      disabled={loading}
      onClick={handleLogOut}
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  );
};

export default LogoutButton;
