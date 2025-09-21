import { createI18n } from "vue-i18n";

// Import locale messages
import en from "./en.json";
import fr from "./fr.json";

const i18n = createI18n({
  legacy: false, // composition API mode
  globalInjection: true, // allow $t in templates
  locale: "en", // default
  fallbackLocale: "en",
  messages: {
    en,
    fr
  }
});

export default i18n;
