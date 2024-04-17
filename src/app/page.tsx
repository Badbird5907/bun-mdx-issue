import { MDXRemote } from "next-mdx-remote/rsc";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <MDXRemote source={"# Hello, world!"} />
    </main>
  );
}
