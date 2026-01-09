"use client";

import { useEffect, useState } from "react";
import { isAuthenticated, logout } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/auth/login");
    } else {
      setAllowed(true);
    }
  }, []);

  if (!allowed) {
    return <div className="p-10 text-center">Checking session...</div>;
  }

  return <>{children}</>;
}
