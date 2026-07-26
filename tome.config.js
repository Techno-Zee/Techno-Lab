/** @type {import('@tomehq/core').TomeConfig} */
export default {
  name: "Techno-Lab",
  i18n: {
    defaultLocale: "id",
    locales: ["en", "id"],
    localeNames: {
      en: "English",
      id: "Indonesia",
    },
    fallback: true,
  },
  navigation: [
    {
      group: "Overview",
      pages: ["index"],
    },
    {
      group: "OverTheWire — Natas",
      pages: [
        "overthewire/natas/index",
        "overthewire/natas/level-0",
        "overthewire/natas/level-1",
        "overthewire/natas/level-2",
        "overthewire/natas/level-3",
        "overthewire/natas/level-4",
        "overthewire/natas/level-5",
        "overthewire/natas/level-6",
        "overthewire/natas/level-7",
        "overthewire/natas/level-8",
        "overthewire/natas/level-9",
        "overthewire/natas/level-10",
        "overthewire/natas/level-11",
      ],
    },
  ],
  socialLinks: [
    { platform: "github", url: "https://github.com/techno-zee/Techno-Lab" },
    {
      platform: "custom",
      url: "https://techno-zee.my.id",
      icon: "M7.5 1.5a1 1 0 0 1 1 0l5 3.75a1 1 0 0 1 .4.8V13a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3.5H9.2V13a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V6.05a1 1 0 0 1 .4-.8l5-3.75z",
    },
  ],
  search: { provider: "local" },
};
