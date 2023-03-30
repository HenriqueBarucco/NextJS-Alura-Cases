import Head from "next/head";
import Link from "../src/components/Link";

export default function FAQPage() {
  return (
    <div>
      <Head>
        <title>FAQ - Alura Cases Campanha</title>
      </Head>
      <h1>Alura Cases - Página de Perguntas FAQ</h1>
      <Link href="/">Ir para a home.</Link>
    </div>
  );
}
