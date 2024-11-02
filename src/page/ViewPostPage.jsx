import axios from "axios";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";

import { Smile, Copy, Facebook, Linkedin, Twitter, LogIn } from "lucide-react";

import { NavBar, Footer } from "@/components/NavBar";
import { CustomButton } from "@/components/CustomUi";
import AuthAlert from "@/components/AuthAlert";

function ShareIcon({ Icon, bgColor = "bg-red-500" }) {
  return (
    <button
      className={`flex size-12 items-center justify-center rounded-full ${bgColor}`}
    >
      <Icon className="flex size-6 text-[--bar-color]" />
    </button>
  );
}

function CommentSection() {
  return (
    <div className="mt-8 flex flex-col gap-8">
      <div className="flex items-center gap-2">
        <img
          className="mr-2 size-11 rounded-full"
          src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
          alt="Tomson P."
        />
        <div>
          <p className="text-xl font-semibold text-[--font-primary-accent-color]">
            Jacob Lash
          </p>
          <p className="text-xs text-[--font-neutral-light-color]">
            12 September 2024 at 18:30
          </p>
        </div>
      </div>

      <p className="text-[--font-neutral-light-color]">
        I loved this article! It really explains why my cat is so independent
        yet loving. The purring section was super interesting.
      </p>

      <div className="h-[1px] w-full bg-[--nav-bar-border-color]"></div>
    </div>
  );
}

function AuthorBio() {
  return (
    <aside className="mx-6 flex flex-col justify-center gap-5 rounded-lg bg-[--bar-color] p-6 lg:sticky lg:top-7 lg:mx-0 lg:h-[22.5rem] lg:w-[17.5rem] lg:min-w-[17.5rem] lg:rounded-2xl">
      <div className="flex items-center gap-1">
        <img
          className="mr-2 size-10 rounded-full"
          src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
          alt="Tomson P."
        />

        <div>
          <p className="text-xs text-[--font-neutral-light-color]">Author</p>
          <p className="text-lg font-semibold text-[--font-primary-accent-color]">
            Thompson P.
          </p>
        </div>
      </div>

      <div className="h-[2px] w-full bg-[--nav-bar-border-color]"></div>

      <div className="text-sm text-[--font-neutral-light-color]">
        <p>
          I am a pet enthusiast and freelance writer who specializes in animal
          behavior and care. With a deep love for cats, I enjoy sharing insights
          on feline companionship and wellness.
        </p>
        <br />
        <p>
          When i’m not writing, I spends time volunteering at my local animal
          shelter, helping cats find loving homes.
        </p>
      </div>
    </aside>
  );
}

function ViewPostPage() {
  const { postId } = useParams();
  const [blogPost, setBlogPost] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [isLogin, setIsLogin] = useState(false);
  const [loginAlert, setLoginAlert] = useState(false);

  useEffect(() => {
    getPost();
  }, [postId]);

  function authCheck() {
    if (!isLogin) {
      setLoginAlert(true);
    }
  }

  async function getPost() {
    try {
      setIsLoading(true);

      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts/${postId}`,
      );

      setBlogPost({ ...response.data });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {loginAlert && (
        <AuthAlert loginAlert={loginAlert} setLoginAlert={setLoginAlert} />
      )}

      <NavBar />

      {isLoading ? (
        <div className="flex items-center justify-center py-40">
          <p>Loading...</p>
        </div>
      ) : (
        <main className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center lg:px-20 lg:py-12">
          <img
            className="h-60 w-full object-cover lg:h-[35rem] lg:rounded-2xl"
            src={blogPost.image}
            alt=""
          />

          <div className="flex w-full flex-col gap-6 py-6 lg:flex-row lg:justify-between lg:gap-10 lg:px-0 lg:py-10">
            <div className="flex flex-col gap-10 lg:w-3/4 lg:gap-14">
              {/* Content */}
              <section className="markdown px-6 lg:px-0">
                <div>
                  <span className="mb-2 rounded-full bg-green-200 px-3 py-1 text-sm font-semibold text-green-600">
                    {blogPost.category}
                  </span>
                  <span className="px-3 py-1 text-sm font-normal text-muted-foreground">
                    {new Date(blogPost.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h1 className="mt-6 text-2xl font-semibold text-[--font-primary-accent-color]">
                  {blogPost.title}
                </h1>
                <p>{blogPost.description}</p>
                <ReactMarkdown>{blogPost.content}</ReactMarkdown>
              </section>

              {/* Author bio desktop */}
              <section className="inline lg:hidden">
                <AuthorBio />
              </section>

              {/* Like section */}
              <section className="flex flex-col items-center justify-center gap-4 bg-[--bar-color] px-4 py-6 lg:flex-row lg:justify-between lg:gap-2 lg:rounded-2xl lg:px-7 lg:py-4">
                <CustomButton
                  buttonType="Secondary"
                  customStyle="w-full lg:max-w-[7.5rem]"
                >
                  <Smile />
                  {blogPost.likes}
                </CustomButton>

                <div className="flex w-full items-center justify-end gap-2">
                  <CustomButton
                    buttonType="Secondary"
                    customStyle="w-full lg:max-w-[11rem]"
                  >
                    <Copy />
                    Copy link
                  </CustomButton>

                  <div className="flex gap-2">
                    <ShareIcon Icon={Facebook} bgColor={"bg-[#1877F2]"} />
                    <ShareIcon Icon={Linkedin} bgColor={"bg-[#0077b5]"} />
                    <ShareIcon Icon={Twitter} bgColor={"bg-[#55ACEE]"} />
                  </div>
                </div>
              </section>

              <section>
                {/* Comment input section */}
                <form className="flex w-full flex-col gap-2 px-6 lg:px-0">
                  <label
                    htmlFor="comment"
                    className="text-[--font-neutral-light-color]"
                  >
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    rows="3"
                    cols="50"
                    placeholder="What are your thoughts?"
                    className="rounded-lg border-2 border-[--nav-bar-border-color] p-3 text-[--font-neutral-light-color]"
                    onClick={authCheck}
                  ></textarea>
                  <CustomButton
                    type="submit"
                    buttonType="Primary"
                    customStyle="w-[7.5rem] lg:self-end"
                  >
                    Send
                  </CustomButton>
                </form>

                {/* Comment section */}
                <div className="px-6 lg:px-0">
                  <CommentSection />
                  <CommentSection />
                  <CommentSection />
                </div>
              </section>
            </div>

            {/* Author bio mobile */}
            <div className="hidden lg:inline">
              <AuthorBio />
            </div>
          </div>
        </main>
      )}

      <Footer />
    </>
  );
}

export default ViewPostPage;
