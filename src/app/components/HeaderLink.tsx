import Link from "next/link";

export default function HeaderLink({
  link,
  children,
}: {
  link: string;
  children: string;
}) {
  return (
    <Link href={link} className="text-black font-semibold font-mono mr-4">
      {children}
    </Link>
  );
}
