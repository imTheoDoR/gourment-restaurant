function transformTitle(menu: string) {
  switch (menu) {
    case "starters":
      return "starters";
    case "main-course":
      return "main course";
    case "lunch":
      return "lunch";
    case "desserts":
      return "desserts";
    case "drinks":
      return "drinks";
    default:
      return "unknown menu";
  }
}

export default transformTitle;
