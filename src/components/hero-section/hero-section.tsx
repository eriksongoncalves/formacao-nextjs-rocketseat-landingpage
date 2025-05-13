import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Store } from "lucide-react"

import { Button } from "../ui/button"

export const HeroSection = () => {
  return (
    <section className="container relative mt-24 flex items-center justify-center md:mt-16">
      <div className="grid min-h-[20rem] grid-cols-1 items-center gap-8 md:h-[36rem] md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
          <h1 className="text-heading-hg text-center text-gray-100 md:text-left">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-cyan-100" />
                <span className="text-gray-200">Crie o seu site em menos de 5 minutos</span>
              </div>

              <div className="flex items-center gap-2">
                <Store className="h-4 w-4 text-cyan-100" />
                <span className="text-gray-200">Acompanhe e otimize seu negócio online</span>
              </div>
            </div>

            <div className="ls:items-start mt-5 flex flex-col items-center gap-2 text-white md:items-start">
              <Button className="w-fit rounded-full" asChild>
                <Link href="/criar-loja">
                  Criar loja grátis
                  <ArrowRight />
                </Link>
              </Button>

              <p className="text-body-xs text-gray-300">Não precisa de cartão de crédito</p>
            </div>
          </div>
        </div>

        <div className="relative order-first hidden h-[20rem] items-center justify-center md:order-last md:flex md:h-full lg:flex">
          <Image
            src="/hero-section.svg"
            alt="Ilustração com ícones de store, tag e sacola"
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
