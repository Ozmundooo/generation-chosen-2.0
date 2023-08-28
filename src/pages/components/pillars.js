import React, { useState } from "react";
import ibi from "../../assets/ibi.jpg";
import ruth from "../../assets/ruth.jpg";
import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";
export default function pillars() {
  const [image, setImage] = useState(0);

  function changeImage(change) {
    if (image == change) setImage(0);
    else setImage(change);
    console.log(image);
  }
  return (
    <section className="lg:flex lg:gap-5 lg:my-16 mx-6 lg:mx-12">
      <div className="my-10 lg:w-1/2 lg:my-auto">
        <h1 className="mb-2 text-3xl font-title font-medium text-[#CB2607]">
          <span className="text-black">Our</span> Pillars
        </h1>
        <h4 className="text-md font-light font-subtitle mb-4">
          Our program caters to the needs of racialized, marginalized and
          disenfranchised inner-city youth by focussing on 4 key areas, which we
          believe, fundamentally catalyze holistic human development.
        </h4>
        <Accordion className="font-title" variant="bordered">
          <AccordionItem
            key="1"
            aria-label="Mental Health"
            title="Mental Health"
            className="font-title font-medium "
            onClick={() => changeImage(1)}
          >
            <span className="font-subtitle font-light text-md">
              Suicide is a major cause of death among young people, with 24% of
              all deaths among 15-24 year olds and 16% among 25-44 year olds
              being attributed to it. Mental illness and disorders affect a
              significant proportion of Canadian youth, with an estimated 10-20%
              being affected. The causes of mental health issues in youth are
              multifaceted, including factors such as hyper-masculinity,
              hyper-femininity, poverty, and unresolved childhood trauma. In
              their program, the authors have successfully provided youth with
              tools and insights to address anxiety and depression.
            </span>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="E.I. (Emotional Intelligence)"
            title="E.I. (Emotional Intelligence)"
            className="font-title font-medium "
            onClick={() => changeImage(2)}
          >
            <span className="font-subtitle font-light text-md">
              In regards to emotional intelligence (EI), what has been rising in
              popularity (within the business and sport sectors of our society)
              is the idea of EQ, which stands for "emotional quotient." EQ looks
              at the way people function and perform under duress, and EI,
              complementarily, endeavours to help particular individuals
              appropriately assess their own emotional states (and the emotional
              states of others) in varying moments of their lived experience and
              adequately relate to external stimuli (persons, places, and
              things) in a way that is most fruitful for themselves and others.
            </span>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Education"
            title="Education"
            className="font-title font-medium "
            onClick={() => changeImage(3)}
          >
            <span className="font-subtitle font-light text-md">
              It is well documented that the high level of unemployment amongst
              youth is comparable to a lack of educational attainment. According
              to the Sesotho proverb "thato ke lesedi", translated to "education
              is hope", education acts as a mobilizer of dreams, passions, and
              inspirations i.e. hope. This is why in our program we focus on
              connecting youth to work-study programs, continuing education
              programs, credit upgrading/recovery programs, financial literacy
              and entrepreneurial workshops, as well as providing them with the
              opportunity to acquire 21st century skills that can be monetized
              in the modern world of work. This is all done so as to ensure that
              our youth have the best chances for success in the fields they
              seek to work in and create.
            </span>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Civic Engagement"
            title="Civic Engagement"
            className="font-title font-medium "
            onClick={() => changeImage(4)}
          >
            <span className="font-subtitle font-light text-md">
              In order to imagine and work towards the best possible world, one
              must possess a core set of values that foster novelty and
              progressive leadership, while being aware of the emotional traits
              that such leadership requires. A meaningful and intimate
              connection to history is also necessary to avoid repeating traumas
              and tragedies of the past. Through their program, Generation
              Chosen is helping marginalized youth develop the thought patterns
              and emotional habits required to envision a better world, while
              also providing practical training and exposure to the political
              ecosystem in order to develop a generation of advocates and policy
              makers that can create an inclusive and diverse world.
            </span>
          </AccordionItem>
        </Accordion>
      </div>
      <Image
        src={image % 2 === 0 ? ibi : ruth}
        className={`rounded-lg hidden object-cover ${
          image !== 0 ? `lg:h-[60vh]` : `lg:h-[40vh]`
        } lg:w-1/2 lg:flex  duration-1000 `}
      />
    </section>
  );
}
