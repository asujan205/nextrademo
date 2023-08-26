import { useRouter } from "next/router";

export default {
  // project: {
  //   link: "https://github.com/finnoto/fn-new-web",
  // },

  // head: (
  //   <>
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     <meta property="og:title" content="Nextra" />

  //     <meta property="og:description" content="The next site builder" />
  //   </>
  // ),
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
        ></path>
      </svg>
      <span>Finnoto</span>
    </>
  ),

  // This is done for the docs repository link

  docsRepositoryBase: "https://github.com/asujan205/nextrademo/blob/master/",

  // This is done for the edit page on github link

  editLink: {
    text: "Edit this page on GitHub ",
  },
  feedback: {
    content: "Is this page helpful?",
  },

  // This is used for footer links

  // footer: {
  //   component: () => {
  //     return (
  //       <div>
  //         <a href="https://www.google.com">Google</a>
  //       </div>
  //     );
  //   },
  // },

  themeSwitch: {
    useOptions() {
      return {
        light: "Light",
        dark: "Dark",
        system: "System",
      };
    },
  },

  search: {
    // This is used for the search placeholder
    placeholder: "Search...",

    loading: "Loading...",

    error: "An error occurred, please try again later.",
  },
  // banner: {
  //   key: "2.0-release",
  //   text: (
  //     <a href="https://nextra.site" target="_blank">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   ),
  // },

  // sidebar: {
  //   titleComponent({ title, type }) {
  //     if (type === "separator") {
  //       return (
  //         <div style={{ background: "cyan", textAlign: "center" }}>{title}</div>
  //       );
  //     }
  //     if (title === "About") {
  //       return <>❓ {title}</>;
  //     }
  //     return <>👉 {title}</>;
  //   },
  // },

  // useNextSeoProps() {
  //   const { asPath } = useRouter();
  //   if (asPath !== "/") {
  //     return {
  //       titleTemplate: "%s – SWR",
  //     };
  //   }
  // },

  primaryHue: 200,
  // toc: {
  //   component: ({ toc }) => {
  //     return (
  //       <div>
  //         <h2>Table of Contents</h2>
  //         <div>{toc}</div>
  //       </div>
  //     );
  //   },
  // },
  footer: {
    text: (
      <span>
        Sujan {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          Finnoto
        </a>
        .
      </span>
    ),
  },
};
