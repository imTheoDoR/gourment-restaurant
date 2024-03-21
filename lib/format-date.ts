function formatDate(date: string) {
  const data = new Date(date);

  return data.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default formatDate;
