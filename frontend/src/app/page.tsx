import Link from "next/link";

export default function Home() {
  return (
      <div className="bg-default">
        <h2 className="text-4xl  text-center">Seja bem vindo a laranjada</h2>
        <img alt="Logo Laranjada" className="bg-black size-42 rounded-full" />
          <div className="flex gap-3.5 md:inline-flex">
            <input className="border border-black rounded-md p-3" type="text" placeholder="Código super secreto" />
            <Link href={'/auth/signin'}>
              <input className="bg-green-600 rounded-md p-3" type="submit" value="Acessar" />
            </Link>
          </div>
      </div>
  );
}
