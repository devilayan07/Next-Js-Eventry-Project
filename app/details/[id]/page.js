import EventDetails from "@/components/details/EventDetails"
import EventVenu from "@/components/details/EventVenu"
import HeroSection from "@/components/details/HeroSection"
import { getEventById } from "@/db/queries"

async function EventDetailsPage({params}) {
  const {id}=await params 
  const eventInfo= await getEventById(id)

  return (
    <>
    <HeroSection eventInfo={eventInfo}/>
    <section className="container">
              <div class="grid grid-cols-5 gap-12 my-12">
                <EventDetails details={eventInfo?.details} swags={eventInfo?.swags}/>
                <EventVenu location={eventInfo?.location}/>
                </div>


    </section>
      
    </>
  )
}

export default EventDetailsPage
