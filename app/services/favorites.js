import Service from "@ember/service";

export default Service.extend({
  items: [{ id: "One" }],

  favoriteItem(item) {
    this.get("items").addObject(item);
    console.log(
      this.get("items")
        .map(item => item.id)
        .join(" ")
    );
  }
});
