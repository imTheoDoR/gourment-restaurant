"use client";

const Subtitle = ({ text }: { text: string }) => {
  return (
    <h4 className="text-gray3 max-w-[700px] mx-auto pt-5 text-lg leading-7">
      {text}
    </h4>
  );
};

export default Subtitle;
