"use client";

import AuthGuard from "@/components/AuthGuard";
import Navbar from "@/components/UI/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="p-6">
          {children}
        </div>
      </div>
    </AuthGuard>
  );
}
