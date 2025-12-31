export const navlinks = [
  {
    id: 1,
    name: "Destinations",
    to: "/destinations",
  },
  {
    id: 2,
    name: "Packages",
    to: "/packages",
  },
  {
    id: 3,
    name: "Stories",
    to: "/stories",
  },
  {
    id: 4,
    name: "Contact",
    to: "/contact",
  },
];

export const mustVisitPlaces = [
  {
    id: 1,
    name: "Adi Badri Temples",
    location: "Chamoli, Uttarakhand",
    image: "https://t4.ftcdn.net/jpg/09/48/83/19/360_F_948831949_eM0EaHb7mzjX3KYI84a5860uLq2Vntje.webp",
    tags: ["Temple", "Heritage", "Nature"],
    duration: "3–4 days",
    description:
      "A group of ancient temples associated with Adi Shankaracharya, surrounded by serene Himalayan landscapes.",
  },
  {
    id: 2,
    name: "Ziro Valley",
    location: "Arunachal Pradesh",
    image: "https://t3.ftcdn.net/jpg/09/90/71/26/240_F_990712618_JNpZo1GsZwB1AHY6nbruNDIcPojkiPS0.jpg",
    tags: ["Nature", "Culture"],
    duration: "4–5 days",
    description:
      "A peaceful valley known for rice fields, Apatani culture, and slow travel experiences.",
  },
  {
    id: 3,
    name: "Majuli Island",
    location: "Assam",
    image: "https://t4.ftcdn.net/jpg/06/35/78/19/240_F_635781997_WiqxD7YpDRQkQX1oynqFPOrHY5OdKnW7.jpg",
    tags: ["Culture", "Spiritual"],
    duration: "2–3 days",
    description:
      "World’s largest river island, rich in culture, monasteries, and riverine life.",
  },
];


export const reviews = [
  {
    id: 1,
    name: "Ankit Sharma",
    location: "Delhi",
    text:
      "HiddenBharat helped us discover places we would have never found on our own. The trip felt calm, meaningful, and well-paced.",
  },
  {
    id: 2,
    name: "Pooja Verma",
    location: "Bangalore",
    text:
      "What I loved most was the honesty. No tourist traps, no rush. Just thoughtful travel planning and great guidance.",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    location: "Ahmedabad",
    text:
      "This was not a typical package trip. Everything felt personal and well-researched. Highly recommended for slow travelers.",
  },
  {
    id: 4,
    name: "Neha Singh",
    location: "Mumbai",
    text:
      "The experience felt premium without being expensive. Clear communication and excellent destination choices.",
  },
];


export const hiddenPlaces = [
  {
    id: "adi-badri",
    name: "Adi Badri Temples",
    state: "Uttarakhand",
    region: "Chamoli",
    category: ["Spiritual", "Heritage"],
    idealDuration: "3–4 days",
    crowdLevel: "Low",
    description:
      "Ancient temple complex along the Alaknanda River, far from crowded pilgrimage routes.",
    tags: ["spiritual", "heritage", "quiet"],
    image:
      "https://images.unsplash.com/photo-1625225230517-7426c1be750c?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "ziro-valley",
    name: "Ziro Valley",
    state: "Arunachal Pradesh",
    region: "Lower Subansiri",
    category: ["Nature", "Culture"],
    idealDuration: "4–5 days",
    crowdLevel: "Low",
    description:
      "A peaceful valley known for rice fields, pine forests, and tribal culture.",
    tags: ["nature", "culture", "slow-travel"],
    image:
      "https://images.unsplash.com/photo-1621330396173-e41a5f8f92b5?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "majuli-island",
    name: "Majuli Island",
    state: "Assam",
    region: "Brahmaputra River",
    category: ["Culture", "Spiritual"],
    idealDuration: "2–3 days",
    crowdLevel: "Low",
    description:
      "World’s largest river island with monasteries and slow river life.",
    tags: ["culture", "spiritual", "offbeat"],
    image:
      "https://images.unsplash.com/photo-1603357465999-241beecc2629?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "tirthan-valley",
    name: "Tirthan Valley",
    state: "Himachal Pradesh",
    region: "Great Himalayan National Park",
    category: ["Mountains", "Nature"],
    idealDuration: "3–5 days",
    crowdLevel: "Low",
    description:
      "Serene Himalayan valley with rivers, forests, and village stays.",
    tags: ["mountains", "nature", "quiet"],
    image:
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "mandawa",
    name: "Mandawa",
    state: "Rajasthan",
    region: "Shekhawati",
    category: ["Heritage", "Architecture"],
    idealDuration: "2–3 days",
    crowdLevel: "Medium",
    description:
      "Historic town famous for painted havelis and desert heritage.",
    tags: ["heritage", "architecture"],
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "chopta",
    name: "Chopta",
    state: "Uttarakhand",
    region: "Rudraprayag",
    category: ["Mountains", "Nature"],
    idealDuration: "2–3 days",
    crowdLevel: "Low",
    description:
      "Alpine meadows and mountain views, base for Tungnath trek.",
    tags: ["mountains", "trekking"],
    image:
      "https://images.unsplash.com/photo-1624351743814-8c87e8fae8f2?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "gokarna-beaches",
    name: "Gokarna (Hidden Beaches)",
    state: "Karnataka",
    region: "Uttara Kannada",
    category: ["Beach", "Nature"],
    idealDuration: "3–4 days",
    crowdLevel: "Medium",
    description:
      "Secluded beaches and coastal trails away from party crowds.",
    tags: ["beach", "coastal", "slow-travel"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "bhimbetka",
    name: "Bhimbetka Rock Shelters",
    state: "Madhya Pradesh",
    region: "Raisen",
    category: ["History", "Heritage"],
    idealDuration: "1–2 days",
    crowdLevel: "Low",
    description:
      "Prehistoric cave paintings and ancient human settlements.",
    tags: ["history", "heritage"],
    image:
      "https://images.unsplash.com/photo-1617469165786-8007eda3caa7?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "kalpa",
    name: "Kalpa",
    state: "Himachal Pradesh",
    region: "Kinnaur",
    category: ["Mountains", "Culture"],
    idealDuration: "3–4 days",
    crowdLevel: "Low",
    description:
      "Mountain village with apple orchards and Kinnaur Kailash views.",
    tags: ["mountains", "culture"],
    image:
      "https://images.unsplash.com/photo-1593681803817-1c3f67b7c6ad?auto=format&fit=crop&w=1200&q=80",
  },
];


