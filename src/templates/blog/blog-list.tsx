import { useRouter } from "next/router"
import { allPosts } from "contentlayer/generated"

import { Search } from "@/components/search"
import { PostCard } from "@/components/post-card"
import { PostGridCard } from "@/components/post-grid-card"

const posts = allPosts

export function BlogList() {
  const router = useRouter()
  const query = router.query.q as string
  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : "Dicas e estratégias para impulsionar seu negócio"

  return (
    <div className="flex h-full flex-grow flex-col py-24">
      <header className="pb-14">
        <div className="container flex flex-col items-start justify-between space-y-6 md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            {/* TAG */}
            <span className="w-fit rounded-md bg-cyan-300 px-4 py-2 text-center text-body-tag text-cyan-100 md:text-left">
              BLOG
            </span>

            {/* Titulo */}
            <h1 className="max-w-2xl text-balance text-start text-heading-lg text-gray-100 md:text-left md:text-heading-xl">
              {pageTitle}
            </h1>
          </div>
          {/* Search */}
          <Search />
        </div>
      </header>

      {/* Listagem de posts */}
      <PostGridCard>
        {posts.map(post => (
          <PostCard
            key={post._id}
            title={post.title}
            description={post.description}
            date={new Date(post.date).toLocaleDateString("pt-BR")}
            slug={post.slug}
            image={post.image}
            author={{
              avatar: post.author.avatar,
              name: post.author.name
            }}
          />
        ))}
      </PostGridCard>
    </div>
  )
}
