import Link from "next/link";

// (marketing) - when given like this it wont be included in the url
// It is just used to group routes, so /marketing/about will give 404 error
// /about can be directly accessed.

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <nav className="flex gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
