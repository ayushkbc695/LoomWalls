function generateImageArray(basePath, count, options = {}) {
  const {
    prefix = 'img',
    category = 'uncategorized',
    namePrefix = 'Image',
    startIndex = 1
  } = options;

  return Array.from({ length: count }, (_, i) => {
    const num = i + startIndex;

    return {
      _id: `${prefix}${String(num).padStart(6, '0')}`,
      name: `${namePrefix} ${num}`,
      description: `Beautiful ${category}`,
      src: new URL(`${basePath}-${num}.jpeg`, import.meta.url).href, // 👈 direct numbering
      category: category.toLowerCase(),
      isbookmark: false
    };
  });
}


function generateImageArray1(basePath, count, options = {}) {
  const {
    prefix = 'img',
    category = 'uncategorized',
    namePrefix = 'Image',
    startIndex = 1
  } = options;

  return Array.from({ length: count }, (_, i) => {
    const num = i + startIndex;

    return {
      _id: `${prefix}${String(num).padStart(6, '0')}`,
      name: `${namePrefix} ${num}`,
      description: `Beautiful ${category}`,
      src: new URL(`${basePath}-${num}.jpg`, import.meta.url).href, // 👈 direct numbering
      category: category.toLowerCase(),
      isbookmark: false
    };
  });
}



// Usage example for flowers:
export const FlowerImage = generateImageArray('./Flowers/flower', 78, {
  prefix: 'flower',
  category: 'Flowers',
  namePrefix: 'Flowers'
});

// Usage for anime scenery:
export const AnimeSceneryImage = generateImageArray('./anime_scenery/as', 56, {
  prefix: 'as',
  category: 'Anime Scenery',
  namePrefix: 'Anime Scenery'
});

// Usage for anime girls:
export const AnimeGirlsImage = generateImageArray1('./Anime_Girl_Image/img', 158, {
  prefix: 'ag',
  category: 'Anime Girls',
  namePrefix: 'Anime Girls'
});

// Usage for Nature:
export const NatureImage = generateImageArray('./Nature/Nature', 84, {
  prefix: 'Nature',
  category: 'Nature',
  namePrefix: 'Nature'
});

// Usage for Graffiti:
export const GraffitiImage = generateImageArray('./Graffiti/graffiti', 74, {
  prefix: 'Graffiti',
  category: 'Graffiti',
  namePrefix: 'Graffiti'
});

// Usage for Demon Slayer:
export const DemonSlayerImage = generateImageArray1('./Demon Slayer/slayer', 151, {
  prefix: 'DemonSlayer',
  category: 'DemonSlayer',
  namePrefix: 'DemonSlayer'
});

// Usage for One Piece:
export const OnePieceImage = generateImageArray1('./OnePiece/one', 92, {
  prefix: 'One Piece',
  category: 'One Piece',
  namePrefix: 'One Piece'
});

// Usage for Naruto:
export const NarutoImage = generateImageArray1('./Naruto/naruto', 93, {
  prefix: 'Naruto',
  category: 'Naruto',
  namePrefix: 'Naruto'
});

// Usage for Minecraft:
export const MinecraftImage = generateImageArray('./Minecraft/mine', 84, {
  prefix: 'Minecraft',
  category: 'Minecraft',
  namePrefix: 'Minecraft'
});

// Usage for Cars:
export const CarsImage = generateImageArray('./Cars/car', 83, {
  prefix: 'Cars',
  category: 'Cars',
  namePrefix: 'Cars'
});

// Usage for Black Clover:
export const BlackCloverImage = generateImageArray1('./Black Clover/clover', 131, {
  prefix: 'Black Clover',
  category: 'Black Clover',
  namePrefix: 'Black Clover'
});

// Usage for Cars:
export const SoloLevelingImage = generateImageArray1('./Solo Leveling/solo', 53, {
  prefix: 'Solo Leveling',
  category: 'Solo Leveling',
  namePrefix: 'Solo Leveling'
});

// Usage for Hunter:
export const HunterImage = generateImageArray1('./Hunter/hunter', 125, {
  prefix: 'Hunter',
  category: 'Hunter',
  namePrefix: 'Hunter'
});

// Usage for JJk:
export const JJkImage = generateImageArray1('./jjk/jjk', 85, {
  prefix: 'JJk',
  category: 'JJk',
  namePrefix: 'JJk'
});

// Usage for tensura:
export const TensuraImage = generateImageArray1('./tensura/slime', 66, {
  prefix: 'Tensura',
  category: 'Tensura',
  namePrefix: 'Tensura'
});

// Usage for BLeach:
export const BleachImage = generateImageArray1('./BLeach/bleach', 60, {
  prefix: 'Bleach',
  category: 'Bleach',
  namePrefix: 'Bleach'
});

// Usage for Wild Life:
export const WildLifeImage = generateImageArray('./Wild Life/wild', 131, {
  prefix: 'Wild Life',
  category: 'Wild Life',
  namePrefix: 'Wild Life'
});

// Usage for Night Background:
export const NightImage = generateImageArray('./Night/night', 62, {
  prefix: 'Night',
  category: 'Night Life',
  namePrefix: 'Night'
});

// Usage for Abstract:
export const AbstractImage = generateImageArray('./Abstract/abstract', 51, {
  prefix: 'Abstract',
  category: 'Abstract Art',
  namePrefix: 'Abstract'
});

// Usage for doll:
export const FigureImage = generateImageArray('./ActionFigure/fig', 162, {
  prefix: 'Figure',
  category: 'Figure',
  namePrefix: 'Figure'
});

// Usage for marvel:
export const MarvelImage = generateImageArray('./Marvel/marvel', 106, {
  prefix: 'Marvel',
  category: 'Marvel',
  namePrefix: 'Marvel'
});


function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// All Anime Image:
export const AnimeAllImage = shuffleArray([
  ...AnimeSceneryImage,
  ...AnimeGirlsImage,
  ...NarutoImage,
  ...BleachImage,
  ...OnePieceImage,
  ...DemonSlayerImage,
  ...JJkImage,
  ...TensuraImage,
  ...BlackCloverImage,
  ...SoloLevelingImage,
  ...HunterImage,
]);


export const CombineImage1 = {
  flower: FlowerImage,
  anime_Scenery: AnimeSceneryImage,
  anime_Girls: AnimeGirlsImage,
  nature: NatureImage,
  graffiti_Background: GraffitiImage,
  demon_Slayer: DemonSlayerImage,
  naruto: NarutoImage,
  one_piece: OnePieceImage,
  minecraft: MinecraftImage,
  cars: CarsImage,
  black_Clover: BlackCloverImage,
  hunter: HunterImage,
  soloLeveling: SoloLevelingImage,
  Jujutsu_Kaisen: JJkImage,
  Tensura: TensuraImage,
  bleach: BleachImage,
  Wild_Life: WildLifeImage,
  night: NightImage,
  abstract: AbstractImage,
  figure: FigureImage,
  marvel: MarvelImage,
  anime: AnimeAllImage,
}

export const allImages = Array.from(
  new Map(
    Object.values(CombineImage1).flat().map(img => [img._id, img])
  ).values()
);


export const BannerImage = {
  anime_Girls: {
    banner: new URL('./Banner/animeGirl.jpg', import.meta.url).href,
    title: "Anime Girls",
    subTitle: "Ethereal Beauty in Every Frame – Graceful Poses, Expressive Eyes, and the Art of Character Design",
    description: "Beautiful sketches created with creativity."
  },
  soloLeveling: {
    banner: new URL('./Banner/soloLeveling.png', import.meta.url).href,
    title: "Solo Leveling",
    subTitle: "A Lone Warrior's Ascent – Shadows Bend, Monsters Fall, and Power Awakens in the Depths",
    description: "Beautiful sketches created with creativity."
  },
  naruto: {
    banner: new URL('./Banner/naruto.jpeg', import.meta.url).href,
    title: "Naruto",
    subTitle: "The Will of Fire Never Dies – Ninja Clash, Bonds Tested, and a Legacy That Transcends Generations",
    description: "The epic journey of a young ninja striving for recognition."
  },
  hunter: {
    banner: new URL('./Banner/hunter.jpg', import.meta.url).href,
    title: "Hunter x Hunter",
    subTitle: "A Bond Forged in Battle – Where Friendships Clash with Destiny and Nen Shapes Reality",
    description: "Beautiful sketches created with creativity."
  },
  bleach: {
    banner: new URL('./Banner/bleach.jpg', import.meta.url).href,
    title: "Bleach",
    subTitle: "Swords That Pierce the Heavens – Hollows Fade, Souls Cry, and the Shinigami Stand Unbroken",
    description: "Beautiful sketches created with creativity."
  },
  black_Clover: {
    banner: new URL('./Banner/blackClover.jpeg', import.meta.url).href,
    title: "Black Clover",
    subTitle: "Magic Born from Defiance – Spells Ignite, Rivals Rise, and the Underdog Claims the Throne",
    description: "Beautiful sketches created with creativity."
  },
  anime_Scenery: {
    banner: new URL('./Banner/animeScenery.jpeg', import.meta.url).href,
    title: "Anime Scenery",
    subTitle: "Where the Wind Carries Stories – Vast Meadows, Whispering Trees, and the Gentle Flow of Time",
    description: "Beautiful sketches created with creativity."
  },
  graffiti_Background: {
    banner: new URL('./Banner/graffiti.jpeg', import.meta.url).href,
    title: "Graffiti",
    subTitle: "City is Our Canvas – Tagged Trains, Walls That Scream, Art in the Chaos",
    description: "Underground art that breaks rules."
  },
  cars: {
    banner: new URL('./Banner/cars.jpeg', import.meta.url).href,
    title: "Cars",
    subTitle: "Speed Meets Design – From Classic Beauties to Futuristic Machines",
    description: "Automotive excellence captured in stunning detail."
  },
  one_piece: {
    banner: new URL('./Banner/onePiece.jpg', import.meta.url).href,
    title: "One Piece",
    subTitle: "A Pirate's Dream – Treasure Awaits, Crews Unite, and Legends Are Born on the Grand Line",
    description: "Epic adventures in a world of pirates."
  },
  demon_Slayer: {
    banner: new URL('./Banner/demonSlayer.png', import.meta.url).href,
    title: "Demon Slayer",
    subTitle: "Blades Against Darkness – Demons Fall, Bonds Strengthen, and Humanity Fights Back",
    description: "A tale of courage and determination."
  },
  Jujutsu_Kaisen: {
    banner: new URL('./Banner/jjk.jpg', import.meta.url).href,
    title: "Jujutsu Kaisen",
    subTitle: "Cursed Energy Unleashed – Sorcerers Battle, Spirits Roam, and the Balance Hangs by a Thread",
    description: "Supernatural battles with high stakes."
  },
  Tensura: {
    banner: new URL('./Banner/slime.jpeg', import.meta.url).href,
    title: "That Time I Got Reincarnated as a Slime",
    subTitle: "A New World Awaits – Where Monsters Become Allies, Kingdoms Rise, and Power Takes Fluid Form",
    description: "The adventures of Rimuru Tempest in a fantasy world of magic and diplomacy."
  },
  flower: {
    banner: new URL('./Banner/flower.jpg', import.meta.url).href,
    title: "Flowers",
    subTitle: "Nature's Delicate Masterpieces – Petals That Dance With the Wind, Colors That Speak Without Words",
    description: "A vibrant collection of floral beauty from around the world."
  },
  nature: {
    banner: new URL('./Banner/nature.jpeg', import.meta.url).href,
    title: "Nature",
    subTitle: "The Earth's Untamed Majesty – From Towering Peaks to Whispering Forests, Where Life Thrives Unbound",
    description: "Breathtaking landscapes that capture the raw beauty of our planet."
  },
  Wild_Life: {
    banner: new URL('./Banner/wildLife.jpeg', import.meta.url).href,
    title: "Wild Life",
    subTitle: "Untamed and Unfiltered – Where Predators Roam, Prey Survives, and Nature Writes Its Own Rules",
    description: "Stunning captures of animals in their natural habitats."
  },
  minecraft: {
    banner: new URL('./Banner/minecraft.jpg', import.meta.url).href,
    title: "MineCraft",
    subTitle: "A World of Endless Creation – Where Blocks Become Dreams and Adventure Awaits Around Every Corner",
    description: "The iconic blocky universe of creativity and exploration."
  },
  night: {
    banner: new URL('./Banner/night.jpg', import.meta.url).href,
    title: "Night Life",
    subTitle: "City Lights and Urban Nights - Where the World Transforms After Dark",
    description: "Capturing the vibrant energy of nighttime cityscapes"
  },
  abstract: {
    banner: new URL('./Banner/abstract.jpeg', import.meta.url).href,
    title: "Abstract Art",
    subTitle: "Shapes Beyond Logic – Colors Collide, Patterns Shift, and Meaning Emerges from Chaos.",
    description: "Imaginative and expressive artworks beyond the bounds of realism."
  },
  figure: {
    banner: new URL('./Banner/figure.jpeg', import.meta.url).href,
    title: "Action Figure",
    subTitle: "Heroes in Miniature – Where Collectibles Come Alive, Sculpted with Detail and Passion",
    description: "A showcase of iconic characters crafted as collectible figures, capturing the spirit of fandom."
  },
  marvel: {
    banner: new URL('./Banner/marvel.jpeg', import.meta.url).href,
    title: "Marvel",
    subTitle: "Legends Unite – From Earth’s Mightiest Heroes to Cosmic Beings, A Universe of Stories Unfolds",
    description: "An epic gallery of Marvel’s greatest heroes, villains, and timeless battles."
  },
  anime: {
    banner: new URL('./Banner/anime.jpg', import.meta.url).href,
    title: "Anime",
    subTitle: "Worlds Without Limits – Heroes Rise, Bonds Form, and Adventures Transcend Imagination",
    description: "A celebration of anime in all its forms — from action-packed epics to heartfelt stories."
  },
};


// --------------------- BLOG CONTENT --------------------

export const blogPosts = [
  {
    id: 1,
    title: "Discovering Golden Hour",
    date: "August 12, 2025",
    excerpt: "Golden hour changes everything about how I see light. The soft glow just after sunrise and before sunset transforms ordinary scenes into something magical...",
  },
  {
    id: 2,
    title: "Street Photography: A Lesson in Patience",
    date: "July 30, 2025",
    excerpt: "Street photography isn’t about rushing. It’s about slowing down, waiting, and watching the world unfold until that decisive moment arrives...",
  },
  {
    id: 3,
    title: "Black & White Portraits",
    date: "July 20, 2025",
    excerpt: "When color is stripped away, portraits become about light, shadow, and emotion. Black and white photography reveals a timeless depth that color often hides...",
  },
  {
    id: 4,
    title: "Traveling with a Camera",
    date: "July 10, 2025",
    excerpt: "Traveling light is a joy. A single camera and a couple of lenses are all you need to capture the soul of a place without being weighed down by gear...",
  },
  {
    id: 5,
    title: "Finding Inspiration in Everyday Life",
    date: "June 25, 2025",
    excerpt: "Photography isn’t always about exotic locations. Inspiration is everywhere — in shadows, reflections, textures, and small unnoticed moments around us...",
  },
];



export const DummyblogDetails = [
  {
    id: 1,
    title: "Discovering Golden Hour",
    date: "August 12, 2025",
    image: new URL('./BlogImage/goldenHour.jpg', import.meta.url).href,
    excerpt:
      "Golden hour changes everything about how I see light. The soft glow just after sunrise and before sunset transforms ordinary scenes into something magical...",
    content: `
      Golden hour is my favorite time to shoot. The colors are warmer, the shadows softer,
      and every subject seems to glow. It's a reminder that photography isn’t just about
      subjects, but also about time and light.

      My tip: Always arrive early. Watch how the light changes and be ready for those
      fleeting minutes when everything looks cinematic.
    `,
  },
  {
    id: 2,
    title: "Street Photography: A Lesson in Patience",
    date: "July 30, 2025",
    image: new URL('./BlogImage/streetPhotographer.jpg', import.meta.url).href,
    excerpt:
      "Street photography isn’t about rushing. It’s about slowing down, waiting, and watching the world unfold until that decisive moment arrives...",
    content: `
      Street photography teaches you patience. Sometimes, I stand in one spot for 30 minutes
      or more, waiting for the perfect subject to walk into frame. 

      It's about telling real, unscripted stories of everyday life. When the right moment happens,
      it's pure magic.
    `,
  },
  {
    id: 3,
    title: "Black & White Portraits",
    date: "July 20, 2025",
    image: new URL('./BlogImage/blackWhitePortraits.jpg', import.meta.url).href,
    excerpt:
      "When color is stripped away, portraits become about light, shadow, and emotion...",
    content: `
      Black and white photography forces you to focus on emotion. Without color, your
      subject's eyes, expression, and subtle gestures tell the story.

      My advice: Pay attention to contrast. Play with shadows and highlights to create
      drama and depth.
    `,
  },
  {
    id: 4,
    title: "Traveling with a Camera",
    date: "July 10, 2025",
    image: new URL('./BlogImage/traveling.jpg', import.meta.url).href,
    excerpt:
      "Traveling light is a joy. A single camera and a couple of lenses are all you need...",
    content: `
      Traveling with heavy gear can be exhausting. I learned to pack light—a single
      mirrorless camera and two lenses. This keeps me agile and focused on the experience,
      not the weight of my bag.

      Travel photography is less about equipment and more about curiosity and storytelling.
    `,
  },
  {
    id: 5,
    title: "Finding Inspiration in Everyday Life",
    date: "June 25, 2025",
    image: new URL('./BlogImage/finding.jpg', import.meta.url).href,
    excerpt:
      "Photography isn’t always about exotic locations. Inspiration is everywhere...",
    content: `
      Some of my favorite photos come from my own neighborhood—shadows on a wall, light
      falling across a cup of coffee, or the smile of a stranger.

      Don’t wait for exotic trips. Photography is about seeing beauty in the ordinary,
      and making the invisible visible.
    `,
  },
];




// -------------------------- Home_Image (Images) -------------------------- //
import Home1 from './HomeStyle/Home-1.jpg'
import Home2 from './HomeStyle/Home-2.jpg'
import Home3 from './HomeStyle/Home-3.jpg'
import Home4 from './HomeStyle/Home-4.jpg'
import Home5 from './HomeStyle/Home-5.jpg'
import Home6 from './HomeStyle/Home-6.jpg'
import Home7 from './HomeStyle/Home-7.jpg'
import Home8 from './HomeStyle/Home-8.jpg'
import Home9 from './HomeStyle/Home-9.jpg'
import Home10 from './HomeStyle/Home-10.jpg'
import Home11 from './HomeStyle/Home-11.jpg'

import Expand1 from './HomeStyle/Expand-1.jpg'
import Expand2 from './HomeStyle/Expand-2.jpeg'
import Expand3 from './HomeStyle/Expand-3.jpeg'
import Expand4 from './HomeStyle/Expand-4.jpeg'

import lib1 from './HomeStyle/lib-1.jpeg'
import lib2 from './HomeStyle/lib-2.jpeg'
import lib3 from './HomeStyle/lib-3.jpeg'
import lib4 from './HomeStyle/lib-4.jpeg'
import lib5 from './HomeStyle/lib-5.jpeg'
import lib6 from './HomeStyle/lib-6.jpeg'
import lib7 from './HomeStyle/lib-7.jpeg'
import lib8 from './HomeStyle/lib-8.jpeg'


export const homeStyle = {
    Home1, Home2, Home3, Home4, Home5, Home6, Home7, Home8, Home9, Home10, Home11,
    Expand1, Expand3, Expand2, Expand4,
    lib1, lib2, lib3, lib4, lib5, lib6, lib7, lib8,
}

// -------------------------- Explore_Images (Explore) -------------------------- //
import git1 from './Explore/gif-1.jpg'
import git2 from './Explore/gif-2.jpg'
import git3 from './Explore/gif-3.jpg'
import git4 from './Explore/gif-4.jpg'
import git5 from './Explore/gif-5.jpg'
import git6 from './Explore/gif-6.jpg'
import git7 from './Explore/gif-7.jpg'

import ab1 from './Explore/ab-1.jpg'
import ab2 from './Explore/ab-2.jpg'
import ab3 from './Explore/ab-3.jpg'
import ab4 from './Explore/ab-4.jpg'
import ab5 from './Explore/ab-5.jpg'
import ab6 from './Explore/ab-6.jpg'
import ab7 from './Explore/ab-7.jpg'

import fl1 from './Explore/fl-1.jpg'
import fl2 from './Explore/fl-2.jpg'
import fl3 from './Explore/fl-3.jpg'
import fl4 from './Explore/fl-4.jpg'
import fl5 from './Explore/fl-5.jpg'
import fl6 from './Explore/fl-6.jpg'

import n1 from './Explore/night-1.jpg'
import n2 from './Explore/night-2.jpg'
import n3 from './Explore/night-3.jpg'
import n4 from './Explore/night-4.jpg'

import anime1 from './Explore/ane-1.jpeg'
import anime2 from './Explore/ani-2.jpeg'
import anime3 from './Explore/ane-3.jpeg'
import anime4 from './Explore/ane-4.jpeg'
import anime5 from './Explore/ane-5.jpeg'
import anime6 from './Explore/ane-6.jpeg'
import anime7 from './Explore/ane-7.jpeg'
import anime8 from './Explore/ane-8.jpeg'
import anime9 from './Explore/ane-9.jpeg'

import nature1 from './Explore/nat-1.jpg'
import nature2 from './Explore/nat-2.jpg'
import nature3 from './Explore/nat-3.jpg'
import nature4 from './Explore/nat-4.jpg'

import ex1 from './Explore/ex-1.jpeg'
import ex2 from './Explore/ex-2.jpeg'
import ex3 from './Explore/ex-3.jpeg'
import ex4 from './Explore/ex-4.jpg'
import ex5 from './Explore/ex-5.jpg'
import ex6 from './Explore/ex-6.jpg'
import ex7 from './Explore/ex-7.jpg'
import ex8 from './Explore/ex-8.jpg'
import ex9 from './Explore/ex-9.jpeg'
import ex10 from './Explore/ex-10.jpeg'
import ex11 from './Explore/ex-11.jpeg'

export const Explore = {
    git1, git2, git3, git4, git5, git6, git7,
    ab1, ab2, ab3, ab4, ab5, ab6, ab7,
    fl1, fl2, fl3, fl4, fl5, fl6,
    n1, n2, n3, n4,
    anime1, anime2, anime3, anime4, anime5, anime6, anime7, anime8, anime9,
    nature1, nature2, nature3, nature4,
    ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8, ex9, ex10, ex11,
}
