import { Hero } from "@/components/Hero";
import { Grid } from "@/components/Grid";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return(
    <main className="h-screen">
      <Hero/>
      <Grid/>
      <Footer/>
    </main>
  )

}
