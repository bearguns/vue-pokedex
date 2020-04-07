<template>
  <div class="pk-heading">
    <component :is="heading">
      <slot></slot>
    </component>
  </div>
</template>

<script>
export default {
  name: "PKHeading",
  props: {
    level: Number
  },
  computed: {
    heading() {
      return {
	1: "h1",
	2: "h2",
	3: "h3",
	4: "h4",
	5: "h5",
	6: "h6"
      }[this.level];
    }
  }
};
</script>

<style lang="scss">
.pk-heading {
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 4px;
    font-family: interstate-mono, monospace;
  }

  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  & h2,
  h4,
  h6 {
    font-weight: 700;
  }

  & h1,
  h3,
  h5 {
    font-weight: 400;
  }
}
</style>
