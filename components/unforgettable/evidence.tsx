"use client";

import Title from "@/components/title";

const Evidence = ({ label, description }: EvidenceProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Title text={label} isDark />
      <p className="capitalize text-lg pt-5 text-brown">{description}</p>
    </div>
  );
};

export default Evidence;
