Luigi.setConfig({
  navigation: {
    contextSwitcher: false,
    nodes: () => [
      {
        pathSegment: "home",
        label: "Host Home",
        icon: "home",
        viewUrl: "/views/host-home.html",
        children: [
          {
            pathSegment: "remote",
            label: "Remote Home",
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
            label: "Host Home",
            icon: "nutrition-activity",
            viewUrl: "/views/host-home.html",
            loadingIndicator: {
              enabled: true,
            },
          },
          {
            pathSegment: "sample1",
            label: "Host Sample1",
            icon: "nutrition-activity",
            viewUrl: "/views/host-sample1.html",
            loadingIndicator: {
              enabled: false,
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
