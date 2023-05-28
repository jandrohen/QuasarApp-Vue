import { computed } from "vue";
import { useStore } from "vuex";

const useUI = () => {
  const store = useStore();

  return {
    sideMenuOpen: computed(() => store.getters["ui/isSideMenuOpen"]),
    toggleSideMenu() {
      store.commit("ui/toggleSideMenu");
    },
  };
};

export default useUI;
