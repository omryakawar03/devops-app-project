"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { logout } from "@/lib/auth";

export default function DashboardPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    api
      .get("/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setMessage(res.data.message))
      .catch(() => logout());
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <p className="mt-3">{message}</p>
    </div>
  );
}
