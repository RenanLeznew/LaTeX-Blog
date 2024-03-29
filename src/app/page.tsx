import Link from "next/link";
import HeaderLink from "./components/HeaderLink";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pq-2 items-center justify-between ">
      <header className="fixed w-full backdrop-blur-md z-20">
        <div className="mx-auto max-w-3xl gap-3 p-2 relative">
          <HeaderLink link="https://github.com/renanleznew/">GitHub</HeaderLink>
          <HeaderLink link="https://x.com/Renanszszs2/">X</HeaderLink>
          <HeaderLink link="https://drive.google.com/drive/u/0/folders/1aS3fF7XhO1DM_PM8ZS4mqTBwxi8FWGoc">
            Google Drive
          </HeaderLink>
          <Link
            href="/pages/about/"
            className="font-semibold absolute top-2 tracking-tighter text-black right-4"
          >
            Renan Wenzel
          </Link>
        </div>
      </header>

      <h1 className="text-lg left-50%"> Testing </h1>
    </main>
  );
}
