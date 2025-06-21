// Centralized icon management for SVG files
export const skillIcons = {
  react: '/assets/skills/react.svg',
  nextjs: '/assets/skills/nextjs.svg',
  typescript: '/assets/skills/typescript.svg',
  javascript: '/assets/skills/javascript.svg',
  nodejs: '/assets/skills/node.svg',
  express: '/assets/skills/express.svg',
  mongodb: '/assets/skills/mongodb.svg',
  graphql: '/assets/skills/graphql.svg',
  apolloGraphql: '/assets/skills/apollo-graphql.svg',
  docker: '/assets/skills/docker.svg',
  jenkins: '/assets/skills/jenkins.svg',
  github: '/assets/skills/github.svg',
  gitlab: '/assets/skills/gitlab.svg',
  html: '/assets/skills/html.svg',
  css: '/assets/skills/css.svg',
  tailwindcss: '/assets/skills/tailwind-css.svg',
  bootstrap: '/assets/skills/bootstrap.svg',
  materialui: '/assets/skills/materialui.svg',
  redux: '/assets/skills/redux.svg',
  zustand: '/assets/skills/zustand.svg',
  vite: '/assets/skills/vite.svg',
  storybook: '/assets/skills/storybook.svg',
  framer: '/assets/skills/framer.svg',
  stripe: '/assets/skills/stripe.svg',
  spotify: '/assets/skills/spotify.svg'
} as const;

// Social media icons (if you need them)
export const socialIcons = {
  github: '/assets/social/github.svg',
  linkedin: '/assets/social/linkedin.svg',
  twitter: '/assets/social/twitter.svg',
  email: '/assets/social/email.svg'
} as const;

// Utility icons (if you need them)
export const utilityIcons = {
  arrow: '/assets/icons/arrow.svg',
  close: '/assets/icons/close.svg',
  menu: '/assets/icons/menu.svg',
  theme: '/assets/icons/theme.svg'
} as const;

export type SkillIconKey = keyof typeof skillIcons;
export type SocialIconKey = keyof typeof socialIcons;
export type UtilityIconKey = keyof typeof utilityIcons;
