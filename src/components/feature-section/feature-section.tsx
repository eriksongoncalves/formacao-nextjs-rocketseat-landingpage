import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "../ui/button"

export const FeatureSection = () => {
  return (
    <section className="container grid gap-6 bg-gray-700 pb-8 pt-8 md:grid-cols-2 md:py-10">
      <div className="flex flex-col gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
        <span className="text-body-tag w-fit rounded-sm bg-blue-400 px-2 py-1 uppercase text-blue-200">
          Simples
        </span>
        <h2 className="text-heading-lg font-sans text-gray-100">
          Crie um catálogo de produtos online em poucos minutos
        </h2>
      </div>

      <div className="flex flex-col gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
        <span className="text-body-tag w-fit rounded-sm bg-blue-400 px-2 py-1 uppercase text-blue-200">
          Prático
        </span>
        <h2 className="text-heading-lg font-sans text-gray-100">
          Venda para seu público através de uma plataforma única
        </h2>
      </div>

      <div className="col-span-full flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-12 rounded-lg bg-gray-500 p-6 md:grid-cols-2 md:gap-4 md:p-12">
          <div className="flex flex-col gap-4">
            <span className="text-body-tag w-fit rounded-sm bg-blue-400 px-2 py-1 uppercase text-blue-200">
              Personalizável
            </span>

            <h2 className="text-heading-lg font-sans text-gray-100">
              Tenha uma loja online personalizada com a cara da sua marca
            </h2>

            <Button asChild className="mt-4 hidden w-fit rounded-full md:mt-auto md:flex">
              <Link href="/criar-loja">
                Criar loja grátis
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <div className="w-full max-w-md overflow-hidden">
              <Image
                src="/feature-section.svg"
                alt="Features"
                width={440}
                height={330}
                className="w-full object-contain"
              />
            </div>
            <Button asChild className="mt-4 w-full gap-2 rounded-full md:mt-auto md:hidden">
              <Link href="/criar-loja">
                Criar loja grátis
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
