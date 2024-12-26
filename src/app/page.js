import { serverFetch } from "@/services/http";
import Banner from "@/ui/atom/Banner";
import Title from "@/ui/molecule/Title";
import Search from "@/ui/organism/Search";
import AllTours from "src/components/templates/AllTours";

async function Home({ searchParams }) {
  const data = await serverFetch("tour", searchParams, { cache: "no-store" });

  return (
    <div>
      <Banner />
      <Title />
      <Search />
      <AllTours toursData={data} searchParams={searchParams} />
    </div>
  );
}

export default Home;
