import type { DetailContent } from "./details";

const destinationNotes: Record<string, string> = {
  maldives: "Plan an island stay around reef snorkeling, time on the beach, and transfers between atolls. Confirm whether your accommodation includes a speedboat or seaplane transfer before booking.",
  "cape-town": "Explore Cape Town from the waterfront and the slopes of Table Mountain, then leave time for the Cape Peninsula. Check conditions before taking the cableway or planning a coastal drive.",
  "fiji-islands": "Build time for snorkeling, beaches, and village visits across Fiji's islands. Confirm inter-island ferry schedules and resort transfers when planning your stay.",
  "gold-coast": "Combine time on the beaches with a trip into the Gold Coast hinterland. Choose a base with easy access to the activities you want and check local surf conditions.",
  "los-angeles": "Group your Los Angeles plans by neighborhood. Save time for the coast, museums, and outdoor viewpoints, and allow extra time for travel between them.",
  "new-york": "Explore New York a few neighborhoods at a time. Use the subway between boroughs and book popular museums, performances, or observation decks ahead of your visit.",
  nepal: "Leave room for time in Kathmandu and for the route you want to explore beyond the city. Ask your operator about seasonal conditions, transfers, and acclimatization if your trip goes to altitude.",
};

export function getDestinationIntro(detail: DetailContent) {
  const slug = detail.slug === "maldives-asia" ? "maldives" : detail.slug;
  return destinationNotes[slug] ?? `Planning a trip to ${detail.title}? Compare tour options and ask the operator about travel dates, the meeting point, and what is included in your itinerary.`;
}

export function getArticleSections(detail: DetailContent): { heading: string; text: string }[] {
  const slug = detail.slug;
  if (/kayaking|canoe/.test(slug)) return [
    { heading: "Choose a route for your group", text: "Sheltered bays and quiet channels are a good place to start. Ask the guide about tides, wind, water temperature, and the expected distance before choosing a route." },
    { heading: "Pack for time on the water", text: "Bring water, sun protection, a dry change of clothes, and a dry bag. Check which safety equipment the operator provides and how the group will communicate on the water." },
  ];
  if (/safari|lions|wild/.test(slug)) return [
    { heading: "Choose the season and the route", text: "Wildlife sightings vary by season and habitat. Ask your guide when drives start, how much time you spend in each reserve, and how the operator handles sightings responsibly." },
    { heading: "Prepare for early departures", text: "Pack layers, binoculars, and a reusable water bottle. Leave room in the day for transfers and verify which reserve fees and meals your itinerary covers." },
  ];
  if (/car|vehicle/.test(slug)) return [
    { heading: "Match the vehicle to your itinerary", text: "A compact car is convenient in cities. For longer road trips, check luggage capacity and fuel use. Ask whether your planned routes have any restrictions in the rental agreement." },
    { heading: "Check the full cost", text: "Compare insurance, mileage limits, extra driver fees, and fuel policies. Walk around the vehicle at pickup and record existing scratches before leaving." },
  ];
  if (/budget/.test(slug)) return [
    { heading: "Compare the full trip price", text: "Budget for transport, accommodation, meals, entry fees, and airport transfers together. A lower airfare can cost more overall if it requires an expensive transfer or an extra night." },
    { heading: "Keep room for changes", text: "Reserve a part of your budget for schedule changes and emergencies. Compare cancellation terms before paying for a tour or a room in advance." },
  ];
  return [
    { heading: "Prepare before you leave", text: "Check entry requirements, passport validity, and any documents you need for onward travel. Keep offline copies of your itinerary, reservations, and the address of your first stay." },
    { heading: "Leave room in the itinerary", text: "Group activities by location and leave time for delays. Confirm meeting points and check-in hours before your journey, especially if you are arriving late." },
    { heading: "Pack for what you plan to do", text: "Check the weather and pack comfortable shoes, a reusable bottle, and layers for the activities you booked. Keep essential medication and a spare change of clothes in your carry-on." },
  ];
}
