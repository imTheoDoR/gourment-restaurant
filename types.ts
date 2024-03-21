type ItemMenuProps = {
  image: string;
  title: string;
  description: string;
  price: number;
  secondary?: boolean;
};

type ItemMenuTwoProps = {
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
  title?: string;
  description?: string;
  className: string;
  component?: React.ReactNode;
};

type SingleChefProps = {
  image: string;
  name: string;
  position: string;
};

type MenuCategory =
  | "starters"
  | "main-course"
  | "lunch"
  | "desserts"
  | "drinks";

type PlayButtonProps = {
  haveText?: boolean;
  isSmaller?: boolean;
  secondary?: boolean;
};

type TitleProps = {
  text: string;
  isDark?: boolean;
  className?: string;
  isSmaller?: boolean;
};

type VideoDrawerProps = {
  title: string;
  video: string;
  component: React.ReactNode;
};

type ChefProps = {
  image: string;
  name: string;
  position: string;
  description: string;
};

type FeatureItemProps = {
  image: string;
  title: string;
  description: string;
};
