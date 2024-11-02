import { Input } from "@/components/ui/input";
import axios from "axios";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

function SearchBar({ customStyle = "" }) {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  function addMoreSearch() {
    if (currentPage < totalPages) {
      getSearch(currentPage + 1);
    }
  }

  async function getSearch(page = 1) {
    try {
      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts?limit=6&keyword=${searchInput}&page=${page}`,
      );

      if (page === 1) {
        setSearchResult([...response.data.posts]);
      } else {
        setSearchResult((prevSearch) => [
          ...prevSearch,
          ...response.data.posts,
        ]);
      }

      setCurrentPage(response.data.currentPage);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchTimeout = setTimeout(() => {
      setSearchResult([]);
      if (searchInput) {
        getSearch();
      }
    }, 500);

    return () => clearTimeout(fetchTimeout);
  }, [searchInput]);

  return (
    <div className={`${customStyle} relative`}>
      {/* Search bar */}
      <div className={`search-input relative w-full`}>
        <Input
          className="w-full font-medium text-[--font-neutral-light-color] placeholder:text-[--font-neutral-light-color] focus-visible:border-[--button-border-color] focus-visible:ring-0 focus-visible:ring-offset-0"
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <Search className="absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-[--font-neutral-light-color]" />
      </div>

      {/* Search result */}
      {searchResult.length !== 0 && (
        <div className="absolute top-11 z-10 max-h-[450px] w-full overflow-y-auto rounded-md bg-[--background-color] p-1 text-[--font-neutral-light-color] shadow-lg lg:p-2">
          <ul className="flex flex-col items-center">
            {searchResult.map((post) => (
              <li key={post.id} className="w-full">
                <a href={`/post/${post.id}`}>
                  <div className="rounded-md p-3 text-sm hover:bg-[--bar-color] hover:text-[--font-neutral-dark-color]">
                    {post.title}
                  </div>
                </a>
              </li>
            ))}

            {currentPage < totalPages && (
              <a
                href=""
                className="hover:underline"
                onClick={(event) => {
                  event.preventDefault();
                  addMoreSearch();
                }}
              >
                <p className="px-3 py-2 text-sm">More result</p>
              </a>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
