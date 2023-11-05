const directive = {
  mounted: (el, binding) => {
    el.__ClickedOutsideHandler = (event: any) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.body.addEventListener('click', el.__ClickedOutsideHandler);
  },
  unmounted: (el) => {
    document.body.removeEventListener('click', el.__ClickedOutsideHandler);
  },
};

export default directive;
