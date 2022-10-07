const countries = [
  {
    id: 1,
    name: "Iceland",
    tagline: "Pure. Natural. Unspoiled. Iceland. The Way Life Should Be.",
    coverImage:
      "https://images.unsplash.com/photo-1500043357865-c6b8827edf10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    intro:
      ", a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. Most of the population lives in the capital, Reykjavik, which runs on geothermal power and is home to the National and Saga museums, tracing Iceland’s Viking history. ",
    meta: {
      population: 376.248,
      capital: "Reykjavík",
      language: "Icelandic",
      currency: "Icelandic Krona",
      continent: "Europe",
    },
    gallery: [
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      "https://images.unsplash.com/photo-1474710820418-dd5406ee35d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1529888401193-0185ba39ba15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1464550838636-1a3496df938b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1030&q=80",
      "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    ],
    topSites: [
      {
        siteName: "Reykjavík",
        description:
          " While most Icelandic trips start in Reykjavík, this is not a whistle-stop city. Starting or ending your tour in its capital is a great way to understanding the country and the culture.In Reykjavík, you’ll find fine dining, boutique shopping, and trendy bars. But its real charm is in its famed landmarks, museums, and cultural attractions.",
        image:
          "https://images.unsplash.com/photo-1431352922605-7436d323b934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        siteName: "Blue Lagoon",
        description:
          "The Blue Lagoon is a geothermal spa, a hot spring fed by the nearby geothermal plant, meaning the water sits comfortable around 39°C (102°F). Set against a dark lava field background, the milky water is ethereal in contrast. Truly relaxing, beautiful and iconic, it is a must-see.",
        image:
          "https://images.unsplash.com/photo-1557907201-0ea04e8e84b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      },
      {
        siteName: "Jökulsárlón Glacier Lagoon",
        description:
          "The magical Jökulsárlón is a glacier lagoon filled with electric blue and glittering white icebergs.Watch as they drift across the lagoon and out to sea. Some even wash up to decorate the shore of Breiðamerkursandur, now famously known as Diamond Beach. For photographers, adventurers, and romantics, this is the place to be.",
        image:
          "https://images.unsplash.com/photo-1502893323067-a83091e37337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      },
      {
        siteName: "Fagradalsfjall Volcano",
        description:
          "Marvel at fresh lava fields, newly formed by the latest eruptions. You might even be lucky enough to see red-hot glowing lava spilling out of the earth, turning black and slowing down as it makes its way along the valley.",
        image:
          "https://images.unsplash.com/photo-1618278758299-e40010c4bb28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    ],
  },
  {
    id: 2,
    name: "Switzerland",
    tagline:
      "In a country where peace prevails in every corner, everything looks prettier, calmer and wiser",
    coverImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    intro:
      " is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts and hiking trails. Banking and finance are key industries, and Swiss watches and chocolate are world renowned.",
    meta: {
      population: "86.4L",
      capital: "Bern",
      language: "German",
      currency: "Swiss Franc",
      continent: "Europe",
    },
    gallery: [
      "https://images.unsplash.com/photo-1551375560-bd4589346ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "https://images.unsplash.com/photo-1504860708171-19abd233ec3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1507843043-35c9a5804b3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1513896188778-dad7fe44a483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      "https://images.unsplash.com/photo-1501828230590-042a32fea1ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",
    ],
    topSites: [
      {
        siteName: "The Matterhorn",
        description:
          "The Matterhorn, Switzerland's iconic pointed peak is one of the highest mountains in the Alps. On the border with Italy, this legendary peak rises to 4,478 meters, and its four steep faces lie in the direction of the compass points. The first summiting in 1865 ended tragically when four climbers fell to their death during the descent. Today, thousands of experienced climbers come here each summer.",
        image:
          "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        siteName: "Lake Geneva",
        description:
          "Lake Geneva, Europe's largest Alpine lake, straddles the Swiss/French border, and laps at the shores of some of Switzerland's most popular cities. The city of Geneva (in French Genève; in German Genf) sits between pretty snowcapped peaks at the point where the Rhône spills into Lake Geneva.",
        image:
          "https://images.unsplash.com/photo-1546965860-2a475f595bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
      },
      {
        siteName: "Bern",
        description:
          "In a stunning location, perched on a peninsula of the River Aare, the Swiss capital of Bern exudes old-world charm, and the city's medieval old town is a UNESCO World Heritage Site. Bern has many tourist attractions waiting to be discovered, including excellent museums. Art lovers will appreciate the impressive galleries, including the Zentrum Paul Klee, the world's largest collection of works by this famous artist, and the Bern Museum of Art",
        image:
          "https://images.unsplash.com/photo-1584605376366-63f17a36e99e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        siteName: "Zurich",
        description:
          "Zurich is Switzerland's largest city, a major transportation hub, and a top starting point for travelers. The city lies at the northwestern end of Lake Zurich astride the river Limmat. Beyond its buttoned-up façade, this affluent banking capital boasts a rich line-up of cultural treasures.",
        image:
          "https://images.unsplash.com/photo-1566330543597-23ca2697a257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1322&q=80",
      },
    ],
  },
  {
    id: 3,
    name: "Finland",
    tagline: "If you want to win, live like a Finn",
    coverImage:
      "https://images.unsplash.com/photo-1518203441944-e9578e4b1635?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
    intro:
      " is a Northern European nation bordering Sweden, Norway and Russia. Its capital, Helsinki, occupies a peninsula and surrounding islands in the Baltic Sea. Helsinki is home to the 18th-century sea fortress Suomenlinna, the fashionable Design District and diverse museums. The Northern Lights can be seen from the country's Arctic Lapland province, a vast wilderness with national parks and ski resorts.",
    meta: {
      population: "55.3L",
      capital: "Helsinki",
      language: "Finnish",
      currency: "Euro",
      continent: "Europe",
    },
    gallery: [
      "https://images.unsplash.com/photo-1528155124528-06c125d81e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80",
      "https://images.unsplash.com/photo-1522885147691-06d859633fb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1641913695863-615b2c046864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1544188623-f16bc97fd5ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1501828230590-042a32fea1ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80",
    ],
    topSites: [
      {
        siteName: "Rovaniemi and the Arctic",
        description:
          "The Arctic Circle runs across northern Finland, right through the town of Rovaniemi, giving it claim to being the Gateway to the Arctic. In the summer, this means the famous Midnight Sun. While the sun only stays above the horizon for a full 24 hours in Rovaniemi on the summer solstice in late June, from late May to early August it never drops far enough for it to get dark. Locals are out enjoying their great outdoors throughout these 'White Nights'",
        image:
          "https://images.unsplash.com/photo-1593872222524-361daae4f782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
      {
        siteName: "Arctic and the Northern Lights",
        description:
          "For most people, seeing these blazing curtains of light drape across the sky is a once-in-a-lifetime treat. Finland is one of the best places in the world to see the northern lights. Although, at times, the lights can be seen even in the southern most regions of the nation, the best place to see them is in the region close to or north of the Arctic Circle.",
        image:
          "https://images.unsplash.com/photo-1435777902907-6ff2bafa0829?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
      {
        siteName: "Ranua Wildlife Park",
        description:
          "This park is part zoo and part wildlife preserve, home to more than 50 species of animals who call the arctic their home. Their most famous residents are Venus and Manse, the only polar bears residing in Finland. The park is naturally home to many reindeer, as well as the smaller wild forest reindeer and several varieties of deer.",
        image:
          "https://images.unsplash.com/photo-1501721214324-1777a509ce4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
      {
        siteName: "Lapland",
        description:
          "Lapland is Finland’s northernmost region, a sparsely populated area bordering Sweden, Norway, Russia and the Baltic Sea. It’s known for its vast subarctic wilderness, ski resorts and natural phenomena including the midnight sun and the Northern Lights. Capital Rovaniemi is the gateway to the region. The homeland of the indigenous Sami people, which extends into neighboring countries, centers on the far north.",
        image:
          "https://images.unsplash.com/photo-1608636142939-0a7da26aa494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    ],
  },
  {
    id: 4,
    name: "India",
    tagline: "A country that lives in several centuries at a time",
    coverImage:
      "https://images.unsplash.com/photo-1524473994769-c1bbbf30e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    intro:
      " officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Things to do in India include the opportunity to experience an array of sacred sites and spiritual encounters, while nature lovers will enjoy its sun-washed beaches, lush national parks, and exciting wildlife sanctuaries.",
    meta: {
      population: "138Cr",
      capital: "New Delhi",
      language: "Hindi",
      currency: "Ruppee",
      continent: "Asia",
    },
    gallery: [
      "https://images.unsplash.com/photo-1528155124528-06c125d81e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80",
      "https://images.unsplash.com/photo-1522885147691-06d859633fb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1641913695863-615b2c046864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1544188623-f16bc97fd5ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1501828230590-042a32fea1ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80",
    ],
    topSites: [
      {
        siteName: "The Taj Mahal",
        description:
          "Perhaps India's most recognizable building, the Taj Mahal is also the world's most famous testimony to the power of love. Named after Mumtaz Mahal, the favorite wife of Emperor Shah Jahan, this most beautiful of mausoleums was begun upon her death in 1631 and took 20,000 workmen until 1648 to complete.",
        image:
          "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      },
      {
        siteName: "The Holy City of Varanasi",
        description:
          "Dating back to the 8th century BC, Varanasi is one of the oldest still inhabited cities in the world. A major pilgrimage center for Hindus, this holy city has long been associated with the mighty Ganges River, one of the faith's most important religious symbols.",
        image:
          "https://images.unsplash.com/photo-1561361058-c24cecae35ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80",
      },
      {
        siteName: "Goa",
        description:
          "Long known within India as the 'go-to' destination for those seeking a great beach holiday, Goa's beautiful western coastline, overlooking the Arabian Sea, has only recently been discovered by tourists from overseas. Goa's more than 60 miles of coastline is home to some of the world's loveliest beaches, each with their own particular appeal.",
        image:
          "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        siteName: "Munnar",
        description:
          "Sprawling tea plantations surround the serene hills of Munnar, which attract adventure travellers hungry for paragliding, treks to Anaimudi (South India's highest peak) and hikes originating at the confluence of three mountain streams. The stone Christ Church, built by the British in 1910, is adorned with renowned works of stained glass, and Eravikulam National Park, about 10 miles away, is home to equally colourful wildlife, including the endangered Nilgiri Tahr (ibex), ruddy mongoose and 120 bird species.",
        image:
          "https://images.unsplash.com/photo-1591420699297-88e82958f324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    ],
  },
];
export default countries;
