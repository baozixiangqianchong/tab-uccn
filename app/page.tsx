import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mt-12">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">免费使用</p>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          <span className="text-blue-600">源境</span> 让学习轻松又高效
        </h1>

        <p className="mt-5 max-w-prose text-lg text-zinc-700 sm:text-2xl">
          源境，内置丰富小组件及各种学习教程，一个全新的世界，等你来体验
        </p>

        <Link
          className={cn(
            buttonVariants({
              size: "lg",
              className: "mt-5",
            }),
            "text-lg",
          )}
          href="https://static-1255812373.cos.ap-beijing.myqcloud.com/yuanjing-nav-crx-2025-2-6.zip"
        >
          下载
        </Link>
      </MaxWidthWrapper>

      {/* Value Prop */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>

          <div>
            <div className="mx-auto flex max-w-6xl justify-center px-6 lg:px-8">
              <div className="mt-8 flow-root sm:mt-16">
                <div className="-m-2 w-fit rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.png"
                    alt="product preview"
                    width={955}
                    height={808}
                    quality={100}
                    className="rounded-md bg-special p-2 shadow-2xl ring-1 ring-gray-900/10 md:p-8"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative right-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <MaxWidthWrapper>
        <div className="mx-auto mt-20 flex max-w-5xl flex-col gap-20 sm:mt-40 sm:gap-40 ">
          {/* Intro */}
          <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  开启主页新形态
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  使用源境，打造属于自己的舒适。
                </p>
              </div>
            </div>
            {/* steps */}

            <ol className="my-2 space-y-4 pt-2 md:flex md:space-x-6 md:space-y-0 md:px-8">
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 1
                  </span>
                  <span className="text-xl font-semibold">点击下载</span>
                  <span className="mt-2 text-zinc-700">
                    开启浏览器的{" "}
                    <Link
                      href="https://static-1255812373.cos.ap-beijing.myqcloud.com/yuanjing-nav-crx-2025-2-6.zip"
                      className="text-blue-700 underline underline-offset-2"
                    >
                      变装
                    </Link>
                  </span>
                </div>
              </li>
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 2
                  </span>
                  <span className="text-xl font-semibold">解压zip</span>
                  <span className="mt-2 text-zinc-700">
                    打开chrome扩展程序，拖拽文件安装
                  </span>
                </div>
              </li>
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 3
                  </span>
                  <span className="text-xl font-semibold">开启新形态</span>
                  <span className="mt-2 text-zinc-700">
                    打开新的标签页，开启探索之旅
                  </span>
                </div>
              </li>
            </ol>
          </div>

          {/* 搜索之道 */}
          <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  搜索之道
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  内置丰富的搜索引擎和快捷方式，满足日常需求，为工作学习提速。
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div>
                <Card className="mb-6 flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>搜索引擎</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    内置丰富的搜索引擎，包含网页、地图、技术等，提供极致的搜索服务
                  </CardDescription>
                  <div className="flex gap-6">
                    <Image
                      src="/search-type-1.png"
                      alt="cafe scenario"
                      width={475}
                      height={408}
                      quality={100}
                    />
                    <Image
                      src="/search-type-2.png"
                      alt="cafe scenario"
                      width={475}
                      height={408}
                      quality={100}
                    />
                  </div>
                </Card>
                <div className="flex flex-col gap-6 md:flex-row">
                  <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                    <CardTitle>实用组件</CardTitle>
                    <CardDescription className="mb-3 text-center">
                      包含多种快捷组件，为工作学习提速
                    </CardDescription>
                    <Image
                      src="/min-module.png"
                      alt="cafe scenario"
                      width={958}
                      height={408}
                      quality={100}
                    />
                  </Card>
                </div>
              </div>
            </div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <p className="mt-4 text-lg text-gray-600">
                  更多惊喜等你发掘...
                </p>
              </div>
            </div>
          </div>

          {/* 命令速查 */}
          <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  命令速查
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  快速定位知识位置，辅助学习更多技术。
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-6 md:flex-row">
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>快速定位</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    支持搜索，点击选中的知识内容后跳转到所需知识位置
                  </CardDescription>
                  <div className="flex gap-4">
                    <Image
                      src="/quick-check.png"
                      alt="cafe scenario"
                      width={475}
                      height={408}
                      quality={100}
                      className="rounded-xl"
                    />
                    <Image
                      src="/jie-guo.png"
                      alt="cafe scenario"
                      width={475}
                      height={408}
                      quality={100}
                      className="rounded-xl"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
          {/* 科院导航 */}
          <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  科院导航
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  更多快捷工具，方便学习生活。
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-6 md:flex-row">
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>快捷工具</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    内含丰富的生活、学习工具及技术教程，提升工作学习效率，为自己的赋能
                  </CardDescription>
                  <Image
                    src="/easy-navigation.png"
                    alt="cafe scenario"
                    width={955}
                    height={808}
                    quality={100}
                    className="rounded-xl"
                  />
                </Card>
              </div>
            </div>
          </div>

          {/* 分类教程 */}
          <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  分类教程
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  丰富的技术教程，提升自己的核心竞争力。
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-6 md:flex-row">
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>技术教程</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    包含多方面技术教程，可根据自身需求进行学习
                  </CardDescription>
                  <Image
                    src="/classified-course.png"
                    alt="cafe scenario"
                    width={955}
                    height={808}
                    quality={100}
                    className="rounded-xl"
                  />
                </Card>
              </div>
            </div>
          </div>

          {/* 用户反馈 */}
          {/* <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Feedback
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  What are people saying about Convo
                </p>
              </div>
            </div>

            <div>
              <div className="mx-auto flex max-w-6xl justify-center px-6 lg:px-8">
                <div className="flow-root">
                  <div className="-m-2 w-fit rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:-m-4 lg:rounded-2xl lg:p-4">
                    <Image
                      width={2556}
                      height={1436}
                      quality={100}
                      src="/tweet_collage.png"
                      alt="Header image"
                      className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10 md:p-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </MaxWidthWrapper>

      <Footer />
    </>
  );
}
