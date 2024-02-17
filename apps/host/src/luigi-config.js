Luigi.setConfig({
  navigation: {
    contextSwitcher: false,
    nodes: () => [
      {
        pathSegment: "home",
        label: "Home",
        icon: "home",
        viewUrl: "/views/host-home.html",
        children: [
          {
            pathSegment: "remote",
            label: "remote",
            icon: "nutrition-activity",
            viewUrl: "http://localhost:3002/home",
            context: {
              currentProject: ":projectId",
            },
            loadingIndicator: {
              enabled: true,
            },
          },
          {
            pathSegment: "home",
            label: "Home",
            icon: "nutrition-activity",
            viewUrl: "/views/host-home.html",
            loadingIndicator: {
              enabled: true,
            },
          },
          {
            pathSegment: "sample1",
            label: "Sample1",
            icon: "nutrition-activity",
            viewUrl: "/views/sample1.html",
            loadingIndicator: {
              enabled: true,
            },
          },
        ],
      },
    ],
  },
  routing: {
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
