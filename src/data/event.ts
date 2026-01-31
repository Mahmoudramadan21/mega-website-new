// data/events.ts
import { EventData } from "@/types/event";

/**
 * totalEvents
 *
 * Complete archive of all past MEGA Team MU events (up to Dec 2025).
 *
 * Main Purpose:
 *   • Showcase history, achievements & credibility in Events / About pages
 *   • Support "Past Events" or "Our Journey" sections
 *   • Provide rich content for SEO (long descriptions, images, reviews)
 *
 * Key Characteristics:
 *   • All events marked "closed" (historical data only)
 *   • Rich metadata: sessions, reviews, sponsors, attendance
 *   • Chronological or official order preserved
 *   • Ready for filtering, search, or pagination
 */
export const totalEvents: readonly EventData[] = [
  {
    slug: "megaverse",
    title: "Megaverse",
    shortDescription:
      "Exploring the evolution of technology to the Metaverse – sessions on VR/AR, AI, Web3, Cloud, IoT, Gaming, Big Data, and more.",

    description: `Megaverse took us on an exciting journey through the evolution of technology leading to the Metaverse.

      Together, we explored how virtual reality and emerging technologies are shaping the future of work, communication, collaboration, and innovation. The event highlighted key technologies driving this transformation, from AI and cloud computing to immersive experiences in VR/AR and the decentralized web.

      With expert-led sessions across multiple cutting-edge tracks, Megaverse provided students, developers, and enthusiasts with insights, inspiration, and practical knowledge to navigate and contribute to the next digital era.`,

    state: "closed",
    link: "/events/megaverse",
    images: [
      {
        src: "/events/megaverse-main.jpg",
        alt: "Megaverse event poster – exploring VR and the Metaverse",
        width: 1200,
        height: 628,
      },
    ],
    attendance: 410, // Sample attendance
    dateTime: "2025-02-27T10:00:00+02:00",
    location: "Mansoura University, Dakahlia, Egypt",
    sessionCount: 8,
    sessions: [
      {
        name: "The Evolution of Technology",
        description:
          "A historical journey from early computers to modern VR and Metaverse concepts.",
        speakerName: "Dr. Omar Farouk",
        speakerJobTitle: "Professor of Computer Science",
        speakerCompany: "Mansoura University",
        time: "10:00 AM - 11:30 AM",
        date: "Sat, 18 Feb",
      },
      {
        name: "Metaverse: Core Components & Applications",
        description:
          "Deep dive into the building blocks of the Metaverse and real-world use cases.",
        speakerName: "Ahmed Ramadan",
        speakerJobTitle: "AR/VR Developer",
        speakerCompany: "",
        time: "12:00 PM - 01:30 PM",
        date: "Sat, 18 Feb",
      },
      {
        name: "Future of Work in the Metaverse Era",
        description:
          "How immersive technologies will transform jobs, collaboration, and remote work.",
        speakerName: "Laila Hassan",
        speakerJobTitle: "Tech Futurist",
        speakerCompany: "",
        time: "02:30 PM - 04:00 PM",
        date: "Sat, 18 Feb",
      },
      {
        name: "Hands-on VR Experience Workshop",
        description:
          "Interactive session where participants try VR headsets and Metaverse platforms.",
        speakerName: "Mohamed Tarek",
        speakerJobTitle: "VR Content Creator",
        speakerCompany: "",
        time: "04:30 PM - 06:00 PM",
        date: "Sat, 18 Feb",
      },
      {
        name: "The Evolution of Technology",
        description:
          "A historical journey from early computers to modern VR and Metaverse concepts.",
        speakerName: "Dr. Omar Farouk",
        speakerJobTitle: "Professor of Computer Science",
        speakerCompany: "Mansoura University",
        time: "10:00 AM - 11:30 AM",
        date: "Sat, 18 Feb",
      },
      {
        name: "Metaverse: Core Components & Applications",
        description:
          "Deep dive into the building blocks of the Metaverse and real-world use cases.",
        speakerName: "Ahmed Ramadan",
        speakerJobTitle: "AR/VR Developer",
        speakerCompany: "",
        time: "12:00 PM - 01:30 PM",
        date: "Sat, 18 Feb",
      },
      {
        name: "Future of Work in the Metaverse Era",
        description:
          "How immersive technologies will transform jobs, collaboration, and remote work.",
        speakerName: "Laila Hassan",
        speakerJobTitle: "Tech Futurist",
        speakerCompany: "",
        time: "02:30 PM - 04:00 PM",
        date: "Sat, 18 Feb",
      },
      {
        name: "Hands-on VR Experience Workshop",
        description:
          "Interactive session where participants try VR headsets and Metaverse platforms.",
        speakerName: "Mohamed Tarek",
        speakerJobTitle: "VR Content Creator",
        speakerCompany: "",
        time: "04:30 PM - 06:00 PM",
        date: "Sat, 18 Feb",
      },
    ],
    // reviews: [
    //   {
    //     reviewerImage: {
    //       src: "/images/next-event.png",
    //       alt: "Michael Chen profile",
    //       width: 50,
    //       height: 50,
    //     },
    //     reviewerName: "Michael Chen",
    //     reviewText: "Amazing insights into VR!",
    //     rating: 5,
    //   },
    //   {
    //     reviewerImage: {
    //       src: "/images/next-event.png",
    //       alt: "Sarah Johnson profile",
    //       width: 50,
    //       height: 50,
    //     },
    //     reviewerName: "Sarah Johnson",
    //     reviewText: "Incredible experience.",
    //     rating: 5,
    //   },
    // ],
    sponsors: [
      {
        id: 1,
        name: "Asgard City of Innovation",
        logo: "/events/megaverse/sponsors/asgard.jpg",
      },
      {
        id: 2,
        name: "UCCCD Mansoura Engineering",
        logo: "/events/megaverse/sponsors/ucccd-mansoura.jpg",
      },
      {
        id: 3,
        name: "ITI Mansoura Branch",
        logo: "/events/megaverse/sponsors/iti-mansoura.jpg",
      },
      {
        id: 4,
        name: "Bio Zone",
        logo: "/events/megaverse/sponsors/bio-zone.jpg",
      },
      {
        id: 5,
        name: "Alpha Stickers",
        logo: "/events/megaverse/sponsors/alpha-stickers.jpg",
      },
      {
        id: 6,
        name: "طلاب مصر أجل مصر - جامعة المنصورة",
        logo: "/events/megaverse/sponsors/talab-masr.jpg",
      },
    ],
    meta: [
      { icon: "calendar", label: "Date", value: "Feb 27–28, 2022" },
      { icon: "clock", label: "Time", value: "10:00 AM – 04:00 PM" },
      { icon: "map-pin", label: "Location", value: "Mansoura University" },
      { icon: "record", label: "Focus", value: "Metaverse & Virtual Reality" },
    ],
  },
  // {
  //   slug: "faculty-of-atlantis",
  //   title: "Faculty of Atlantis (Faculty of Future)",
  //   shortDescription:
  //     "Explore the evolution of technology from early innovations to the immersive world of VR and the Metaverse.",
  //   description:
  //     `Faculty of Future provided an exceptional space for exploring the technological landscape of the coming years and understanding how rapidly advancing innovations will shape the world ahead. The event focused on highlighting the growing impact of computer science and information technology in building a future driven by creativity, intelligence, and continuous development.\n\n` +
  //     `Throughout the event, we aimed to inspire participants and broaden their perspective on what technology can achieve. Discussions covered the progression of artificial intelligence, the evolution of digital systems, and the transformative applications that will influence work, education, and daily life. We also examined the challenges and opportunities that are expected to emerge, offering attendees a deeper understanding of future trends and how to prepare for them.\n\n` +
  //     `Faculty of Future sought to enhance technological awareness and support the development of a clear vision of what lies ahead. The event emphasized the importance of staying informed, adapting to rapid change, and embracing innovation as a key element in shaping a more advanced and impactful future.`,
  //   state: "closed",
  //   link: "/events/faculty-of-atlantis",
  //   images: [
  //     {
  //       src: "/images/next-event.png",
  //       alt: "Faculty of Atlantis (Faculty of Future) event poster",
  //       width: 630,
  //       height: 600,
  //     },
  //     // Additional sample images
  //     {
  //       src: "/images/next-event.png",
  //       alt: "AI discussion panel",
  //       width: 800,
  //       height: 450,
  //     },
  //     {
  //       src: "/images/next-event.png",
  //       alt: "AI discussion panel",
  //       width: 800,
  //       height: 450,
  //     },
  //     {
  //       src: "/images/next-event.png",
  //       alt: "AI discussion panel",
  //       width: 800,
  //       height: 450,
  //     },
  //     {
  //       src: "/images/next-event.png",
  //       alt: "AI discussion panel",
  //       width: 800,
  //       height: 450,
  //     },
  //   ],
  //   attendance: 300, // Sample attendance
  //   dateTime: "2024-01-01",
  //   location: "Mansoura University",
  //   sessionCount: 5,
  //   sessions: [
  //     {
  //       name: "AI Progression",
  //       description: "Future of artificial intelligence.",
  //       speakerName: "Alice Johnson",
  //       speakerCompany: "AI Labs",
  //     },
  //     // Additional sample sessions
  //   ],
  //   reviews: [
  //     {
  //       reviewerImage: {
  //         src: "/images/next-event.png",
  //         alt: "Alice Reviewer profile",
  //         width: 50,
  //         height: 50,
  //       },
  //       reviewerName: "Alice Reviewer",
  //       reviewText: "Eye-opening on future tech.",
  //       rating: 4,
  //     },
  //     {
  //       reviewerImage: {
  //         src: "/images/next-event.png",
  //         alt: "Alice Reviewer profile",
  //         width: 50,
  //         height: 50,
  //       },
  //       reviewerName: "Alice Reviewer",
  //       reviewText: "Eye-opening on future tech.",
  //       rating: 4,
  //     },
  //     {
  //       reviewerImage: {
  //         src: "/images/next-event.png",
  //         alt: "Alice Reviewer profile",
  //         width: 50,
  //         height: 50,
  //       },
  //       reviewerName: "Alice Reviewer",
  //       reviewText: "Eye-opening on future tech.",
  //       rating: 4,
  //     },
  //     {
  //       reviewerImage: {
  //         src: "/images/next-event.png",
  //         alt: "Alice Reviewer profile",
  //         width: 50,
  //         height: 50,
  //       },
  //       reviewerName: "Alice Reviewer",
  //       reviewText: "Eye-opening on future tech.",
  //       rating: 4,
  //     },
  //     {
  //       reviewerImage: {
  //         src: "/images/next-event.png",
  //         alt: "Alice Reviewer profile",
  //         width: 50,
  //         height: 50,
  //       },
  //       reviewerName: "Alice Reviewer",
  //       reviewText: "Eye-opening on future tech.",
  //       rating: 4,
  //     },
  //     {
  //       reviewerImage: {
  //         src: "/images/next-event.png",
  //         alt: "Alice Reviewer profile",
  //         width: 50,
  //         height: 50,
  //       },
  //       reviewerName: "Alice Reviewer",
  //       reviewText: "Eye-opening on future tech.",
  //       rating: 4,
  //     },
  //   ],
  //   sponsors: [
  //     { id: 1, name: "Tesla", logo: "/logos/tesla.png" },
  //     { id: 2, name: "Hult Prize", logo: "/logos/hult.png" },
  //     { id: 3, name: "Triago", logo: "/logos/triago.png" },
  //     { id: 4, name: "Techno Club", logo: "/logos/techno.png" },
  //     { id: 5, name: "ITI", logo: "/logos/iti.png" },
  //     { id: 6, name: "Creativa", logo: "/logos/creativa.png" },
  //     { id: 7, name: "Madarek Academy", logo: "/logos/madarek.png" },
  //   ],
  //   meta: [
  //     { icon: "calendar", label: "Date", value: "2024" },
  //     { icon: "map-pin", label: "Location", value: "Mansoura University" },
  //     { icon: "record", label: "Focus", value: "Future Technologies & AI" },
  //   ],
  // },
  // {
  //   slug: "lets-begin",
  //   title: "Let’s Begin Network",
  //   shortDescription:
  //     "Explore the evolution of technology from early innovations to the immersive world of VR and the Metaverse.",
  //   description:
  //     `Let’s Begin Network was designed to introduce participants to the fundamental concepts and structure of networking, offering a clear and accessible understanding of one of the core fields in the world of technology. The event continued our ongoing effort to support learners by breaking down each track into simple and well-organized knowledge, helping them build confidence before choosing the path that best suits their interests.\n\n` +
  //     `Throughout previous months, we explored several domains including UI/UX and Mobile Application Development using Flutter and Android. Let’s Begin Network extended this journey by providing a solid overview of networks, their components, and their importance in modern digital systems. The event aimed to guide attendees through essential principles while preparing them to dive deeper into more advanced topics in the future.\n\n` +
  //     `By presenting the content in a structured and easy-to-follow approach, the event encouraged participants to stay curious, take notes and actively engage with the material. Let’s Begin Network reflected our commitment to helping individuals navigate the wide range of tech fields and discover the direction that aligns with their goals and aspirations.`,
  //   state: "closed",
  //   link: "/events/lets-begin",
  //   images: [
  //     {
  //       src: "/images/next-event.png",
  //       alt: "Let’s Begin Network event poster",
  //       width: 630,
  //       height: 600,
  //     },
  //     // Additional sample images
  //   ],
  //   attendance: 180, // Sample attendance
  //   dateTime: "2024-06-01",
  //   location: "Mansoura University",
  //   sessionCount: 3,
  //   sessions: [
  //     {
  //       name: "Networking Basics",
  //       description: "Introduction to network components.",
  //       speakerName: "Bob Lee",
  //       speakerCompany: "Network Solutions",
  //     },
  //   ],
  //   reviews: [
  //     {
  //       reviewerImage: {
  //         src: "/images/reviewers/bob-reviewer.png",
  //         alt: "Bob Reviewer profile",
  //         width: 50,
  //         height: 50,
  //       },
  //       reviewerName: "Bob Reviewer",
  //       reviewText: "Great intro to networking.",
  //       rating: 5,
  //     },
  //   ],
  //   sponsors: [
  //     { id: 1, name: "Tesla", logo: "/logos/tesla.png" },
  //     { id: 2, name: "Hult Prize", logo: "/logos/hult.png" },
  //     { id: 3, name: "Triago", logo: "/logos/triago.png" },
  //     { id: 4, name: "Techno Club", logo: "/logos/techno.png" },
  //     { id: 5, name: "ITI", logo: "/logos/iti.png" },
  //     { id: 6, name: "Creativa", logo: "/logos/creativa.png" },
  //     { id: 7, name: "Madarek Academy", logo: "/logos/madarek.png" },
  //   ],
  //   meta: [
  //     { icon: "calendar", label: "Date", value: "2024" },
  //     { icon: "map-pin", label: "Location", value: "Mansoura University" },
  //     { icon: "record", label: "Focus", value: "Networking Fundamentals" },
  //   ],
  // },
  // {
  //   slug: "fight-fear",
  //   title: "Fight Fear",
  //   shortDescription:
  //     "Explore the evolution of technology from early innovations to the immersive world of VR and the Metaverse.",
  //   description:
  //     `Fight Fear offered a powerful space to confront the doubts and uncertainties that often stand between us and our goals. The event focused on understanding how fear can shape our decisions and how embracing it can open doors to new opportunities in the tech world. Through a series of informative sessions, we introduced participants to various fields and tracks they might have overlooked due to hesitation or lack of clarity.\n\n` +
  //     `We aimed to help attendees overcome the questions that often arise at the beginning of their academic or professional journey including whether they are on the right path. Fight Fear encouraged participants to explore different tracks, gain confidence in their choices and move closer to the future they aspire to build.\n\n` +
  //     `The event reflected our commitment to guiding individuals through their challenges while providing the knowledge and support needed to navigate their ambitions and discover the possibilities ahead.`,
  //   state: "closed",
  //   link: "/events/fight-fear",
  //   images: [
  //     {
  //       src: "/images/next-event.png",
  //       alt: "Fight Fear motivational event poster",
  //       width: 630,
  //       height: 600,
  //     },
  //   ],
  //   attendance: 220, // Sample attendance
  //   dateTime: "2024-01-01",
  //   location: "Mansoura University",
  //   sessionCount: 4,
  //   sessions: [
  //     {
  //       name: "Overcoming Doubts",
  //       description: "Strategies to face career fears.",
  //       speakerName: "Eve Adams",
  //       speakerCompany: "Motivation Co.",
  //     },
  //   ],
  //   reviews: [
  //     {
  //       reviewerImage: {
  //         src: "/images/reviewers/eve-reviewer.png",
  //         alt: "Eve Reviewer profile",
  //         width: 50,
  //         height: 50,
  //       },
  //       reviewerName: "Eve Reviewer",
  //       reviewText: "Empowering sessions!",
  //       rating: 4,
  //     },
  //   ],
  //   sponsors: [
  //     { id: 1, name: "Tesla", logo: "/logos/tesla.png" },
  //     { id: 2, name: "Hult Prize", logo: "/logos/hult.png" },
  //     { id: 3, name: "Triago", logo: "/logos/triago.png" },
  //     { id: 4, name: "Techno Club", logo: "/logos/techno.png" },
  //     { id: 5, name: "ITI", logo: "/logos/iti.png" },
  //     { id: 6, name: "Creativa", logo: "/logos/creativa.png" },
  //     { id: 7, name: "Madarek Academy", logo: "/logos/madarek.png" },
  //   ],
  //   meta: [
  //     { icon: "calendar", label: "Date", value: "2024" },
  //     { icon: "map-pin", label: "Location", value: "Mansoura University" },
  //     { icon: "record", label: "Focus", value: "Overcoming Career Doubts" },
  //   ],
  // },
  {
    slug: "magicoders-1-0",
    title: "MagiCoders 1.0",
    shortDescription:
      "An exciting, story-driven introduction to programming and technology for kids (9–16 years) – blending interactive storytelling, hands-on activities, and exploration of future tech fields.",
    description: `MagiCoders 1.0 took kids on an exciting journey through the history of programming.

    Through engaging interactive stories and hands-on activities, children explored how technology evolved and discovered various tech fields — turning coding into a magical tool for creativity, problem-solving, and imagination.

    The event introduced young participants (ages 9–16) to key areas such as game development, robotics, artificial intelligence, graphic design, video editing, and frontend development — all presented in a fun, age-appropriate, and inspiring way.

    MagiCoders 1.0 aimed to spark curiosity, show that coding is not just technical but deeply creative, and plant the seed for future innovators.`,
    state: "closed",
    link: "/events/magicoders-1-0",
    images: [
      {
        src: "/events/magicoders-1-0.jpg",
        alt: "MagiCoders 1.0 – Magical Journey into Programming for Kids",
        width: 1200,
        height: 628,
      },
    ],
    attendance: 260, // Sample attendance
    dateTime: "2025-09-17T09:00:00+02:00",
    location: "Mansoura University & ITI",
    sessionCount: 6,
    sessions: [
      {
        name: "Robotics",
        description:
          "Introduction to robotics concepts, building simple mechanisms, and basic programming for robots – hands-on fun for young minds.",
        speakerName: "Mohamed-Abo",
        speakerJobTitle: "Robotics Trainer",
        speakerCompany: "",
        time: "10:00 AM – 11:00 AM",
        date: "17 September",
      },
      {
        name: "Front-End + UI/UX",
        description:
          "Basics of front-end development combined with UI/UX principles – how to create beautiful and user-friendly websites.",
        speakerName: "Khalid Said & Zad Kamiha",
        speakerJobTitle: "Front-End Developer & UI/UX Designer",
        speakerCompany: "",
        time: "11:00 AM – 12:00 PM",
        date: "17 September",
      },
      {
        name: "AI",
        description:
          "Fun introduction to Artificial Intelligence – what AI is, simple examples from daily life, and how kids can start exploring it.",
        speakerName: "Abdelrahman Elsayed",
        speakerJobTitle: "AI Enthusiast / Trainer",
        speakerCompany: "",
        time: "12:00 PM – 12:45 PM",
        date: "17 September",
      },
      {
        name: "Graphic Design",
        description:
          "Creative session on graphic design basics – colors, shapes, tools, and making cool posters or drawings using design software.",
        speakerName: "Ahmed Nafeaa",
        speakerJobTitle: "Graphic Designer",
        speakerCompany: "",
        time: "01:30 PM – 02:00 PM",
        date: "17 September",
      },
      {
        name: "Video Editing",
        description:
          "Hands-on video editing workshop – cutting clips, adding effects, music, and creating short fun videos.",
        speakerName: "Hussein Mohamed",
        speakerJobTitle: "Video Editor",
        speakerCompany: "",
        time: "02:00 PM – 02:30 PM",
        date: "17 September",
      },
      {
        name: "Game Dev",
        description:
          "Introduction to game development – how games are made, basic logic, and creating simple games that kids can play and modify.",
        speakerName: "Ahmed Alaa",
        speakerJobTitle: "Game Developer",
        speakerCompany: "",
        time: "02:30 PM – 03:30 PM",
        date: "17 September",
      },
    ],
    // reviews: [
    //   {
    //     reviewerImage: {
    //       src: "/images/reviewers/charlie-reviewer.png",
    //       alt: "Charlie Reviewer profile",
    //       width: 50,
    //       height: 50,
    //     },
    //     reviewerName: "Charlie Reviewer",
    //     reviewText: "Fun for kids!",
    //     rating: 5,
    //   },
    // ],
    sponsors: [
      {
        id: 1,
        name: "BUZZ GALLERY",
        logo: "/events/magicoders-1-0/sponsors/buzz-gallery.jpg",
      },
      {
        id: 2,
        name: "COURSATY",
        logo: "/events/magicoders-1-0/sponsors/coursaty.jpg",
      },
      {
        id: 3,
        name: "LORD BAKE",
        logo: "/events/magicoders-1-0/sponsors/lord-bake.jpg",
      },
      {
        id: 4,
        name: "Techno Kids",
        logo: "/events/magicoders-1-0/sponsors/techno-kids.jpg",
      },
      {
        id: 5,
        name: "Triago",
        logo: "/events/magicoders-1-0/sponsors/triago.jpg",
      },
    ],
    meta: [
      { icon: "calendar", label: "Date", value: "September 17, 2025" },
      {
        icon: "map-pin",
        label: "Location",
        value: "Mansoura University & ITI",
      },
      { icon: "record", label: "Sessions", value: "Interactive & Hands-on" },
    ],
  },
  {
    slug: "magicoders-2-0",
    title: "Magicoders 2.0",
    shortDescription:
      "A complete interactive tech journey for children (9–16 years) – hands-on experience, problem-solving competition, and fun introduction to future technologies.",
    description: `Magicoders 2.0 is the second edition of the Magicoders event, but this year it comes with a completely different vision and experience compared to the first edition.

    Our main goal is to empower children and build their awareness of the technology world in a fun, interactive, and age-appropriate way.

    In the first edition, Magicoders focused on educational sessions for children aged 9 to 16. However, Magicoders 2.0 introduces a fully upgraded concept: a complete journey where children do not just learn about technology but actually experience it.

    What’s new in Magicoders 2.0:
    • An interactive journey using engaging stories
    • Hands-on activities that keep children focused and excited
    • Exposure to future technology fields
    • A practical environment where children practice technology instead of only listening to theory

    Event Objective:
    Introduce children aged 9 to 16 to technical fields in a simple, interactive, and enjoyable way while providing a real and memorable technology experience.

    Core Content:
    • Interactive sessions
    • Problem Solving Competition

    Competition Details:
    • Participation is team-based
    • Each team consists of 3 members
    • Each team must have one laptop
    • Teams will solve a set of problem-solving challenges

    Prizes:
    • Strong prizes for the top three teams
    • Additional surprises for all participants

    Location:
    Lecture Hall 2, Faculty of Computers and Information, Mansoura University

    Date:
    January 28, 2026`,

    state: "closed",
    link: "/events/magicoders-2-0",
    images: [
      {
        src: "/events/magicoders-2-0.jpg",
        alt: "Magicoders 2.0 – Interactive Tech Journey for Kids at Mansoura University",
        width: 630,
        height: 600,
      },
    ],
    attendance: 370, // Sample attendance
    dateTime: "2026-01-28T09:00:00+02:00",
    location:
      "Lecture Hall 2, Faculty of Computers and Information, Mansoura University",
    // sessionCount: 6,
    // sessions: [
    //   {
    //     name: "History of Computing",
    //     description: "From Babbage to modern tech.",
    //     speakerName: "Charlie Brown",
    //     speakerCompany: "EduTech",
    //   },
    // ],
    // reviews: [
    //   {
    //     reviewerImage: {
    //       src: "/images/reviewers/charlie-reviewer.png",
    //       alt: "Charlie Reviewer profile",
    //       width: 50,
    //       height: 50,
    //     },
    //     reviewerName: "Charlie Reviewer",
    //     reviewText: "Fun for kids!",
    //     rating: 5,
    //   },
    // ],
    sponsors: [
      {
        id: 1,
        name: "T.M.S.S / TIBA",
        logo: "/events/magicoders-2-0/sponsors/tmss-tiba.jpg",
      },
      {
        id: 2,
        name: "TECHIE ACADEMY",
        logo: "/events/magicoders-2-0/sponsors/techie-academy.jpg",
      },
      {
        id: 3,
        name: "TECHNO GENIUS",
        logo: "/events/magicoders-2-0/sponsors/techno-genius.jpg",
      },
      {
        id: 4,
        name: "OLIGO LAPTOP",
        logo: "/events/magicoders-2-0/sponsors/oligo-laptop.jpg",
      },
      {
        id: 5,
        name: "Robotics",
        logo: "/events/magicoders-2-0/sponsors/robotics.jpg",
      },
      {
        id: 6,
        name: "Think school",
        logo: "/events/magicoders-2-0/sponsors/think-school.jpg",
      },
      {
        id: 7,
        name: "Enrich Academy",
        logo: "/events/magicoders-2-0/sponsors/enrich-academy.jpg",
      },
    ],
    meta: [
      { icon: "calendar", label: "Date", value: "January 28, 2026" },
      {
        icon: "map-pin",
        label: "Location",
        value: "Lecture Hall 2 – FCIS – Mansoura University",
      },
      { icon: "record", label: "Sessions", value: "Interactive & Hands-on" },
    ],
  },
  {
    title: "MEGFAIR 2025",
    slug: "megfair",
    shortDescription:
      "Career fair bridging the gap between university and the job market – sessions, companies, and expert guidance.",
    description: `Megafair is a career-focused event designed to support students and fresh graduates in their transition from university life to the job market.

    Many students work hard to develop their technical skills and build a strong portfolio but often face challenges when searching for their first internship or job. This gap between academic study and real market requirements is what Megafair aims to bridge.

    The event provides a clear understanding of how to build a professional CV, how companies evaluate candidates, and which technical and soft skills are most in demand.

    Megafair offers a unique opportunity to connect directly with real companies, learn about available internship and job opportunities, and attend sessions covering future-oriented technical tracks and career development topics.

    The event is suitable for all levels, including first-year students. Those who are still exploring their interests will benefit from guidance sessions delivered by industry professionals, helping them understand different career paths and choose the track that fits them best.

    Whether you are a student at the beginning of your journey or a graduate searching for your first professional opportunity, Megafair is designed to help you take a real step toward your career goals.`,
    state: "closed",
    link: "/events/megfair",
    images: [
      {
        src: "/events/megfair.jpg",
        alt: "MEGFAIR 2025 – Career Fair & Technical Sessions at Mansoura University",
        width: 1702,
        height: 630,
      },
    ],
    attendance: 280, // From initial query data
    dateTime: "2025-05-10T09:00:00+02:00",
    location: "Mansoura University, Dakahlia, Egypt",
    sessionCount: 6, // Sample from initial query
    sessions: [
      // ===== Day 1 – May 10, 2025 =====
      {
        name: "Business Analysis",
        description:
          "Introduction to business analysis practices, tools, requirements gathering, and career opportunities in the field.",
        speakerName: "Ammar Rakha",
        speakerJobTitle: "Business Analyst",
        speakerCompany: "",
        time: "09:30 AM - 11:00 AM",
        date: "May 10, 2025",
      },
      {
        name: "Data Engineering",
        description:
          "Overview of modern data pipelines, ETL processes, big data tools, cloud platforms, and industry demands.",
        speakerName: "Ali Sherif",
        speakerJobTitle: "Data Engineer",
        speakerCompany: "",
        time: "11:30 AM - 01:00 PM",
        date: "May 10, 2025",
      },
      {
        name: "Full Stack Development",
        description:
          "End-to-end web development: modern frontend & backend stacks, databases, APIs, authentication, and deployment best practices.",
        speakerName: "Esraa Abo Elenain",
        speakerJobTitle: "Full Stack Developer",
        speakerCompany: "",
        time: "02:00 PM - 03:30 PM",
        date: "May 10, 2025",
      },

      // ===== Day 2 – May 11, 2025 =====
      {
        name: "Machine Learning & AI",
        description:
          "Fundamentals of ML/AI, real-world applications, current trends (LLMs, computer vision, etc.), and how to get started.",
        speakerName: "Seif Maghraby",
        speakerJobTitle: "Machine Learning Engineer",
        speakerCompany: "",
        time: "09:30 AM - 11:00 AM",
        date: "May 11, 2025",
      },
      {
        name: "Mobile Development",
        description:
          "Building high-performance mobile apps – cross-platform (Flutter/React Native) vs native, best practices, and career insights.",
        speakerName: "Mohamed Abdlelaal",
        speakerJobTitle: "Mobile Developer",
        speakerCompany: "",
        time: "11:30 AM - 01:00 PM",
        date: "May 11, 2025",
      },
      {
        name: "Product Design",
        description:
          "User-centered design process, UI/UX principles, prototyping tools (Figma), design systems, and transitioning into product roles.",
        speakerName: "Ahmed Abd Elhamed",
        speakerJobTitle: "Product Designer",
        speakerCompany: "",
        time: "02:00 PM - 03:30 PM",
        date: "May 11, 2025",
      },
    ],
    // reviews: [
    //   {
    //     reviewerImage: {
    //       src: "/images/reviewers/michael-chen.png",
    //       alt: "Michael Chen profile",
    //       width: 50,
    //       height: 50,
    //     },
    //     reviewerName: "Michael Chen",
    //     reviewText:
    //       "Amazing artifacts and well-organized exhibitions. The audio guide is very helpful. Gets quite crowded in the afternoon.",
    //     rating: 5,
    //   },
    //   {
    //     reviewerImage: {
    //       src: "/images/reviewers/sarah-johnson.png",
    //       alt: "Sarah Johnson profile",
    //       width: 50,
    //       height: 50,
    //     },
    //     reviewerName: "Sarah Johnson",
    //     reviewText: "Absolutely incredible experience!",
    //     rating: 5,
    //   },
    // ],
    sponsors: [
      {
        id: 1,
        name: "ALBADR SMART SYSTEMS",
        logo: "/events/megfair/sponsors/albadr.jpg",
      },
      {
        id: 2,
        name: "BEETLWARE",
        logo: "/events/megfair/sponsors/beetlware.jpg",
      },
      {
        id: 3,
        name: "MERNAN TECH",
        logo: "/events/megfair/sponsors/mernan-tech.jpg",
      },
      { id: 4, name: "RAKTECH", logo: "/events/megfair/sponsors/raktech.jpg" },
      {
        id: 5,
        name: "TAG CREATIVE HUB",
        logo: "/events/megfair/sponsors/tag-creative-hub.jpg",
      },
    ],
    meta: [
      { icon: "calendar", label: "Date", value: "May 10–11, 2025" },
      { icon: "clock", label: "Time", value: "09:00 AM – 05:00 PM" },
      { icon: "map-pin", label: "Location", value: "Mansoura University" },
      {
        icon: "record",
        label: "Activities",
        value: "Exhibitions, Workshops & Networking",
      },
    ],
  },
] as const;
