"user client";

import Title from "@/components/title";
import { testimonials } from "@/data/testimonials";
import TestimonialReview from "@/components/homepage/testimonial/testimonial-review";

const TestimonialWrapper = () => {
  return (
    <section className="container py-32">
      <h6 className="text-gray text-2xl text-center pb-5">Testimonials</h6>
      <Title
        text="read what others have to say"
        className="text-center max-w-xl mx-auto"
        isDark
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-20 mt-32 space-y-10 lg:space-y-0">
        {testimonials.map(({ image, title, rating, description }, index) => (
          <TestimonialReview
            key={index}
            image={image}
            title={title}
            rating={rating}
            description={description}
            order={index}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialWrapper;
