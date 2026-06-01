"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const user = Cookies.get("agriguard_user");

    if (!user) {
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
}