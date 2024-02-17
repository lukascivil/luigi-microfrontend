// Luigi.setConfig({
//   navigation: {
//     nodes: () => [
//       {
//         pathSegment: "home",
//         label: "Home",
//         icon: "home",
//         viewUrl: "/sampleapp.html#/home",
//         children: [
//           {
//             pathSegment: "sample1",
//             label: "First",
//             icon: "nutrition-activity",
//             viewUrl: "/sampleapp.html#/sample1",
//           },
//           {
//             pathSegment: "sample2",
//             label: "Second",
//             icon: "paper-plane",
//             viewUrl: "/sampleapp.html#/sample2",
//           },
//           {
//             category: { label: "Links", icon: "cloud" },
//             label: "Luigi Project",
//             externalLink: { url: "https://luigi-project.io/" },
//           },
//           {
//             category: "Links",
//             label: "React.js",
//             externalLink: { url: "https://reactjs.org/" },
//           },
//         ],
//       },
//     ],
//   },
//   settings: {
//     header: { title: "Luigi React App", logo: "/logo.png" },
//     responsiveNavigation: "simpleMobileOnly",
//   },
// });

Luigi.setConfig({
  navigation: {
    contextSwitcher: false,
    nodes: () => [
      {
        pathSegment: "home",
        label: "Home",
        icon: "home",
        viewUrl: "/views/home.html",
        children: [
          {
            pathSegment: "remote",
            label: "remote",
            icon: "nutrition-activity",
            viewUrl: "http://localhost:3002/home/sample2",
            loadingIndicator: {
              enabled: false,
            },
          },
          {
            pathSegment: "home",
            label: "Home",
            icon: "nutrition-activity",
            viewUrl: "/views/home.html",
            loadingIndicator: {
              enabled: false,
            },
          },
          {
            pathSegment: "sample1",
            label: "First",
            icon: "nutrition-activity",
            viewUrl: "/views/sample1.html",
            loadingIndicator: {
              enabled: false,
            },
          },
        ],
      },
    ],
  },
  routing: {
    /**
     * Development:
     * For path routing, set to false
     * For hash routing, set to true
     */
    useHashRouting: true,
  },
  settings: {
    header: {
      title: "Luigi JavaScript",
      logo: "/logo.png",
      favicon: "/favicon.ico",
    },
    responsiveNavigation: "simpleMobileOnly",
    appLoadingIndicator: {
      hideAutomatically: true,
    },
  },
});
