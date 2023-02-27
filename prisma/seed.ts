import {PrismaClient} from "@prisma/client";
import { createId } from '@paralleldrive/cuid2';
import * as argon2 from "argon2"

const prisma = new PrismaClient();

const categories: any[] = [
  {
    name: "Personal Care",
    childCategories: {
      create: [
        {
          name: "Fur Care",
          products: {
            create: [
              {
                id: createId(),
                name: "Wash 'n' Hop Shampoo and Conditioner",
                description:
                  "Uses patented SuperFluff technology to keep your fur looking its best. You'll have the shiniest coat in your warren! No human testing.",
                price: 8.99,
                images: {
                  create: [
                    {
                      id: createId(),
                      fileName: "rabbit-product-placeholder.png",
                      imageType: "main",
                    },
                  ],
                },
              },
              {
                id: createId(),
                name: "Whisker & Fur Gel",
                description:
                  "Fur getting in your way? Hop in style with this 100% natural styling gel. Great for tails, too!",
                price: 12.5,
                staffPick: true,
                images: {
                  create: [
                    {
                      id: createId(),
                      fileName: "rabbit-product-placeholder.png",
                      imageType: "main",
                    },
                  ],
                },
              },
              {
                id: createId(),
                name: "3 Piece Comb Set",
                description:
                  "No hair out of place! Avoid embarrassing and possibly deadly entanglements.",
                price: 19.99,
                images: {
                  create: [
                    {
                      id: createId(),
                      fileName: "rabbit-product-placeholder.png",
                      imageType: "main",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          name: "Foot Care",
          products: {
            create: [
              {
                id: createId(),
                name: "Foot Balm",
                description:
                  "Soothes callused paws after a long day of running from predators.",
                price: 3.95,
                images: {
                  create: [
                    {
                      id: createId(),
                      fileName: "rabbit-product-placeholder.png",
                      imageType: "main",
                    },
                  ],
                },
              },
              {
                id: createId(),
                name: "Claw Clippers & Honing File",
                description:
                  "Keep your claws looking great, and ready for mortal combat with this beautiful two-piece set. Make it part of your daily routine.",
                price: 4.5,
                staffPick: true,
                images: {
                  create: [
                    {
                      id: createId(),
                      fileName: "rabbit-product-placeholder.png",
                      imageType: "main",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          name: "Dental Care",
          products: {
            create: [
              {
                id: createId(),
                name: "Tooth Sharpener",
                description:
                  "Thrive in the wild with this high quality, non-abrasive tooth sharpener. Always be your fearsome best. Sharp teeth for long life!",
                price: 11.0,
                staffPick: true,
                images: {
                  create: [
                    {
                      id: createId(),
                      fileName: "rabbit-product-placeholder.png",
                      imageType: "main",
                    },
                  ],
                },
              },
              {
                id: createId(),
                name: "Bunny Floss",
                description:
                  "Created for bunnies by bunnies. You brush. But do you grasp the importance of flossing. Your gum health depends on it.",
                price: 3.99,
                images: {
                  create: [
                    {
                      id: createId(),
                      fileName: "rabbit-product-placeholder.png",
                      imageType: "main",
                    },
                  ],
                },
              },
              {
                id: createId(),
                name: "Total Tooth Care Dentifrice and Whitener",
                description:
                  "The all in one dental hygiene system for forward-looking rabbits. Smile!",
                price: 5.99,
                images: {
                  create: [
                    {
                      id: createId(),
                      fileName: "rabbit-product-placeholder.png",
                      imageType: "main",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Security",
    products: {
      create: [
        {
          id: createId(),
          name: "WarrenGuard Infrared Camera",
          description:
            "Be secure by day and night. Includes 7 piece motion sensor kit.",
          price: 399.95,
          images: {
            create: [
              {
                id: createId(),
                fileName: "rabbit-product-placeholder.png",
                imageType: "main",
              },
            ],
          },
        },
        {
          id: createId(),
          name: "Burrow Intrusion Detection System",
          description:
            "When total security is your priority, this predator sensor and alert system has you covered.",
          price: 2182.0,
          staffPick: true,
          images: {
            create: [
              {
                id: createId(),
                fileName: "rabbit-product-placeholder.png",
                imageType: "main",
              },
            ],
          },
        },
        {
          id: createId(),
          name: "Fierce Tiger Mask",
          description:
            "Turn the tables on common predators with the truly frightening tiger mask.",
          price: 99.99,
          images: {
            create: [
              {
                id: createId(),
                fileName: "rabbit-product-placeholder.png",
                imageType: "main",
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Food and Beverage",
    childCategories: {
      create: [
        {
          name: "Gift Baskets",
          products: {
            create: [
              {
                id: createId(),
                name: "Easter",
                staffPick: true,
                description:
                  "Decorated eggs, chocolate human children, mixed salad. All on a bed of fresh, luscious hay!",
                price: 22.0,
                images: {
                  create: [
                    {
                      id: createId(),
                      fileName: "rabbit-product-placeholder.png",
                      imageType: "main",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    products: {
      create: [
        {
          id: createId(),
          name: "Parsnips Cereal",
          description: "A delicious way to start your day.",
          price: 5.99,
          images: {
            create: [
              {
                id: createId(),
                fileName: "rabbit-product-placeholder.png",
                imageType: "main",
              },
            ],
          },
        },
        {
          id: createId(),
          name: "Baby Carrots",
          description: "Great for baby rabbits.",
          price: 4.99,
          staffPick: true,
          images: {
            create: [
              {
                id: createId(),
                fileName: "rabbit-product-placeholder.png",
                imageType: "main",
              },
            ],
          },
        },
        {
          id: createId(),
          name: "Romaine Lettuce",
          description: "Fresh from McGregor's farm.",
          price: 3.29,
          images: {
            create: [
              {
                id: createId(),
                fileName: "rabbit-product-placeholder.png",
                imageType: "main",
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: createId(),
    name: "Movies",
    products: {
      create: [
        {
          id: createId(),
          name: "Rabbits are Forever",
          description:
            "James Bond, a rabbit, equipped with an armoury of hi-tech gadgets, infiltrates a Las Vegas carrot-smuggling ring in a bid to foil a plot to target Washington with a laser in space. However, as 007 prepares to tackle the evil Blofeld, the mastermind who threatens to destabilise the world, he is captivated by the delicious Tiffany Case - but is she really a double agent?",
          price: 14.99,
          staffPick: true,
          images: {
            create: [
              {
                id: createId(),
                fileName: "rabbit-product-placeholder.png",
                imageType: "main",
              },
            ],
          },
        },
        {
          id: createId(),
          name: "Who Framed Roger Rabbit?",
          description:
            "Down-on-his-luck private eye Eddie Valiant (Bob Hoskins) gets hired by cartoon producer R.K. Maroon (Alan Tilvern) to investigate an adultery scandal involving Jessica Rabbit (Kathleen Turner), the sultry wife of Maroon's biggest star, Roger Rabbit (Charles Fleischer). But when Marvin Acme (Stubby Kaye), Jessica's alleged paramour and the owner of Toontown, is found murdered, the villainous Judge Doom (Christopher Lloyd) vows to catch and destroy Roger.",
          price: 14.99,
          images: {
            create: [
              {
                id: createId(),
                fileName: "rabbit-product-placeholder.png",
                imageType: "main",
              },
            ],
          },
        },
        {
          id: createId(),
          name: "Watership Down",
          description:
            "Hoping to escape destruction by human developers and save their community, a colony of rabbits, led by Hazel and Fiver, seek out a safe place to set up a new warren.",
          price: 15.99,
          images: {
            create: [
              {
                id: createId(),
                fileName: "rabbit-product-placeholder.png",
                imageType: "main",
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: createId(),
    name: "Clothing",
    products: {
      create: [
        {
          id: createId(),
          name: "ConeyTrack Athleisure Track Suit",
          description:
            "Get to that carrot first, evade even the fleetest predators, and look good doing it in this 100% natural fiber athleisure track suit. One size fits all rabbits.",
          price: 37.99,
          images: {
            create: [
              {
                id: createId(),
                fileName: "rabbit-product-placeholder.png",
                imageType: "main",
              },
            ],
          },
        },
        {
          id: createId(),
          name: "HopSmart Runners",
          description:
            "Put a spring in your hop with these weatherproof, non-slip running shoesies.",
          price: 104.32,
          images: {
            create: [
              {
                id: createId(),
                fileName: "rabbit-product-placeholder.png",
                imageType: "main",
              },
            ],
          },
        },
        {
          id: createId(),
          name: "All Weather Ear Warmers",
          description:
            "Hand-crafted from a space age synthetic fiber. Lets your ears breathe in warmer climes. Keeps 'em warm and cozy in cold climes.",
          price: 34.99,
          staffPick: true,
          images: {
            create: [
              {
                id: createId(),
                fileName: "rabbit-product-placeholder.png",
                imageType: "main",
              },
            ],
          },
        },
      ],
    },
  },
];

const roles = [
  {
    name: "ROLE_USER",
  },
  {
    name: "ROLE_ADMIN",
  },
];

const admin = {
  username: "admin",
  firstName: "Chief",
  lastName: "Rabbit",
  roles: {
    connect: [{ name: "ROLE_USER" }, { name: "ROLE_ADMIN" }],
  },
};

async function main() {
  for (const category of categories) {
    await prisma.category.create({data: category});
  }

  for (const role of roles) {
    await prisma.role.create({ data: role });
  }

  await prisma.user.create({
    data: {
      ...admin,
      passwordHash: await argon2.hash("bigbunny"),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });