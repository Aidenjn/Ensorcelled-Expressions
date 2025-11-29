import Hero from "@/components/views/aboutPage/Hero";
import StorySection from "@/components/views/aboutPage/StorySection";
import { CustomIcon } from "@/lib/types/CustomIcon";
import ClosingStorySection from "@/components/views/aboutPage/ClosingStorySection";

export default function Home() {
  return (
    <div className="bg-background text-foreground">

      {/* Hero/Opening Section */}
      <Hero/>

      {/* Story Sections */}
      <StorySection
          image_url = "/images/greenware_mug.jpeg"
          heading="Emotionally Expressive"
          flow_left={false}
          icon={ CustomIcon.Dog }
      >
        I strive to make my art emotionally expressive.
        I do this by twisting (often inhuman) faces into my work.
        Through form I create expressions that invite answers to the question:
        <i> "What could one witness to make a face like that?"</i>
      </StorySection>
      <StorySection
          image_url = "/images/aero_press_bev.jpeg"
          heading="Functional with Purpose"
          flow_left={true}
          icon={ CustomIcon.Triclopes }
      >
        It is important to me that every piece I make, in addition to being decorative, serves at least one practical function.
        I find joy in seeing my work engaged with, so whether it be as versatile as a mug, or as specific as a sculpture designed to hold a pole upright, I ensure the art I make has a use.
      </StorySection>
      <StorySection
          image_url = "/images/painting_the_alien.jpg"
          heading="Impishly Irregular"
          flow_left={false}
          icon={ CustomIcon.Alien}
      >
        I make my ceramics by wheel and hand, giving each item a unique combination of expression, size, and color.
        Sometimes I draw on paper a prototype of the expression I want to give a particular piece (the face icons displayed on this site are examples of that).
        Other times I let the clay guide me to an expression I hadn't yet imagined.
      </StorySection>

      {/* Closing Section */}
      <ClosingStorySection/>
    </div>
  );
}