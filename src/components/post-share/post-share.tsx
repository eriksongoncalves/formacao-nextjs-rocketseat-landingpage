"use client"
import { Button } from "@/components/ui/button"
import { useShare } from "@/hooks"

type PostShareProps = {
  url: string
  title: string
  description: string
}

export const PostShare = ({ url, title, description }: PostShareProps) => {
  const { shareButtons } = useShare({
    url,
    title,
    text: description
  })

  return (
    <aside className="space-y-6">
      <div className="rounded-lg bg-gray-700">
        <h2 className="mb-4 hidden text-heading-xs text-gray-100 md:block">Compartilhar</h2>

        <div className="flex justify-between gap-2 md:flex-col">
          {shareButtons.map(provider => (
            <Button
              key={provider.provider}
              onClick={() => provider.action()}
              variant="outline"
              className="w-fit justify-start gap-2 md:w-full"
            >
              {provider.icon}
              <span className="hidden md:block">{provider.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  )
}
