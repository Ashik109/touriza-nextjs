import "server-only";

import type { DetailContent, DetailKind } from "./details";

const detailContent: Record<DetailKind, Record<string, DetailContent>> = {
  "tour": {
    "20-off": {
      "slug": "20-off",
      "title": "20% OFF",
      "image": "assets/images/trip/13.webp"
    },
    "7-days-in-bali-paradise": {
      "slug": "7-days-in-bali-paradise",
      "title": "7 Days in Bali Paradise",
      "image": "assets/images/trip/05.webp"
    },
    "africa-s-hidden-wonders-strange": {
      "slug": "africa-s-hidden-wonders-strange",
      "title": "Africa’s Hidden Wonders Strange",
      "image": "assets/images/package/18.webp"
    },
    "africa-s-hidden-wonders-strange-and-beautiful-africa": {
      "slug": "africa-s-hidden-wonders-strange-and-beautiful-africa",
      "title": "Africa’s Hidden Wonders Strange & Beautiful Africa",
      "image": "assets/images/package/14.webp"
    },
    "bali-private-charter": {
      "slug": "bali-private-charter",
      "title": "Bali Private Charter",
      "image": "assets/images/package/02.webp"
    },
    "beginner-hike-through-vatnaj-kull-ice-caves": {
      "slug": "beginner-hike-through-vatnaj-kull-ice-caves",
      "title": "Beginner hike through Vatnajökull ice caves.",
      "image": "assets/images/trip/13.webp"
    },
    "breathe-in-the-wild-a-majestic-mountain-retreat-to-recharge": {
      "slug": "breathe-in-the-wild-a-majestic-mountain-retreat-to-recharge",
      "title": "Breathe in the Wild A Majestic Mountain Retreat to Recharge.",
      "image": "assets/images/package/24.webp"
    },
    "camping-in-the-wild": {
      "slug": "camping-in-the-wild",
      "title": "Camping in the Wild",
      "image": "assets/images/activity/10.webp"
    },
    "cape-to-kruger-the-best-of-south-africa": {
      "slug": "cape-to-kruger-the-best-of-south-africa",
      "title": "Cape to Kruger: The Best of South Africa",
      "image": "assets/images/package/13.webp"
    },
    "climb-europe-s-highest-peak-with-expert-guides": {
      "slug": "climb-europe-s-highest-peak-with-expert-guides",
      "title": "Climb Europe’s highest peak with expert guides.",
      "image": "assets/images/trip/14.webp"
    },
    "colors-of-morocco-sahara-souks": {
      "slug": "colors-of-morocco-sahara-souks",
      "title": "Colors of Morocco Sahara Souks",
      "image": "assets/images/package/20.webp"
    },
    "colors-of-morocco-sahara-to-souks": {
      "slug": "colors-of-morocco-sahara-to-souks",
      "title": "Colors of Morocco: Sahara to Souks",
      "image": "assets/images/package/11.webp"
    },
    "desert-camping": {
      "slug": "desert-camping",
      "title": "Desert Camping",
      "image": "assets/images/activity/06.webp"
    },
    "discover-the-mysteries-of-ancient-egypt": {
      "slug": "discover-the-mysteries-of-ancient-egypt",
      "title": "Discover the Mysteries of Ancient Egypt",
      "image": "assets/images/package/09.webp"
    },
    "dubai-skyline-cruise": {
      "slug": "dubai-skyline-cruise",
      "title": "Dubai Skyline Cruise",
      "image": "assets/images/package/03.webp"
    },
    "everest-base-camp-across-glacial-terrain": {
      "slug": "everest-base-camp-across-glacial-terrain",
      "title": "Everest Base Camp across glacial terrain.",
      "image": "assets/images/trip/15.webp"
    },
    "explore-our-destination": {
      "slug": "explore-our-destination",
      "title": "Explore Our Destination",
      "image": "assets/images/destination/11.webp"
    },
    "fishing-deep-sea-fishing": {
      "slug": "fishing-deep-sea-fishing",
      "title": "Fishing (Deep Sea Fishing)",
      "image": "assets/images/activity/18.webp"
    },
    "gorilla-tracking": {
      "slug": "gorilla-tracking",
      "title": "Gorilla Tracking",
      "image": "assets/images/package/06.webp"
    },
    "greek-island-hopping": {
      "slug": "greek-island-hopping",
      "title": "Greek Island Hopping",
      "image": "assets/images/package/04.webp"
    },
    "greek-island-hopping-sail": {
      "slug": "greek-island-hopping-sail",
      "title": "Greek Island Hopping Sail",
      "image": "assets/images/package/22.webp"
    },
    "himalayan-cultural-experience": {
      "slug": "himalayan-cultural-experience",
      "title": "Himalayan Cultural Experience",
      "image": "assets/images/package/17.webp"
    },
    "himalayan-cultural-tour": {
      "slug": "himalayan-cultural-tour",
      "title": "Himalayan Cultural Tour",
      "image": "assets/images/trip/07.webp"
    },
    "hospitality-at-heart-stories-from-our-travel": {
      "slug": "hospitality-at-heart-stories-from-our-travel",
      "title": "Hospitality at Heart Stories From Our Travel",
      "image": "assets/images/trip/21.webp"
    },
    "jet-ski-thrills-on-every-luxury-voyage": {
      "slug": "jet-ski-thrills-on-every-luxury-voyage",
      "title": "Jet Ski Thrills on Every Luxury Voyage",
      "image": "assets/images/activity/03.webp"
    },
    "jungle-expedition": {
      "slug": "jungle-expedition",
      "title": "Jungle Expedition",
      "image": "assets/images/package/05.webp"
    },
    "jungle-trekking": {
      "slug": "jungle-trekking",
      "title": "Jungle Trekking",
      "image": "assets/images/activity/05.webp"
    },
    "kayaking-paddleboarding": {
      "slug": "kayaking-paddleboarding",
      "title": "Kayaking / Paddleboarding",
      "image": "assets/images/activity/02.webp"
    },
    "kilimanjaro-and-zanzibar-paradise": {
      "slug": "kilimanjaro-and-zanzibar-paradise",
      "title": "Kilimanjaro & Zanzibar Paradise",
      "image": "assets/images/package/12.webp"
    },
    "luxury-beach-escape": {
      "slug": "luxury-beach-escape",
      "title": "Luxury Beach Escape",
      "image": "assets/images/trip/06.webp"
    },
    "luxury-beach-escape-collection": {
      "slug": "luxury-beach-escape-collection",
      "title": "Luxury Beach Escape Collection",
      "image": "assets/images/package/16.webp"
    },
    "luxury-beach-escape-experience": {
      "slug": "luxury-beach-escape-experience",
      "title": "Luxury Beach Escape Experience",
      "image": "assets/images/package/19.webp"
    },
    "maldives-luxury-cruise": {
      "slug": "maldives-luxury-cruise",
      "title": "Maldives Luxury Cruise",
      "image": "assets/images/package/01.webp"
    },
    "masai-mara-wildlife": {
      "slug": "masai-mara-wildlife",
      "title": "Masai Mara Wildlife",
      "image": "assets/images/package/08.webp"
    },
    "perfect-for-quick-nature-breaks": {
      "slug": "perfect-for-quick-nature-breaks",
      "title": "Perfect for quick nature breaks",
      "image": "assets/images/package/15.webp"
    },
    "photography": {
      "slug": "photography",
      "title": "Photography",
      "image": "assets/images/activity/07.webp"
    },
    "sea-tours-sunset-cruises": {
      "slug": "sea-tours-sunset-cruises",
      "title": "Sea tours, sunset cruises",
      "image": "assets/images/activity/17.webp"
    },
    "serengeti-big-5-safari": {
      "slug": "serengeti-big-5-safari",
      "title": "Serengeti Big 5 Safari",
      "image": "assets/images/package/07.webp"
    },
    "snorkeling-and-scuba-diving-sea": {
      "slug": "snorkeling-and-scuba-diving-sea",
      "title": "Snorkeling & Scuba Diving Sea",
      "image": "assets/images/activity/01.webp"
    },
    "sunbathing-swimming-chilling-at-the-beach": {
      "slug": "sunbathing-swimming-chilling-at-the-beach",
      "title": "Sunbathing, swimming, chilling at the beach",
      "image": "assets/images/activity/15.webp"
    },
    "the-luxury-island-hopper": {
      "slug": "the-luxury-island-hopper",
      "title": "The Luxury Island Hopper",
      "image": "assets/images/trip/22.webp"
    },
    "the-luxury-island-hopper-experience-3-exotic-islands": {
      "slug": "the-luxury-island-hopper-experience-3-exotic-islands",
      "title": "The Luxury Island Hopper Experience 3 Exotic Islands.",
      "image": "assets/images/package/25.webp"
    },
    "travel-in-comfort-inside-our-hotel-lifestyle": {
      "slug": "travel-in-comfort-inside-our-hotel-lifestyle",
      "title": "Travel in Comfort: Inside Our Hotel Lifestyle",
      "image": "assets/images/trip/20.webp"
    },
    "tropical-wave-rush-an-unforgettable-surfing-adventure": {
      "slug": "tropical-wave-rush-an-unforgettable-surfing-adventure",
      "title": "Tropical Wave Rush – An Unforgettable Surfing Adventure",
      "image": "assets/images/package/26.webp"
    },
    "ultimate-tropical-paradise-escape-relax-refresh-reimagine": {
      "slug": "ultimate-tropical-paradise-escape-relax-refresh-reimagine",
      "title": "Ultimate Tropical Paradise Escape Relax. Refresh. Reimagine.",
      "image": "assets/images/package/23.webp"
    },
    "wave-surfing-in-tropical-locations": {
      "slug": "wave-surfing-in-tropical-locations",
      "title": "Wave surfing in tropical locations",
      "image": "assets/images/activity/16.webp"
    },
    "white-walls-of-santorini": {
      "slug": "white-walls-of-santorini",
      "title": "White Walls of Santorini",
      "image": "assets/images/trip/08.webp"
    },
    "wild-heart-of-africa-kenya-safari": {
      "slug": "wild-heart-of-africa-kenya-safari",
      "title": "Wild Heart of Africa: Kenya Safari",
      "image": "assets/images/package/21.webp"
    },
    "wild-heart-of-africa-kenya-safari-tour": {
      "slug": "wild-heart-of-africa-kenya-safari-tour",
      "title": "Wild Heart of Africa: Kenya Safari Tour",
      "image": "assets/images/package/10.webp"
    },
    "wonders-of-the-world-one-trip-at-a-time": {
      "slug": "wonders-of-the-world-one-trip-at-a-time",
      "title": "Wonders of the World, One Trip at a Time",
      "image": "assets/images/trip/17.webp"
    },
    "zip-lining": {
      "slug": "zip-lining",
      "title": "Zip-lining",
      "image": "assets/images/activity/08.webp"
    }
  },
  "destination": {
    "aukland": {
      "slug": "aukland",
      "title": "Aukland",
      "image": "assets/images/destination/24.webp"
    },
    "bali": {
      "slug": "bali",
      "title": "Bali",
      "image": "assets/images/destination/16.webp"
    },
    "bali-indonesia": {
      "slug": "bali-indonesia",
      "title": "Bali, Indonesia",
      "image": "assets//images/logo/06.svg"
    },
    "bangkok": {
      "slug": "bangkok",
      "title": "Bangkok",
      "image": "assets/images/destination/17.webp"
    },
    "barcelona-129": {
      "slug": "barcelona-129",
      "title": "Barcelona (129)",
      "image": "assets/images/activity/12.webp"
    },
    "cairo": {
      "slug": "cairo",
      "title": "Cairo",
      "image": "assets/images/destination/22.webp"
    },
    "camping-in-the-wild": {
      "slug": "camping-in-the-wild",
      "title": "Camping in the Wild",
      "image": "assets/images/activity/10.webp"
    },
    "cape-town": {
      "slug": "cape-town",
      "title": "Cape Town",
      "image": "assets/images/destination/19.webp"
    },
    "croatia": {
      "slug": "croatia",
      "title": "Croatia",
      "image": "assets/images/destination/32.webp"
    },
    "desert-camping": {
      "slug": "desert-camping",
      "title": "Desert Camping",
      "image": "assets/images/activity/06.webp"
    },
    "doha": {
      "slug": "doha",
      "title": "Doha",
      "image": "assets/images/destination/28.webp"
    },
    "dubai": {
      "slug": "dubai",
      "title": "Dubai",
      "image": "assets/images/destination/27.webp"
    },
    "dubai-coastline": {
      "slug": "dubai-coastline",
      "title": "Dubai Coastline",
      "image": "assets//images/logo/06.svg"
    },
    "explore-our-destination": {
      "slug": "explore-our-destination",
      "title": "Explore Our Destination",
      "image": "assets/images/logo/07.svg"
    },
    "fiji-islands": {
      "slug": "fiji-islands",
      "title": "Fiji Islands",
      "image": "assets/images/destination/25.webp"
    },
    "gold-coast": {
      "slug": "gold-coast",
      "title": "Gold Coast",
      "image": "assets/images/destination/26.webp"
    },
    "greek-islands": {
      "slug": "greek-islands",
      "title": "Greek Islands",
      "image": "assets//images/logo/06.svg"
    },
    "hawaii-usa-47": {
      "slug": "hawaii-usa-47",
      "title": "Hawaii (USA) (47)",
      "image": "assets/images/activity/14.webp"
    },
    "iceland": {
      "slug": "iceland",
      "title": "Iceland",
      "image": "assets/images/destination/09.webp"
    },
    "istanbul": {
      "slug": "istanbul",
      "title": "Istanbul",
      "image": "assets/images/destination/30.webp"
    },
    "japan": {
      "slug": "japan",
      "title": "Japan",
      "image": "assets/images/destination/10.webp"
    },
    "jungle-trekking": {
      "slug": "jungle-trekking",
      "title": "Jungle Trekking",
      "image": "assets/images/activity/05.webp"
    },
    "jungle-trekking-85": {
      "slug": "jungle-trekking-85",
      "title": "Jungle Trekking (85)",
      "image": "assets/images/activity/13.webp"
    },
    "london": {
      "slug": "london",
      "title": "London",
      "image": "assets/images/destination/14.webp"
    },
    "los-angeles": {
      "slug": "los-angeles",
      "title": "Los Angeles",
      "image": "assets/images/destination/25.webp"
    },
    "maasai-mara-national-reserve": {
      "slug": "maasai-mara-national-reserve",
      "title": "Maasai Mara National Reserve",
      "image": "assets/images/destination/18.webp"
    },
    "maldives": {
      "slug": "maldives",
      "title": "Maldives",
      "image": "assets//images/logo/06.svg"
    },
    "maldives-asia": {
      "slug": "maldives-asia",
      "title": "Maldives, Asia",
      "image": "assets/images/destination/02.webp"
    },
    "marakkes": {
      "slug": "marakkes",
      "title": "Marakkes",
      "image": "assets/images/destination/20.webp"
    },
    "morocco": {
      "slug": "morocco",
      "title": "Morocco",
      "image": "assets/images/destination/23.webp"
    },
    "muscat": {
      "slug": "muscat",
      "title": "Muscat",
      "image": "assets/images/destination/29.webp"
    },
    "nairobi": {
      "slug": "nairobi",
      "title": "Nairobi",
      "image": "assets/images/destination/21.webp"
    },
    "nepal": {
      "slug": "nepal",
      "title": "Nepal",
      "image": "assets/images/destination/05.webp"
    },
    "new-york": {
      "slug": "new-york",
      "title": "New York",
      "image": "assets/images/destination/31.webp"
    },
    "norway": {
      "slug": "norway",
      "title": "Norway",
      "image": "assets/images/destination/08.webp"
    },
    "ouzoud-waterfalls": {
      "slug": "ouzoud-waterfalls",
      "title": "Ouzoud Waterfalls",
      "image": "assets/images/destination/17.webp"
    },
    "paris": {
      "slug": "paris",
      "title": "Paris",
      "image": "assets/images/destination/11.webp"
    },
    "photography": {
      "slug": "photography",
      "title": "Photography",
      "image": "assets/images/activity/07.webp"
    },
    "phuket-1147": {
      "slug": "phuket-1147",
      "title": "Phuket (1147)",
      "image": "assets/images/activity/11.webp"
    },
    "playa-chinchorro": {
      "slug": "playa-chinchorro",
      "title": "Playa Chinchorro",
      "image": "assets/images/destination/21.webp"
    },
    "pyramids-of-giza-egypt": {
      "slug": "pyramids-of-giza-egypt",
      "title": "Pyramids of Giza Egypt",
      "image": "assets/images/destination/25.webp"
    },
    "ranthambore-national-park": {
      "slug": "ranthambore-national-park",
      "title": "Ranthambore National Park",
      "image": "assets/images/destination/19.webp"
    },
    "rio-de-janairo": {
      "slug": "rio-de-janairo",
      "title": "Rio De Janairo",
      "image": "assets/images/destination/26.webp"
    },
    "santorini": {
      "slug": "santorini",
      "title": "Santorini",
      "image": "assets/images/destination/12.webp"
    },
    "santorini-greece": {
      "slug": "santorini-greece",
      "title": "Santorini, Greece",
      "image": "assets/images/destination/03.webp"
    },
    "seoul": {
      "slug": "seoul",
      "title": "Seoul",
      "image": "assets/images/destination/18.webp"
    },
    "serengeti-national-park": {
      "slug": "serengeti-national-park",
      "title": "Serengeti National Park",
      "image": "assets/images/destination/20.webp"
    },
    "south-africa": {
      "slug": "south-africa",
      "title": "South Africa",
      "image": "assets/images/destination/24.webp"
    },
    "south-america": {
      "slug": "south-america",
      "title": "South America",
      "image": "assets/images/destination/07.webp"
    },
    "switzerland": {
      "slug": "switzerland",
      "title": "Switzerland",
      "image": "assets/images/destination/06.webp"
    },
    "sydney": {
      "slug": "sydney",
      "title": "Sydney",
      "image": "assets/images/destination/23.webp"
    },
    "tanzania": {
      "slug": "tanzania",
      "title": "Tanzania",
      "image": "assets/images/destination/22.webp"
    },
    "tokyo": {
      "slug": "tokyo",
      "title": "Tokyo",
      "image": "assets/images/destination/15.webp"
    },
    "toronto": {
      "slug": "toronto",
      "title": "Toronto",
      "image": "assets/images/destination/32.webp"
    },
    "uganda": {
      "slug": "uganda",
      "title": "Uganda",
      "image": "assets/images/destination/26.webp"
    },
    "venice": {
      "slug": "venice",
      "title": "Venice",
      "image": "assets/images/destination/13.webp"
    },
    "zip-lining": {
      "slug": "zip-lining",
      "title": "Zip-lining",
      "image": "assets/images/activity/08.webp"
    }
  },
  "blog": {
    "10-tips-for-first-time-car-what-you-need-to-know": {
      "slug": "10-tips-for-first-time-car-what-you-need-to-know",
      "title": "10 Tips for First-Time Car What You Need to Know",
      "image": "assets/images/blog/01.webp"
    },
    "5-mistakes-new-kayakers-make-and-how-to-avoid-them": {
      "slug": "5-mistakes-new-kayakers-make-and-how-to-avoid-them",
      "title": "5 Mistakes New Kayakers Make (And How to Avoid Them)”",
      "image": "assets/images/blog/11.webp"
    },
    "about-us": {
      "slug": "about-us",
      "title": "About Us",
      "image": "assets/images/logo/01.svg"
    },
    "backpack-laid-out-with-compass-boots-insect-repellent": {
      "slug": "backpack-laid-out-with-compass-boots-insect-repellent",
      "title": "Backpack laid out with compass, boots, insect repellent",
      "image": "assets/images/blog/06.webp"
    },
    "budget-travel-tips-how-to-explore-more-by-spending-less": {
      "slug": "budget-travel-tips-how-to-explore-more-by-spending-less",
      "title": "Budget Travel Tips: How to Explore More by Spending Less",
      "image": "assets/images/blog/14.webp"
    },
    "explore-our-destination": {
      "slug": "explore-our-destination",
      "title": "Explore Our Destination",
      "image": "assets/images/destination/11.webp"
    },
    "how-to-choose-the-perfect-car-for-your-lifestyle": {
      "slug": "how-to-choose-the-perfect-car-for-your-lifestyle",
      "title": "How to Choose the Perfect Car for Your Lifestyle",
      "image": "assets/images/blog/03.webp"
    },
    "international-travel-checklist-what-you-must-not-forget": {
      "slug": "international-travel-checklist-what-you-must-not-forget",
      "title": "International Travel Checklist: What You Must Not Forget",
      "image": "assets/images/blog/13.webp"
    },
    "mountain": {
      "slug": "mountain",
      "title": "Mountain",
      "image": "assets/images/blog/13.webp"
    },
    "night-in-the-wild-camping-with-lions-roaring-nearby": {
      "slug": "night-in-the-wild-camping-with-lions-roaring-nearby",
      "title": "Night in the Wild: Camping with Lions Roaring Nearby",
      "image": "assets/images/blog/07.webp"
    },
    "railway": {
      "slug": "railway",
      "title": "Railway",
      "image": "assets/images/blog/12.webp"
    },
    "top-10-essential-travel-tips-for-first-time-travelers": {
      "slug": "top-10-essential-travel-tips-for-first-time-travelers",
      "title": "Top 10 Essential Travel Tips for First-Time Travelers",
      "image": "assets/images/blog/12.webp"
    },
    "top-5-reasons-to-buy-a-for-pre-owned-vehicle": {
      "slug": "top-5-reasons-to-buy-a-for-pre-owned-vehicle",
      "title": "Top 5 Reasons to Buy a for Pre-Owned Vehicle",
      "image": "assets/images/blog/02.webp"
    },
    "top-5-safaris-to-experience-before-you-die": {
      "slug": "top-5-safaris-to-experience-before-you-die",
      "title": "Top 5 Safaris to Experience Before You Die",
      "image": "assets/images/blog/08.webp"
    },
    "top-5-sea-in-kayaking-destinations-you-must-explore": {
      "slug": "top-5-sea-in-kayaking-destinations-you-must-explore",
      "title": "Top 5 Sea In Kayaking Destinations You Must Explore",
      "image": "assets/images/blog/09.webp"
    },
    "train-journey": {
      "slug": "train-journey",
      "title": "Train Journey",
      "image": "assets/images/blog/12.webp"
    },
    "travel": {
      "slug": "travel",
      "title": "Travel",
      "image": "assets/images/blog/13.webp"
    },
    "why-sea-kayaking-is-the-ultimate-mind-body-adventure": {
      "slug": "why-sea-kayaking-is-the-ultimate-mind-body-adventure",
      "title": "Why Sea Kayaking is the Ultimate Mind-Body Adventure",
      "image": "assets/images/blog/10.webp"
    },
    "wooden-canoe-floating-between-dense-mangrove-roots": {
      "slug": "wooden-canoe-floating-between-dense-mangrove-roots",
      "title": "Wooden canoe floating between dense mangrove roots",
      "image": "assets/images/blog/05.webp"
    }
  }
};

export function getDetailContent(kind: DetailKind, slug: string) {
  return detailContent[kind][slug];
}
