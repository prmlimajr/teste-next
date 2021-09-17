import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HVAR - WHIRLPOOL | HOME</title>
      </Head>
      <h1>hello world</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["HVAR-WHIRLPOOL_USER"]: user } = parseCookies(ctx);

  if (!user) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
