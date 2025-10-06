import Link from "next/link";

// This layout only applies to /dashboard/.*
export default function CommonAdminDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex">
        <aside className="w-64 p-4 border-r">
          <h2>Dashboard</h2>
          <nav className="grid">
            <Link href={"/dashboard"}>D-Home</Link>
            <Link href={"/dashboard/analytics"}>D-Analytics</Link>
            <Link href={"/dashboard/crashlytics"}>D-Crashlytics</Link>
          </nav>
        </aside>
        <div className="p-5 flex-1">{children}</div>
      </div>
    </div>
  );
}
