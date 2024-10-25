import { useState, useEffect } from "react";

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
// import { blogPosts } from "@/data/blogPosts";
import axios from "axios";

function CategoryTabsTrigger({ tabName }) {
  return (
    <>
      <div className="flex gap-2">
        {tabName.map((name) => {
          return (
            <TabsTrigger
              className="rounded-lg px-5 py-2 font-medium text-[--font-neutral-light-color] hover:bg-[--nav-bar-button-hover-color] data-[state=active]:bg-[var(--nav-bar-button-active-color)] data-[state=active]:text-[--font-neutral-dark-color]"
              key={name}
              value={name}
            >
              {name}
            </TabsTrigger>
          );
        })}
      </div>
    </>
  );
}

function CategorySelectItem({ tabName }) {
  return (
    <>
      {tabName.map((name) => {
        return (
          <SelectItem key={name} value={name}>
            {name}
          </SelectItem>
        );
      })}
    </>
  );
}

function SearchInputBox() {
  return (
    <div className="search-input relative w-full lg:w-96">
      <Input
        className="w-full placeholder:font-medium placeholder:text-[--font-neutral-light-color]"
        type="text"
        placeholder="Search"
      />
      <Search className="absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-[--font-neutral-light-color]" />
    </div>
  );
}

export function ArticleSection() {
  const tabName = ["Highlight", "Cat", "Inspiration", "General"];
  const [selectedCategory, setSelectedCategory] = useState("Highlight");
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    getBlogPosts();
  }, [selectedCategory]);

  async function getBlogPosts() {
    try {
      setBlogPosts([]);

      const postsFromCategory =
        selectedCategory.toLowerCase() === "highlight"
          ? ""
          : `?category=${selectedCategory.toLowerCase()}`;

      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts${postsFromCategory}`,
      );

      setBlogPosts(response.data.posts);
      console.log(response.data.posts);
    } catch (error) {
      console.log(error);
    }
  }

  function PostByCategory() {
    const articlePosts = [...blogPosts];

    return (
      <div className="row-auto grid grid-cols-1 gap-12 px-6 pt-6 lg:row-auto lg:grid-cols-2 lg:gap-5 lg:px-0 lg:pt-8">
        {articlePosts.map((post) => {
          const formattedDate = new Date(post.date).toLocaleDateString(
            "en-GB",
            {
              day: "numeric",
              month: "long",
              year: "numeric",
            },
          );

          return (
            <BlogCard
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              description={post.description}
              author={post.author}
              date={formattedDate}
            />
          );
        })}
      </div>
    );
  }

  return (
    <section className="mx-auto flex w-full flex-col lg:max-w-screen-2xl lg:px-8">
      <h2 className="mb-6 px-6 text-xl font-bold text-[--font-primary-accent-color] lg:px-0">
        Latest articles
      </h2>

      {/* Desktop version */}
      <Tabs
        value={selectedCategory}
        onValueChange={(value) => setSelectedCategory(value)}
        className="hidden lg:flex lg:flex-col"
      >
        <TabsList className="flex h-16 w-full items-center justify-between rounded-xl bg-[--bar-color] px-5">
          <div>
            <CategoryTabsTrigger tabName={tabName} />
          </div>

          <SearchInputBox />
        </TabsList>

        <TabsContent value={selectedCategory} className="m-0">
          <div className="hidden lg:block">
            <PostByCategory selectedCategory={selectedCategory} />
          </div>
        </TabsContent>
      </Tabs>

      {/* Mobile version */}
      <div className="flex flex-col gap-3 bg-[--bar-color] px-6 py-4 lg:hidden">
        <SearchInputBox />

        <div className="flex flex-col gap-1">
          <p className="font-medium text-[--font-neutral-light-color]">
            Category
          </p>

          <Select
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Highlight" />
            </SelectTrigger>

            <SelectContent>
              <CategorySelectItem tabName={tabName} />
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Mobile post */}
      <div className="block lg:hidden">
        <PostByCategory selectedCategory={selectedCategory} />
      </div>

      <div className="flex items-center justify-center p-6 py-14 lg:pb-28 lg:pt-20">
        <a
          className="font-medium text-[--font-neutral-dark-color] underline"
          href=""
        >
          View more
        </a>
      </div>
    </section>
  );
}
