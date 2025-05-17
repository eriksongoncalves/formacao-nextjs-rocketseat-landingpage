import { useCallback, useEffect, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { CircleX, SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export const Search = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const inputRef = useRef<HTMLInputElement | null>(null)

  const query = searchParams?.get("q") ?? ""
  const hasQuery = !!searchParams?.has("q")

  const handleSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()
      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`)
      }
    },
    [query, router]
  )

  const resetSearch = () => {
    router.push("/blog", { scroll: false })
  }

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value
    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, {
      scroll: false
    })
  }

  useEffect(() => {
    if (hasQuery) {
      inputRef.current?.focus()
    }
  }, [hasQuery])

  return (
    <form onSubmit={handleSearch} className="group relative w-full md:w-60">
      <SearchIcon
        className={cn(
          "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-300 transition-colors duration-200 group-focus-within:text-blue-300",
          query ? "text-blue-300" : ""
        )}
      />

      <input
        ref={inputRef}
        type="text"
        value={query}
        placeholder="Buscar"
        onChange={handleQueryChange}
        className="h-10 w-full rounded-md border border-gray-400 bg-transparent pl-9 text-body-sm text-gray-100 outline-none transition-all duration-200 placeholder:text-body-sm placeholder:text-gray-300 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 md:w-60"
      />

      {query && (
        <CircleX
          className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-300"
          onClick={resetSearch}
        />
      )}
    </form>
  )
}
