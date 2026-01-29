import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Exhibitions",
    path: "/projects",
    newTab: false,
  },
  {
    id: 4,
    title: "News",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Visit",
    path: "/contact",
    newTab: false,
  },
];

const footerData = {
  name: "Museum of African Liberation",
  tagline: "Preserving Memory, Inspiring Generations.",
  info: [
    {
      icon: "/images/footer/email-arrow.svg",
      link: "info@africanrecords.africa",
      href: "mailto:info@africanrecords.africa"
    },
    {
      icon: "/images/footer/Location.svg",
      link: "Liberation City, Harare, Zimbabwe",
      href: "https://maps.google.com/?q=Liberation+City+Harare"
    },
    {
      icon: "/images/footer/phone.svg",
      link: "078 657 9814",
      href: "tel:0786579814"
    }
  ],
  links: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Exhibitions", href: "/projects" },
    { name: "News", href: "/blog" },
    { name: "Plan Your Visit", href: "/contact" },
  ],
  socialLinks: [
    { name: "Facebook", href: "https://www.facebook.com/" },
    { name: "Twitter", href: "https://x.com/" },
    { name: "Instagram", href: "https://www.instagram.com/" }
  ],
  copyright: "Copyright 2025 Museum of African Liberation"
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
    MenuData
  });
};
