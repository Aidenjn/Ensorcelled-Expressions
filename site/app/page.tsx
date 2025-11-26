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
        Through form, I endeavor to create expressions that invite answers to the question: <i>"What could one witness to make a face like that?"</i>
      </StorySection>
      <StorySection
          image_url = "/images/aero_press_bev.jpeg"
          heading="Functional with Purpose"
          flow_left={true}
          icon={ CustomIcon.Triclopes }
      >
        It is important to me that every piece I make serves at least one use in addition to being decorative.
        I find joy in seeing my work engaged with, so whether it be as versatile as a mug, or as specific as a sculpture designed to keep a pole upright, I ensure the art I make holds practical function.
      </StorySection>
      <StorySection
          image_url = "/images/painting_the_alien.jpg"
          heading="Impishly Irregular"
          flow_left={false}
          icon={ CustomIcon.Alien}
      >
        My work is never duplicative.
        I make my pieces by wheel and hand, giving each a unique combination of expression, size, and color.
        The expressions I give my pieces can be subtley to outlandishly distinct, and many follow motifs you may recognize if you've seen enough of my work.
      </StorySection>

      {/* Closing Section */}
      <ClosingStorySection/>
    </div>
  );
}