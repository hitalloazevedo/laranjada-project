export default function Home() {
  return (
    <div className="h-screen">

      <div className="flex justify-center items-center h-full flex-col gap-5">
        <h2 className="text-4xl text-center">Seja bem vindo a laranjada</h2>

        <div className="flex gap-3">
          <input className="border border-black rounded-md p-3" type="text" placeholder="Código super secreto"/>
          <input className="bg-green-600 rounded-md p-3" type="submit" value="Acessar" />
        </div>

        <a href="#">Já sou da seita</a>
      </div>

    </div>
  );
}
