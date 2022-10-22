import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import styles from "../styles/Home.module.css";

const Blog: NextPage = () => {
  const [sectionIdx, setSectionIdx] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <body>
        <div className="w-4/5 ml-auto mr-auto mt-10">
          <div className="inline-block">
            <h1 className="text-3xl font-bold">⚙️Tech Blog</h1>
            <p className="text-xl">대충 멋진 설명</p>
          </div>
          <button className="bg-button hover:bg-white text-white hover:text-black font-bold w-40 py-2 px-4 rounded-full sm:float-right flex justify-center">
            새 글 작성
          </button>
        </div>
        <div className="subjects mt-10 w-4/5 ml-auto mr-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center">
            <button
              className={`${
                sectionIdx == 0
                  ? "bg-devkor text-black font-bold"
                  : "bg-button text-white"
              } w-32 py-2 px-4 rounded-full flex justify-center ml-auto mr-auto`}
              onClick={() => setSectionIdx(0)}
            >
              전체
            </button>
            <button
              className={`${
                sectionIdx == 1
                  ? "bg-devkor text-black font-bold"
                  : "bg-button text-white"
              } w-32 py-2 px-4 rounded-full flex justify-center ml-auto mr-auto`}
              onClick={() => setSectionIdx(1)}
            >
              FrontEnd
            </button>
            <button
              className={`${
                sectionIdx == 2
                  ? "bg-devkor text-black font-bold"
                  : "bg-button text-white"
              } w-32 py-2 px-4 rounded-full flex justify-center ml-auto mr-auto`}
              onClick={() => setSectionIdx(2)}
            >
              BackEnd
            </button>
            <button
              className={`${
                sectionIdx == 3
                  ? "bg-devkor text-black font-bold"
                  : "bg-button text-white"
              } w-32 py-2 px-4 rounded-full flex justify-center ml-auto mr-auto`}
              onClick={() => setSectionIdx(3)}
            >
              ML
            </button>
            <button
              className={`${
                sectionIdx == 4
                  ? "bg-devkor text-black font-bold"
                  : "bg-button text-white"
              } w-32 py-2 px-4 rounded-full flex justify-center ml-auto mr-auto`}
              onClick={() => setSectionIdx(4)}
            >
              DevOps
            </button>
            <button
              className={`${
                sectionIdx == 5
                  ? "bg-devkor text-black font-bold"
                  : "bg-button text-white"
              } w-32 py-2 px-4 rounded-full flex justify-center ml-auto mr-auto`}
              onClick={() => setSectionIdx(5)}
            >
              기타
            </button>
          </div>
        </div>
        <form className="searchbar mt-10 w-4/5 ml-auto mr-auto">
          <div className="relative">
            <div className="searchicon flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-devkor"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              className="block p-4 pl-10 w-full text-sm text-white bg-transparent rounded-full border border-devkor outline-none"
              placeholder=""
            />
            <button
              type="submit"
              className="absolute right-2.5 bottom-2.5 bg-button text-white hover:bg-devkor hover:text-black font-medium rounded-full text-sm px-4 py-2"
            >
              {/* 이거 버튼 클릭시 흰검으로 할지 주검으로 할지 고민중*/}
              Search
            </button>
          </div>
        </form>
        <div className="bloglist mt-10 w-4/5 ml-auto mr-auto mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-8">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </body>
      <div className="h-60">{/* Footer 완성되면 여기에 채우기 */}</div>
    </div>
  );
};

export default Blog;
