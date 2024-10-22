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

function CategoryTabsTrigger() {
  const tabName = ["Highlight", "Cat", "Inspiration", "General"];

  return (
    <>
      {tabName.map((name) => {
        const tabValue = name.toLowerCase();

        return (
          <TabsTrigger
            className="rounded-md px-4 py-2 text-[--font-neutral-light-color] data-[state=active]:bg-[var(--nav-bar-background-color)] data-[state=active]:text-[--font-neutral-dark-color]"
            value={tabValue}
          >
            {name}
          </TabsTrigger>
        );
      })}
    </>
  );
}

function CategorySelectItem() {
  const tabName = ["Highlight", "Cat", "Inspiration", "General"];

  return (
    <>
      {tabName.map((name) => {
        const selectValue = name.toLowerCase();
        return <SelectItem value={selectValue}>{name}</SelectItem>;
      })}
    </>
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
            <CategoryTabsTrigger />
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
          {blogPosts.map((post) => {
            return (
              <BlogCard
                image={post.image}
                category={post.category}
                title={post.name}
                description={post.description}
                author={post.author}
                date={post.date}
              />
            );
          })}
        </TabsContent>

        <TabsContent value="cat">Change your password here.</TabsContent>
        <TabsContent value="inspiration">a</TabsContent>
        <TabsContent value="general">b</TabsContent>
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
              <CategorySelectItem />
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="row-auto grid grid-cols-1 gap-12 px-6 pt-6 lg:hidden">
        {blogPosts.map((post) => {
          return (
            <BlogCard
              image={post.image}
              category={post.category}
              title={post.name}
              description={post.description}
              author={post.author}
              date={post.date}
            />
          );
        })}
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
