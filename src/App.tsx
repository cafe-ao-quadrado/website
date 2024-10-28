import {
  ScanSearch,
  ChevronsRight,
  Users,
  Calendar,
  Phone,
  Mail,
  Layers3,
  MonitorCog,
} from "lucide-react";

import LogoSvg from "./assets/logo.svg";

import { Dot } from "./components/Dot";
import { IconsSlide } from "./components/IconsSlide";

function App() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-slate-50">
      <header className="fixed top-0 z-20 flex h-16 w-full bg-slate-950 px-4 shadow-2xl">
        <nav className="mx-auto flex w-full max-w-5xl text-slate-500">
          <img src={LogoSvg} alt="Café ao quadrado logo" className="w-20" />
        </nav>
      </header>
      <main className="flex-1">
        <div className="mr-2 pb-4 pt-2"></div>
        <section className="relative flex min-h-screen flex-col items-center bg-gradient-radial from-sky-800 from-10% via-slate-900 via-80% to-slate-900 px-4 pt-44 shadow radial-x-[50%] radial-y-[-50%] md:justify-center md:pt-32">
          <div className="hero-background absolute inset-0 z-0 h-full w-full"></div>
          <div className="z-10 flex flex-col items-center md:justify-center">
            <h1 className="text-center text-4xl font-bold text-white">
              <span className="font-normal">
                Liberte o potencial do seu negócio:
              </span>
              <br />
              <span className="text-sky-400">Inicie suas ideias conosco!</span>
            </h1>

            <p className="mt-4 text-center text-slate-400">
              Desperte suas ideias com nossa equipe de mestres da programação
            </p>
            <a
              href="#contact"
              className="group mt-10 inline-flex items-end rounded bg-sky-700 px-4 py-2 text-slate-50 transition duration-500 hover:bg-sky-800"
            >
              <span className="text-lg font-bold">Começar agora</span>
              <ChevronsRight className="ml-0 h-6 w-6 transition-[margin] group-hover:ml-2" />
            </a>
          </div>
          <div className="mx-auto mt-20 flex h-full w-full items-center overflow-hidden py-4 md:max-w-4xl">
            <IconsSlide />
            <IconsSlide />
          </div>
        </section>
        <section className="bg-sky-600 px-6 py-24 text-sky-50">
          <div className="mx-auto w-full max-w-5xl">
            <h1 className="mb-20 text-center text-4xl font-bold">
              Nossos métodos
            </h1>
            <div className="timeline relative flex flex-col gap-y-8 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-x-24 md:gap-y-16">
              <div className="relative col-start-2 row-start-1 rounded-lg bg-white px-8 py-8 shadow-lg md:px-8">
                <div className="absolute left-[-3rem] top-[0.75rem] hidden -translate-x-1/2 md:block">
                  <Dot />
                </div>
                <h3 className="mb-4 text-3xl font-bold text-sky-800">
                  <Users className="mb-2 hidden h-12 w-12 md:block" />
                  Parceria colaborativa
                </h3>
                <p className="text-lg leading-8 text-sky-900">
                  Gostamos de trabalhar lado a lado com nossos clientes,
                  abraçando suas ideias e inspirações. Valorizamos sua
                  contribuição e o envolvemos ativamente durante todo o processo
                  de desenvolvimento.
                </p>
              </div>
              <div className="relative col-start-1 row-start-2 rounded-lg bg-white p-8 shadow-lg">
                <div className="absolute right-[-3rem] top-[0.75rem] hidden translate-x-1/2 md:block">
                  <Dot />
                </div>
                <h3 className="mb-4 text-3xl font-bold text-sky-800 md:flex md:flex-col">
                  <Calendar className="mb-2 hidden h-12 w-12 md:block" />
                  Prazos e estimativas transparentes
                </h3>
                <p className="text-lg leading-8 text-sky-900">
                  Você pode confiar em nosso planejamento meticuloso e
                  experiência em gerenciamento de projetos para entregar suas
                  soluções no prazo e dentro do orçamento, sem surpresas no meio
                  do projeto.
                </p>
              </div>
              <div className="relative col-start-2 row-start-3 rounded-lg bg-white p-8 shadow-lg">
                <div className="absolute left-[-3rem] top-[0.75rem] hidden -translate-x-1/2 md:block">
                  <Dot />
                </div>
                <h3 className="mb-4 text-3xl font-bold text-sky-800">
                  <Users className="mb-2 hidden h-12 w-12 md:block" />
                  Equipe profissional dedicada
                </h3>
                <p className="text-lg leading-8 text-sky-900">
                  Nossa software house é o lar de uma equipe de profissionais
                  apaixonados por seu ofício. De desenvolvedores a designers,
                  todos os membros de nossa equipe estão comprometidos em dar
                  vida ao projeto dos seus sonhos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-sky-900 px-6 text-slate-50">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 py-24 md:flex-row">
            <div className="mb-4 w-full max-w-80 md:mb-0">
              <h2 className="mb-8 text-4xl font-bold">
                Serviços disponíveis para sua empresa
              </h2>
              <p className="mb-8 text-lg font-medium">
                A melhor forma de entender nossos serviços é entrando em contato
                e marcando uma reunião!
              </p>
              <a
                href="#contact"
                className="group inline-flex items-end rounded bg-slate-50 px-4 py-2 text-sky-900 transition hover:text-sky-950"
              >
                <span className="text-xl font-medium">Começar</span>
                <ChevronsRight className="ml-0 h-6 w-6 transition-[margin] group-hover:ml-2" />
              </a>
            </div>
            <div className="flex flex-1 flex-col gap-8">
              <div className="rounded-xl bg-sky-950 px-8 py-6">
                <ScanSearch className="mb-1 block h-12 w-12 text-sky-600" />
                <h3 className="mb-4 text-2xl font-bold text-sky-600">
                  Consultoria
                </h3>
                <p>
                  Analisamos seu negócio a fim de implementar melhorias ou
                  estruturar processos digitais em seu fluxo de serviços.
                  Utilizamos as melhores práticas do mercado para que seu
                  negócio não fique atrás de nenhuma empresa.
                </p>
              </div>
              <div className="rounded-xl bg-sky-950 px-8 py-6">
                <MonitorCog className="mb-2 block h-10 w-10 text-sky-600" />
                <h3 className="mb-4 text-2xl font-bold text-sky-600">
                  Desenvolvimento
                </h3>
                <p>
                  Desenvolvemos websites e plataformas web para sua empresa.
                  Seja um portifólio para seus clientes ou um portal de
                  processos internos, nós cobrimos para você.
                </p>
              </div>
              <div className="rounded-xl bg-sky-950 px-8 py-6">
                <Layers3 className="mb-1 block h-10 w-10 text-sky-600" />
                <h3 className="mb-4 text-2xl font-bold text-sky-600">
                  Infraestrutura
                </h3>
                <p>
                  Hospedamos e mantemos suas soluções web, servindo
                  confidencialidade de dados e a melhor disponibilidade de
                  serviços sempre que você precisar.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-sky-500 px-6 py-24 text-slate-50" id="contact">
          <div className="mx-auto w-full max-w-5xl">
            <h2 className="mb-4 text-4xl font-bold">
              Interessado? Então não perca tempo!
            </h2>
            <p className="mb-6">
              Entre em contato conosco via whatsapp e vamos marcar uma conversa!
            </p>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5596981095088&text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20solu%C3%A7%C3%B5es%20web%20para%20minha%20empresa!"
              className="group inline-flex items-end rounded bg-sky-950 px-4 py-2 text-slate-50"
            >
              <span className="text-xl font-bold">Iniciar conversa agora</span>
              <ChevronsRight className="ml-0 h-6 w-6 transition-[margin] group-hover:ml-2" />
            </a>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-slate-300 bg-slate-200 px-4 py-6">
        <div className="mx-auto mb-4 flex max-w-5xl flex-col gap-x-4 gap-y-2 text-slate-500 md:flex-row md:items-center">
          <p>
            <Phone className="mr-1 inline h-4 w-4" /> (96) 98109-5088
          </p>
          <p>
            <Mail className="mr-1 inline h-4 w-4" /> contato@cafeaoquadrado.com
          </p>
        </div>
        <div className="mx-auto flex max-w-5xl flex-col gap-x-4 gap-y-2 border-t border-slate-300 pt-4 text-slate-500 md:flex-row md:items-center">
          <p className="text-sm font-medium">
            Café ao Quadrado Desenvolvimento de Programas ltda. © 2024
          </p>
          <span className="hidden text-sm font-thin md:block">|</span>
          <p className="text-sm">CNPJ: 49.129.763/0001-26</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
