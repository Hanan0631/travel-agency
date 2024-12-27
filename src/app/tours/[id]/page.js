import { serverFetch } from "@/services/http"
import TourDetailsPage from "src/components/templates/TourDetailsPage"

async function TourDetails({params}) {

    const data = await serverFetch(`tour/${params.id}`, null, {
    cache: "no-store",
  })

  return (
    <TourDetailsPage tourData={data} />
  )
}

export default TourDetails
