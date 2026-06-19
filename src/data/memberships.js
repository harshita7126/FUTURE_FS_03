export const memberships = [
  {
    id: "basic",
    name: "Basic Plan",
    price: 999,
    period: "month",
    description: "Perfect for self-starters who want premium gym floor access and cardio gear.",
    popular: false,
    features: [
      "Access to gym floor & cardio deck",
      "Standard Locker room access",
      "Free high-speed WiFi",
      "1 Complimentary fitness assessment"
    ],
    ctaText: "Get Started"
  },
  {
    id: "pro",
    name: "Pro Plan",
    price: 1999,
    period: "month",
    description: "The absolute sweet spot. Includes group classes, sauna access, and expert advice.",
    popular: true,
    features: [
      "All Basic Plan privileges",
      "Unlimited group fitness classes",
      "Sauna & steam room access",
      "2 Personal training sessions/mo",
      "Custom nutrition guide sheet"
    ],
    ctaText: "Become a Pro"
  },
  {
    id: "elite",
    name: "Elite Plan",
    price: 2999,
    period: "month",
    description: "The ultimate fitness experience. 24/7 access, personal coach, and VIP lounge.",
    popular: false,
    features: [
      "All Pro Plan privileges",
      "24/7 Access to gym location",
      "Unlimited 1-on-1 personal coaching",
      "Complimentary protein shakes (1/day)",
      "VIP locker & private shower suite",
      "Monthly body composition reports"
    ],
    ctaText: "Go Elite"
  }
];

export const featureMatrix = {
  categories: [
    {
      name: "Access & Facility",
      features: [
        { name: "Gym Floor & Cardio Access", basic: true, pro: true, elite: true },
        { name: "Locker Rooms & Showers", basic: "Standard", pro: "Premium", elite: "VIP Lounge Access" },
        { name: "24/7 Access Permissions", basic: false, pro: false, elite: true },
        { name: "Towel Service", basic: false, pro: true, elite: "Unlimited Premium" }
      ]
    },
    {
      name: "Classes & Training",
      features: [
        { name: "Group Fitness Classes", basic: false, pro: "Unlimited", elite: "Unlimited & Priority Booking" },
        { name: "1-on-1 Personal Training", basic: "Initial Assessment", pro: "2 Sessions / Month", elite: "Unlimited Dedication" },
        { name: "Guest Passes", basic: false, pro: "1 Pass / Month", elite: "3 Passes / Month" },
        { name: "CrossFit Box Access", basic: false, pro: true, elite: true }
      ]
    },
    {
      name: "Nutrition & Health",
      features: [
        { name: "Personalized Nutrition Plan", basic: false, pro: "Standard Template", elite: "Fully Customized & Monitored" },
        { name: "Body Composition Analysis", basic: "Once", pro: "Bi-Monthly", elite: "Weekly (3D Body Scanner)" },
        { name: "Juice Bar & Protein Shakes", basic: false, pro: "10% Discount", elite: "1 Free Shake / Day" }
      ]
    }
  ]
};
