import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded>
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.subheading} />
      <PrismicRichText field={slice.primary.body} />
      {slice.primary.button_text}
      <PrismicNextLink field={slice.primary.button_link} >
        {slice.primary.button_text}
      </PrismicNextLink>
      <PrismicNextImage field={slice.primary.cans_image} />
      <PrismicRichText field={slice.primary.second_heading} />
      <PrismicRichText field={slice.primary.second_body} />
    </Bounded>
  );
};

export default Hero;
