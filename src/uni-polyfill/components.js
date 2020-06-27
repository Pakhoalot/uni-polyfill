import uniButton from "uni-components/button";

export const Button = {
components: {
  "v-uni-button": uniButton,
},
  props: {
    ...uniButton.props,
  },
  render(h) {
    return h(
      "v-uni-button",
      {
        props: {
          ...this.props
        }
      },
      this.$slots.default
    );
  },
};
