<template>
  <div class="locale-changer">
    <button class="locale" @click="toggleLocaleVisibility">
      <img src="../assets/Language.svg" alt="Language" />
    </button>
    <div :class="{ 'locale-options': true, show: showLocaleOptions }">
      <div
        v-for="(lang, i) in langs"
        :key="`Lang${i}`"
        class="lang-option"
        @click="selectLocale(lang.code)"
      >
        {{ lang.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return {
      langs: [
        { code: "en", text: "EN" },
        { code: "pt", text: "PT" },
      ],
      showLocaleOptions: false,
    };
  },
  methods: {
    toggleLocaleVisibility() {
      this.showLocaleOptions = !this.showLocaleOptions;
    },
    selectLocale(code) {
      this.$i18n.locale = code;
      this.showLocaleOptions = false;
    },
  },
};
</script>

<style scoped>
button.locale {
  border: 0;
  background: transparent;
}

.locale-changer {
  position: absolute;
}

.locale-options {
  display: none;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.locale-options.show {
  display: block;
}

.lang-option {
  cursor: pointer;
  padding: 5px;
}

.lang-option:hover {
  background-color: #f0f0f0;
}
</style>
