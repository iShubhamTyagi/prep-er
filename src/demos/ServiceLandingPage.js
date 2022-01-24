import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import TwoColContactUsWithIllustration from "components/forms/TwoColContactUsWithIllustration";
import Footer from "components/footers/MiniCenteredFooter.js";

const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <div>
       <AnimationRevealPage>
      <Hero />
      <FeatureStats/>
      <Features 
        heading={<>Solutions for Hospitals<HighlightedText></HighlightedText></>}
      />
      <Testimonial 
        heading={<>Testimonials<HighlightedText></HighlightedText></>}
      />
      <Blog
        subheading="Blog"
        heading={<>We love <HighlightedText>Writing</HighlightedText></>}
      />
      <TwoColContactUsWithIllustration/>
      </AnimationRevealPage>
    <SubscribeNewsLetterForm/>
    <Footer />  
    </div>
  );
}
