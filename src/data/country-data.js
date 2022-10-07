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
      "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1442570468985-f63ed5de9086?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80",
      "https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1543198926-22fea2a870dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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
  {
    id: 5,
    name: "Germany",
    tagline:
      "Americans brag about their assault rifles. Germans brag about their exotic vacations.",
    coverImage:
      "https://images.unsplash.com/photo-1506760610100-1af6025cf0c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    intro:
      " is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank.",
    meta: {
      population: "8.32Cr",
      capital: "Berlin",
      language: "German",
      currency: "Euro",
      continent: "Europe",
    },
    gallery: [
      "https://images.unsplash.com/photo-1599921841143-819065a55cc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
      "https://images.unsplash.com/photo-1633764598906-a30db6bdf692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1573559055341-51c1ced2b864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWxsaWFueiUyMGFyZW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1526339737319-1a3db0ff0ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
      "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    topSites: [
      {
        siteName: "The Black Forest",
        description:
          "The beautiful Black Forest with its dark, densely-wooded hills is one of the most visited upland regions in all of Europe. Situated in the southwestern corner of Germany and extending 160 kilometers from Pforzheim in the north to Waldshut on the High Rhine in the south, it's a hiker's heaven.",
        image:
          "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        siteName: "MarienPlatz",
        description:
          "Rügen is the largest and most beautiful of the German Baltic islands. Separated from the rest of Germany by the Strelasund, it's linked to the mainland town of Stralsund by a causeway. The island's beauty stems from its diversity of landscape, including everything from flat farmland and forest-covered hills to expansive sandy beaches, lagoons, and lovely peninsulas.",
        image:
          "https://images.unsplash.com/photo-1577462282244-b58c2816d686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        siteName: "The Island of Rügen",
        description:
          "Long known within India as the 'go-to' destination for those seeking a great beach holiday, Goa's beautiful western coastline, overlooking the Arabian Sea, has only recently been discovered by tourists from overseas. Goa's more than 60 miles of coastline is home to some of the world's loveliest beaches, each with their own particular appeal.",
        image:
          "https://images.unsplash.com/photo-1549445805-840a88c6ebb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      },
      {
        siteName: "Reichstag Building",
        description:
          "The seat of Germany's government, the Reichstag (Reichstagsgebäude) is once again one of Berlin's most-visited attractions. Constructed in 1894 in Neo-Renaissance style, it infamously burned down in 1933 and remained in ruins until after German reunification, when it was rebuilt in its former glory.",
        image:
          "https://images.unsplash.com/photo-1591079751210-718012d90ff7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    ],
  },
  {
    id: 6,
    name: "Norway",
    tagline: "We have to find compromises. That’s the way it is in Norway.",
    coverImage:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bm9yd2F5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    intro:
      " is a Scandinavian country encompassing mountains, glaciers and deep coastal fjords. Oslo, the capital, is a city of green spaces and museums. Preserved 9th-century Viking ships are displayed at Oslo’s Viking Ship Museum. Bergen, with colorful wooden houses, is the starting point for cruises to the dramatic Sognefjord. Norway is also known for fishing, hiking and skiing, notably at Lillehammer’s Olympic resort.",
    meta: {
      population: "53.8L",
      capital: "Oslo",
      language: "Norwegian",
      currency: "Norwegian Krone",
      continent: "Europe",
    },
    gallery: [
      "https://images.unsplash.com/photo-1518124880777-cf8c82231ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80",
      "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      "https://images.unsplash.com/photo-1536683402757-75f8d0dfa419?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      "https://images.unsplash.com/photo-1508592931388-95bc7b61033d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1566230724840-0fe03c62884d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    topSites: [
      {
        siteName: "Oslo",
        description:
          "A lot of things are cooking in the Norwegian capital, which was named European Green Capital 2019. A cutting-edge food scene, new and funky neighbourhoods, a fully-packed event calendar, and several brand-new museums and attractions are just a few teasers of what you can expect.",
        image:
          "https://images.unsplash.com/photo-1594317568093-b27c52bb8d73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        siteName: "Tromsø",
        description:
          "The capital of the Arctic, Tromsø, is located right in the middle of Northern Norway. If your bucket list includes northern lights, whale watching, midnight sun, and epic nature adventures, this is where you want to go.",
        image:
          "https://images.unsplash.com/photo-1531366599837-ce0c0e17657c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        siteName: "Lofoten and Nordland",
        description:
          "Staggering peaks, glittering fjords, authentic fishing villages, and picture-perfect beaches. Not to mention northern lights and midnight sun! You have probably seen jaw-dropping images of Lofoten and Vesterålen (the kingdom of whales!) on Instagram. A hot tip is to visit these places outside of the summer season when the crowds are gone.",
        image:
          "https://images.unsplash.com/photo-1588263269806-7895da01d3f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
      {
        siteName: "The Svalbard Islands",
        description:
          "Ready to take wildlife to the next level? The Svalbard Islands lie in the middle of the Arctic Ocean, halfway between Norway and the North Pole. Here, you can participate in exotic nature-based activities all year round in a landscape that is both rugged and fragile. Try your hand at dog sledging, go ice caving, join a snowmobile safari, or hunt for the northern lights. In addition to a few thousand polar bears, the islands are home to almost 3,000 humans.",
        image:
          "https://images.unsplash.com/photo-1629206881868-cb28914973d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
      },
    ],
  },
  {
    id: 7,
    name: "Maldives",
    tagline: "It’s so beautiful that it looks fake!",
    coverImage:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",
    intro:
      ", officially the Republic of Maldives, is an archipelagic state located in Southern Asia, situated in the Indian Ocean. It lies southwest of Sri Lanka and India, about 750 kilometres from the Asian continent's mainland.",
    meta: {
      population: "5.41L",
      capital: "Malé",
      language: "Dhivehi",
      currency: "Maldivian rufiyaa",
      continent: "Asia",
    },
    gallery: [
      "https://images.unsplash.com/photo-1505881402582-c5bc11054f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1hbGRpdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1586500038052-b831efc02314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hbGRpdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    ],
    topSites: [
      {
        siteName: "Malé Atoll",
        description:
          "ocated on the southern edge of Kaafu Atoll, the North Malé Atoll is the largest city and the most popular destination among the best places to visit in Maldives. It is among the top Maldives tourism places. It used to be called Mahal for being the abode of the Royal Dynasties and is now famous as the Kings Island. Male has a tropical monsoon climate with rains occurring through most months in the year. The best thing about Male is its consistently moderate temperature, round the year.",
        image:
          "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        siteName: "Sun Island",
        description:
          "Also famous as the Sun Island, Nalaguraidhoo Island in South Ari Atoll is among the top Maldives points of interest. It is adorned with some stunning beaches, beautiful tropical flowers, and lavish greenery that pulls a great number of tourists wanting to bask in the lap of nature. With its extremely charming blue waters, sparkling beaches and fabulous resorts, the island guarantees immense joy to its guests. Given its serenity and beauty, it is among the most perfect places to visit in Maldives for couples and honeymooners.",
        image:
          "https://images.unsplash.com/photo-1619897917857-f80c6adcf760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        siteName: "Banana Reef",
        description:
          "Banana Reef is globally renowned for being one of the best diving sites in the world which adds it to the list of top Maldives points of interest. It was, in fact, the very first diving spot in Maldives to get recognition for licensed diving and training. Shaped like a banana, the reef is choc-a-block with exuberant marine life, fantastic corals, amazing cliffs, overhangs, and caves. And thanks to the myriad adventure activities here, it is one of the favorite places to visit in Maldives for the adventure junkies.",
        image:
          "https://images.unsplash.com/photo-1540202403-b7abd6747a18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      },
      {
        siteName: "Artificial Beach",
        description:
          "Situated in North Mal- Atoll, this beach is what its name tells you – artificial. It is the favorite haunt of the swimming enthusiasts among the top places to visit in Maldives. The Artificial Beach is an open area and has certain restrictions for clothing as per the local law. The beach also hosts several carnivals, water sports, and peaceful walks, making this the best place to go in Maldives for youngsters. The evenings here turn beautiful as music groups gather to jam and perform.",
        image:
          "https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    ],
  },
];

// {
//   id: 6,
//   name: "",
//   tagline:
//     "",
//   coverImage:
//     "",
//   intro:
//     " ",
//   meta: {
//     population: "",
//     capital: "",
//     language: "",
//     currency: "",
//     continent: "",
//   },
//   gallery: [
//     "",
//     "",
//     "",
//     "",
//     "",
//   ],
//   topSites: [
//     {
//       siteName: "",
//       description:
//         "",
//       image:
//         "",
//     },
//     {
//       siteName: "",
//       description:
//         "",
//       image:
//         "",
//     },
//     {
//       siteName: "",
//       description:
//         "",
//       image:
//         "",
//     },
//     {
//       siteName: "",
//       description:
//         "",
//       image:
//         "",
//     },
//   ],
// },

export default countries;
