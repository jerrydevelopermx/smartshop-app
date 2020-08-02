const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices",
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture",
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career",
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5",
  },
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

const pages = [
  {
    id: 0,
    name: "Website Page",
    logo: "online-shop.jpg",
    coverImage: "",
    description: "This is the website home page",
    headerMenu: [
      { type: "link", label: "Home", url: "/" },
      {
        type: "submenu",
        label: "Our Services",
        items: [
          { text: "Our Mission", action: "mission" },
          { text: "Who We Are", action: "who" },
          { text: "Our Board & Staff", action: "board" },
          { text: "Site's Features", action: "features" },
          { text: "Site's Membership", action: "membership" },
          { text: "Events", action: "events" },
          { text: "Tour the Site", action: "tour" },
        ],
      },
      { type: "link", label: "Contact Us", url: "/contact" },
      { type: "logo" },
      { type: "link", label: "Events", url: "/events" },
      { type: "link", label: "Blog", url: "/blog" },
      { type: "link", label: "Login", url: "/login" },
    ],
    styles: {
      body: {
        background: "#fff",
      },
      header: {
        header: {
          background: "#590F10",
          height: "100px",
        },
        toolbarSecondary: {
          justifyContent: "space-between",
          overflowX: "auto",
          marginTop: "20px",
        },
        toolbarLink: {
          //padding: theme.spacing(1), *8
          padding: "8px",
          flexShrink: 0,
        },
        headerActive: {
          color: "#fff",
        },
        headerMenu: {
          color: "#fff",
          fontSize: "20px",
          textDecoration: "none",
        },
      },
    },
    classes: {
      body: {
        background: "#fff",
        fontFamily: "Verdana",
      },
      header: { background: "#590F10", height: "100px" },
      toolbarSecondary: {
        justifyContent: "space-between",
        overflowX: "auto",
        marginTop: "20px",
      },
      toolbarLink: {
        //padding: theme.spacing(1), *8
        width: "107px",
        padding: "8px",
        flexShrink: 0,
      },
      headerActive: {
        color: "#fff",
      },
      headerMenu: {
        color: "#fff",
        fontSize: "17px",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
          cursor: "pointer",
        },
      },
      drawer: {
        background: "#590F10",
        color: "white",
      },
      drawerList: {
        width: "180px",
      },
      footer: {
        background: "#590F10",
        //padding: theme.spacing(6),
        padding: "48px",
        color: "#fff",
      },
      cardGrid: {
        paddingTop: "30px",
        paddingBottom: "30px",
        //paddingTop: theme.spacing(8),
        //paddingBottom: theme.spacing(8),
      },
      card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
      },
      cardMedia: {
        paddingTop: "56.25%", // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      slider: {
        marginTop: "80px",
      },
      searchContent: {
        border: "1px solid #ccc",
        padding: "5px",
        margin: "10px",
      },
      searchField: {
        margin: "8px",
        minWidth: "98%",
        borderCollapse: "collapsed",
        borderRadius: "18px!important",
      },
      videoContainer: {
        marginTop: "30px",
        marginBottom: "30px",
      },
      videoPlayer: {
        margin: "auto",
        width: "85%",
        textAlign: "center",
      },
      contentModalsHeader: {
        background: "#590F10",
        color: "#fff",
      },
      contentModalsBody: {
        background: "#fff",
      },
    },
    slides: [
      {
        img: "banner1.jpg",
        text: null,
      },
      {
        img: "banner3.jpg",
        text: null,
      },
    ],
    categories: [
      {
        id: "cat1",
        name: "Accesories",
      },
      {
        id: "cat2",
        name: "Sports",
      },
      {
        id: "cat3",
        name: "Shoes",
      },
      {
        id: "cat4",
        name: "Chothes",
      },
      {
        id: "cat5",
        name: "Women",
      },
      {
        id: "cat6",
        name: "Men",
      },
    ],
    video: {
      autoPlay: false,
      poster: "who-we-are.jpg",
      src: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    },
    offers: [
      {
        img: "offers1.jpg",
        text: null,
      },
    ],
  },
  {
    id: 1,
    categoryId: "cat1",
    name: "Bags Store",
    logo: "pbags.png",
    coverImage: "bag-store.jpg",
    description: "This is store website",
    headerMenu: [
      { type: "link", label: "Home", url: "/store/1" },
      { type: "link", label: "Our Services", url: "/store/1/services" },
      { type: "link", label: "Contact Us", url: "/store/1/contact" },
      { type: "logo" },
      { type: "link", label: "Events", url: "/store/1/events" },
      { type: "link", label: "Blog", url: "/store/1/blog" },
      { type: "link", label: "Login", url: "/store/1/login" },
    ],
    classes: {
      body: {
        background: "#fff",
      },
      header: { background: "#2E3B55", height: "100px" },
      toolbarSecondary: {
        justifyContent: "space-between",
        overflowX: "auto",
        marginTop: "20px",
      },
      toolbarLink: {
        //padding: theme.spacing(1), *8
        padding: "8px",
        flexShrink: 0,
      },
      headerActive: {
        color: "#fff",
      },
      headerMenu: {
        color: "#fff",
        fontSize: "20px",
        textDecoration: "none",
      },
      drawer: {
        background: "#2E3B55",
        color: "white",
      },
      drawerList: {
        width: "180px",
      },
      footer: {
        background: "#2E3B55",
        //padding: theme.spacing(6),
        padding: "48px",
        color: "#fff",
      },
      cardGrid: {
        paddingTop: "64px",
        paddingBottom: "64px",
        //paddingTop: theme.spacing(8),
        //paddingBottom: theme.spacing(8),
      },
      card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
      },
      cardMedia: {
        paddingTop: "56.25%", // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      hoverDiv: {
        position: "absolute",
        backgroundColor: "rgba(52, 52, 52, 0.4)",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 5,
        color: "#fff",
        display: "none",
        "&:hover": {
          display: "",
        },
      },
      detailsHeader: {
        background: "#2E3B55",
        color: "#fff",
      },
      detailsBody: {
        background: "#fff",
      },
      slider: {
        marginTop: "80px",
      },
      searchContent: {
        border: "1px solid #ccc",
        padding: "5px",
        margin: "10px",
      },
      searchField: {
        margin: "8px",
        minWidth: "98%",
        borderRadius: "18px!important",
      },
      videoContainer: {
        marginTop: "30px",
        marginBottom: "30px",
      },
      videoPlayer: {
        margin: "auto",
        width: "85%",
        textAlign: "center",
      },
    },
    slides: [
      {
        img: "banner4.jpg",
        text: null,
      },
      {
        img: "banner5.jpg",
        text: null,
      },
    ],
    categories: [
      {
        id: "cat5",
        name: "Business",
      },
      {
        id: "cat6",
        name: "Casual",
      },
    ],
    filters: [
      {
        id: "f1",
        name: "Color",
        values: ["Red", "Yellow", "Black", "Blue", "Pink", "Beige"],
      },
      { id: "f2", name: "Size", values: ["small", "medium", "big"] },
      {
        id: "f3",
        name: "Style",
        values: ["ST1898", "ST18999", "ST1800", "ST19000"],
      },
      {
        id: "f4",
        name: "Material",
        values: ["Synthetic", "Mat", "Scrii", "PI"],
      },
    ],
    video: {
      autoPlay: false,
      poster: "who-we-are.jpg",
      src: "http://media.w3.org/2010/05/bunny/trailer.mp4",
    },
    offers: [
      {
        img: "offers1.jpg",
        text: null,
      },
      {
        img: "offers4.jpg",
        text: null,
      },
    ],
  },
  {
    id: 2,
    categoryId: "cat1",
    name: "Glasses Store",
    logo: "pbags.png",
    coverImage: "glasses-store.jpg",
    description: "This is store website",
    headerMenu: [
      { type: "link", label: "Home", url: "/store/2" },
      { type: "link", label: "Our Services", url: "/store/2/services" },
      { type: "link", label: "Contact Us", url: "/store/2/contact" },
      { type: "logo" },
      { type: "link", label: "Events", url: "/store/2/events" },
      { type: "link", label: "Blog", url: "/store/2/blog" },
      { type: "link", label: "Login", url: "/store/2/login" },
    ],
    classes: {
      body: {
        background: "#aaa",
      },
      header: { background: "#607c3c", height: "100px" },
      toolbarSecondary: {
        justifyContent: "space-between",
        overflowX: "auto",
        marginTop: "20px",
      },
      toolbarLink: {
        //padding: theme.spacing(1), *8
        padding: "8px",
        flexShrink: 0,
      },
      headerActive: {
        color: "#fff",
      },
      headerMenu: {
        color: "#fff",
        fontSize: "22px",
        textDecoration: "none",
      },
      drawer: {
        background: "#607c3c",
        color: "white",
      },
      drawerList: {
        width: "180px",
      },
      footer: {
        background: "#607c3c",
        //padding: theme.spacing(6),
        padding: "48px",
        color: "#fff",
      },
      cardGrid: {
        paddingTop: "64px",
        paddingBottom: "64px",
        //paddingTop: theme.spacing(8),
        //paddingBottom: theme.spacing(8),
      },
      card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
      },
      cardMedia: {
        paddingTop: "56.25%", // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      detailsHeader: {
        background: "#607c3c",
        color: "#fff",
      },
      detailsBody: {
        background: "#aaa",
      },
      slider: {
        marginTop: "80px",
      },
      searchContent: {
        border: "1px solid #ccc",
        padding: "5px",
        margin: "10px",
      },
      searchField: {
        margin: "8px",
        minWidth: "98%",
        borderRadius: "18px!important",
      },
      videoContainer: {
        marginTop: "30px",
        marginBottom: "30px",
      },
      videoPlayer: {
        margin: "auto",
        width: "85%",
        textAlign: "center",
      },
    },
    slides: [
      {
        img: "banner6.jpg",
        text: null,
      },
      {
        img: "banner7.jpg",
        text: null,
      },
      {
        img: "banner8.jpg",
        text: null,
      },
    ],
    categories: [
      {
        id: "cat5",
        name: "Women",
      },
      {
        id: "cat6",
        name: "Men",
      },
    ],
    filters: [
      { id: "f1", name: "Color", values: ["red", "white", "black"] },
      { id: "f2", name: "size", values: ["small", "medium", "big"] },
      {
        id: "f3",
        name: "style",
        values: ["ST1898", "ST18999", "ST1800", "ST19000"],
      },
      {
        id: "f4",
        name: "material",
        values: ["Synthetic", "Mat", "Scrii", "PI"],
      },
    ],
    video: {
      autoPlay: true,
      poster: "who-we-are.jpg",
      src: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    offers: [
      {
        img: "offers1.jpg",
        text: null,
      },
      {
        img: "offers4.jpg",
        text: null,
      },
    ],
  },
  {
    id: 3,
    categoryId: "cat2",
    name: "Sports Store",
    logo: "puma-logo.png",
    coverImage: "sports-store.jpg",
    description: "This is store website",
    headerMenu: [
      { type: "link", label: "Home", url: "/store/3" },
      { type: "link", label: "Our Services", url: "/store/3/services" },
      { type: "link", label: "Contact Us", url: "/store/3/contact" },
      { type: "logo" },
      { type: "link", label: "Events", url: "/store/3/events" },
      { type: "link", label: "Blog", url: "/store/3/blog" },
      { type: "link", label: "Login", url: "/store/3/login" },
    ],
    classes: {
      body: {
        background: "#FFC0CB",
      },
      header: { background: "#000", height: "100px" },
      toolbarSecondary: {
        justifyContent: "space-between",
        overflowX: "auto",
        marginTop: "20px",
      },
      toolbarLink: {
        //padding: theme.spacing(1), *8
        padding: "8px",
        flexShrink: 0,
      },
      headerActive: {
        color: "#fff",
      },
      headerMenu: {
        color: "#fff",
        fontSize: "22px",
        textDecoration: "none",
      },
      drawer: {
        background: "#000",
        color: "white",
      },
      drawerList: {
        width: "180px",
      },
      footer: {
        background: "#000",
        //padding: theme.spacing(6),
        padding: "48px",
        color: "#fff",
      },
      cardGrid: {
        paddingTop: "64px",
        paddingBottom: "64px",
        //paddingTop: theme.spacing(8),
        //paddingBottom: theme.spacing(8),
      },
      card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
      },
      cardMedia: {
        paddingTop: "56.25%", // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      detailsHeader: {
        background: "#000",
        color: "#fff",
      },
      detailsBody: {
        background: "#FFC0CB",
      },
      slider: {
        marginTop: "80px",
      },
      searchContent: {
        border: "1px solid #ccc",
        padding: "5px",
        margin: "10px",
      },
      searchField: {
        margin: "8px",
        minWidth: "98%",
        borderRadius: "18px!important",
      },
      videoContainer: {
        marginTop: "30px",
        marginBottom: "30px",
      },
      videoPlayer: {
        margin: "auto",
        width: "85%",
        textAlign: "center",
      },
    },
    slides: [
      {
        img: "banner1.jpg",
        text: null,
      },
      {
        img: "banner4.jpg",
        text: null,
      },
      {
        img: "banner8.jpg",
        text: null,
      },
    ],
    categories: [
      {
        id: "cat5",
        name: "Women",
      },
      {
        id: "cat6",
        name: "Men",
      },
    ],
    filters: [
      { id: "f1", name: "Color", values: ["red", "white", "black"] },
      { id: "f2", name: "size", values: ["small", "medium", "big"] },
      {
        id: "f3",
        name: "style",
        values: ["ST1898", "ST18999", "ST1800", "ST19000"],
      },
      {
        id: "f4",
        name: "material",
        values: ["Synthetic", "Mat", "Scrii", "PI"],
      },
    ],
    video: {
      autoPlay: false,
      poster: "who-we-are.jpg",
      src: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    offers: [
      {
        img: "offers1.jpg",
        text: null,
      },
      {
        img: "offers4.jpg",
        text: null,
      },
    ],
  },
];

const sectionsContent = [
  {
    pageId: 0,
    sectionId: "mission",
    title: "Our Mission",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
      {
        type: "p",
        text:
          "Vestibulum id euismod augue, nec ultrices mi. Mauris dolor arcu, convallis sed auctor a, maximus sit amet purus. Aenean sed ultrices nulla. Sed sodales mattis leo at congue. In mattis ipsum non lacus venenatis, et placerat dui convallis. Aliquam aliquet, dui nec tristique dapibus, ex nisi tempor ligula, id finibus massa neque nec tellus. Vestibulum dapibus arcu id lacus sodales elementum. Vivamus id erat ante. Curabitur nec ante ex.",
      },
      {
        type: "p",
        text:
          "Cras nec justo congue, facilisis erat vel, porta enim. Sed imperdiet bibendum purus, at tempus lacus interdum eget. Cras et est a ex volutpat faucibus. Nulla rhoncus purus ac lobortis auctor. Aenean consequat libero mi, eget laoreet quam dictum molestie. Morbi eget quam vitae neque consequat viverra sed non turpis. Vivamus ac faucibus nunc, et lobortis tortor. Donec gravida commodo ultrices. Aenean venenatis fringilla ipsum, ut egestas lectus imperdiet et. Nulla sit amet condimentum urna. Vivamus fermentum augue eu neque vestibulum, vel ullamcorper lorem elementum. Quisque sit amet sagittis leo, id placerat ligula. Mauris nec enim et sem bibendum lobortis. Suspendisse ac malesuada leo, sed iaculis libero. Integer enim massa, dapibus ut blandit rhoncus, aliquam ut ex. Maecenas convallis velit a diam hendrerit laoreet. Donec tincidunt, nisl eget commodo volutpat, diam arcu egestas enim, nec ultrices nulla magna at purus. Praesent ut sapien velit. Donec nisi libero, ultrices sit amet volutpat quis, luctus ac nisl. Donec a dui mauris. Etiam venenatis condimentum odio ut dapibus. Pellentesque pulvinar aliquam lectus, ut luctus risus laoreet ac. Integer sed fermentum elit. Nam maximus, odio vitae commodo facilisis, odio mi vulputate odio, vitae aliquam nulla augue eu odio. Donec venenatis ut diam sit amet sagittis. Proin condimentum felis ac purus viverra fringilla. Fusce a quam eget leo sodales aliquam et vitae erat. Quisque volutpat non mauris ut gravida. Nunc at ornare purus, ut iaculis sem. Proin a mauris eu leo ornare commodo eu et diam.",
      },
    ],
  },
  {
    pageId: 0,
    sectionId: "who",
    title: "Who We Are",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 0,
    sectionId: "board",
    title: "Our Board",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 0,
    sectionId: "features",
    title: "Site's Features",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 0,
    sectionId: "membership",
    title: "Membership",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
];

const products = [
  {
    id: 1,
    storeId: 0,
    categoryId: "cat1",
    type: "store",
    name: "Bags Store",
    coverImage: "stores/bag-store.jpg",
  },
  {
    id: 2,
    storeId: 0,
    categoryId: "cat1",
    type: "store",
    name: "Glasses Store",
    coverImage: "stores/glasses-store.jpg",
  },
  {
    id: 3,
    storeId: 0,
    categoryId: "cat2",
    type: "store",
    name: "Sports Store",
    coverImage: "stores/sports-store.jpg",
  },
  {
    id: 1001,
    storeId: 0,
    categoryId: "cat5",
    type: "store",
    name: "Music Store",
    coverImage: "stores/mixup.jpg",
  },
  {
    id: 1002,
    storeId: 0,
    categoryId: "cat3",
    type: "store",
    name: "Shoes store",
    coverImage: "stores/shoes-store.jpg",
  },
  {
    id: 1003,
    storeId: 0,
    categoryId: "cat4",
    type: "store",
    name: "Clothes Store",
    coverImage: "stores/clothes-store.jpg",
  },
  {
    id: 1004,
    storeId: 0,
    categoryId: "cat4",
    type: "store",
    name: "Suits Store",
    coverImage: "stores/suits-store.jpg",
  },
  {
    id: 4,
    storeId: 1,
    type: "product",
    categoryId: "cat5",
    color: "Beige",
    size: "Small",
    style: "ST1898",
    material: "Synthetic",
    name: "Bag 1",
    coverImage: "bag1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    category: "1",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 5,
    storeId: 1,
    type: "product",
    categoryId: "cat5",
    color: "Red",
    size: "Medium",
    style: "ST1898",
    material: "Synthetic",
    name: "Bag 2",
    coverImage: "bag2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    category: "1",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 6,
    storeId: 1,
    type: "product",
    categoryId: "cat5",
    color: "Yellow",
    size: "Medium",
    style: "ST1898",
    material: "Synthetic",
    name: "Bag 3",
    coverImage: "bag3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    category: "1",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 7,
    storeId: 1,
    type: "product",
    categoryId: "cat5",
    color: "Black",
    size: "Medium",
    style: "ST1898",
    material: "Synthetic",
    name: "Bag 4",
    coverImage: "bag4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    category: "1",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 8,
    storeId: 1,
    type: "product",
    categoryId: "cat6",
    color: "Beige",
    size: "Medium",
    style: "ST1898",
    material: "Synthetic",
    name: "Bag 5",
    coverImage: "bag5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    category: "1",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 9,
    storeId: 1,
    type: "product",
    categoryId: "cat6",
    color: "Blue",
    size: "Medium",
    style: "ST1898",
    material: "Synthetic",
    name: "Bag 6",
    coverImage: "bag6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    category: "1",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 10,
    categoryId: "cat6",
    storeId: 1,

    type: "product",
    color: "Blue",
    size: "Medium",
    style: "ST1898",
    material: "Synthetic",
    name: "Bag 7",
    coverImage: "bag7.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    category: "1",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 11,
    categoryId: "cat6",
    storeId: 1,
    type: "product",
    color: "Pink",
    size: "Medium",
    style: "ST1898",
    material: "Synthetic",
    name: "Bag 8",
    coverImage: "bag8.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    category: "1",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 12,
    storeId: 2,
    type: "product",
    categoryId: "cat6",
    name: "Product 1",
    coverImage: "puma1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    category: "1",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 13,
    categoryId: "cat6",
    storeId: 3,
    type: "product",
    name: "Product 1",
    coverImage: "puma1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    price: "90",
    specifications: "",
    category: "1",
    attributes: [
      { color: ["red", "white", "black"] },
      { size: ["small", "medium", "big"] },
      { style: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { material: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 14,
    storeId: 3,
    type: "product",
    name: "Product 2",
    coverImage: "puma22.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    price: "90",
    specifications: "",
    category: "1",
    attributes: [
      { color: ["red", "white", "black"] },
      { size: ["small", "medium", "big"] },
      { style: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { material: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 15,
    storeId: 3,
    type: "product",
    name: "Product 3",
    coverImage: "puma23.jpg",
  },
  {
    id: 16,
    storeId: 3,
    type: "product",
    name: "Product 4",
    coverImage: "puma24.jpg",
  },
  {
    id: 17,
    storeId: 3,
    type: "product",
    name: "Product 5",
    coverImage: "puma25.jpg",
  },
  {
    id: 18,
    storeId: 3,
    type: "product",
    name: "Product 6",
    coverImage: "puma26.jpg",
  },
  {
    id: 19,
    storeId: 3,
    type: "product",
    name: "Product 7",
    coverImage: "puma27.jpg",
  },
  {
    id: 20,
    storeId: 3,
    type: "product",
    name: "Product 8",
    coverImage: "puma28.jpg",
  },
  {
    id: 21,
    storeId: 3,
    type: "product",
    name: "Product 9",
    coverImage: "puma29.jpg",
  },
  {
    id: 22,
    storeId: 3,
    type: "product",
    name: "Product 10",
    coverImage: "puma31.jpg",
  },
  {
    id: 23,
    storeId: 3,
    type: "product",
    name: "Product 11",
    coverImage: "puma32.jpg",
  },
  {
    id: 24,
    storeId: 3,
    type: "product",
    name: "Product 12",
    coverImage: "puma33.jpg",
  },
];
// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
  pages,
  products,
  sectionsContent,
};
