import FeaturedCards from "@/components/FeaturedCards";
import Hero from "@/components/Hero";
import Artist from "@/components/Artist";
import MovingCard from "@/components/MovingCard";
import FeaturedWebinars from "@/components/FeaturedWebinars";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
    <main className="">
     <Hero></Hero>
     <FeaturedCards></FeaturedCards>
     <Artist></Artist>
     <MovingCard></MovingCard>
     <FeaturedWebinars></FeaturedWebinars>
     <Instructors></Instructors>
    </main>
  );
}
