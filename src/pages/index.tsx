import Head from "next/head";
import useFetch from "@/code/useFetch";
import { useEffect, useState } from "react";

interface CityInter {
  id: number;
  wikiDataId: string;
  type: string;
  city: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  regionWdId: string;
  latitude: number;
  longitude: number;
  population: number;
}
interface cansado {
  data: CityInter[];
}
export default function Home() {
  useEffect(() => {}, []);

  const { data, loading } = useFetch();
  return (
    <>
      <Head>
        <title>The Weather App</title>
        <meta name="description" content="Weather app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <>
          {console.log(data)}
          <h1>The Weather App</h1>
          {loading ? (
            <h2>cargando</h2>
          ) : (
            data.map((x) => <p key={x.id}>{x.city}</p>)
          )}
        </>
      </main>
    </>
  );
}
