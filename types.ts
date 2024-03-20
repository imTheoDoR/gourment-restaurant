type ItemMenuProps = {
  image: string;
  title: string;
  description: string;
  price: number;
};

type WhyItemProps = {
  image: string;
  title: string;
  description: string;
};

type EvidenceProps = {
  label: string;
  description: string;
};

type TestimonialReviewProps = {
  image: string;
  title: string;
  rating: number;
  description: string;
  order: number;
};

type DelimiterProps = {
  isLight?: boolean;
};

type HeaderProps = {
  title: string;
  description: string;
};

type SingleChefProps = {
  image: string;
  name: string;
  position: string;
  isChef?: boolean;
};
