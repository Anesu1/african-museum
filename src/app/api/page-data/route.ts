import { NextResponse } from "next/server";

const avatarList = [
    {
        image: "/images/avatar/avatar_1.jpg",
        title: "Oral History"
    },
    {
        image: "/images/avatar/avatar_2.jpg",
        title: "Liberation Archive"
    },
    {
        image: "/images/avatar/avatar_3.jpg",
        title: "Community Memory"
    },
    {
        image: "/images/avatar/avatar_4.jpg",
        title: "Research Fellows"
    },
];

const statsFactData = {
    number: '01',
    name: "Welcome",
    heading: "Museum of African Liberation",
    description: "A continental project dedicated to the liberation of African countries - preserving memory, honoring sacrifice, and inspiring future generations.",
    scoreData: [
        {
            number: 54,
            numberValue: '',
            scoreDescp: "African Nations Represented"
        },
        {
            number: 1,
            scoreDescp: "Unified Continent"
        },
        {
            number: 500,
            numberValue: '+',
            scoreDescp: "Historical Artifacts Preserved"
        },
    ]
};

const servicesData = {
    number: '02',
    name: "Our Mandate",
    heading: "What We Do",
    description: "Preserving and presenting the history of African liberation through artifacts, research, exhibitions, and public engagement.",
    data: [
        {
            id: 1,
            image: "/images/home/services/services_1.png",
            heading: "Curate Exhibitions",
            descp: "Showcasing the diverse liberation movements and milestones across the continent."
        },
        {
            id: 2,
            image: "/images/home/services/services_2.png",
            heading: "Preserve Artifacts",
            descp: "Protecting physical history and interpreting objects tied to the liberation struggle."
        },
        {
            id: 3,
            image: "/images/home/services/services_3.png",
            heading: "Educational Programs",
            descp: "Hosting tours, public talks, and learning experiences for all generations."
        },
        {
            id: 4,
            image: "/images/home/services/services_4.png",
            heading: "Research Support",
            descp: "Facilitating documentation and scholarly work on Pan-African heritage."
        },
    ]
};

const testimonialData = {
    data_1: {
        preTitle: "Voices",
        title: "A powerful monument to our shared history and future.",
        author: "Visitor",
        company: "Harare"
    },
    data_2: {
        preTitle: "Voices",
        title: "Every artifact tells a story of courage and resilience.",
        author: "Historian",
        company: "Pan-African Archives"
    },
    data_3: {
        preTitle: "Voices",
        title: "An inspiring destination for anyone who loves Africa.",
        author: "Guest",
        company: "International"
    },
};

const teamData = {
    number: '03',
    data: [
        {
            image: "/images/home/team/team-img-1.png",
            name: "Museum Leadership",
            position: "Curatorial Team",
            socialLinks: []
        },
        {
            image: "/images/home/team/team-img-2.png",
            name: "Research Department",
            position: "History and Archives",
            socialLinks: []
        },
        {
            image: "/images/home/team/team-img-3.png",
            name: "Education",
            position: "Public Programs",
            socialLinks: []
        },
        {
            image: "/images/home/team/team-img-4.png",
            name: "Community",
            position: "Outreach",
            socialLinks: []
        },
    ]
};

const pricingData = {
    data: [
        {
            planName: "Resident",
            planPrice: "$5",
            planDescp: "Standard entry for local residents.",
            planIncludes: ["Access to all galleries", "Guided tour (scheduled)"]
        },
        {
            planName: "International",
            tag: "Tourist",
            planPrice: "$20",
            cancelPrice: "",
            planDescp: "Full access for international visitors.",
            planIncludes: ["Access to all galleries", "Audio guide included", "Souvenir map"]
        },
        {
            planName: "Group/School",
            planPrice: "Contact",
            planDescp: "Special rates for educational groups.",
            planIncludes: ["Dedicated guide", "Educational materials", "Workshop access"]
        },
    ],
    partnerLogo: [
        { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
        { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
        { light: "/images/home/pricing/partner-3.svg", dark: "/images/home/pricing/partner-dark-3.svg" },
        { light: "/images/home/pricing/partner-4.svg", dark: "/images/home/pricing/partner-dark-4.svg" },
        { light: "/images/home/pricing/partner-5.svg", dark: "/images/home/pricing/partner-dark-5.svg" },
    ],
};

const faqData = {
    data: [
        {
            faq_que: "Where is the museum located?",
            faq_ans: "We are anchored at Liberation City in Harare, Zimbabwe."
        },
        {
            faq_que: "What are the opening hours?",
            faq_ans: "Open Tuesday to Sunday, 9:00 AM to 5:00 PM, with last entry at 4:30 PM. Closed Mondays and major public holidays."
        },
        {
            faq_que: "Are guided tours available?",
            faq_ans: "Yes, we offer educational programs and guided tours for groups and individuals."
        },
        {
            faq_que: "Can I donate artifacts?",
            faq_ans: "We actively preserve artifacts tied to liberation history. Please contact our collections department."
        },
        {
            faq_que: "Is there research support?",
            faq_ans: "Yes, we support research and documentation of liberation heritage."
        }
    ]
};

const contactData = {
    keypoint: ["Open Tuesday to Sunday", "Located at Liberation City", "Guided tours and school visits"],
    managerProfile: {
        image: "/images/avatar/avatar_1.jpg",
        name: "Visitor Services",
        position: "Museum of African Liberation"
    }
};

const aboutusStats = [
    {
        number: 1960,
        postfix: "+",
        title: "Liberation histories documented",
        descp: "Chronologies, testimonies, and archives spanning decades of independence movements."
    },
    {
        number: 20,
        postfix: "+",
        title: "Gallery and memorial spaces",
        descp: "Permanent and rotating exhibitions honoring regional struggles and solidarity networks."
    },
    {
        number: 1500,
        postfix: "+",
        title: "Artifacts, photographs, and letters",
        descp: "Objects preserved with care to illuminate the people and places that shaped liberation."
    },
];

const servicesSliderData = [
    "Liberation Movements",
    "Oral Histories",
    "Freedom Radio",
    "Women in Resistance",
    "Solidarity Networks",
    "Youth and Education",
    "Memorial Gardens"
];

export const GET = async () => {
    return NextResponse.json({
        avatarList,
        statsFactData,
        servicesData,
        testimonialData,
        teamData,
        pricingData,
        faqData,
        contactData,
        aboutusStats,
        servicesSliderData
    });
};
