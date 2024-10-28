import {
  ScanSearch,
  ChevronsRight,
  Users,
  Calendar,
  Phone,
  Mail,
  Layers3,
  MonitorCog,
} from 'lucide-react'

import LogoSvg from './assets/logo.svg'

import { Dot } from './components/Dot'
import { IconsSlide } from './components/IconsSlide'

function App() {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen w-full h-full">
      <header className="h-16 z-20 fixed top-0 flex w-full px-4 shadow-2xl bg-slate-950">
        <nav className="w-full max-w-5xl flex text-slate-500 mx-auto">
          <img src={LogoSvg} alt="Café ao quadrado logo" className="w-20" />
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative min-h-screen shadow px-4 bg-gradient-radial radial-x-[50%] radial-y-[-50%] from-sky-800 from-10% via-slate-900 via-80% via-slate-900 to-slate-900 pt-44 md:pt-32 flex flex-col items-center md:justify-center md:pt-56">
          <div className="hero-background z-0 absolute inset-0 w-full h-full"></div>
          <div className="z-10 flex flex-col items-center md:justify-center">
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
            <a
              href="#contact"
              className="group inline-flex items-end mt-10 px-4 py-2 rounded text-slate-50 bg-sky-700 hover:bg-sky-800 transition duration-500"
            >
              <span className="font-bold text-lg">Começar agora</span>
              <ChevronsRight className="w-6 h-6 ml-0 transition-[margin] group-hover:ml-2" />
            </a>
          </div>
          <div className="mx-auto md:max-w-4xl mt-20 py-4 overflow-hidden w-full h-full flex items-center">
            <IconsSlide />
            <IconsSlide />
          </div>
        </section>
        <section className="px-6 py-24 bg-sky-600 text-sky-50">
          <div className="w-full max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-20">
              Nossos métodos
            </h1>
            <div className="relative timeline flex flex-col md:grid md:grid-cols-2 md:grid-rows-3 gap-y-8 md:gap-y-16 md:gap-x-24">
              <div className="relative row-start-1 col-start-2 bg-white px-8 md:px-8 py-8 rounded-lg shadow-lg">
                <div className="hidden md:block absolute left-[-3rem] top-[0.75rem] -translate-x-1/2">
                  <Dot />
                </div>
                <h3 className="font-bold text-3xl mb-4 text-sky-800">
                  <Users className="hidden md:block w-12 h-12 mb-2" />
                  Parceria colaborativa
                </h3>
                <p className="text-lg leading-8 text-sky-900">
                  Gostamos de trabalhar lado a lado com nossos clientes,
                  abraçando suas ideias e inspirações. Valorizamos sua
                  contribuição e o envolvemos ativamente durante todo o processo
                  de desenvolvimento.
                </p>
              </div>
              <div className="relative row-start-2 col-start-1 bg-white p-8 rounded-lg shadow-lg">
                <div className="hidden md:block absolute right-[-3rem] top-[0.75rem] translate-x-1/2">
                  <Dot />
                </div>
                <h3 className="md:flex md:flex-col font-bold text-3xl mb-4 text-sky-800">
                  <Calendar className="hidden md:block w-12 h-12 mb-2" />
                  Prazos e estimativas transparentes
                </h3>
                <p className="text-lg leading-8 text-sky-900">
                  Você pode confiar em nosso planejamento meticuloso e
                  experiência em gerenciamento de projetos para entregar suas
                  soluções no prazo e dentro do orçamento, sem surpresas no meio
                  do projeto.
                </p>
              </div>
              <div className="relative row-start-3 col-start-2 bg-white p-8 rounded-lg shadow-lg">
                <div className="hidden md:block absolute left-[-3rem] top-[0.75rem] -translate-x-1/2">
                  <Dot />
                </div>
                <h3 className="font-bold text-3xl mb-4 text-sky-800">
                  <Users className="hidden md:block w-12 h-12 mb-2" />
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
        <section className="px-6 bg-sky-900 text-slate-50">
          <div className="py-24 w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
            <div className="w-full max-w-80 mb-4 md:mb-0">
              <h2 className="text-4xl font-bold mb-8">
                Serviços disponíveis para sua empresa
              </h2>
              <p className="text-lg font-medium mb-8">
                A melhor forma de entender nossos serviços é entrando em contato
                e marcando uma reunião!
              </p>
              <a
                href="#contact"
                className="group inline-flex items-end bg-slate-50 rounded px-4 py-2 text-sky-900 hover:text-sky-950 transition"
              >
                <span className="text-xl font-medium">Começar</span>
                <ChevronsRight className="w-6 h-6 transition-[margin] ml-0 group-hover:ml-2" />
              </a>
            </div>
            <div className="flex-1 flex flex-col gap-8">
              <div className="rounded-xl px-8 py-6 bg-sky-950">
                <ScanSearch className="w-12 h-12 block mb-1 text-sky-600" />
                <h3 className="text-2xl font-bold mb-4 text-sky-600">
                  Consultoria
                </h3>
                <p>
                  Analisamos seu negócio a fim de implementar melhorias ou
                  estruturar processos digitais em seu fluxo de serviços.
                  Utilizamos as melhores práticas do mercado para que seu
                  negócio não fique atrás de nenhuma empresa.
                </p>
              </div>
              <div className="rounded-xl px-8 py-6 bg-sky-950">
                <MonitorCog className="w-10 h-10 mb-2 block text-sky-600" />
                <h3 className="text-2xl font-bold mb-4 text-sky-600">
                  Desenvolvimento
                </h3>
                <p>
                  Desenvolvemos websites e plataformas web para sua empresa.
                  Seja um portifólio para seus clientes ou um portal de
                  processos internos, nós cobrimos para você.
                </p>
              </div>
              <div className="rounded-xl px-8 py-6 bg-sky-950">
                <Layers3 className="w-10 h-10 block mb-1 text-sky-600" />
                <h3 className="text-2xl font-bold mb-4 text-sky-600">
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
        <section className="px-6 py-24 bg-sky-500 text-slate-50" id="contact">
          <div className="w-full max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Interessado? Então não perca tempo!
            </h2>
            <p className="mb-6">
              Entre em contato conosco via whatsapp e vamos marcar uma conversa!
            </p>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5596981095088&text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20solu%C3%A7%C3%B5es%20web%20para%20minha%20empresa!"
              className="group inline-flex items-end px-4 py-2 rounded bg-sky-950 text-slate-50"
            >
              <span className="font-bold text-xl">Iniciar conversa agora</span>
              <ChevronsRight className="w-6 h-6 ml-0 group-hover:ml-2 transition-[margin]" />
            </a>
          </div>
        </section>
      </main>
      <footer className="w-full px-4 py-6 border-t border-slate-300 bg-slate-200">
        <div className="mb-4 max-w-5xl flex flex-col md:flex-row md:items-center gap-y-2 gap-x-4 text-slate-500 mx-auto">
          <p>
            <Phone className="inline mr-1 h-4 w-4" /> (96) 98109-5088
          </p>
          <p>
            <Mail className="inline mr-1 h-4 w-4" /> contato@cafeaoquadrado.com
          </p>
        </div>
        <div className="border-t border-slate-300 pt-4 max-w-5xl flex flex-col md:flex-row md:items-center gap-y-2 gap-x-4 text-slate-500 mx-auto">
          <p className="text-sm font-medium">
            Café ao Quadrado Desenvolvimento de Programas ltda. © 2024
          </p>
          <span className="hidden md:block text-sm font-thin">|</span>
          <p className="text-sm">CNPJ: 49.129.763/0001-26</p>
        </div>
      </footer>
    </div>
  )
}

export default App
