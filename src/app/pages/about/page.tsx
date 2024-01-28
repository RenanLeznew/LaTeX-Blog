import Link from "next/link";
import HeaderLink from "../../components/HeaderLink";

export default function Page() {
  return (
    <div>
      <header className="fixed w-full backdrop-blur-md z-20">
        <div className="mx-auto max-w-3xl gap-3 p-2 relative">
          <HeaderLink link="https://github.com/renanleznew/">GitHub</HeaderLink>
          <HeaderLink link="https://x.com/Renanszszs2/">X</HeaderLink>
          <HeaderLink link="https://drive.google.com/drive/u/0/folders/1aS3fF7XhO1DM_PM8ZS4mqTBwxi8FWGoc">
            Google Drive
          </HeaderLink>
          <Link
            href="/"
            className="font-semibold absolute top-2 tracking-tighter text-black right-4"
          >
            Voltar
          </Link>
        </div>
      </header>
    </div>
  );
}
