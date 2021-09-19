import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import { ProductCard } from "../components/ProductCard";
import { useAuth } from "../context/auth";

export default function Home() {
  const { user, signOut } = useAuth();

  return (
    <div>
      <Head>
        <title>HVAR - WHIRLPOOL | HOME</title>
      </Head>

      <ProductCard
        id="asdad"
        image="https://whirlpool.s3.amazonaws.com/wp-content/uploads/2014/07/Jennair2.png"
        name="Refrigerador"
        price={1999.9}
        sku="asdas"
      />

      <button onClick={() => signOut()}>sair</button>
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
