const BASE = import.meta.env.BASE_URL || '/';

export const CATEGORIES = [
  { id: "all", name: "Toutes les recettes", icon: "Utensils" },
  { id: "plats", name: "Plats Chauds", icon: "Flame" },
  { id: "pates-riz", name: "Pâtes & Riz", icon: "Wheat" },
  { id: "fromage", name: "Fromage & Gratin", icon: "Pizza" },
  { id: "salades", name: "Salades & Fraîcheur", icon: "Salad" },
  { id: "street-food", name: "Street Food & Sandwich", icon: "Sandwich" },
  { id: "vegetarien", name: "Végétarien", icon: "Leaf" },
  { id: "soupes", name: "Soupes & Veloutés", icon: "Soup" }
];

export const RECIPES = [
  {
    id: "lasagne",
    title: "THE LASAGNE RECIPE",
    shortTitle: "Lasagnes à la Bolognaise",
    category: "plats",
    categoryLabel: "Plats Chauds",
    servings: 5,
    prepTime: "30 min",
    cookTime: "45 min",
    difficulty: "Facile",
    image: `${BASE}illustrations/lasagne.png`,
    note: "Plus ça mijote, meilleure sera la sauce !",
    ingredientGroups: [
      {
        name: "Ingrédients pour la bolognaise",
        items: [
          { name: "bœuf haché", qty: 800, unit: "g" },
          { name: "oignons", qty: 2, unit: "" },
          { name: "gousses d'ail", qty: 2, unit: "" },
          { name: "carottes (facultatif mais excellent)", qty: 2, unit: "" },
          { name: "huile d'olive", qty: 2, unit: "c. à soupe" },
          { name: "pulpe de tomates", qty: 800, unit: "g" },
          { name: "concentré de tomates", qty: 2, unit: "c. à soupe" },
          { name: "vin rouge (facultatif)", qty: 15, unit: "cl" },
          { name: "cube de bouillon de bœuf", qty: 1, unit: "" },
          { name: "origan", qty: 1, unit: "c. à café" },
          { name: "basilic", qty: 1, unit: "c. à café" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      },
      {
        name: "Ingrédients pour la béchamel",
        items: [
          { name: "beurre", qty: 80, unit: "g" },
          { name: "farine", qty: 80, unit: "g" },
          { name: "lait", qty: 1, unit: "L" },
          { name: "noix de muscade", qty: 1, unit: "pincée" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      },
      {
        name: "Ingrédients pour le montage",
        items: [
          { name: "feuilles de lasagnes", qty: 14, unit: "feuilles" },
          { name: "mozzarella râpée ou en morceaux", qty: 250, unit: "g" },
          { name: "parmesan râpé", qty: 150, unit: "g" },
          { name: "beurre", qty: 20, unit: "g" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. La bolognaise",
        steps: [
          "Fais revenir les oignons et les carottes finement coupés dans l'huile pendant 5 minutes.",
          "Ajoute l'ail puis la viande et fais-la bien colorer.",
          "Verse le vin rouge et laisse réduire 2 à 3 minutes.",
          "Ajoute la pulpe de tomates, le concentré, le cube émietté, les herbes, le sel et le poivre.",
          "Laisse mijoter 45 minutes à 1 heure à feu doux. Plus ça mijote, meilleure sera la sauce."
        ]
      },
      {
        title: "2. La béchamel",
        steps: [
          "Fais fondre le beurre.",
          "Ajoute la farine et mélange 2 minutes.",
          "Verse le lait petit à petit en fouettant.",
          "Laisse épaissir puis assaisonne avec le sel, le poivre et la muscade."
        ]
      },
      {
        title: "3. Le montage",
        steps: [
          "Dans un grand plat : une fine couche de bolognaise, une couche de feuilles de lasagnes, de la bolognaise, de la béchamel, un peu de mozzarella et de parmesan. Recommence jusqu'en haut.",
          "Termine par : Le reste de béchamel, beaucoup de mozzarella, tout le parmesan, quelques noisettes de beurre."
        ]
      },
      {
        title: "4. Cuisson",
        steps: [
          "Four préchauffé à 180 °C.",
          "Cuire 40 à 45 minutes.",
          "Laisse reposer 10 à 15 minutes avant de servir : elles se tiendront beaucoup mieux."
        ]
      }
    ],
    tags: ["boeuf", "pates", "italien", "gratin", "tomate", "fromage"]
  },
  {
    id: "soupe-potiron",
    title: "SOUPE POTIRON RECIPE",
    shortTitle: "Velouté de Potiron Réconfortant",
    category: "soupes",
    categoryLabel: "Soupes & Veloutés",
    servings: 4,
    prepTime: "15 min",
    cookTime: "30 min",
    difficulty: "Très Facile",
    image: `${BASE}illustrations/soupe-potiron.png`,
    note: "Si elle est trop épaisse, ajoute un peu de bouillon ou d'eau chaude !",
    ingredientGroups: [
      {
        name: "Ingrédients",
        items: [
          { name: "potiron (épluché et coupé en dés)", qty: 1000, unit: "g" },
          { name: "pommes de terre moyennes", qty: 2, unit: "" },
          { name: "gros oignon", qty: 1, unit: "" },
          { name: "gousses d'ail", qty: 2, unit: "" },
          { name: "bouillon de légumes ou de volaille", qty: 1, unit: "L" },
          { name: "crème fraîche entière", qty: 20, unit: "cl" },
          { name: "beurre", qty: 30, unit: "g" },
          { name: "huile d'olive", qty: 1, unit: "c. à soupe" },
          { name: "Sel, poivre", qty: null, unit: "" },
          { name: "noix de muscade", qty: 1, unit: "pincée" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Fais revenir les légumes",
        steps: [
          "Fais fondre le beurre avec l'huile.",
          "Ajoute l'oignon émincé et laisse cuire 5 minutes.",
          "Incorpore l'ail, puis le potiron et les pommes de terre.",
          "Fais revenir le tout 5 minutes en mélangeant."
        ]
      },
      {
        title: "2. Laisse mijoter",
        steps: [
          "Verse le bouillon jusqu'à couvrir les légumes.",
          "Porte à ébullition puis laisse cuire 25 à 30 minutes, jusqu'à ce que les légumes soient très tendres."
        ]
      },
      {
        title: "3. Mixe & Assaisonne",
        steps: [
          "Mixe la soupe jusqu'à obtenir une texture bien lisse.",
          "Ajoute la crème fraîche.",
          "Assaisonne avec le sel, le poivre et la muscade.",
          "Si elle est trop épaisse, ajoute un peu de bouillon ou d'eau chaude."
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
    note: "Utilise une poêle très chaude avec un couvercle pour un fromage bien filant !",
    ingredientGroups: [
      {
        name: "Pour la pâte",
        items: [
          { name: "farine (T45 ou T55)", qty: 500, unit: "g" },
          { name: "yaourt nature", qty: 125, unit: "g" },
          { name: "levure boulangère sèche", qty: 6, unit: "g" },
          { name: "sucre", qty: 1, unit: "c. à café" },
          { name: "sel", qty: 1, unit: "c. à café" },
          { name: "huile", qty: 3, unit: "c. à soupe" },
          { name: "eau tiède", qty: 18, unit: "cl" }
        ]
      },
      {
        name: "Pour la garniture fromage",
        items: [
          { name: "fromage type Kiri (ou Vache qui rit)", qty: 300, unit: "g" },
          { name: "mozzarella râpée (facultatif mais plus filant)", qty: 100, unit: "g" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Préparer la pâte",
        steps: [
          "Mélange la levure, le sucre et un peu d'eau tiède. Laisse reposer 10 minutes.",
          "Dans un saladier, mets la farine et le sel.",
          "Ajoute le yaourt, l'huile et la levure.",
          "Pétris en ajoutant l'eau petit à petit jusqu'à obtenir une pâte souple et légèrement collante.",
          "Couvre et laisse lever 1h30 à 2h dans un endroit tiède."
        ]
      },
      {
        title: "2. Former les naans",
        steps: [
          "Dégaze la pâte et divise-la en 6 boules.",
          "Étale une boule en petit disque.",
          "Dépose une bonne cuillère de fromage Kiri au centre.",
          "Referme la pâte en pinçant bien les bords.",
          "Étale doucement en forme ovale (sans faire sortir le fromage)."
        ]
      },
      {
        title: "3. Cuisson",
        steps: [
          "Fais chauffer une poêle très chaude.",
          "Fais cuire chaque naan avec une noisette de beurre 1 à 2 minutes par côté jusqu'à apparition de belles taches dorées, avec un couvercle."
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
    note: "ou utilise de la purée industrielle c'est cool aussi 😉",
    ingredientGroups: [
      {
        name: "Pour la purée",
        items: [
          { name: "pommes de terre", qty: 1200, unit: "g" },
          { name: "beurre", qty: 80, unit: "g" },
          { name: "lait chaud", qty: 25, unit: "cl" },
          { name: "crème fraîche (facultatif mais délicieux)", qty: 100, unit: "ml" },
          { name: "Sel, poivre", qty: null, unit: "" },
          { name: "noix de muscade", qty: 1, unit: "pincée" }
        ]
      },
      {
        name: "Pour la viande",
        items: [
          { name: "bœuf haché", qty: 700, unit: "g" },
          { name: "oignons", qty: 2, unit: "" },
          { name: "gousses d'ail", qty: 2, unit: "" },
          { name: "carottes râpées (facultatif)", qty: 2, unit: "" },
          { name: "huile d'olive", qty: 2, unit: "c. à soupe" },
          { name: "concentré de tomates", qty: 1, unit: "c. à soupe" },
          { name: "bouillon de bœuf", qty: 10, unit: "cl" },
          { name: "thym", qty: 1, unit: "c. à café" },
          { name: "persil haché", qty: 1, unit: "poignée" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      },
      {
        name: "Pour gratiner",
        items: [
          { name: "gruyère ou comté râpé", qty: 150, unit: "g" },
          { name: "beurre", qty: 15, unit: "g" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. La purée",
        steps: [
          "Épluche les pommes de terre et fais-les cuire 20 à 25 minutes dans une grande casserole d'eau salée.",
          "Égoutte-les puis écrase-les au presse-purée.",
          "Incorpore le beurre, le lait chaud, puis la crème.",
          "Assaisonne avec le sel, le poivre et la muscade. La purée doit être bien onctueuse."
        ]
      },
      {
        title: "2. La garniture",
        steps: [
          "Fais revenir les oignons dans l'huile pendant 5 minutes.",
          "Ajoute l'ail puis la viande et fais-la bien dorer.",
          "Incorpore les carottes râpées, le concentré de tomates, le bouillon, le thym, le sel et le poivre.",
          "Laisse cuire 10 à 15 minutes jusqu'à ce que le liquide soit presque évaporé.",
          "Termine avec le persil haché."
        ]
      },
      {
        title: "3. Le montage",
        steps: [
          "Beurre un plat à gratin.",
          "Étale toute la viande.",
          "Recouvre avec la purée en lissant avec une fourchette pour créer des petites stries.",
          "Parseme de fromage râpé et ajoute quelques noisettes de beurre."
        ]
      },
      {
        title: "4. Cuisson",
        steps: [
          "Four préchauffé à 200 °C.",
          "Enfourne 25 à 30 minutes.",
          "Termine 2 à 3 minutes sous le gril pour obtenir une belle croûte dorée."
        ]
      }
    ],
    tags: ["boeuf", "patate", "gratin", "traditionnel", "puree", "fromage"]
  },
  {
    id: "tartiflette",
    title: "TARTIFLETTE RECIPE",
    shortTitle: "Véritable Tartiflette au Reblochon",
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
        name: "Ingrédients",
        items: [
          { name: "pommes de terre", qty: 1500, unit: "g" },
          { name: "reblochon / fromage tartiflette", qty: 1, unit: "fromage" },
          { name: "lardons fumés", qty: 250, unit: "g" },
          { name: "gros oignons", qty: 2, unit: "" },
          { name: "gousses d'ail", qty: 2, unit: "" },
          { name: "crème fraîche entière", qty: 20, unit: "cl" },
          { name: "vin blanc sec de Savoie (facultatif)", qty: 10, unit: "cl" },
          { name: "beurre", qty: 30, unit: "g" },
          { name: "Poivre", qty: null, unit: "" },
          { name: "muscade (facultatif)", qty: 1, unit: "pincée" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Préparer les pommes de terre",
        steps: [
          "Épluche les pommes de terre et coupe-les en gros morceaux ou en rondelles épaisses.",
          "Fais-les cuire dans l'eau salée pendant 15 à 20 minutes : elles doivent être tendres mais encore fermes.",
          "Égoutte-les."
        ]
      },
      {
        title: "2. Préparer la garniture",
        steps: [
          "Fais revenir les lardons dans une grande poêle.",
          "Ajoute les oignons émincés et laisse-les fondre doucement 10 minutes.",
          "Ajoute l'ail.",
          "Verse le vin blanc et laisse réduire quelques minutes."
        ]
      },
      {
        title: "3. Monter la tartiflette",
        steps: [
          "Préchauffe le four à 200 °C.",
          "Frotte un plat à gratin avec une gousse d'ail.",
          "Mets une couche de pommes de terre.",
          "Ajoute le mélange lardons/oignons.",
          "Verse la crème fraîche.",
          "Coupe le reblochon en deux dans l'épaisseur puis pose-le sur le dessus, croûte vers le haut."
        ]
      },
      {
        title: "4. Cuisson",
        steps: [
          "Enfourne 25 à 30 minutes jusqu'à ce que le reblochon soit complètement fondu et bien gratiné.",
          "Laisse reposer 5 minutes avant de servir."
        ]
      }
    ],
    tags: ["reblochon", "fromage", "patate", "lardons", "savoie", "gratin"]
  },
  {
    id: "poulet-creme",
    title: "POULET A LA CREME RECIPE",
    shortTitle: "Poulet Crémeux aux Champignons",
    category: "plats",
    categoryLabel: "Plats Chauds",
    servings: 4,
    prepTime: "15 min",
    cookTime: "20 min",
    difficulty: "Très Facile",
    image: `${BASE}illustrations/poulet-creme.png`,
    note: "Prépare tes pâtes pendant que le poulet mijote dans sa crème !",
    ingredientGroups: [
      {
        name: "Ingrédients",
        items: [
          { name: "pâtes (tagliatelles, penne ou linguine)", qty: 400, unit: "g" },
          { name: "blanc de poulet (ou hauts de cuisses)", qty: 600, unit: "g" },
          { name: "champignons de Paris", qty: 250, unit: "g" },
          { name: "échalotes (ou 1 gros oignon)", qty: 2, unit: "" },
          { name: "gousses d'ail", qty: 2, unit: "" },
          { name: "crème fraîche entière", qty: 40, unit: "cl" },
          { name: "bouillon de volaille", qty: 15, unit: "cl" },
          { name: "parmesan râpé", qty: 60, unit: "g" },
          { name: "moutarde (facultatif mais délicieux)", qty: 1, unit: "c. à soupe" },
          { name: "beurre", qty: 1, unit: "noix" },
          { name: "huile d'olive", qty: 1, unit: "filet" },
          { name: "paprika doux", qty: 1, unit: "c. à café" },
          { name: "persil frais (ou ciboulette)", qty: 1, unit: "poignée" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Préparer le poulet",
        steps: [
          "Coupe le poulet en morceaux ou en lanières.",
          "Assaisonne avec sel, poivre et paprika.",
          "Fais chauffer une grande poêle avec l'huile d'olive et le beurre.",
          "Fais dorer le poulet à feu vif 5-6 minutes jusqu'à ce qu'il soit bien coloré.",
          "Réserve-le dans une assiette."
        ]
      },
      {
        title: "2. Faire la sauce crémeuse",
        steps: [
          "Dans la même poêle, ajoute les échalotes émincées et les champignons.",
          "Fais revenir 5 minutes jusqu'à ce qu'ils soient légèrement dorés.",
          "Ajoute l'ail haché et mélange 30 secondes.",
          "Déglace avec le bouillon de volaille en grattant bien les sucs au fond de la poêle.",
          "Ajoute la crème, la moutarde et laisse mijoter 5 minutes."
        ]
      },
      {
        title: "3. Assembler",
        steps: [
          "Remets le poulet dans la sauce et laisse cuire doucement 8-10 minutes.",
          "Ajoute le parmesan et mélange jusqu'à obtenir une sauce bien onctueuse."
        ]
      },
      {
        title: "4. Déguster",
        steps: [
          "Pendant ce temps fais cuire tes pâtes et il te reste plus qu'à assembler et manger !"
        ]
      }
    ],
    tags: ["poulet", "creme", "champignons", "pates", "sauce"]
  },
  {
    id: "salade-cesar",
    title: "SALADE CESAR RECIPE",
    shortTitle: "Salade César Croustillante Maison",
    category: "salades",
    categoryLabel: "Salades & Fraîcheur",
    servings: 4,
    prepTime: "20 min",
    cookTime: "10 min",
    difficulty: "Facile",
    image: `${BASE}illustrations/salade-cesar.png`,
    note: "Fais tes croûtons maison au four, c'est inégalable !",
    ingredientGroups: [
      {
        name: "Ingrédients pour la salade",
        items: [
          { name: "belles salades romaines (ou 1 grosse)", qty: 2, unit: "" },
          { name: "blanc de poulet", qty: 500, unit: "g" },
          { name: "parmesan en copeaux", qty: 80, unit: "g" },
          { name: "pain (pour les croûtons)", qty: 150, unit: "g" },
          { name: "gousse d'ail", qty: 1, unit: "" },
          { name: "huile d'olive", qty: 2, unit: "c. à soupe" },
          { name: "paprika (facultatif)", qty: 1, unit: "c. à café" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      },
      {
        name: "Ingrédients pour la sauce",
        items: [
          { name: "fromage blanc", qty: 3, unit: "grosses c. à soupe" },
          { name: "moutarde", qty: 1, unit: "c. à soupe" },
          { name: "vinaigre balsamique", qty: 1, unit: "c. à soupe" },
          { name: "jus de citron", qty: 1, unit: "c. à café" },
          { name: "parmesan", qty: 1, unit: "c. à soupe" },
          { name: "sel, poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Faire les croûtons maison",
        steps: [
          "Coupe le pain en petits cubes.",
          "Mélange avec un filet d'huile d'olive, un peu de sel et de poivre.",
          "Fais dorer au four à 180°C pendant 5-10 minutes en mélangeant à mi-cuisson."
        ]
      },
      {
        title: "2. Cuire le poulet",
        steps: [
          "Coupe le poulet en morceaux ou en tranches.",
          "Assaisonne avec sel, poivre, paprika et un filet d'huile d'olive.",
          "Fais-le griller à la poêle jusqu'à ce qu'il soit bien doré et cuit à cœur.",
          "Laisse reposer quelques minutes puis tranche-le."
        ]
      },
      {
        title: "3. Préparer la sauce César",
        steps: [
          "Mélange le fromage blanc avec la moutarde.",
          "Rajoute petit à petit le parmesan.",
          "Une fois le mélange bien homogène rajoute le citron et le vinaigre balsamique.",
          "Pour finir rajoute le sel et le poivre."
        ]
      },
      {
        title: "4. Montage de la salade",
        steps: [
          "Dispose ta salade au centre de l'assiette.",
          "Rajoute ta sauce au centre.",
          "Tu peux mettre un peu de parmesan par dessus sur toute l'assiette.",
          "Dispose tes morceaux de poulet ainsi que tes croûtons tout autour de la sauce.",
          "Pour finir rajoute du vinaigre balsamique pour décorer."
        ]
      }
    ],
    tags: ["salade", "poulet", "cesar", "croutons", "parmesan", "frais"]
  },
  {
    id: "salade-pates",
    title: "SALADE DE PATES RECIPE",
    shortTitle: "Salade de Pâtes Gourmande & Crémeuse",
    category: "salades",
    categoryLabel: "Salades & Fraîcheur",
    servings: 4,
    prepTime: "15 min",
    cookTime: "10 min",
    difficulty: "Très Facile",
    image: `${BASE}illustrations/salade-pates.png`,
    note: "Laisse refroidir 15-20 minutes au frais avant de déguster !",
    ingredientGroups: [
      {
        name: "Ingrédients salade",
        items: [
          { name: "salade pousse d'épinards", qty: 150, unit: "g" },
          { name: "fêta", qty: 150, unit: "g" },
          { name: "tomates cerises", qty: 200, unit: "g" },
          { name: "knaki de poulet", qty: 4, unit: "saucisses" },
          { name: "pâtes papillons (farfalle)", qty: 300, unit: "g" },
          { name: "olives vertes", qty: 80, unit: "g" }
        ]
      },
      {
        name: "Ingrédients sauce",
        items: [
          { name: "fromage blanc", qty: 2, unit: "c. à soupe" },
          { name: "mayonnaise", qty: 1, unit: "c. à soupe" },
          { name: "vinaigre balsamique", qty: 1, unit: "filet" },
          { name: "paprika", qty: 1, unit: "pincée" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Préparer les aliments",
        steps: [
          "Commencer par bien laver les tomates cerises.",
          "Découper les tomates cerises en petits morceaux ainsi que les knakis, la fêta et les olives.",
          "Bien laver la salade puis la découper."
        ]
      },
      {
        title: "2. Faire la sauce crémeuse",
        steps: [
          "Dans un bol mélanger le fromage blanc avec la mayonnaise.",
          "Rajouter le vinaigre balsamique.",
          "Pour finir, rajouter les épices et mélanger."
        ]
      },
      {
        title: "3. Cuisson & Assemblage",
        steps: [
          "Pendant ce temps fais cuire tes pâtes.",
          "Mettre les ingrédients dans un saladier.",
          "Rajoute la sauce et mélange pour que tous les ingrédients soient imprégnés.",
          "Puis une fois les pâtes froides, verse-les dans le saladier.",
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
    categoryLabel: "Pâtes & Riz",
    servings: 4,
    prepTime: "10 min",
    cookTime: "25 min",
    difficulty: "Moyen",
    image: `${BASE}illustrations/risotto-fromage.png`,
    note: "Ajoute le bouillon louche par louche en remuant constamment !",
    ingredientGroups: [
      {
        name: "Ingrédients",
        items: [
          { name: "riz à risotto (Arborio ou Carnaroli)", qty: 320, unit: "g" },
          { name: "oignon ou 2 échalotes", qty: 1, unit: "" },
          { name: "beurre", qty: 30, unit: "g" },
          { name: "huile d'olive", qty: 1, unit: "c. à soupe" },
          { name: "eau chaude (ou bouillon)", qty: 1, unit: "L" },
          { name: "crème fraîche entière", qty: 20, unit: "cl" },
          { name: "parmesan râpé", qty: 100, unit: "g" },
          { name: "comté râpé", qty: 100, unit: "g" },
          { name: "mozzarella en dés", qty: 100, unit: "g" },
          { name: "Sel et poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Préparation",
        steps: [
          "Fais chauffer le beurre et l'huile dans une grande casserole.",
          "Fais revenir l'oignon émincé pendant 3 à 4 minutes jusqu'à ce qu'il soit fondant.",
          "Ajoute le riz et mélange pendant 2 minutes.",
          "Verse une louche d'eau chaude et remue jusqu'à ce qu'elle soit absorbée.",
          "Continue ainsi pendant 18 à 20 minutes, en ajoutant l'eau progressivement."
        ]
      },
      {
        title: "2. Les fromages",
        steps: [
          "Lorsque le riz est tendre et encore légèrement fondant, retire la casserole du feu.",
          "Ajoute la crème fraîche, le parmesan, le comté et la mozzarella.",
          "Mélange jusqu'à ce que les fromages soient bien fondus et que le risotto soit crémeux."
        ]
      },
      {
        title: "3. Service",
        steps: [
          "Sale, poivre et sers immédiatement avec un peu de parmesan râpé sur le dessus."
        ]
      }
    ],
    tags: ["riz", "risotto", "fromage", "parmesan", "comte", "mozzarella", "italien"]
  },
  {
    id: "gnocchis-chevre-miel",
    title: "GNOCCHIS CHEVRE-MIEL RECIPE",
    shortTitle: "Gnocchis Sauce Chèvre & Miel",
    category: "pates-riz",
    categoryLabel: "Pâtes & Riz",
    servings: 4,
    prepTime: "10 min",
    cookTime: "15 min",
    difficulty: "Très Facile",
    image: `${BASE}illustrations/gnocchis-chevre-miel.png`,
    note: "/!\\ Au moment de servir, ajouter des noix concassées et un filet de miel !",
    ingredientGroups: [
      {
        name: "Ingrédients",
        items: [
          { name: "gnocchis", qty: 800, unit: "g" },
          { name: "bûche de chèvre (ou chèvre frais)", qty: 200, unit: "g" },
          { name: "crème fraîche entière", qty: 20, unit: "cl" },
          { name: "miel", qty: 2, unit: "c. à soupe" },
          { name: "échalote", qty: 1, unit: "" },
          { name: "beurre", qty: 1, unit: "noix" },
          { name: "huile d'olive", qty: 1, unit: "c. à soupe" },
          { name: "parmesan râpé (facultatif)", qty: 40, unit: "g" },
          { name: "Quelques noix (facultatif)", qty: 30, unit: "g" },
          { name: "Sel et poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Préparer la sauce chèvre",
        steps: [
          "Émince l'échalote et fais-la revenir dans le beurre avec l'huile d'olive pendant 3 à 4 minutes.",
          "Ajoute la crème fraîche et le chèvre coupé en morceaux.",
          "Laisse fondre doucement en mélangeant jusqu'à obtenir une sauce bien lisse.",
          "Ajoute le miel, le thym, un peu de poivre et ajuste le sel."
        ]
      },
      {
        title: "2. Préparer les gnocchis",
        steps: [
          "Fais cuire les gnocchis dans une grande casserole d'eau salée.",
          "Lorsqu'ils remontent à la surface (environ 2-3 minutes), égoutte-les.",
          "(Si ce sont des gnocchis à poêler, fais-les simplement dorer directement à la poêle avec une noisette de beurre)."
        ]
      },
      {
        title: "3. Assembler",
        steps: [
          "Ajoute les gnocchis dans la sauce chèvre.",
          "Mélange délicatement pour bien les enrober.",
          "Ajoute le parmesan si tu veux une sauce encore plus gourmande.",
          "/!\\ Au moment de servir ajouter des noix concassées et un filet de miel."
        ]
      }
    ],
    tags: ["gnocchis", "chevre", "miel", "noix", "rapide", "sucre-sale"]
  },
  {
    id: "riz-crousty",
    title: "RIZ CROUSTY RECIPE",
    shortTitle: "Riz Crousty Poulet Pané & Oignons Frits",
    category: "street-food",
    categoryLabel: "Street Food",
    servings: 4,
    prepTime: "15 min",
    cookTime: "15 min",
    difficulty: "Facile",
    image: `${BASE}illustrations/riz-crousty.png`,
    note: "Si ce sont des nuggets déjà préparés, les faire cuire puis les découper en petits morceaux !",
    ingredientGroups: [
      {
        name: "Ingrédients pour le riz",
        items: [
          { name: "riz (riz rond ou basmati)", qty: 300, unit: "g" },
          { name: "beurre", qty: 30, unit: "g" },
          { name: "paprika (facultatif)", qty: 1, unit: "c. à café" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      },
      {
        name: "Ingrédients pour la sauce",
        items: [
          { name: "crème fraîche entière", qty: 20, unit: "cl" },
          { name: "sauce soja sucrée", qty: 1, unit: "c. à soupe" },
          { name: "mayonnaise", qty: 1, unit: "c. à café" },
          { name: "sauce aigre douce (facultatif)", qty: 1, unit: "c. à soupe" },
          { name: "Poivre", qty: null, unit: "" }
        ]
      },
      {
        name: "Ingrédients pour la garniture",
        items: [
          { name: "poulet (ou nuggets)", qty: 400, unit: "g" },
          { name: "oignons frits croustillants", qty: 50, unit: "g" },
          { name: "graines de sésame (facultatif)", qty: 1, unit: "c. à soupe" },
          { name: "ciboulette ou persil", qty: 1, unit: "poignée" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Préparer le riz et le poulet",
        steps: [
          "Fais cuire le riz puis laisse-le refroidir.",
          "Pendant ce temps découper le poulet en petits morceaux et les tremper dans la chapelure.",
          "Une fois bien recouvert de chapelure faire cuire à feu doux le poulet dans une poêle avec une noisette de beurre.",
          "(Si ce sont des nuggets déjà préparés les faire cuire puis les découper en petits morceaux)."
        ]
      },
      {
        title: "2. Préparer la sauce",
        steps: [
          "Dans un bol mélangé la crème la mayonnaise la sauce soja et les épices jusqu'à obtenir une crème homogène."
        ]
      },
      {
        title: "3. Assembler",
        steps: [
          "Mettre le riz au fond de l'assiette.",
          "Verser une couche généreuse de sauce.",
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
    shortTitle: "Ratatouille Provençale en Spirale",
    category: "vegetarien",
    categoryLabel: "Végétarien",
    servings: 4,
    prepTime: "25 min",
    cookTime: "1h30",
    difficulty: "Facile",
    image: `${BASE}illustrations/ratatouille.png`,
    note: "Alterne les rondelles de légumes debout pour faire une magnifique spirale !",
    ingredientGroups: [
      {
        name: "Ingrédients pour la sauce",
        items: [
          { name: "oignon", qty: 1, unit: "" },
          { name: "gousses d'ail", qty: 2, unit: "" },
          { name: "tomates concassées", qty: 400, unit: "g" },
          { name: "huile d'olive", qty: 2, unit: "c. à soupe" },
          { name: "herbes de Provence", qty: 1, unit: "c. à café" },
          { name: "Sel et poivre", qty: null, unit: "" }
        ]
      },
      {
        name: "Ingrédients pour les légumes",
        items: [
          { name: "courgettes", qty: 2, unit: "" },
          { name: "aubergines", qty: 2, unit: "" },
          { name: "tomates", qty: 4, unit: "" },
          { name: "oignon rouge (facultatif)", qty: 1, unit: "" },
          { name: "huile d'olive", qty: 3, unit: "c. à soupe" },
          { name: "thym frais ou herbes de Provence", qty: 1, unit: "c. à café" },
          { name: "Sel et poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Préparer la sauce",
        steps: [
          "Fais revenir l'oignon émincé dans l'huile d'olive pendant 5 minutes.",
          "Ajoute l'ail haché et laisse cuire 1 minute.",
          "Incorpore les tomates concassées, les herbes de Provence, le sel et le poivre.",
          "Laisse mijoter 15 à 20 minutes.",
          "Mixe la sauce si tu souhaites une texture bien lisse."
        ]
      },
      {
        title: "2. Préparer les légumes",
        steps: [
          "Coupe les courgettes, les aubergines, les tomates (et l'oignon rouge si tu en utilises) en rondelles très fines (2 à 3 mm)."
        ]
      },
      {
        title: "3. Monter le plat",
        steps: [
          "Étale la sauce au fond d'un plat à gratin.",
          "Dispose les rondelles de légumes debout en les alternant (tomate, courgette, aubergine) pour former une jolie spirale ou des rangées serrées.",
          "Arrose d'un filet d'huile d'olive.",
          "Sale, poivre et parsème de thym ou d'herbes de Provence."
        ]
      },
      {
        title: "4. Cuisson",
        steps: [
          "Couvre le plat avec du papier cuisson ou du papier aluminium.",
          "Enfourne à 160 °C pendant 1 h 15.",
          "Retire le papier et poursuis la cuisson 20 à 30 minutes, jusqu'à ce que les légumes soient fondants et légèrement dorés."
        ]
      }
    ],
    tags: ["legumes", "courgette", "aubergine", "tomate", "vegetarien", "sante"]
  },
  {
    id: "poulet-curry",
    title: "POULET CURRY RECIPE",
    shortTitle: "Poulet au Curry Onctueux & Riz Thaï",
    category: "plats",
    categoryLabel: "Plats Chauds",
    servings: 2,
    prepTime: "15 min",
    cookTime: "15 min",
    difficulty: "Facile",
    image: `${BASE}illustrations/poulet-curry.png`,
    note: "Pense à torréfier les épices 1 min dans l'huile et n'hésite pas à rajouter des noix de cajou !",
    ingredientGroups: [
      {
        name: "Ingrédients",
        items: [
          { name: "riz thaï", qty: 200, unit: "g" },
          { name: "escalopes de poulet", qty: 2, unit: "" },
          { name: "curry", qty: 1, unit: "c. à café" },
          { name: "curcuma", qty: 0.5, unit: "c. à café" },
          { name: "pâte de curry", qty: 0.5, unit: "c. à soupe" },
          { name: "crème fraîche", qty: 20, unit: "cl" },
          { name: "bouillon de poulet", qty: 1, unit: "cube" },
          { name: "paprika, gingembre, ail", qty: 1, unit: "pincée chaque" },
          { name: "noix de cajou (facultatif)", qty: 30, unit: "g" },
          { name: "parmesan râpé", qty: 20, unit: "g" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Préparer le riz et le poulet",
        steps: [
          "Fais cuire le riz puis laisse-le refroidir.",
          "Découper le poulet en petits cubes puis les faire cuire.",
          "Torréfier les épices (les faire revenir maximum 1 minute dans l'huile avec le poulet par exemple).",
          "Une fois le poulet doré rajouter paprika, ail, sel, poivre, gingembre et le curry.",
          "Quand les épices se sont mélangées à la viande rajouter la crème et la pâte de curry.",
          "Laisser mijoter quelques minutes (2-3 min)."
        ]
      },
      {
        title: "2. Assembler",
        steps: [
          "Mettre le riz au fond de l'assiette puis rajouter la sauce curry avec le poulet.",
          "Un peu de parmesan et de poivre sur le dessus et il reste plus qu'à déguster !"
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
    note: "Pour une panure ultra croustillante, repasse le poulet une 2ème fois dans l'œuf puis dans la farine !",
    ingredientGroups: [
      {
        name: "Ingrédients poulet",
        items: [
          { name: "blanc de poulet", qty: 600, unit: "g" },
          { name: "œufs", qty: 2, unit: "" },
          { name: "lait ou eau", qty: 3, unit: "c. à soupe" },
          { name: "jus de citron", qty: 1, unit: "c. à soupe" },
          { name: "sel, paprika, ail en poudre, oignon en poudre", qty: 1, unit: "c. à café" },
          { name: "poivre", qty: 0.5, unit: "c. à café" }
        ]
      },
      {
        name: "Ingrédients pour la panure",
        items: [
          { name: "farine", qty: 200, unit: "g" },
          { name: "maïzena", qty: 50, unit: "g" },
          { name: "paprika, ail en poudre, oignon en poudre", qty: 1, unit: "c. à café" },
          { name: "herbes de Provence, poivre, sel", qty: 1, unit: "c. à café" },
          { name: "piment (facultatif)", qty: 0.5, unit: "c. à café" },
          { name: "Huile pour la cuisson", qty: 50, unit: "cl" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Préparer le poulet",
        steps: [
          "Coupe le poulet en morceaux allongés.",
          "Mélange les œufs avec le citron, le lait (ou l'eau) et les épices.",
          "Mets le poulet dedans et laisse mariner 30 minutes minimum (2 heures si tu as le temps)."
        ]
      },
      {
        title: "2. Faire la panure",
        steps: [
          "Mélange la farine, la maïzena et toutes les épices.",
          "Sors un morceau de poulet de la marinade.",
          "Passe-le dans la farine épicée en appuyant bien pour accrocher la panure.",
          "Pour un effet encore plus croustillant : repasse-le dans l'œuf, puis une deuxième fois dans la farine."
        ]
      },
      {
        title: "3. Cuisson",
        steps: [
          "Fais chauffer l'huile à 170-180 °C.",
          "Fais cuire les tenders environ 5 minutes jusqu'à ce qu'ils soient bien dorés.",
          "Dépose-les sur une grille ou du papier absorbant."
        ]
      }
    ],
    tags: ["poulet", "tenders", "croustillant", "frire", "street-food", "usa"]
  },
  {
    id: "cig-kofte",
    title: "ÇIĞ KÖFTE RECIPE",
    shortTitle: "Çiğ Köfte Turcs au Boulgour",
    category: "vegetarien",
    categoryLabel: "Végétarien",
    servings: 4,
    prepTime: "30 min",
    cookTime: "0 min",
    difficulty: "Moyen",
    image: `${BASE}illustrations/cig-kofte.png`,
    note: "C'est le secret du çiğ köfte : plus tu malaxes la pâte avec les mains, plus elle devient liée et savoureuse !",
    ingredientGroups: [
      {
        name: "Ingrédients principaux",
        items: [
          { name: "boulgour fin (spécial köfte si possible)", qty: 300, unit: "g" },
          { name: "concentré de tomate", qty: 2, unit: "c. à soupe" },
          { name: "concentré de poivron (biber salçası)", qty: 2, unit: "c. à soupe" },
          { name: "oignon", qty: 1, unit: "" },
          { name: "gousses d'ail", qty: 2, unit: "" },
          { name: "huile d'olive", qty: 3, unit: "c. à soupe" },
          { name: "mélasse de grenade (nar ekşisi)", qty: 2, unit: "c. à soupe" },
          { name: "citron", qty: 1, unit: "" },
          { name: "bouquet de persil", qty: 1, unit: "" },
          { name: "menthe fraîche (facultatif)", qty: 1, unit: "poignée" },
          { name: "piment d'Alep (pul biber)", qty: 2, unit: "c. à soupe" },
          { name: "paprika, cumin", qty: 1, unit: "c. à café" },
          { name: "Sel, eau tiède", qty: null, unit: "" }
        ]
      },
      {
        name: "Ingrédients pour le montage",
        items: [
          { name: "feuilles de laitue", qty: 1, unit: "salade" },
          { name: "quartiers de citron", qty: 1, unit: "citron" },
          { name: "pain lavash ou galette", qty: 4, unit: "galettes" },
          { name: "menthe fraîche", qty: 1, unit: "poignée" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Le boulgour",
        steps: [
          "Mets le boulgour dans un grand saladier.",
          "Ajoute un peu d'eau tiède (juste pour l'humidifier).",
          "Laisse reposer 15 à 20 minutes pour qu'il ramollisse."
        ]
      },
      {
        title: "2. Le mélange (étape très importante)",
        steps: [
          "Râpe très finement l'oignon et l'ail (ou mixe-les).",
          "Ajoute-les au boulgour avec les concentrés de tomate et de poivron.",
          "Ajoute le piment, paprika, cumin et sel.",
          "Commence à malaxer avec les mains pendant environ 15 à 20 minutes.",
          "-> C'est le secret du çiğ köfte : plus tu travailles la pâte, plus elle devient liée et savoureuse."
        ]
      },
      {
        title: "3. Finaliser",
        steps: [
          "Ajoute l'huile d'olive, la mélasse de grenade et le jus de citron.",
          "Continue à malaxer quelques minutes.",
          "Ajoute le persil et la menthe finement hachés à la fin."
        ]
      },
      {
        title: "4. Former les köfte",
        steps: [
          "Prends une petite poignée de pâte.",
          "Presse-la dans ta main en serrant les doigts pour créer les marques typiques.",
          "Dispose-les sur des feuilles de laitue."
        ]
      }
    ],
    tags: ["boulgour", "kofte", "turc", "vegetarien", "sans-cuisson", "epices"]
  },
  {
    id: "patate-douce",
    title: "PATATE DOUCE RECIPE",
    shortTitle: "Patate Douce Rôtie & Chèvre Miel",
    category: "vegetarien",
    categoryLabel: "Végétarien",
    servings: 2,
    prepTime: "10 min",
    cookTime: "45 min",
    difficulty: "Très Facile",
    image: `${BASE}illustrations/patate-douce.png`,
    note: "5 min avant la fin, écrase légèrement le centre pour y mélanger le chèvre frais !",
    ingredientGroups: [
      {
        name: "Ingrédients pour la purée",
        items: [
          { name: "petite patate douce", qty: 1, unit: "" },
          { name: "pot de chèvre frais", qty: 200, unit: "g" },
          { name: "miel", qty: 2, unit: "c. à soupe" },
          { name: "huile d'olive", qty: 1, unit: "c. à soupe" },
          { name: "paprika", qty: 1, unit: "c. à café" },
          { name: "Sel, poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Préparation",
        steps: [
          "Couper la patate douce en deux après l'avoir bien nettoyée.",
          "Une fois coupée, la déposer dans un plat et la badigeonner d'huile d'olive et des épices."
        ]
      },
      {
        title: "2. Cuisson",
        steps: [
          "Mettre au four à 180 °C pendant 45 min.",
          "5 minutes avant la fin de la cuisson, sorter le plat du four et découper et mélanger l'intérieur de la patate afin de créer une petite purée et y rajouter le chèvre frais."
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
    shortTitle: "Double Cheese Burger Caramelisé",
    category: "street-food",
    categoryLabel: "Street Food",
    servings: 4,
    prepTime: "15 min",
    cookTime: "15 min",
    difficulty: "Facile",
    image: `${BASE}illustrations/burger.png`,
    note: "Enfourne le burger 5 min à 180°C pour des pains ultra croustillants !",
    ingredientGroups: [
      {
        name: "Ingrédients pour la garniture",
        items: [
          { name: "steaks de bœuf", qty: 4, unit: "" },
          { name: "oignons", qty: 4, unit: "" },
          { name: "pains à burger (pains briochés)", qty: 6, unit: "" },
          { name: "cheddar", qty: 8, unit: "tranches" },
          { name: "gros cornichons", qty: 2, unit: "" },
          { name: "paprika, ras el hanout, sel, poivre", qty: 1, unit: "pincée" }
        ]
      },
      {
        name: "Ingrédients pour la sauce",
        items: [
          { name: "mayonnaise", qty: 3, unit: "c. à soupe" },
          { name: "ketchup", qty: 2, unit: "c. à soupe" },
          { name: "cornichons découpés finement", qty: 2, unit: "c. à soupe" },
          { name: "sel, poivre", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Préparer la garniture",
        steps: [
          "Fais cuire les steaks à feu doux puis rajouter les épices.",
          "Dans une autre poêle faire caraméliser les oignons avec un peu de sucre."
        ]
      },
      {
        title: "2. Préparer la sauce",
        steps: [
          "Dans un bol mélangé la mayonnaise, le ketchup et les épices.",
          "Découper finement les cornichons et les rajouter dans la sauce."
        ]
      },
      {
        title: "3. Assembler",
        steps: [
          "Mettre les pains à burger sur une plaque qui va au four.",
          "Mettre de la sauce sur le pain puis déposer délicatement le steak bien cuit.",
          "Déposer une tranche de cheddar et refermer avec un second pain.",
          "Recouvrir le second pain de sauce puis y mettre une tranche de cheddar et les oignons caramélisés.",
          "Fermer le burger avec le dernier pain."
        ]
      },
      {
        title: "4. Cuisson",
        steps: [
          "Mettre le burger 5 min à 180 °C afin qu'il soit bien croustillant."
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
        name: "Ingrédients",
        items: [
          { name: "escalopes de poulet", qty: 2, unit: "" },
          { name: "frites", qty: 250, unit: "g" },
          { name: "cheddar", qty: 4, unit: "tranches" },
          { name: "galettes de blé", qty: 2, unit: "" },
          { name: "ketchups / sauce fromagère", qty: 4, unit: "c. à soupe" },
          { name: "ras el hanout, paprika, sel, poivre", qty: 1, unit: "c. à café" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Préparer la garniture",
        steps: [
          "Découpe en petits cubes les escalopes de poulet.",
          "Le faire cuire à feu doux.",
          "Une fois doré rajouter les épices.",
          "Fait cuire les frites."
        ]
      },
      {
        title: "2. Préparer la galette",
        steps: [
          "Disposer la galette ronde face à vous.",
          "Y ajouter la sauce (ici c'est du ketchup mais c'est possible avec n'importe quelle sauce).",
          "Déposer les morceaux de poulet au centre.",
          "Ajouter les frites.",
          "Recouvrir avec deux tranches de cheddar."
        ]
      },
      {
        title: "3. Assembler & Cuire",
        steps: [
          "Une fois tous les ingrédients à l'intérieur tu peux plier ton tacos comme un papier cadeau en rabattant les côtés puis en refermant les extrémités.",
          "Faire cuire le tacos 5-6 min dans une machine à croque-monsieur."
        ]
      }
    ],
    tags: ["tacos", "poulet", "frites", "cheddar", "street-food"]
  },
  {
    id: "quesadillas",
    title: "QUESADILLAS RECIPE",
    shortTitle: "Quesadillas Bœuf Cheddar & Guacamole",
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
        name: "Ingrédients quesadillas",
        items: [
          { name: "viande hachée (bœuf)", qty: 250, unit: "g" },
          { name: "galettes de blé", qty: 4, unit: "" },
          { name: "avocat", qty: 1, unit: "" },
          { name: "tomate", qty: 2, unit: "" },
          { name: "cheddar", qty: 150, unit: "g" },
          { name: "paprika, sel, poivre", qty: 1, unit: "c. à café" }
        ]
      },
      {
        name: "Ingrédients guacamole",
        items: [
          { name: "avocat", qty: 2, unit: "" },
          { name: "citron vert", qty: 1, unit: "" },
          { name: "oignon rouge", qty: 0.5, unit: "" },
          { name: "huile d'olive, sel, poivre", qty: 1, unit: "c. à soupe" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Préparer la garniture",
        steps: [
          "Faire cuire la viande hachée à feu doux avec le sel, le poivre et le paprika.",
          "Découper les tomates en petits cubes.",
          "Découper l'avocat en petits cubes également."
        ]
      },
      {
        title: "2. Assemblage",
        steps: [
          "Découper la galette ronde en deux.",
          "Disposer un peu de viande hachée sur un des deux côtés.",
          "Ajouter le cheddar par-dessus.",
          "Les fermer en deux."
        ]
      },
      {
        title: "3. Préparer le guacamole",
        steps: [
          "Écraser un avocat.",
          "Découper un citron vert en deux et percer le jus dans l'avocat.",
          "Découper finement un oignon rouge et l'ajouter au mélange.",
          "Ajouter sel et poivre puis mélanger."
        ]
      },
      {
        title: "4. Finalisation",
        steps: [
          "Pendant ce temps faire dorer les quesadillas à feu doux.",
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
    shortTitle: "Avocado Toast Œuf au Plat & Balsamique",
    category: "salades",
    categoryLabel: "Salades & Fraîcheur",
    servings: 2,
    prepTime: "10 min",
    cookTime: "5 min",
    difficulty: "Très Facile",
    image: `${BASE}illustrations/avocado-toast.png`,
    note: "Ajoute un filet de vinaigre balsamique et du paprika pour la touche finale !",
    ingredientGroups: [
      {
        name: "Ingrédients",
        items: [
          { name: "avocats", qty: 2, unit: "" },
          { name: "citron vert", qty: 1, unit: "" },
          { name: "pains de mie ou baguette", qty: 4, unit: "tranches" },
          { name: "fromage frais", qty: 100, unit: "g" },
          { name: "œuf", qty: 2, unit: "" },
          { name: "vinaigre balsamique", qty: 1, unit: "filet" },
          { name: "huile d'olive, paprika, sel, poivre", qty: 1, unit: "pincée" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Préparer la garniture",
        steps: [
          "Faire cuire les œufs au plat à la poêle environ 5 min de chaque face.",
          "Ajouter un peu de sel, de poivre et de paprika.",
          "Laisser refroidir les œufs.",
          "Pendant ce temps découper en fines tranches les avocats.",
          "Découper en deux le citron vert."
        ]
      },
      {
        title: "2. Assemblage",
        steps: [
          "Faire toaster les pains.",
          "Puis le recouvrir d'une bonne dose de fromage frais.",
          "Y disposer les tranches d'avocat.",
          "Verser ensuite le jus du citron et un filet d'huile d'olive.",
          "Déposer délicatement l'œuf par-dessus.",
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
    categoryLabel: "Pâtes & Riz",
    servings: 2,
    prepTime: "10 min",
    cookTime: "12 min",
    difficulty: "Moyen",
    image: `${BASE}illustrations/carbonara.png`,
    note: "La chaleur des pâtes suffit à cuire les œufs sans les brouiller ! Pas de crème !",
    ingredientGroups: [
      {
        name: "Ingrédients",
        items: [
          { name: "spaghetti", qty: 250, unit: "g" },
          { name: "guanciale (ou lardons fumés)", qty: 150, unit: "g" },
          { name: "jaunes d'œufs", qty: 2, unit: "" },
          { name: "œuf entier", qty: 1, unit: "" },
          { name: "pecorino romano râpé (ou parmesan)", qty: 90, unit: "g" },
          { name: "Beaucoup de poivre noir moulu", qty: 1, unit: "c. à café" },
          { name: "Sel (pour l'eau des pâtes)", qty: null, unit: "" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Préparation",
        steps: [
          "Fais cuire les spaghetti dans une grande casserole d'eau bouillante salée jusqu'à ce qu'ils soient al dente.",
          "Pendant ce temps, fais revenir le guanciale ou les lardons à feu moyen, sans ajouter d'huile.",
          "Laisse-les devenir bien dorés et croustillants. Garde la graisse dans la poêle."
        ]
      },
      {
        title: "2. La carbonara",
        steps: [
          "Dans un saladier, mélange les jaunes d'œufs, l'œuf entier, le fromage râpé et une bonne quantité de poivre.",
          "Tu dois obtenir une pâte assez épaisse.",
          "Garde une louche d'eau de cuisson des pâtes."
        ]
      },
      {
        title: "3. Finalisation",
        steps: [
          "Égoutte les spaghetti.",
          "Mets les pâtes dans la poêle avec le guanciale hors du feu, mélange rapidement, puis ajoute le mélange œufs-fromage.",
          "Verse un peu d'eau de cuisson petit à petit en remuant jusqu'à obtenir une sauce brillante et très crémeuse."
        ]
      }
    ],
    tags: ["pates", "carbonara", "italien", "guanciale", "pecorino", "oeuf"]
  },
  {
    id: "bagel-saumon",
    title: "BAGEL SAUMON RECIPE",
    shortTitle: "Bagel Saumon Fumé & Fromage Frais",
    category: "street-food",
    categoryLabel: "Street Food",
    servings: 1,
    prepTime: "8 min",
    cookTime: "3 min",
    difficulty: "Très Facile",
    image: `${BASE}illustrations/bagel-saumon.png`,
    note: "Parseme de ciboulette fraîche hachée pour plus de fraîcheur !",
    ingredientGroups: [
      {
        name: "Ingrédients",
        items: [
          { name: "saumon fumé (ou truite fumée)", qty: 2, unit: "tranches" },
          { name: "fromage frais", qty: 50, unit: "g" },
          { name: "pain à bagel", qty: 1, unit: "" },
          { name: "ciboulette", qty: 1, unit: "c. à soupe" },
          { name: "oignon rouge", qty: 0.25, unit: "" },
          { name: "roquette", qty: 1, unit: "poignée" }
        ]
      }
    ],
    instructionGroups: [
      {
        title: "1. Préparation",
        steps: [
          "Faire toaster le pain à bagel 3-4 min pour le faire dorer.",
          "Étaler une couche bien gourmande de fromage frais sur le pain à bagel.",
          "Déposer ensuite quelques feuilles de roquette.",
          "Disposer les tranches de saumon fumé.",
          "Recouvrir d'oignons fraîchement découpés en fines rondelles.",
          "Pour finir déposer une nouvelle fine couche de fromage frais sur le couvercle du bagel.",
          "Déposer un peu de ciboulettes hachées sur le tout et refermer votre bagel."
        ]
      }
    ],
    tags: ["bagel", "saumon", "fromage-frais", "brunch", "express", "frais"]
  }
];
