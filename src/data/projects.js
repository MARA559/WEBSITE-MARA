const projects = [
  {
    id: 1,
    title: "Modern Brand Identity",
    description: "Complete rebrand for a tech startup, including logo, color palette, and visual identity guidelines.",
    image: "Orijon.png",
    category: "branding"
  },
  {
    id: 2,
    title: "web UI Design",
    description: "A sleek and modern web UI design for a fictional e-commerce platform, focusing on user experience and visual appeal.",
    image: "2006.png",
    category: "ui"
  },
  {
    id: 3,
    title: "Medusa The Stone Goddess",
    description: "A series of print illustrations inspired by the myth of Medusa, combining traditional and digital techniques.",
    image: "2.png",
    category: "print"
  },
  {
    id: 4,
    title: "Orange Juice",
    description: "A playful branding project for a fictional orange juice company, including logo design and packaging.",
    image: "3.png",
    category: "branding"
  },
  {
    id: 5,
    title: "E-commerce Website Design",
    description: "Complete UI design for an e-commerce platform selling handcrafted goods, with a focus on visual hierarchy.",
    image: "WEB UI DESING.png",
    category: "ui"
  },
  {
    id: 6,
    title: "Cover Desing For a book",
    description: "A creative book cover design for a fantasy novel, blending illustration and typography to capture the essence of the story.",
    image: "COVER LIBRI.png",
    category: "illustration"
  },
  {
    id: 7,
    title: "Cover Desing For a book",
    description: "A modern magazine cover design featuring bold typography and striking imagery, suitable for a lifestyle publication.",
    image: "faqe libri.png",
    category: "print"
  },
  {
    id: 8,
    title: "Nike Design ",
    description: "A conceptual design for a Nike advertisement, showcasing innovative product features and brand identity.My name is there",
    image: "NIKE2025444.png",
    category: "illustration"
  },
  {
    id: 9,
    title: "NIVEA Brand Identity",
    description: "A complete brand identity project for NIVEA, including logo design, packaging, and promotional materials.",
    image: "NIVEA.png",
    category: "branding"
  },
  {
    id: 10,
    title: "App design",
    description: "A sleek and modern app design for a personal finance management tool, focusing on user-friendly navigation and visual appeal.",
    image: "Intro app.png",
    category: "ui"
  },
  {
    id: 11,
    title: "APP DESIGN",
    description: "A dashboard app design for a project management tool, featuring intuitive navigation and data visualization.",
    image: "Dashboard app.png",
    category: "ui"
  },
  {
    id: 12,
    title: "App Design",
    description: "A clean and modern login app design, emphasizing simplicity and user experience.",
    image: "Login app.png",
    category: "ui"
  },
  {
    id: 13,
    title: "Orijin company",
    description: "A brandin for Orijin company",
    image: "1orijon.png",
    category: "branding"
  },
  {
    id: 14,
  title: "3D ILUSTRATION",
    description: "A character desing,his name is Doktor Ted, a 3D illustration of a friendly doctor character.",
    image: "DOKTOR TED.png",
    category: "illustration"
  },
  {
    id: 15,
    title: "Corporate Branding",
    description: "A comprehensive branding project for a corporate client, including logo, business cards, and stationery.",
    image: "ORIJON!.png",
    category: "branding"
  },
  {
    id: 16,
    title: "Event Branding",
    description: "Complete branding for conference, including logo, promotional materials, and signage.",
    image: "ORPRJSDADG.png",
    category: "branding"
  },
  {
    id: 17,
  title: "3D Illustration.",
    description: "A donuts 3D illustration, showcasing a realistic and colorful donut design.",
    image: "petyll.png",
    category: "illustration"
  },
  {
    id: 18,
    title: "Travis Scott",
    description: "A creative branding project for a music artist, including logo design, album cover, and promotional materials.",
    image: "Travis scot.png",
    category: "branding"
  },
  {
    id: 19,
    title: "Nike Blazer",
    description: "A modern and stylish design for a Nike Blazer sneaker, focusing on color and texture.",
    image: "Blazer.png",
    category: "branding"
  },
  {
    id: 20,
    title: "FREDDIE MURCURY",
    description: "I don't want to be a star,i want to be a legend.",
    image: "FREDDIE MURCURY.png",
    category: "branding"
  },
  {
    id: 21,
    title: "Slipknot Branding",
    description: "A branding project for the band Slipknot.",
    image: "SLIPKNOT.png",
    category: "branding"
  },
  {
    id: 22,
    title: "Web desing",
    description: "A modern and responsive web design for a creative agency, focusing on user experience and visual appeal.",
    image: "WEBBBBBBB.png",
    category: "ui"
  },
  {
    id: 23,
    title: "Orange soda",
    description: "A playful branding project for a fictional orange soda company, including logo design and packaging.",
    image: "PORTOKALLI.jpg",
    category: "print"
  },
  {
    id: 24,
    title: "Ro'",
    description: "This present an poster for an event called Ro', a celebration of creativity and innovation.",
    image: "1.png",
    category: "print"
  },
  {
    id: 25,
    title: "ARROWPLANE",
    description: "This is a logo design for Arrowplane, a fictional airline company, featuring a sleek and modern design.",
    image: "LOGOarrow.png",
    category: "branding"
  },
  {
    id: 26,
    title: "Branding",
    description: "A branding project for a fictional company, including logo design, color palette, and visual identity guidelines.",
    image: "ORJOIUN.png",
    category: "branding"
  },
  {
    id: 27,
    title: "Non-Profit Branding",
    description: "Branding project for a non-profit organization, including logo design, website UI, and marketing materials.",
    image: "ORIJONI.png",
    category: "branding"
  },
  {
    id: 28,
    title: "BRANDING",
    description: "A branding project for a fictional company, including logo design, color palette, and visual identity guidelines.",
    image: "ORIJOM.png",
    category: "branding"
  },
  {
    id: 29,
    title: "Branding LOGO",
    description: "A logo design for a fictional company, featuring a modern and minimalist style.",
    image: "123131331.png",
    category: "branding"
  },
  {
    id: 30,
    title: "Corporate Identity Design",
    description: "A complete corporate identity design, including logo, business cards, and letterhead.",
    image: "LIVING UP1.png",
    category: "branding"
  },
  {
    id: 31,
    title: "Creative Branding",
    description: "Stairway to Heaven.",
    image: "strait.png",
    category: "branding"
  },
  {
    id: 32,
    title: "Web Poster Design",
    description: "A creative poster design for an art exhibition, combining photography and graphic elements.",
    image: "WEB BANER.png",
    category: "print"
  }
];

export default projects;