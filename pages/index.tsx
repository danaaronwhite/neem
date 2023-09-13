import Head from "next/head";
import Household from "../components/Insurance/Household";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="max-w-[640px] mx-auto py-10">
          <div className="bg-white shadow-xl p-8">
            <h1 className="mb-3">Household</h1>
            <div className="overflow-x-scroll lg:overflow-auto">
              <Household />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
