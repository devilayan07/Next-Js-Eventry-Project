import EventDetails from "@/components/details/EventDetails"
import EventVenu from "@/components/details/EventVenu"
import HeroSection from "@/components/details/HeroSection"

function DetailsPage() {
  return (
    <>
    <HeroSection/>
    <section className="container">
              <div class="grid grid-cols-5 gap-12 my-12">
                <EventDetails/>
                <EventVenu/>
                </div>


    </section>
      
    </>
  )
}

export default DetailsPage
