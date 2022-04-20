import { defineStore } from "pinia";

const useStore = defineStore("main", {
  state: () => {
    return {
      title: "",
      paragraph: "",
      fontSize: 16,
      leading: 1.35,
      measure: 600,

      fontWeight: 400,
      italic: false,
      underline: false,
      ligatures: false,
      justifyCenter: false,
      color: "#000",

      fontSizeLastUpdate: "local",
      leadingLastUpdate: "local",
      measureLastUpdate: "local",
      fontWeightLastUpdate: "local",
    };
  },

  getters: {},
});

export { useStore };
