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
            children: [
              {
                link: "/sample1",
                label: "This takes you to [YOUR.WEBSITE]/TopNav1/internalLink",
              },
            ],
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
            pathSegment: "home2",
            label: "Host Home",
            icon: "home",
            viewUrl: "http://localhost:3002/remoteMFE/home",
            children: [
              {
                pathSegment: "home2",
                label: "Remote Home",
                icon: "paper-plane",
                viewUrl: "http://localhost:3002/remoteMFE/home",
                loadingIndicator: {
                  enabled: false,
                },
              },
              {
                pathSegment: "sample1",
                label: "Remote Sample1",
                icon: "paper-plane",
                viewUrl: "http://localhost:3002/remoteMFE/sample1",
                loadingIndicator: {
                  enabled: false,
                },
              },
              {
                pathSegment: "sample2",
                label: "Remote Sample2",
                icon: "paper-plane",
                viewUrl: "http://localhost:3002/remoteMFE/sample2",
                loadingIndicator: {
                  enabled: false,
                },
              },
            ],
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
