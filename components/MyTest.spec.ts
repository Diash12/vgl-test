import { mount } from "@vue/test-utils";
import MyRating from "@/components/ProductRatingBadge.vue";

describe("MyRating", () => {
  it("renders with default rating", async () => {
    const wrapper = mount(MyRating);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.vm.providedRating).toBe(0);
    expect(wrapper.vm.convertedGrade).toBe("Invalid Rating");
  });

  it("updates converted grade when rating changes", async () => {
    const wrapper = mount(MyRating);
    await wrapper.setData({ providedRating: 75 });
    expect(wrapper.vm.convertedGrade).toBe("Gut");
  });
});