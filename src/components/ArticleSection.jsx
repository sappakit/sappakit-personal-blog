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

function ArticleSection() {
  return (
    <section className="mx-auto flex w-full flex-col gap-4 py-4 lg:max-w-screen-2xl lg:px-8">
      <h2 className="px-6 text-xl font-bold text-[--font-primary-accent-color] lg:px-0">
        Latest articles
      </h2>

      <Tabs
        defaultValue="account"
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

        <TabsContent value="highlight">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="cat">Change your password here.</TabsContent>
        <TabsContent value="inspiration">a</TabsContent>
        <TabsContent value="genearal">b</TabsContent>
      </Tabs>

      <div className="flex flex-col gap-3 bg-[--bar-color] p-4 lg:hidden">
        <div className="search-input relative">
          <Input
            className="w-full placeholder:font-semibold placeholder:text-[--font-neutral-light-color]"
            type="text"
            placeholder="Search"
          />
          <Search className="absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-[--font-neutral-light-color]" />
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold text-[--font-neutral-light-color]">
            Category
          </p>

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Highlight" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}

export default ArticleSection;
