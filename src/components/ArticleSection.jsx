import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Search } from "lucide-react";

import BlogCard from "./BlogCard";
import { blogPosts } from "@/data/blogPosts";

function ArticleTabsTrigger({ tabValue }) {
  let tabName = tabValue.charAt(0).toUpperCase() + tabValue.slice(1);

  return (
    <TabsTrigger
      className="rounded-md px-4 py-2 text-[--font-neutral-light-color] data-[state=active]:bg-[var(--nav-bar-background-color)] data-[state=active]:text-[--font-neutral-dark-color]"
      value={tabValue}
    >
      {tabName}
    </TabsTrigger>
  );
}

export function ArticleSection() {
  return (
    <section className="mx-auto flex w-full flex-col lg:max-w-screen-2xl lg:px-8">
      <h2 className="mb-6 px-6 text-xl font-bold text-[--font-primary-accent-color] lg:px-0">
        Latest articles
      </h2>

      {/* Desktop version */}
      <Tabs
        defaultValue="highlight"
        className="hidden flex-col items-center justify-between lg:flex"
      >
        <TabsList className="flex h-16 w-full items-center justify-between rounded-xl bg-[--bar-color] px-6">
          <div>
            <ArticleTabsTrigger tabValue="highlight" />
            <ArticleTabsTrigger tabValue="cat" />
            <ArticleTabsTrigger tabValue="inspiration" />
            <ArticleTabsTrigger tabValue="genearal" />
          </div>

          <div className="search-input relative w-1/4">
            <Input
              className="w-full placeholder:font-semibold placeholder:text-[--font-neutral-light-color]"
              type="text"
              placeholder="Search"
            />
            <Search className="absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-[--font-neutral-light-color]" />
          </div>
        </TabsList>

        <TabsContent
          className="row-auto m-0 grid grid-cols-2 gap-5 pt-12"
          value="highlight"
        >
          <BlogCard
            image={blogPosts[0].image}
            category={blogPosts[0].category}
            title={blogPosts[0].name}
            description={blogPosts[0].description}
            author={blogPosts[0].author}
            date={blogPosts[0].date}
          />
          <BlogCard
            image={blogPosts[1].image}
            category={blogPosts[1].category}
            title={blogPosts[1].name}
            description={blogPosts[1].description}
            author={blogPosts[1].author}
            date={blogPosts[1].date}
          />
          <BlogCard
            image={blogPosts[2].image}
            category={blogPosts[2].category}
            title={blogPosts[2].name}
            description={blogPosts[2].description}
            author={blogPosts[2].author}
            date={blogPosts[2].date}
          />
          <BlogCard
            image={blogPosts[3].image}
            category={blogPosts[3].category}
            title={blogPosts[3].name}
            description={blogPosts[3].description}
            author={blogPosts[3].author}
            date={blogPosts[3].date}
          />
          <BlogCard
            image={blogPosts[4].image}
            category={blogPosts[4].category}
            title={blogPosts[4].name}
            description={blogPosts[4].description}
            author={blogPosts[4].author}
            date={blogPosts[4].date}
          />
          <BlogCard
            image={blogPosts[5].image}
            category={blogPosts[5].category}
            title={blogPosts[5].name}
            description={blogPosts[5].description}
            author={blogPosts[5].author}
            date={blogPosts[5].date}
          />
        </TabsContent>

        <TabsContent value="cat">Change your password here.</TabsContent>
        <TabsContent value="inspiration">a</TabsContent>
        <TabsContent value="genearal">b</TabsContent>
      </Tabs>

      {/* Mobile version */}
      <div className="flex flex-col gap-3 bg-[--bar-color] px-6 py-4 lg:hidden">
        <div className="search-input relative">
          <Input
            className="w-full placeholder:font-medium placeholder:text-[--font-neutral-light-color]"
            type="text"
            placeholder="Search"
          />
          <Search className="absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-[--font-neutral-light-color]" />
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium text-[--font-neutral-light-color]">
            Category
          </p>

          <Select defaultValue="highlight">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Highlight" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="highlight">Highlight</SelectItem>
              <SelectItem value="cat">Cat</SelectItem>
              <SelectItem value="inspiration">Inspiration</SelectItem>
              <SelectItem value="general">General</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="row-auto grid grid-cols-1 gap-12 px-6 pt-6 lg:hidden">
        <BlogCard
          image={blogPosts[0].image}
          category={blogPosts[0].category}
          title={blogPosts[0].name}
          description={blogPosts[0].description}
          author={blogPosts[0].author}
          date={blogPosts[0].date}
        />
        <BlogCard
          image={blogPosts[1].image}
          category={blogPosts[1].category}
          title={blogPosts[1].name}
          description={blogPosts[1].description}
          author={blogPosts[1].author}
          date={blogPosts[1].date}
        />
        <BlogCard
          image={blogPosts[2].image}
          category={blogPosts[2].category}
          title={blogPosts[2].name}
          description={blogPosts[2].description}
          author={blogPosts[2].author}
          date={blogPosts[2].date}
        />
        <BlogCard
          image={blogPosts[3].image}
          category={blogPosts[3].category}
          title={blogPosts[3].name}
          description={blogPosts[3].description}
          author={blogPosts[3].author}
          date={blogPosts[3].date}
        />
        <BlogCard
          image={blogPosts[4].image}
          category={blogPosts[4].category}
          title={blogPosts[4].name}
          description={blogPosts[4].description}
          author={blogPosts[4].author}
          date={blogPosts[4].date}
        />
        <BlogCard
          image={blogPosts[5].image}
          category={blogPosts[5].category}
          title={blogPosts[5].name}
          description={blogPosts[5].description}
          author={blogPosts[5].author}
          date={blogPosts[5].date}
        />
      </div>

      <div className="flex items-center justify-center p-6 py-14 lg:pb-28 lg:pt-20">
        <a
          className="font-semibold text-[--font-neutral-dark-color] underline"
          href=""
        >
          View more
        </a>
      </div>
    </section>
  );
}
