import { defineStore } from "pinia";

const useStore = defineStore("main", {
  state: () => {
    return {
      title: "You can write anything",
      paragraph:
        "It's a kindness that we cannot see beyond our fleshy capabilities",
      fontWeight: false,
      italic: false,
      underline: false,
      ligatures: true,
      kerning: true,
      antialising: false,
      fontSize: "16px",
      leading: "1.35",
      measure: "600px",
    };
  },
  actions: {
    updateTitle(title) {
      this.title = title;
    },
    updateParagraph(paragraph) {
      this.paragraph = paragraph;
    },
  },
  getters: {
    getTitle: (state) => state.title,
    getParagraph: (state) => state.paragraph,
    getFontWeight: (state) => state.fontWeight,
    isItalic: (state) => state.italic,
    isUnderline: (state) => state.underline,
  },
});

export { useStore };
