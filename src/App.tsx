import LogoSvg from "./assets/logo.svg";

function App() {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen w-full h-full">
      <header className="h-16 fixed top-0 flex w-full px-4 shadow bg-slate-900">
        <nav className="w-full max-w-4xl flex text-slate-500 mx-auto">
          <img src={LogoSvg} alt="Café ao quadrado logo" className="w-20"/>
        </nav>
      </header>
      <main className="flex-1 mt-16">
        <section className="px-4 bg-gradient-radial radial-x-[50%] radial-y-[-50%] from-sky-800 from-10% via-slate-900 via-80% via-slate-900 to-slate-900 py-40 flex flex-col items-center">
          <h1 className="text-white text-4xl font-bold text-center">
            <span className="font-normal">
              Liberte o potencial do seu negócio:
            </span>
            <br />
            <span className="text-sky-400">Inicie suas ideias conosco!</span>
          </h1>
          <p className="text-slate-400 text-center mt-4">
            Desperte suas ideias com nossa equipe de mestres da programação
          </p>
          <button className="mt-8 px-4 py-2 rounded text-slate-50 bg-sky-700 font-bold text-center">
            Começar agora!
          </button>
        </section>
      </main>
      <footer className="w-full px-4 py-6 border-t border-slate-300 bg-slate-200">
        <div className="max-w-4xl flex flex-col md:flex-row md:items-center gap-4 text-slate-500 mx-auto">
          <p className="text-sm">
            Café ao Quadrado Desenvolvimento de Programas ltda. © 2024
          </p>
          <span className="hidden md:block text-sm font-thin">|</span>
          <p className="text-sm">CNPJ: 49.129.763/0001-26</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
