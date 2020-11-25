const components = {
  header: [
    {
      type: "link",
      label: "Home",
      url: "/",
      action: "",
      items: null,
    },
    {
      type: "submenu",
      label: "Our Services",
      url: "/",
      action: null,
      items: [
        { text: "Our Mission", action: "mission" },
        { text: "Who We Are", action: "who" },
        { text: "Our Board & Staff", action: "board" },
        { text: "Site's Features", action: "features" },
        {
          text: "Site's Membership",
          action: "membership",
        },
        { text: "Events", action: "events" },
        { text: "Tour the Site", action: "tour" },
      ],
    },
    {
      type: "link",
      label: "Contact Us",
      url: "",
      action: "contact",
      items: null,
    },
    {
      type: "logo",
      label: null,
      url: null,
      action: null,
      items: null,
    },
    {
      type: "link",
      label: "Events",
      url: "/#events-scroll",
      action: null,
      items: null,
    },
    {
      type: "link",
      label: "Blog",
      url: "",
      action: "",
      items: null,
    },
    {
      type: "link",
      label: "Login",
      url: "/login",
      action: "",
      items: null,
    },
  ],
  footer: {
    columns: [
      {
        id: "foo1",
        title: "ABOUT US",
        options: [
          {
            text: "Who we are",
            url: "",
            action: "who",
          },
          {
            text: "History",
            url: "",
            action: "history",
          },
          {
            text: "Contact",
            url: "",
            action: "contact",
          },
        ],
      },
      {
        id: "foo2",
        title: "DISCLAIMERS",
        options: [
          {
            text: "Site Policies",
            url: "",
            action: "sitePolicies",
          },
          {
            text: "Membership Policies",
            url: "",
            action: "membershipPolicies",
          },
          {
            text: "Customers Policies",
            url: "",
            action: "customerPolicies",
          },
          {
            text: "Visitors Policies",
            url: "",
            action: "visitorsPolicies",
          },
        ],
      },
      {
        id: "foo3",
        title: "TWEETS",
        options: [
          {
            text: "I would like...",
            url: "",
          },
          {
            text: "I have some...",
            url: "",
          },
        ],
        social: null,
      },
      {
        id: "foo4",
        title: "JOIN US",
        options: [
          {
            text: "Subscribe",
            url: "",
          },
        ],
      },
    ],
    copyright: "Copyright. 2020 | HLProductions ",
    socialNetworks: ["facebook", "twitter", "instagram", "youtube"],
  },
};

export default components;
