const BASE = './';

export const CATEGORIES = [
  { id: "all", name: "Toutes les recettes", icon: "Utensils", type: "all" },
  { id: "plats", name: "Plats Chauds", icon: "Flame", type: "sale" },
  { id: "pates-riz", name: "PÃ¢tes & Riz", icon: "Wheat", type: "sale" },
  { id: "fromage", name: "Fromage & Gratin", icon: "Pizza", type: "sale" },
  { id: "salades", name: "Salades & FraÃ®cheur", icon: "Salad", type: "sale" },
  { id: "street-food", name: "Street Food & Sandwich", icon: "Sandwich", type: "sale" },
  { id: "vegetarien", name: "VÃ©gÃ©tarien", icon: "Leaf", type: "sale" },
  { id: "soupes", name: "Soupes & VeloutÃ©s", icon: "Soup", type: "sale" },
  { id: "desserts", name: "Desserts & Douceurs", icon: "Cake", type: "sucre" }
];

export const RECIPES = [
  {
    id: "lasagne",
    title: "THE LASAGNE RECIPE",
    shortTitle: "Lasagnes Ã  la Bolognaise",
    category: "plats",
    categoryLabel: "Plats Chauds",
    servings: 5,
    prepTime: "30 min",
    cookTime: "45 min",
    difficulty: "Facile",
    image: `${BASE}illustrations/lasagne.png`,
    note: "Plus Ã§a mijote, meilleure sera la sauce !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients pour la bolognaise",
        items: [
          { name: "bÅ“uf hachÃ©", qty: 800, unit: "g" },
          { name: "oignons", qty: 2, unit: "" },
          { name: "gousses d'ail", qty: 2, unit: "" },
          { name: "carottes (facultatif mais excellent)", qty: 2, unit: "" },
          { name: "huile d'olive", qty: 2, unit: "c. Ã  soupe" },
          { name: "pulpe de tomates", qty: 800, unit: "g" },
          { name: "concentrÃ© de tomates", qty: 2, unit: "c. Ã  soupe" },
          { name: "vin rouge (facultatif)", qty: 15, unit: "cl" },
          { name: "cube de bouillon de bÅ“uf", qty: 1, unit: "" },
          { name: "origan", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "basilic", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      },
      {
        name: "IngrÃ©dients pour la bÃ©chamel",
        items: [
          { name: "beurre", qty: 80, unit: "g" },
          { name: "farine", qty: 80, unit: "g" },
          { name: "lait", qty: 1, unit: "L" },
          { name: "noix de muscade", qty: 1, unit: "pincÃ©e" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      },
      {
        name: "IngrÃ©dients pour le montage",
        items: [
          { name: "feuilles de lasagnes", qty: 14, unit: "feuilles" },
          { name: "mozzarella rÃ¢pÃ©e ou en morceaux", qty: 250, unit: "g" },
          { name: "parmesan rÃ¢pÃ©", qty: 150, unit: "g" },
          { name: "beurre", qty: 20, unit: "g" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. La bolognaise",
        steps: [
          "Fais revenir les oignons et les carottes finement coupÃ©s dans l'huile pendant 5 minutes.",
          "Ajoute l'ail puis la viande et fais-la bien colorer.",
          "Verse le vin rouge et laisse rÃ©duire 2 Ã  3 minutes.",
          "Ajoute la pulpe de tomates, le concentrÃ©, le cube Ã©miettÃ©, les herbes, le sel et le poivre.",
          "Laisse mijoter 45 minutes Ã  1 heure Ã  feu doux. Plus Ã§a mijote, meilleure sera la sauce."
        ]
      },
      {
        title: "2. La bÃ©chamel",
        steps: [
          "Fais fondre le beurre.",
          "Ajoute la farine et mÃ©lange 2 minutes.",
          "Verse le lait petit Ã  petit en fouettant.",
          "Laisse Ã©paissir puis assaisonne avec le sel, le poivre et la muscade."
        ]
      },
      {
        title: "3. Le montage",
        steps: [
          "Dans un grand plat : une fine couche de bolognaise, une couche de feuilles de lasagnes, de la bolognaise, de la bÃ©chamel, un peu de mozzarella et de parmesan. Recommence jusqu'en haut.",
          "Termine par : Le reste de bÃ©chamel, beaucoup de mozzarella, tout le parmesan, quelques noisettes de beurre."
        ]
      },
      {
        title: "4. Cuisson",
        steps: [
          "Four prÃ©chauffÃ© Ã  180 Â°C.",
          "Cuire 40 Ã  45 minutes.",
          "Laisse reposer 10 Ã  15 minutes avant de servir : elles se tiendront beaucoup mieux."
        ]
      }
    ],
    tags: ["boeuf", "pates", "italien", "gratin", "tomate", "fromage"]
  },
  {
    id: "soupe-potiron",
    title: "SOUPE POTIRON RECIPE",
    shortTitle: "VeloutÃ© de Potiron RÃ©confortant",
    category: "soupes",
    categoryLabel: "Soupes & VeloutÃ©s",
    servings: 4,
    prepTime: "15 min",
    cookTime: "30 min",
    difficulty: "TrÃ¨s Facile",
    image: `${BASE}illustrations/soupe-potiron.png`,
    note: "Si elle est trop Ã©paisse, ajoute un peu de bouillon ou d'eau chaude !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients",
        items: [
          { name: "potiron (Ã©pluchÃ© et coupÃ© en dÃ©s)", qty: 1000, unit: "g" },
          { name: "pommes de terre moyennes", qty: 2, unit: "" },
          { name: "gros oignon", qty: 1, unit: "" },
          { name: "gousses d'ail", qty: 2, unit: "" },
          { name: "bouillon de lÃ©gumes ou de volaille", qty: 1, unit: "L" },
          { name: "crÃ¨me fraÃ®che entiÃ¨re", qty: 20, unit: "cl" },
          { name: "beurre", qty: 30, unit: "g" },
          { name: "huile d'olive", qty: 1, unit: "c. Ã  soupe" },
          { name: "Sel, poivre", qty: null, unit: "" },
          { name: "noix de muscade", qty: 1, unit: "pincÃ©e" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Fais revenir les lÃ©gumes",
        steps: [
          "Fais fondre le beurre avec l'huile.",
          "Ajoute l'oignon Ã©mincÃ© et laisse cuire 5 minutes.",
          "Incorpore l'ail, puis le potiron et les pommes de terre.",
          "Fais revenir le tout 5 minutes en mÃ©langeant."
        ]
      },
      {
        title: "2. Laisse mijoter",
        steps: [
          "Verse le bouillon jusqu'Ã  couvrir les lÃ©gumes.",
          "Porte Ã  Ã©bullition puis laisse cuire 25 Ã  30 minutes, jusqu'Ã  ce que les lÃ©gumes soient trÃ¨s tendres."
        ]
      },
      {
        title: "3. Mixe & Assaisonne",
        steps: [
          "Mixe la soupe jusqu'Ã  obtenir une texture bien lisse.",
          "Ajoute la crÃ¨me fraÃ®che.",
          "Assaisonne avec le sel, le poivre et la muscade.",
          "Si elle est trop Ã©paisse, ajoute un peu de bouillon ou d'eau chaude."
        ]
      }
    ],
    tags: ["potiron", "soupe", "veloute", "vegetarien", "automne", "creme"]
  },
  {
    id: "cheese-naans",
    title: "CHEESE NAANS RECIPE",
    shortTitle: "Naans au Fromage Moelleux",
    category: "street-food",
    categoryLabel: "Street Food",
    servings: 4,
    prepTime: "25 min (+ 1h30 repos)",
    cookTime: "10 min",
    difficulty: "Moyen",
    image: `${BASE}illustrations/cheese-naans.png`,
    note: "Utilise une poÃªle trÃ¨s chaude avec un couvercle pour un fromage bien filant !",
    ingredientGroups: [
      {
        name: "Pour la pÃ¢te",
        items: [
          { name: "farine (T45 ou T55)", qty: 500, unit: "g" },
          { name: "yaourt nature", qty: 125, unit: "g" },
          { name: "levure boulangÃ¨re sÃ¨che", qty: 6, unit: "g" },
          { name: "sucre", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "sel", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "huile", qty: 3, unit: "c. Ã  soupe" },
          { name: "eau tiÃ¨de", qty: 18, unit: "cl" }
        ]
      },
      {
        name: "Pour la garniture fromage",
        items: [
          { name: "fromage type Kiri (ou Vache qui rit)", qty: 300, unit: "g" },
          { name: "mozzarella rÃ¢pÃ©e (facultatif mais plus filant)", qty: 100, unit: "g" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. PrÃ©parer la pÃ¢te",
        steps: [
          "MÃ©lange la levure, le sucre et un peu d'eau tiÃ¨de. Laisse reposer 10 minutes.",
          "Dans un saladier, mets la farine et le sel.",
          "Ajoute le yaourt, l'huile et la levure.",
          "PÃ©tris en ajoutant l'eau petit Ã  petit jusqu'Ã  obtenir une pÃ¢te souple et lÃ©gÃ¨rement collante.",
          "Couvre et laisse lever 1h30 Ã  2h dans un endroit tiÃ¨de."
        ]
      },
      {
        title: "2. Former les naans",
        steps: [
          "DÃ©gaze la pÃ¢te et divise-la en 6 boules.",
          "Ã‰tale une boule en petit disque.",
          "DÃ©pose une bonne cuillÃ¨re de fromage Kiri au centre.",
          "Referme la pÃ¢te en pinÃ§ant bien les bords.",
          "Ã‰tale doucement en forme ovale (sans faire sortir le fromage)."
        ]
      },
      {
        title: "3. Cuisson",
        steps: [
          "Fais chauffer une poÃªle trÃ¨s chaude.",
          "Fais cuire chaque naan avec une noisette de beurre 1 Ã  2 minutes par cÃ´tÃ© jusqu'Ã  apparition de belles taches dorÃ©es, avec un couvercle."
        ]
      }
    ],
    tags: ["fromage", "pain", "indien", "kiri", "mozzarella", "street-food"]
  },
  {
    id: "hachis-parmentier",
    title: "HACIS PARMENTIER RECIPE",
    shortTitle: "Hachis Parmentier Maison",
    category: "plats",
    categoryLabel: "Plats Chauds",
    servings: 5,
    prepTime: "25 min",
    cookTime: "30 min",
    difficulty: "Facile",
    image: `${BASE}illustrations/hachis-parmentier.png`,
    note: "ou utilise de la purÃ©e industrielle c'est cool aussi ðŸ˜‰",
    ingredientGroups: [
      {
        name: "Pour la purÃ©e",
        items: [
          { name: "pommes de terre", qty: 1200, unit: "g" },
          { name: "beurre", qty: 80, unit: "g" },
          { name: "lait chaud", qty: 25, unit: "cl" },
          { name: "crÃ¨me fraÃ®che (facultatif mais dÃ©licieux)", qty: 100, unit: "ml" },
          { name: "Sel, poivre", qty: null, unit: "" },
          { name: "noix de muscade", qty: 1, unit: "pincÃ©e" }
        ]
      },
      {
        name: "Pour la viande",
        items: [
          { name: "bÅ“uf hachÃ©", qty: 700, unit: "g" },
          { name: "oignons", qty: 2, unit: "" },
          { name: "gousses d'ail", qty: 2, unit: "" },
          { name: "carottes rÃ¢pÃ©es (facultatif)", qty: 2, unit: "" },
          { name: "huile d'olive", qty: 2, unit: "c. Ã  soupe" },
          { name: "concentrÃ© de tomates", qty: 1, unit: "c. Ã  soupe" },
          { name: "bouillon de bÅ“uf", qty: 10, unit: "cl" },
          { name: "thym", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "persil hachÃ©", qty: 1, unit: "poignÃ©e" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      },
      {
        name: "Pour gratiner",
        items: [
          { name: "gruyÃ¨re ou comtÃ© rÃ¢pÃ©", qty: 150, unit: "g" },
          { name: "beurre", qty: 15, unit: "g" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. La purÃ©e",
        steps: [
          "Ã‰pluche les pommes de terre et fais-les cuire 20 Ã  25 minutes dans une grande casserole d'eau salÃ©e.",
          "Ã‰goutte-les puis Ã©crase-les au presse-purÃ©e.",
          "Incorpore le beurre, le lait chaud, puis la crÃ¨me.",
          "Assaisonne avec le sel, le poivre et la muscade. La purÃ©e doit Ãªtre bien onctueuse."
        ]
      },
      {
        title: "2. La garniture",
        steps: [
          "Fais revenir les oignons dans l'huile pendant 5 minutes.",
          "Ajoute l'ail puis la viande et fais-la bien dorer.",
          "Incorpore les carottes rÃ¢pÃ©es, le concentrÃ© de tomates, le bouillon, le thym, le sel et le poivre.",
          "Laisse cuire 10 Ã  15 minutes jusqu'Ã  ce que le liquide soit presque Ã©vaporÃ©.",
          "Termine avec le persil hachÃ©."
        ]
      },
      {
        title: "3. Le montage",
        steps: [
          "Beurre un plat Ã  gratin.",
          "Ã‰tale toute la viande.",
          "Recouvre avec la purÃ©e en lissant avec une fourchette pour crÃ©er des petites stries.",
          "Parseme de fromage rÃ¢pÃ© et ajoute quelques noisettes de beurre."
        ]
      },
      {
        title: "4. Cuisson",
        steps: [
          "Four prÃ©chauffÃ© Ã  200 Â°C.",
          "Enfourne 25 Ã  30 minutes.",
          "Termine 2 Ã  3 minutes sous le gril pour obtenir une belle croÃ»te dorÃ©e."
        ]
      }
    ],
    tags: ["boeuf", "patate", "gratin", "traditionnel", "puree", "fromage"]
  },
  {
    id: "tartiflette",
    title: "TARTIFLETTE RECIPE",
    shortTitle: "VÃ©ritable Tartiflette au Reblochon",
    category: "fromage",
    categoryLabel: "Fromage & Gratin",
    servings: 4,
    prepTime: "20 min",
    cookTime: "30 min",
    difficulty: "Facile",
    image: `${BASE}illustrations/tartiflette.png`,
    note: "(lardon pas obligatoire)",
    ingredientGroups: [
      {
        name: "IngrÃ©dients",
        items: [
          { name: "pommes de terre", qty: 1500, unit: "g" },
          { name: "reblochon / fromage tartiflette", qty: 1, unit: "fromage" },
          { name: "lardons fumÃ©s", qty: 250, unit: "g" },
          { name: "gros oignons", qty: 2, unit: "" },
          { name: "gousses d'ail", qty: 2, unit: "" },
          { name: "crÃ¨me fraÃ®che entiÃ¨re", qty: 20, unit: "cl" },
          { name: "vin blanc sec de Savoie (facultatif)", qty: 10, unit: "cl" },
          { name: "beurre", qty: 30, unit: "g" },
          { name: "Poivre", qty: null, unit: "" },
          { name: "muscade (facultatif)", qty: 1, unit: "pincÃ©e" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. PrÃ©parer les pommes de terre",
        steps: [
          "Ã‰pluche les pommes de terre et coupe-les en gros morceaux ou en rondelles Ã©paisses.",
          "Fais-les cuire dans l'eau salÃ©e pendant 15 Ã  20 minutes : elles doivent Ãªtre tendres mais encore fermes.",
          "Ã‰goutte-les."
        ]
      },
      {
        title: "2. PrÃ©parer la garniture",
        steps: [
          "Fais revenir les lardons dans une grande poÃªle.",
          "Ajoute les oignons Ã©mincÃ©s et laisse-les fondre doucement 10 minutes.",
          "Ajoute l'ail.",
          "Verse le vin blanc et laisse rÃ©duire quelques minutes."
        ]
      },
      {
        title: "3. Monter la tartiflette",
        steps: [
          "PrÃ©chauffe le four Ã  200 Â°C.",
          "Frotte un plat Ã  gratin avec une gousse d'ail.",
          "Mets une couche de pommes de terre.",
          "Ajoute le mÃ©lange lardons/oignons.",
          "Verse la crÃ¨me fraÃ®che.",
          "Coupe le reblochon en deux dans l'Ã©paisseur puis pose-le sur le dessus, croÃ»te vers le haut."
        ]
      },
      {
        title: "4. Cuisson",
        steps: [
          "Enfourne 25 Ã  30 minutes jusqu'Ã  ce que le reblochon soit complÃ¨tement fondu et bien gratinÃ©.",
          "Laisse reposer 5 minutes avant de servir."
        ]
      }
    ],
    tags: ["reblochon", "fromage", "patate", "lardons", "savoie", "gratin"]
  },
  {
    id: "poulet-creme",
    title: "POULET A LA CREME RECIPE",
    shortTitle: "Poulet CrÃ©meux aux Champignons",
    category: "plats",
    categoryLabel: "Plats Chauds",
    servings: 4,
    prepTime: "15 min",
    cookTime: "20 min",
    difficulty: "TrÃ¨s Facile",
    image: `${BASE}illustrations/poulet-creme.png`,
    note: "PrÃ©pare tes pÃ¢tes pendant que le poulet mijote dans sa crÃ¨me !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients",
        items: [
          { name: "pÃ¢tes (tagliatelles, penne ou linguine)", qty: 400, unit: "g" },
          { name: "blanc de poulet (ou hauts de cuisses)", qty: 600, unit: "g" },
          { name: "champignons de Paris", qty: 250, unit: "g" },
          { name: "Ã©chalotes (ou 1 gros oignon)", qty: 2, unit: "" },
          { name: "gousses d'ail", qty: 2, unit: "" },
          { name: "crÃ¨me fraÃ®che entiÃ¨re", qty: 40, unit: "cl" },
          { name: "bouillon de volaille", qty: 15, unit: "cl" },
          { name: "parmesan rÃ¢pÃ©", qty: 60, unit: "g" },
          { name: "moutarde (facultatif mais dÃ©licieux)", qty: 1, unit: "c. Ã  soupe" },
          { name: "beurre", qty: 1, unit: "noix" },
          { name: "huile d'olive", qty: 1, unit: "filet" },
          { name: "paprika doux", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "persil frais (ou ciboulette)", qty: 1, unit: "poignÃ©e" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. PrÃ©parer le poulet",
        steps: [
          "Coupe le poulet en morceaux ou en laniÃ¨res.",
          "Assaisonne avec sel, poivre et paprika.",
          "Fais chauffer une grande poÃªle avec l'huile d'olive et le beurre.",
          "Fais dorer le poulet Ã  feu vif 5-6 minutes jusqu'Ã  ce qu'il soit bien colorÃ©.",
          "RÃ©serve-le dans une assiette."
        ]
      },
      {
        title: "2. Faire la sauce crÃ©meuse",
        steps: [
          "Dans la mÃªme poÃªle, ajoute les Ã©chalotes Ã©mincÃ©es et les champignons.",
          "Fais revenir 5 minutes jusqu'Ã  ce qu'ils soient lÃ©gÃ¨rement dorÃ©s.",
          "Ajoute l'ail hachÃ© et mÃ©lange 30 secondes.",
          "DÃ©glace avec le bouillon de volaille en grattant bien les sucs au fond de la poÃªle.",
          "Ajoute la crÃ¨me, la moutarde et laisse mijoter 5 minutes."
        ]
      },
      {
        title: "3. Assembler",
        steps: [
          "Remets le poulet dans la sauce et laisse cuire doucement 8-10 minutes.",
          "Ajoute le parmesan et mÃ©lange jusqu'Ã  obtenir une sauce bien onctueuse."
        ]
      },
      {
        title: "4. DÃ©guster",
        steps: [
          "Pendant ce temps fais cuire tes pÃ¢tes et il te reste plus qu'Ã  assembler et manger !"
        ]
      }
    ],
    tags: ["poulet", "creme", "champignons", "pates", "sauce"]
  },
  {
    id: "salade-cesar",
    title: "SALADE CESAR RECIPE",
    shortTitle: "Salade CÃ©sar Croustillante Maison",
    category: "salades",
    categoryLabel: "Salades & FraÃ®cheur",
    servings: 4,
    prepTime: "20 min",
    cookTime: "10 min",
    difficulty: "Facile",
    image: `${BASE}illustrations/salade-cesar.png`,
    note: "Fais tes croÃ»tons maison au four, c'est inÃ©galable !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients pour la salade",
        items: [
          { name: "belles salades romaines (ou 1 grosse)", qty: 2, unit: "" },
          { name: "blanc de poulet", qty: 500, unit: "g" },
          { name: "parmesan en copeaux", qty: 80, unit: "g" },
          { name: "pain (pour les croÃ»tons)", qty: 150, unit: "g" },
          { name: "gousse d'ail", qty: 1, unit: "" },
          { name: "huile d'olive", qty: 2, unit: "c. Ã  soupe" },
          { name: "paprika (facultatif)", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      },
      {
        name: "IngrÃ©dients pour la sauce",
        items: [
          { name: "fromage blanc", qty: 3, unit: "grosses c. Ã  soupe" },
          { name: "moutarde", qty: 1, unit: "c. Ã  soupe" },
          { name: "vinaigre balsamique", qty: 1, unit: "c. Ã  soupe" },
          { name: "jus de citron", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "parmesan", qty: 1, unit: "c. Ã  soupe" },
          { name: "sel, poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Faire les croÃ»tons maison",
        steps: [
          "Coupe le pain en petits cubes.",
          "MÃ©lange avec un filet d'huile d'olive, un peu de sel et de poivre.",
          "Fais dorer au four Ã  180Â°C pendant 5-10 minutes en mÃ©langeant Ã  mi-cuisson."
        ]
      },
      {
        title: "2. Cuire le poulet",
        steps: [
          "Coupe le poulet en morceaux ou en tranches.",
          "Assaisonne avec sel, poivre, paprika et un filet d'huile d'olive.",
          "Fais-le griller Ã  la poÃªle jusqu'Ã  ce qu'il soit bien dorÃ© et cuit Ã  cÅ“ur.",
          "Laisse reposer quelques minutes puis tranche-le."
        ]
      },
      {
        title: "3. PrÃ©parer la sauce CÃ©sar",
        steps: [
          "MÃ©lange le fromage blanc avec la moutarde.",
          "Rajoute petit Ã  petit le parmesan.",
          "Une fois le mÃ©lange bien homogÃ¨ne rajoute le citron et le vinaigre balsamique.",
          "Pour finir rajoute le sel et le poivre."
        ]
      },
      {
        title: "4. Montage de la salade",
        steps: [
          "Dispose ta salade au centre de l'assiette.",
          "Rajoute ta sauce au centre.",
          "Tu peux mettre un peu de parmesan par dessus sur toute l'assiette.",
          "Dispose tes morceaux de poulet ainsi que tes croÃ»tons tout autour de la sauce.",
          "Pour finir rajoute du vinaigre balsamique pour dÃ©corer."
        ]
      }
    ],
    tags: ["salade", "poulet", "cesar", "croutons", "parmesan", "frais"]
  },
  {
    id: "salade-pates",
    title: "SALADE DE PATES RECIPE",
    shortTitle: "Salade de PÃ¢tes Gourmande & CrÃ©meuse",
    category: "salades",
    categoryLabel: "Salades & FraÃ®cheur",
    servings: 4,
    prepTime: "15 min",
    cookTime: "10 min",
    difficulty: "TrÃ¨s Facile",
    image: `${BASE}illustrations/salade-pates.png`,
    note: "Laisse refroidir 15-20 minutes au frais avant de dÃ©guster !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients salade",
        items: [
          { name: "salade pousse d'Ã©pinards", qty: 150, unit: "g" },
          { name: "fÃªta", qty: 150, unit: "g" },
          { name: "tomates cerises", qty: 200, unit: "g" },
          { name: "knaki de poulet", qty: 4, unit: "saucisses" },
          { name: "pÃ¢tes papillons (farfalle)", qty: 300, unit: "g" },
          { name: "olives vertes", qty: 80, unit: "g" }
        ]
      },
      {
        name: "IngrÃ©dients sauce",
        items: [
          { name: "fromage blanc", qty: 2, unit: "c. Ã  soupe" },
          { name: "mayonnaise", qty: 1, unit: "c. Ã  soupe" },
          { name: "vinaigre balsamique", qty: 1, unit: "filet" },
          { name: "paprika", qty: 1, unit: "pincÃ©e" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. PrÃ©parer les aliments",
        steps: [
          "Commencer par bien laver les tomates cerises.",
          "DÃ©couper les tomates cerises en petits morceaux ainsi que les knakis, la fÃªta et les olives.",
          "Bien laver la salade puis la dÃ©couper."
        ]
      },
      {
        title: "2. Faire la sauce crÃ©meuse",
        steps: [
          "Dans un bol mÃ©langer le fromage blanc avec la mayonnaise.",
          "Rajouter le vinaigre balsamique.",
          "Pour finir, rajouter les Ã©pices et mÃ©langer."
        ]
      },
      {
        title: "3. Cuisson & Assemblage",
        steps: [
          "Pendant ce temps fais cuire tes pÃ¢tes.",
          "Mettre les ingrÃ©dients dans un saladier.",
          "Rajoute la sauce et mÃ©lange pour que tous les ingrÃ©dients soient imprÃ©gnÃ©s.",
          "Puis une fois les pÃ¢tes froides, verse-les dans le saladier.",
          "Laisse refroidir la salade 15-20 minutes au frais."
        ]
      }
    ],
    tags: ["pates", "salade", "feta", "tomate", "knaki", "ete"]
  },
  {
    id: "risotto-fromage",
    title: "RIZOTTO FROMAGE RECIPE",
    shortTitle: "Risotto Fondant aux 3 Fromages",
    category: "pates-riz",
    categoryLabel: "PÃ¢tes & Riz",
    servings: 4,
    prepTime: "10 min",
    cookTime: "25 min",
    difficulty: "Moyen",
    image: `${BASE}illustrations/risotto-fromage.png`,
    note: "Ajoute le bouillon louche par louche en remuant constamment !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients",
        items: [
          { name: "riz Ã  risotto (Arborio ou Carnaroli)", qty: 320, unit: "g" },
          { name: "oignon ou 2 Ã©chalotes", qty: 1, unit: "" },
          { name: "beurre", qty: 30, unit: "g" },
          { name: "huile d'olive", qty: 1, unit: "c. Ã  soupe" },
          { name: "eau chaude (ou bouillon)", qty: 1, unit: "L" },
          { name: "crÃ¨me fraÃ®che entiÃ¨re", qty: 20, unit: "cl" },
          { name: "parmesan rÃ¢pÃ©", qty: 100, unit: "g" },
          { name: "comtÃ© rÃ¢pÃ©", qty: 100, unit: "g" },
          { name: "mozzarella en dÃ©s", qty: 100, unit: "g" },
          { name: "Sel et poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. PrÃ©paration",
        steps: [
          "Fais chauffer le beurre et l'huile dans une grande casserole.",
          "Fais revenir l'oignon Ã©mincÃ© pendant 3 Ã  4 minutes jusqu'Ã  ce qu'il soit fondant.",
          "Ajoute le riz et mÃ©lange pendant 2 minutes.",
          "Verse une louche d'eau chaude et remue jusqu'Ã  ce qu'elle soit absorbÃ©e.",
          "Continue ainsi pendant 18 Ã  20 minutes, en ajoutant l'eau progressivement."
        ]
      },
      {
        title: "2. Les fromages",
        steps: [
          "Lorsque le riz est tendre et encore lÃ©gÃ¨rement fondant, retire la casserole du feu.",
          "Ajoute la crÃ¨me fraÃ®che, le parmesan, le comtÃ© et la mozzarella.",
          "MÃ©lange jusqu'Ã  ce que les fromages soient bien fondus et que le risotto soit crÃ©meux."
        ]
      },
      {
        title: "3. Service",
        steps: [
          "Sale, poivre et sers immÃ©diatement avec un peu de parmesan rÃ¢pÃ© sur le dessus."
        ]
      }
    ],
    tags: ["riz", "risotto", "fromage", "parmesan", "comte", "mozzarella", "italien"]
  },
  {
    id: "gnocchis-chevre-miel",
    title: "GNOCCHIS CHEVRE-MIEL RECIPE",
    shortTitle: "Gnocchis Sauce ChÃ¨vre & Miel",
    category: "pates-riz",
    categoryLabel: "PÃ¢tes & Riz",
    servings: 4,
    prepTime: "10 min",
    cookTime: "15 min",
    difficulty: "TrÃ¨s Facile",
    image: `${BASE}illustrations/gnocchis-chevre-miel.png`,
    note: "/!\\ Au moment de servir, ajouter des noix concassÃ©es et un filet de miel !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients",
        items: [
          { name: "gnocchis", qty: 800, unit: "g" },
          { name: "bÃ»che de chÃ¨vre (ou chÃ¨vre frais)", qty: 200, unit: "g" },
          { name: "crÃ¨me fraÃ®che entiÃ¨re", qty: 20, unit: "cl" },
          { name: "miel", qty: 2, unit: "c. Ã  soupe" },
          { name: "Ã©chalote", qty: 1, unit: "" },
          { name: "beurre", qty: 1, unit: "noix" },
          { name: "huile d'olive", qty: 1, unit: "c. Ã  soupe" },
          { name: "parmesan rÃ¢pÃ© (facultatif)", qty: 40, unit: "g" },
          { name: "Quelques noix (facultatif)", qty: 30, unit: "g" },
          { name: "Sel et poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. PrÃ©parer la sauce chÃ¨vre",
        steps: [
          "Ã‰mince l'Ã©chalote et fais-la revenir dans le beurre avec l'huile d'olive pendant 3 Ã  4 minutes.",
          "Ajoute la crÃ¨me fraÃ®che et le chÃ¨vre coupÃ© en morceaux.",
          "Laisse fondre doucement en mÃ©langeant jusqu'Ã  obtenir une sauce bien lisse.",
          "Ajoute le miel, le thym, un peu de poivre et ajuste le sel."
        ]
      },
      {
        title: "2. PrÃ©parer les gnocchis",
        steps: [
          "Fais cuire les gnocchis dans une grande casserole d'eau salÃ©e.",
          "Lorsqu'ils remontent Ã  la surface (environ 2-3 minutes), Ã©goutte-les.",
          "(Si ce sont des gnocchis Ã  poÃªler, fais-les simplement dorer directement Ã  la poÃªle avec une noisette de beurre)."
        ]
      },
      {
        title: "3. Assembler",
        steps: [
          "Ajoute les gnocchis dans la sauce chÃ¨vre.",
          "MÃ©lange dÃ©licatement pour bien les enrober.",
          "Ajoute le parmesan si tu veux une sauce encore plus gourmande.",
          "/!\\ Au moment de servir ajouter des noix concassÃ©es et un filet de miel."
        ]
      }
    ],
    tags: ["gnocchis", "chevre", "miel", "noix", "rapide", "sucre-sale"]
  },
  {
    id: "riz-crousty",
    title: "RIZ CROUSTY RECIPE",
    shortTitle: "Riz Crousty Poulet PanÃ© & Oignons Frits",
    category: "street-food",
    categoryLabel: "Street Food",
    servings: 4,
    prepTime: "15 min",
    cookTime: "15 min",
    difficulty: "Facile",
    image: `${BASE}illustrations/riz-crousty.png`,
    note: "Si ce sont des nuggets dÃ©jÃ  prÃ©parÃ©s, les faire cuire puis les dÃ©couper en petits morceaux !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients pour le riz",
        items: [
          { name: "riz (riz rond ou basmati)", qty: 300, unit: "g" },
          { name: "beurre", qty: 30, unit: "g" },
          { name: "paprika (facultatif)", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      },
      {
        name: "IngrÃ©dients pour la sauce",
        items: [
          { name: "crÃ¨me fraÃ®che entiÃ¨re", qty: 20, unit: "cl" },
          { name: "sauce soja sucrÃ©e", qty: 1, unit: "c. Ã  soupe" },
          { name: "mayonnaise", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "sauce aigre douce (facultatif)", qty: 1, unit: "c. Ã  soupe" },
          { name: "Poivre", qty: null, unit: "" }
        ]
      },
      {
        name: "IngrÃ©dients pour la garniture",
        items: [
          { name: "poulet (ou nuggets)", qty: 400, unit: "g" },
          { name: "oignons frits croustillants", qty: 50, unit: "g" },
          { name: "graines de sÃ©same (facultatif)", qty: 1, unit: "c. Ã  soupe" },
          { name: "ciboulette ou persil", qty: 1, unit: "poignÃ©e" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. PrÃ©parer le riz et le poulet",
        steps: [
          "Fais cuire le riz puis laisse-le refroidir.",
          "Pendant ce temps dÃ©couper le poulet en petits morceaux et les tremper dans la chapelure.",
          "Une fois bien recouvert de chapelure faire cuire Ã  feu doux le poulet dans une poÃªle avec une noisette de beurre.",
          "(Si ce sont des nuggets dÃ©jÃ  prÃ©parÃ©s les faire cuire puis les dÃ©couper en petits morceaux)."
        ]
      },
      {
        title: "2. PrÃ©parer la sauce",
        steps: [
          "Dans un bol mÃ©langÃ© la crÃ¨me la mayonnaise la sauce soja et les Ã©pices jusqu'Ã  obtenir une crÃ¨me homogÃ¨ne."
        ]
      },
      {
        title: "3. Assembler",
        steps: [
          "Mettre le riz au fond de l'assiette.",
          "Verser une couche gÃ©nÃ©reuse de sauce.",
          "Ajouter les morceaux de poulet.",
          "Pour finir ajouter les oignons frits ainsi que les herbes."
        ]
      }
    ],
    tags: ["riz", "poulet", "croustillant", "oignons-frits", "sauce-soja", "street-food"]
  },
  {
    id: "ratatouille",
    title: "RATATOUILLE RECIPE",
    shortTitle: "Ratatouille ProvenÃ§ale en Spirale",
    category: "vegetarien",
    categoryLabel: "VÃ©gÃ©tarien",
    servings: 4,
    prepTime: "25 min",
    cookTime: "1h30",
    difficulty: "Facile",
    image: `${BASE}illustrations/ratatouille.png`,
    note: "Alterne les rondelles de lÃ©gumes debout pour faire une magnifique spirale !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients pour la sauce",
        items: [
          { name: "oignon", qty: 1, unit: "" },
          { name: "gousses d'ail", qty: 2, unit: "" },
          { name: "tomates concassÃ©es", qty: 400, unit: "g" },
          { name: "huile d'olive", qty: 2, unit: "c. Ã  soupe" },
          { name: "herbes de Provence", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "Sel et poivre", qty: null, unit: "" }
        ]
      },
      {
        name: "IngrÃ©dients pour les lÃ©gumes",
        items: [
          { name: "courgettes", qty: 2, unit: "" },
          { name: "aubergines", qty: 2, unit: "" },
          { name: "tomates", qty: 4, unit: "" },
          { name: "oignon rouge (facultatif)", qty: 1, unit: "" },
          { name: "huile d'olive", qty: 3, unit: "c. Ã  soupe" },
          { name: "thym frais ou herbes de Provence", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "Sel et poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. PrÃ©parer la sauce",
        steps: [
          "Fais revenir l'oignon Ã©mincÃ© dans l'huile d'olive pendant 5 minutes.",
          "Ajoute l'ail hachÃ© et laisse cuire 1 minute.",
          "Incorpore les tomates concassÃ©es, les herbes de Provence, le sel et le poivre.",
          "Laisse mijoter 15 Ã  20 minutes.",
          "Mixe la sauce si tu souhaites une texture bien lisse."
        ]
      },
      {
        title: "2. PrÃ©parer les lÃ©gumes",
        steps: [
          "Coupe les courgettes, les aubergines, les tomates (et l'oignon rouge si tu en utilises) en rondelles trÃ¨s fines (2 Ã  3 mm)."
        ]
      },
      {
        title: "3. Monter le plat",
        steps: [
          "Ã‰tale la sauce au fond d'un plat Ã  gratin.",
          "Dispose les rondelles de lÃ©gumes debout en les alternant (tomate, courgette, aubergine) pour former une jolie spirale ou des rangÃ©es serrÃ©es.",
          "Arrose d'un filet d'huile d'olive.",
          "Sale, poivre et parsÃ¨me de thym ou d'herbes de Provence."
        ]
      },
      {
        title: "4. Cuisson",
        steps: [
          "Couvre le plat avec du papier cuisson ou du papier aluminium.",
          "Enfourne Ã  160 Â°C pendant 1 h 15.",
          "Retire le papier et poursuis la cuisson 20 Ã  30 minutes, jusqu'Ã  ce que les lÃ©gumes soient fondants et lÃ©gÃ¨rement dorÃ©s."
        ]
      }
    ],
    tags: ["legumes", "courgette", "aubergine", "tomate", "vegetarien", "sante"]
  },
  {
    id: "poulet-curry",
    title: "POULET CURRY RECIPE",
    shortTitle: "Poulet au Curry Onctueux & Riz ThaÃ¯",
    category: "plats",
    categoryLabel: "Plats Chauds",
    servings: 2,
    prepTime: "15 min",
    cookTime: "15 min",
    difficulty: "Facile",
    image: `${BASE}illustrations/poulet-curry.png`,
    note: "Pense Ã  torrÃ©fier les Ã©pices 1 min dans l'huile et n'hÃ©site pas Ã  rajouter des noix de cajou !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients",
        items: [
          { name: "riz thaÃ¯", qty: 200, unit: "g" },
          { name: "escalopes de poulet", qty: 2, unit: "" },
          { name: "curry", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "curcuma", qty: 0.5, unit: "c. Ã  cafÃ©" },
          { name: "pÃ¢te de curry", qty: 0.5, unit: "c. Ã  soupe" },
          { name: "crÃ¨me fraÃ®che", qty: 20, unit: "cl" },
          { name: "bouillon de poulet", qty: 1, unit: "cube" },
          { name: "paprika, gingembre, ail", qty: 1, unit: "pincÃ©e chaque" },
          { name: "noix de cajou (facultatif)", qty: 30, unit: "g" },
          { name: "parmesan rÃ¢pÃ©", qty: 20, unit: "g" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. PrÃ©parer le riz et le poulet",
        steps: [
          "Fais cuire le riz puis laisse-le refroidir.",
          "DÃ©couper le poulet en petits cubes puis les faire cuire.",
          "TorrÃ©fier les Ã©pices (les faire revenir maximum 1 minute dans l'huile avec le poulet par exemple).",
          "Une fois le poulet dorÃ© rajouter paprika, ail, sel, poivre, gingembre et le curry.",
          "Quand les Ã©pices se sont mÃ©langÃ©es Ã  la viande rajouter la crÃ¨me et la pÃ¢te de curry.",
          "Laisser mijoter quelques minutes (2-3 min)."
        ]
      },
      {
        title: "2. Assembler",
        steps: [
          "Mettre le riz au fond de l'assiette puis rajouter la sauce curry avec le poulet.",
          "Un peu de parmesan et de poivre sur le dessus et il reste plus qu'Ã  dÃ©guster !"
        ]
      }
    ],
    tags: ["poulet", "curry", "riz", "epices", "creme", "exotique"]
  },
  {
    id: "tenders",
    title: "TENDERS RECIPE",
    shortTitle: "Crispy Chicken Tenders Maison",
    category: "street-food",
    categoryLabel: "Street Food",
    servings: 4,
    prepTime: "20 min (+ 30 min marinade)",
    cookTime: "10 min",
    difficulty: "Facile",
    image: `${BASE}illustrations/tenders.png`,
    note: "Pour une panure ultra croustillante, repasse le poulet une 2Ã¨me fois dans l'Å“uf puis dans la farine !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients poulet",
        items: [
          { name: "blanc de poulet", qty: 600, unit: "g" },
          { name: "Å“ufs", qty: 2, unit: "" },
          { name: "lait ou eau", qty: 3, unit: "c. Ã  soupe" },
          { name: "jus de citron", qty: 1, unit: "c. Ã  soupe" },
          { name: "sel, paprika, ail en poudre, oignon en poudre", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "poivre", qty: 0.5, unit: "c. Ã  cafÃ©" }
        ]
      },
      {
        name: "IngrÃ©dients pour la panure",
        items: [
          { name: "farine", qty: 200, unit: "g" },
          { name: "maÃ¯zena", qty: 50, unit: "g" },
          { name: "paprika, ail en poudre, oignon en poudre", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "herbes de Provence, poivre, sel", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "piment (facultatif)", qty: 0.5, unit: "c. Ã  cafÃ©" },
          { name: "Huile pour la cuisson", qty: 50, unit: "cl" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. PrÃ©parer le poulet",
        steps: [
          "Coupe le poulet en morceaux allongÃ©s.",
          "MÃ©lange les Å“ufs avec le citron, le lait (ou l'eau) et les Ã©pices.",
          "Mets le poulet dedans et laisse mariner 30 minutes minimum (2 heures si tu as le temps)."
        ]
      },
      {
        title: "2. Faire la panure",
        steps: [
          "MÃ©lange la farine, la maÃ¯zena et toutes les Ã©pices.",
          "Sors un morceau de poulet de la marinade.",
          "Passe-le dans la farine Ã©picÃ©e en appuyant bien pour accrocher la panure.",
          "Pour un effet encore plus croustillant : repasse-le dans l'Å“uf, puis une deuxiÃ¨me fois dans la farine."
        ]
      },
      {
        title: "3. Cuisson",
        steps: [
          "Fais chauffer l'huile Ã  170-180 Â°C.",
          "Fais cuire les tenders environ 5 minutes jusqu'Ã  ce qu'ils soient bien dorÃ©s.",
          "DÃ©pose-les sur une grille ou du papier absorbant."
        ]
      }
    ],
    tags: ["poulet", "tenders", "croustillant", "frire", "street-food", "usa"]
  },
  {
    id: "cig-kofte",
    title: "Ã‡IÄž KÃ–FTE RECIPE",
    shortTitle: "Ã‡iÄŸ KÃ¶fte Turcs au Boulgour",
    category: "vegetarien",
    categoryLabel: "VÃ©gÃ©tarien",
    servings: 4,
    prepTime: "30 min",
    cookTime: "0 min",
    difficulty: "Moyen",
    image: `${BASE}illustrations/cig-kofte.png`,
    note: "C'est le secret du Ã§iÄŸ kÃ¶fte : plus tu malaxes la pÃ¢te avec les mains, plus elle devient liÃ©e et savoureuse !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients principaux",
        items: [
          { name: "boulgour fin (spÃ©cial kÃ¶fte si possible)", qty: 300, unit: "g" },
          { name: "concentrÃ© de tomate", qty: 2, unit: "c. Ã  soupe" },
          { name: "concentrÃ© de poivron (biber salÃ§asÄ±)", qty: 2, unit: "c. Ã  soupe" },
          { name: "oignon", qty: 1, unit: "" },
          { name: "gousses d'ail", qty: 2, unit: "" },
          { name: "huile d'olive", qty: 3, unit: "c. Ã  soupe" },
          { name: "mÃ©lasse de grenade (nar ekÅŸisi)", qty: 2, unit: "c. Ã  soupe" },
          { name: "citron", qty: 1, unit: "" },
          { name: "bouquet de persil", qty: 1, unit: "" },
          { name: "menthe fraÃ®che (facultatif)", qty: 1, unit: "poignÃ©e" },
          { name: "piment d'Alep (pul biber)", qty: 2, unit: "c. Ã  soupe" },
          { name: "paprika, cumin", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "Sel, eau tiÃ¨de", qty: null, unit: "" }
        ]
      },
      {
        name: "IngrÃ©dients pour le montage",
        items: [
          { name: "feuilles de laitue", qty: 1, unit: "salade" },
          { name: "quartiers de citron", qty: 1, unit: "citron" },
          { name: "pain lavash ou galette", qty: 4, unit: "galettes" },
          { name: "menthe fraÃ®che", qty: 1, unit: "poignÃ©e" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Le boulgour",
        steps: [
          "Mets le boulgour dans un grand saladier.",
          "Ajoute un peu d'eau tiÃ¨de (juste pour l'humidifier).",
          "Laisse reposer 15 Ã  20 minutes pour qu'il ramollisse."
        ]
      },
      {
        title: "2. Le mÃ©lange (Ã©tape trÃ¨s importante)",
        steps: [
          "RÃ¢pe trÃ¨s finement l'oignon et l'ail (ou mixe-les).",
          "Ajoute-les au boulgour avec les concentrÃ©s de tomate et de poivron.",
          "Ajoute le piment, paprika, cumin et sel.",
          "Commence Ã  malaxer avec les mains pendant environ 15 Ã  20 minutes.",
          "-> C'est le secret du Ã§iÄŸ kÃ¶fte : plus tu travailles la pÃ¢te, plus elle devient liÃ©e et savoureuse."
        ]
      },
      {
        title: "3. Finaliser",
        steps: [
          "Ajoute l'huile d'olive, la mÃ©lasse de grenade et le jus de citron.",
          "Continue Ã  malaxer quelques minutes.",
          "Ajoute le persil et la menthe finement hachÃ©s Ã  la fin."
        ]
      },
      {
        title: "4. Former les kÃ¶fte",
        steps: [
          "Prends une petite poignÃ©e de pÃ¢te.",
          "Presse-la dans ta main en serrant les doigts pour crÃ©er les marques typiques.",
          "Dispose-les sur des feuilles de laitue."
        ]
      }
    ],
    tags: ["boulgour", "kofte", "turc", "vegetarien", "sans-cuisson", "epices"]
  },
  {
    id: "patate-douce",
    title: "PATATE DOUCE RECIPE",
    shortTitle: "Patate Douce RÃ´tie & ChÃ¨vre Miel",
    category: "vegetarien",
    categoryLabel: "VÃ©gÃ©tarien",
    servings: 2,
    prepTime: "10 min",
    cookTime: "45 min",
    difficulty: "TrÃ¨s Facile",
    image: `${BASE}illustrations/patate-douce.png`,
    note: "5 min avant la fin, Ã©crase lÃ©gÃ¨rement le centre pour y mÃ©langer le chÃ¨vre frais !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients pour la purÃ©e",
        items: [
          { name: "petite patate douce", qty: 1, unit: "" },
          { name: "pot de chÃ¨vre frais", qty: 200, unit: "g" },
          { name: "miel", qty: 2, unit: "c. Ã  soupe" },
          { name: "huile d'olive", qty: 1, unit: "c. Ã  soupe" },
          { name: "paprika", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. PrÃ©paration",
        steps: [
          "Couper la patate douce en deux aprÃ¨s l'avoir bien nettoyÃ©e.",
          "Une fois coupÃ©e, la dÃ©poser dans un plat et la badigeonner d'huile d'olive et des Ã©pices."
        ]
      },
      {
        title: "2. Cuisson",
        steps: [
          "Mettre au four Ã  180 Â°C pendant 45 min.",
          "5 minutes avant la fin de la cuisson, sorter le plat du four et dÃ©couper et mÃ©langer l'intÃ©rieur de la patate afin de crÃ©er une petite purÃ©e et y rajouter le chÃ¨vre frais."
        ]
      },
      {
        title: "3. Finalisation",
        steps: [
          "Disposer les patates sur une assiette et rajouter un filet de miel sur le fromage fondu."
        ]
      }
    ],
    tags: ["patate-douce", "chevre", "miel", "four", "vegetarien", "facile"]
  },
  {
    id: "burger",
    title: "BURGER RECIPE",
    shortTitle: "Double Cheese Burger CaramelisÃ©",
    category: "street-food",
    categoryLabel: "Street Food",
    servings: 4,
    prepTime: "15 min",
    cookTime: "15 min",
    difficulty: "Facile",
    image: `${BASE}illustrations/burger.png`,
    note: "Enfourne le burger 5 min Ã  180Â°C pour des pains ultra croustillants !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients pour la garniture",
        items: [
          { name: "steaks de bÅ“uf", qty: 4, unit: "" },
          { name: "oignons", qty: 4, unit: "" },
          { name: "pains Ã  burger (pains briochÃ©s)", qty: 6, unit: "" },
          { name: "cheddar", qty: 8, unit: "tranches" },
          { name: "gros cornichons", qty: 2, unit: "" },
          { name: "paprika, ras el hanout, sel, poivre", qty: 1, unit: "pincÃ©e" }
        ]
      },
      {
        name: "IngrÃ©dients pour la sauce",
        items: [
          { name: "mayonnaise", qty: 3, unit: "c. Ã  soupe" },
          { name: "ketchup", qty: 2, unit: "c. Ã  soupe" },
          { name: "cornichons dÃ©coupÃ©s finement", qty: 2, unit: "c. Ã  soupe" },
          { name: "sel, poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. PrÃ©parer la garniture",
        steps: [
          "Fais cuire les steaks Ã  feu doux puis rajouter les Ã©pices.",
          "Dans une autre poÃªle faire caramÃ©liser les oignons avec un peu de sucre."
        ]
      },
      {
        title: "2. PrÃ©parer la sauce",
        steps: [
          "Dans un bol mÃ©langÃ© la mayonnaise, le ketchup et les Ã©pices.",
          "DÃ©couper finement les cornichons et les rajouter dans la sauce."
        ]
      },
      {
        title: "3. Assembler",
        steps: [
          "Mettre les pains Ã  burger sur une plaque qui va au four.",
          "Mettre de la sauce sur le pain puis dÃ©poser dÃ©licatement le steak bien cuit.",
          "DÃ©poser une tranche de cheddar et refermer avec un second pain.",
          "Recouvrir le second pain de sauce puis y mettre une tranche de cheddar et les oignons caramÃ©lisÃ©s.",
          "Fermer le burger avec le dernier pain."
        ]
      },
      {
        title: "4. Cuisson",
        steps: [
          "Mettre le burger 5 min Ã  180 Â°C afin qu'il soit bien croustillant."
        ]
      }
    ],
    tags: ["burger", "boeuf", "cheddar", "oignons-caramelises", "street-food", "usa"]
  },
  {
    id: "tacos-francais",
    title: "TACOS FRANCAIS RECIPE",
    shortTitle: "French Tacos Poulet Frites & Cheddar",
    category: "street-food",
    categoryLabel: "Street Food",
    servings: 2,
    prepTime: "15 min",
    cookTime: "10 min",
    difficulty: "Facile",
    image: `${BASE}illustrations/tacos-francais.png`,
    note: "Plie ton tacos comme un papier cadeau et presse-le bien !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients",
        items: [
          { name: "escalopes de poulet", qty: 2, unit: "" },
          { name: "frites", qty: 250, unit: "g" },
          { name: "cheddar", qty: 4, unit: "tranches" },
          { name: "galettes de blÃ©", qty: 2, unit: "" },
          { name: "ketchups / sauce fromagÃ¨re", qty: 4, unit: "c. Ã  soupe" },
          { name: "ras el hanout, paprika, sel, poivre", qty: 1, unit: "c. Ã  cafÃ©" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. PrÃ©parer la garniture",
        steps: [
          "DÃ©coupe en petits cubes les escalopes de poulet.",
          "Le faire cuire Ã  feu doux.",
          "Une fois dorÃ© rajouter les Ã©pices.",
          "Fait cuire les frites."
        ]
      },
      {
        title: "2. PrÃ©parer la galette",
        steps: [
          "Disposer la galette ronde face Ã  vous.",
          "Y ajouter la sauce (ici c'est du ketchup mais c'est possible avec n'importe quelle sauce).",
          "DÃ©poser les morceaux de poulet au centre.",
          "Ajouter les frites.",
          "Recouvrir avec deux tranches de cheddar."
        ]
      },
      {
        title: "3. Assembler & Cuire",
        steps: [
          "Une fois tous les ingrÃ©dients Ã  l'intÃ©rieur tu peux plier ton tacos comme un papier cadeau en rabattant les cÃ´tÃ©s puis en refermant les extrÃ©mitÃ©s.",
          "Faire cuire le tacos 5-6 min dans une machine Ã  croque-monsieur."
        ]
      }
    ],
    tags: ["tacos", "poulet", "frites", "cheddar", "street-food"]
  },
  {
    id: "quesadillas",
    title: "QUESADILLAS RECIPE",
    shortTitle: "Quesadillas BÅ“uf Cheddar & Guacamole",
    category: "street-food",
    categoryLabel: "Street Food",
    servings: 2,
    prepTime: "15 min",
    cookTime: "10 min",
    difficulty: "Facile",
    image: `${BASE}illustrations/quesadillas.png`,
    note: "Accompagne avec ton guacamole maison bien frais !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients quesadillas",
        items: [
          { name: "viande hachÃ©e (bÅ“uf)", qty: 250, unit: "g" },
          { name: "galettes de blÃ©", qty: 4, unit: "" },
          { name: "avocat", qty: 1, unit: "" },
          { name: "tomate", qty: 2, unit: "" },
          { name: "cheddar", qty: 150, unit: "g" },
          { name: "paprika, sel, poivre", qty: 1, unit: "c. Ã  cafÃ©" }
        ]
      },
      {
        name: "IngrÃ©dients guacamole",
        items: [
          { name: "avocat", qty: 2, unit: "" },
          { name: "citron vert", qty: 1, unit: "" },
          { name: "oignon rouge", qty: 0.5, unit: "" },
          { name: "huile d'olive, sel, poivre", qty: 1, unit: "c. Ã  soupe" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. PrÃ©parer la garniture",
        steps: [
          "Faire cuire la viande hachÃ©e Ã  feu doux avec le sel, le poivre et le paprika.",
          "DÃ©couper les tomates en petits cubes.",
          "DÃ©couper l'avocat en petits cubes Ã©galement."
        ]
      },
      {
        title: "2. Assemblage",
        steps: [
          "DÃ©couper la galette ronde en deux.",
          "Disposer un peu de viande hachÃ©e sur un des deux cÃ´tÃ©s.",
          "Ajouter le cheddar par-dessus.",
          "Les fermer en deux."
        ]
      },
      {
        title: "3. PrÃ©parer le guacamole",
        steps: [
          "Ã‰craser un avocat.",
          "DÃ©couper un citron vert en deux et percer le jus dans l'avocat.",
          "DÃ©couper finement un oignon rouge et l'ajouter au mÃ©lange.",
          "Ajouter sel et poivre puis mÃ©langer."
        ]
      },
      {
        title: "4. Finalisation",
        steps: [
          "Pendant ce temps faire dorer les quesadillas Ã  feu doux.",
          "Ouvrir en deux la quesadillas et y ajouter un peu d'avocat en cube ainsi que quelques tomates.",
          "Les refermer et disposer sur une assiette tout autour du guacamole."
        ]
      }
    ],
    tags: ["quesadillas", "boeuf", "guacamole", "avocat", "mexicain", "cheddar"]
  },
  {
    id: "avocado-toast",
    title: "AVOCADO TOAST RECIPE",
    shortTitle: "Avocado Toast Å’uf au Plat & Balsamique",
    category: "salades",
    categoryLabel: "Salades & FraÃ®cheur",
    servings: 2,
    prepTime: "10 min",
    cookTime: "5 min",
    difficulty: "TrÃ¨s Facile",
    image: `${BASE}illustrations/avocado-toast.png`,
    note: "Ajoute un filet de vinaigre balsamique et du paprika pour la touche finale !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients",
        items: [
          { name: "avocats", qty: 2, unit: "" },
          { name: "citron vert", qty: 1, unit: "" },
          { name: "pains de mie ou baguette", qty: 4, unit: "tranches" },
          { name: "fromage frais", qty: 100, unit: "g" },
          { name: "Å“uf", qty: 2, unit: "" },
          { name: "vinaigre balsamique", qty: 1, unit: "filet" },
          { name: "huile d'olive, paprika, sel, poivre", qty: 1, unit: "pincÃ©e" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. PrÃ©parer la garniture",
        steps: [
          "Faire cuire les Å“ufs au plat Ã  la poÃªle environ 5 min de chaque face.",
          "Ajouter un peu de sel, de poivre et de paprika.",
          "Laisser refroidir les Å“ufs.",
          "Pendant ce temps dÃ©couper en fines tranches les avocats.",
          "DÃ©couper en deux le citron vert."
        ]
      },
      {
        title: "2. Assemblage",
        steps: [
          "Faire toaster les pains.",
          "Puis le recouvrir d'une bonne dose de fromage frais.",
          "Y disposer les tranches d'avocat.",
          "Verser ensuite le jus du citron et un filet d'huile d'olive.",
          "DÃ©poser dÃ©licatement l'Å“uf par-dessus.",
          "Mettre un filet de vinaigre balsamique."
        ]
      }
    ],
    tags: ["avocat", "oeuf", "toast", "brunch", "rapide", "sante"]
  },
  {
    id: "carbonara",
    title: "SPAGHETTI CARBONARA RECIPE",
    shortTitle: "Authentiques Spaghetti Carbonara",
    category: "pates-riz",
    categoryLabel: "PÃ¢tes & Riz",
    servings: 2,
    prepTime: "10 min",
    cookTime: "12 min",
    difficulty: "Moyen",
    image: `${BASE}illustrations/carbonara.png`,
    note: "La chaleur des pÃ¢tes suffit Ã  cuire les Å“ufs sans les brouiller ! Pas de crÃ¨me !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients",
        items: [
          { name: "spaghetti", qty: 250, unit: "g" },
          { name: "guanciale (ou lardons fumÃ©s)", qty: 150, unit: "g" },
          { name: "jaunes d'Å“ufs", qty: 2, unit: "" },
          { name: "Å“uf entier", qty: 1, unit: "" },
          { name: "pecorino romano rÃ¢pÃ© (ou parmesan)", qty: 90, unit: "g" },
          { name: "Beaucoup de poivre noir moulu", qty: 1, unit: "c. Ã  cafÃ©" },
          { name: "Sel (pour l'eau des pÃ¢tes)", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. PrÃ©paration",
        steps: [
          "Fais cuire les spaghetti dans une grande casserole d'eau bouillante salÃ©e jusqu'Ã  ce qu'ils soient al dente.",
          "Pendant ce temps, fais revenir le guanciale ou les lardons Ã  feu moyen, sans ajouter d'huile.",
          "Laisse-les devenir bien dorÃ©s et croustillants. Garde la graisse dans la poÃªle."
        ]
      },
      {
        title: "2. La carbonara",
        steps: [
          "Dans un saladier, mÃ©lange les jaunes d'Å“ufs, l'Å“uf entier, le fromage rÃ¢pÃ© et une bonne quantitÃ© de poivre.",
          "Tu dois obtenir une pÃ¢te assez Ã©paisse.",
          "Garde une louche d'eau de cuisson des pÃ¢tes."
        ]
      },
      {
        title: "3. Finalisation",
        steps: [
          "Ã‰goutte les spaghetti.",
          "Mets les pÃ¢tes dans la poÃªle avec le guanciale hors du feu, mÃ©lange rapidement, puis ajoute le mÃ©lange Å“ufs-fromage.",
          "Verse un peu d'eau de cuisson petit Ã  petit en remuant jusqu'Ã  obtenir une sauce brillante et trÃ¨s crÃ©meuse."
        ]
      }
    ],
    tags: ["pates", "carbonara", "italien", "guanciale", "pecorino", "oeuf"]
  },
  {
    id: "bagel-saumon",
    title: "BAGEL SAUMON RECIPE",
    shortTitle: "Bagel Saumon FumÃ© & Fromage Frais",
    category: "street-food",
    categoryLabel: "Street Food",
    servings: 1,
    prepTime: "8 min",
    cookTime: "3 min",
    difficulty: "TrÃ¨s Facile",
    image: `${BASE}illustrations/bagel-saumon.png`,
    note: "Parseme de ciboulette fraÃ®che hachÃ©e pour plus de fraÃ®cheur !",
    ingredientGroups: [
      {
        name: "IngrÃ©dients",
        items: [
          { name: "saumon fumÃ© (ou truite fumÃ©e)", qty: 2, unit: "tranches" },
          { name: "fromage frais", qty: 50, unit: "g" },
          { name: "pain Ã  bagel", qty: 1, unit: "" },
          { name: "ciboulette", qty: 1, unit: "c. Ã  soupe" },
          { name: "oignon rouge", qty: 0.25, unit: "" },
          { name: "roquette", qty: 1, unit: "poignÃ©e" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. PrÃ©paration",
        steps: [
          "Faire toaster le pain Ã  bagel 3-4 min pour le faire dorer.",
          "Ã‰taler une couche bien gourmande de fromage frais sur le pain Ã  bagel.",
          "DÃ©poser ensuite quelques feuilles de roquette.",
          "Disposer les tranches de saumon fumÃ©.",
          "Recouvrir d'oignons fraÃ®chement dÃ©coupÃ©s en fines rondelles.",
          "Pour finir dÃ©poser une nouvelle fine couche de fromage frais sur le couvercle du bagel.",
          "DÃ©poser un peu de ciboulettes hachÃ©es sur le tout et refermer votre bagel."
        ]
      }
    ],
    tags: ["bagel", "saumon", "fromage-frais", "brunch", "express", "frais"]
  },
  {
    id: "crumble",
    title: "CRUMBLE RECIPE",
    shortTitle: "Crumble aux pommes",
    type: "sucre",
    category: "desserts",
    categoryLabel: "Desserts & Douceurs",
    servings: 2,
    prepTime: "15 min",
    cookTime: "15 min",
    difficulty: "TrÃ¨s Facile",
    image: `${BASE}illustrations/crumblerecipe.png`,
    note: "Rien de mieux qu'un bon crumble tiÃ¨de !",
    ingredientGroups: [
      {
        name: "Garniture",
        items: [
          { name: "Pommes", qty: 4 }
        ]
      },
      {
        name: "PÃ¢te Ã  crumble",
        items: [
          { name: "Farine", qty: 200, unit: "g" },
          { name: "Beurre", qty: 60, unit: "g" },
          { name: "Flocons d'avoine", qty: 1, unit: "poignÃ©e" },
          { name: "Sucre", qty: 1, unit: "c.Ã .s" },
          { name: "Cannelle", qty: 1, unit: "pincÃ©e" },
          { name: "Sel", qty: 1, unit: "pincÃ©e" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "PrÃ©parer la garniture",
        steps: [
          "Ã‰plucher les pommes et les couper en petits cubes.",
          "Faire revenir les pommes avec une noisette de beurre Ã  feu doux.",
          "Rajouter de la cannelle et le sucre."
        ]
      },
      {
        title: "PrÃ©parer le crumble",
        steps: [
          "Dans un saladier, mÃ©langer la farine et les flocons d'avoine.",
          "Rajouter le beurre lÃ©gÃ¨rement mou.",
          "Ajouter le sel et la cannelle.",
          "Faire une boule avec la pÃ¢te."
        ]
      },
      {
        title: "Assemblage",
        steps: [
          "Mettre les pommes dans un plat.",
          "Effriter et faire des petites boulettes avec la pÃ¢te et la disposer par dessus les pommes.",
          "Enfourner le plat au four Ã  180Â°C pendant 15 min."
        ]
      }
    ],
    tags: ["crumble", "pomme", "dessert", "sucre", "avoine", "cannelle"]
  },
  {
    id: "brioche-pralin",
    title: "BRIOCHE PRALIN RECIPE",
    shortTitle: "Brioche Praline",
    type: "sucre",
    category: "desserts",
    categoryLabel: "Desserts & Douceurs",
    servings: 2,
    prepTime: "30 min",
    cookTime: "30 min",
    difficulty: "Moyen",
    image: `${BASE}illustrations/briochepralinerecipe.png`,
    note: "IdÃ©ale pour le petit dÃ©jeuner !",
    ingredientGroups: [
      {
        name: "PÃ¢te Ã  brioche",
        items: [
          { name: "Farine", qty: 350, unit: "g" },
          { name: "Levure boulangÃ¨re sÃ¨che", qty: 7, unit: "g" },
          { name: "Lait demi-Ã©crÃ©mÃ© tiÃ¨de", qty: 120, unit: "ml" },
          { name: "Oeufs", qty: 2 },
          { name: "Sucre", qty: 40, unit: "g" },
          { name: "Beurre doux mou", qty: 50, unit: "g" },
          { name: "Sel", qty: 1, unit: "pincÃ©e" },
          { name: "Extrait de vanille", qty: 1, unit: "c.Ã .c" }
        ]
      },
      {
        name: "Garniture & Dorure",
        items: [
          { name: "Pralin rose concassÃ©", qty: 100, unit: "g" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "PrÃ©paration",
        steps: [
          "PrÃ©pare la levure : mÃ©lange le lait tiÃ¨de avec la levure et une petite cuillÃ¨re du sucre. Laisse reposer 5 Ã  10 min.",
          "PrÃ©pare la pÃ¢te : Dans un saladier, mets la farine, le reste du sucre et le sel. Ajoute les Å“ufs, la vanille, puis le mÃ©lange lait-levure.",
          "PÃ©tris environ 5 min, puis ajoute progressivement le beurre mou en petits morceaux. Continue Ã  pÃ©trir 8 Ã  10 min, jusqu'Ã  obtenir une pÃ¢te souple et lÃ©gÃ¨rement collante."
        ]
      },
      {
        title: "PremiÃ¨re pousse",
        steps: [
          "Couvre et laisse lever 1h30 Ã  2h, dans un endroit tiÃ¨de. La pÃ¢te doit quasiment doubler de volume.",
          "Ajoute le pralin rose : DÃ©gaze dÃ©licatement la pÃ¢te puis incorpore les 100 g de pralin rose. Ã‰vite de trop pÃ©trir Ã  ce stade : quelques tours de main suffisent.",
          "FaÃ§onne : Divise la pÃ¢te en 3 morceaux, forme trois boudins et rÃ©alise une tresse. DÃ©pose-la dans un moule Ã  cake lÃ©gÃ¨rement beurrÃ© ou chemisÃ© de papier cuisson."
        ]
      },
      {
        title: "DeuxiÃ¨me pousse",
        steps: [
          "Couvre et laisse encore lever 45 min Ã  1 h."
        ]
      },
      {
        title: "Dorure et cuisson",
        steps: [
          "PrÃ©chauffe le four Ã  170 Â°C chaleur traditionnelle.",
          "Badigeonne la brioche avec le jaune d'Å“uf mÃ©langÃ© au lait, puis parsÃ¨me de pralin rose.",
          "Fais cuire 25 Ã  30 min. Si elle colore trop vite, couvre-la lÃ©gÃ¨rement de papier aluminium en cours de cuisson.",
          "Laisse refroidir au moins 20â€“30 min avant de la couper."
        ]
      }
    ],
    tags: ["brioche", "praline", "sucre", "dessert", "viennoiserie", "petit-dejeuner"]
  }
];
