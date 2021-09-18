import { GetServerSideProps } from "next";
import Head from "next/head";
import { signOut as GithubSignOut } from "next-auth/client";
import { parseCookies } from "nookies";
import { useAuth } from "../context/auth";

export default function Home() {
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    GithubSignOut();
    signOut();
  };
  return (
    <div>
      <Head>
        <title>HVAR - WHIRLPOOL | HOME</title>
      </Head>
      <h1>hello, {user && user.name}</h1>
      <button onClick={() => handleSignOut()}>sair</button>
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
