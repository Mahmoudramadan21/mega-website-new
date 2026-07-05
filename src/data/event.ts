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
    slug: "redtalks",
    title: "REDTalks",
    shortDescription:
      "Educational event transforming key insights from influential books into engaging visual content.",
    description:
      "REDTalks is an educational event organized by MEGA Team that transforms key insights from influential books into engaging and easy-to-understand content through a unique visual experience helping participants learn faster discover new ideas and apply valuable knowledge in their personal and professional lives",
    state: "closed",
    link: "/events/redtalks",
    images: [
      {
        src: "/events/redtalks-main.jpg",
        alt: "REDTalks – Educational event by MEGA Team",
        width: 1200,
        height: 628,
      },
    ],
    dateTime: "2026-03-01T09:00:00+02:00",
    location: "MEGA Team's Youtube channel",
    statsRibbon: [
      { icon: "calendar", label: "Date", value: "March 2026", ariaLabel: "Event date" },
      {
        icon: "map-pin",
        label: "Location",
        value: "MEGA Team's Youtube channel",
        ariaLabel: "Event location",
      },
      { icon: "clock", label: "No. Videos", value: "4", ariaLabel: "Number of videos" },
    ],
    videosSubtitle: "Book insights brought to life on YouTube",
    videos: [
      {
        name: "Steal like an artist",
        imageSrc: "/events/redtalks/Steal like an artist.png",
        imageAlt: "REDTalks episode – Steal Like an Artist by Austin Kleon",
        watchUrl: "https://www.youtube.com/watch?v=1-FMF8lVyyI",
        description:
          "If you've always believed that you must be unique and that great ideas have to come completely from scratch, it's time to rethink that mindset.\n\n" +
          "In the first episode of REDTalks, inspired by Steal Like an Artist, we discuss:\n\n" +
          "• Why nothing is truly 100% original\n" +
          "• The difference between copying and learning from others\n" +
          "• How to build a \"family tree\" for your ideas\n" +
          "• Why imitation isn't theft but a form of deep understanding\n" +
          "• The principle of Fake It Till You Make It and why every creator goes through it\n" +
          "• How to turn the advantage of being \"unknown\" into a strength",
      },
      {
        name: "Show your work",
        imageSrc: "/events/redtalks/Show your work.png",
        imageAlt: "REDTalks episode – Show Your Work! by Austin Kleon",
        watchUrl: "https://www.youtube.com/watch?v=KfpVSlW1UbE",
        description:
          "Do you work hard in silence, hoping that once your project or idea is finished, the whole world will notice you?\n\n" +
          "The truth is that working in the dark doesn't always lead you into the spotlight. Many talented people go unnoticed, while others gain visibility simply because they share their journey.\n\n" +
          "In our new REDTalks episode, inspired by Show Your Work! by Austin Kleon, we explore the importance of sharing your process, not just your results. The book teaches us how to showcase our work with authenticity and simplicity while building an audience along the way.\n\n" +
          "The key is to make sharing part of the journey: learn and share, make mistakes and share, grow and share.",
      },
      {
        name: "Scrum",
        imageSrc: "/events/redtalks/Scrum.png",
        imageAlt: "REDTalks episode – Scrum by Jeff Sutherland",
        watchUrl: "https://www.youtube.com/watch?v=KPQ_OLclRmA",
        description:
          "In a world filled with complex projects and constant change, traditional rigid management approaches often slow down delivery and limit innovation. That's why a new way of working became necessary.\n\n" +
          "Agile methodology introduces a flexible and adaptive environment that helps teams achieve real success by:\n\n" +
          "• Embracing continuous change and learning throughout the process\n" +
          "• Empowering self-managing teams to take ownership of their work\n" +
          "• Increasing productivity while reducing wasted effort\n\n" +
          "In this REDTalks episode, inspired by Scrum by Jeff Sutherland, you'll explore the book that transformed project management, revealing how teams can move as one unit, tackle challenges intelligently, and leave behind overly complicated plans that treat people like machines.",
      },
      {
        name: "Contagious",
        imageSrc: "/events/redtalks/Contagious.png",
        imageAlt: "REDTalks episode – Contagious by Jonah Berger",
        watchUrl: "https://www.youtube.com/watch?v=0lnwaShuNWI",
        description:
          "In a world filled with millions of products and ideas, why do some spread like wildfire while others disappear without anyone noticing?\n\n" +
          "In this REDTalks episode, inspired by Contagious by Jonah Berger, you explore the science behind why ideas, products, and messages spread, and uncover the six powerful principles of virality known as S.T.E.P.P.S.\n\n" +
          "You don't need to be famous or have a massive budget for your idea to succeed. What matters is understanding and applying these six principles to make your product, message, or idea naturally shareable.",
      },
    ],
    meta: [
      { icon: "calendar", label: "Date", value: "March 2026" },
      {
        icon: "map-pin",
        label: "Location",
        value: "MEGA Team's Youtube channel",
      },
      {
        icon: "record",
        label: "Focus",
        value: "Education & Personal Growth",
      },
    ],
  },
  {
    slug: "megfair-2-0",
    title: "MEGFAIR 2.0",
    shortDescription:
      "Career & Tech Event bridging the gap between academic learning and the job market.",
    description: `MegFair 2.0 is a Career & Tech Event organized by MEGA Team MU at Mansoura University, bringing together students, industry experts, and leading companies through technical sessions, networking opportunities, and career development activities.

    The event is designed to bridge the gap between academic learning and the job market, helping students understand real industry expectations, explore career paths, and connect with professionals across multiple technical and career-focused tracks.

    Through expert-led sessions covering mindset, DevOps, UI/UX, and AI, MEGFAIR 2.0 gives participants practical insights, real-world experience, and the confidence to shape their next career move.`,
    state: "closed",
    link: "/events/megfair-2-0",
    images: [
      {
        src: "/events/megfair-2-0.jpg",
        alt: "MEGFAIR 2.0 – Career & Tech Event at Mansoura University",
        width: 1200,
        height: 628,
      },
    ],
    attendance: 1500,
    dateTime: "2026-04-27T09:00:00+02:00",
    location: "Mansoura University, Dakahlia, Egypt",
    sessionCount: 4,
    sessionsSubtitle: "Master your career, shape what is next",
    sessions: [
      {
        name: "Mindset Reboot",
        description:
          "At MEGFAIR, Eng. Osama Elzero shares real-world industry insights, practical experience, and valuable lessons on navigating challenges, seizing opportunities, and building a successful career beyond the classroom.",
        speakerName: "Osama Elzero",
        speakerJobTitle: "Software Engineer",
        speakerCompany: "",
        date: "April 27, 2026",
      },
      {
        name: "DevOps",
        description:
          "At MEGFAIR, Eng. Mohamed Atef introduces the world of DevOps and Cloud, sharing real industry insights on building, deploying, and scaling modern systems while exploring today's technology landscape.",
        speakerName: "Mohamed Atef",
        speakerJobTitle: "CTO of rimmit",
        speakerCompany: "",
        date: "April 27, 2026",
      },
      {
        name: "UI/UX",
        description:
          "In this UI/UX session at MEGFAIR, Rahma Anwar shares practical industry insights, real experiences, and design perspectives that help participants understand the field, think strategically, and navigate their career paths with confidence.",
        speakerName: "Rahma Anwar",
        speakerJobTitle: "UI/UX Engineer",
        speakerCompany: "",
        date: "April 27, 2026",
      },
      {
        name: "Future of AI",
        description:
          "In this AI session at MEGFAIR, George Iskander shares real-world insights, practical applications, and industry perspectives on artificial intelligence, helping participants understand its opportunities, challenges, and impact across today's technology landscape.",
        speakerName: "George Iskander",
        speakerJobTitle: "AI Engineer",
        speakerCompany: "",
        date: "April 27, 2026",
      },
    ],
    sponsors: [
      { id: 1, name: "WE", logo: "/events/megfair-2-0/sponsors/we.jpg" },
      { id: 2, name: "Aman", logo: "/events/megfair-2-0/sponsors/aman.jpg" },
      {
        id: 3,
        name: "CamTrick",
        logo: "/events/megfair-2-0/sponsors/camtrick.jpg",
      },
      {
        id: 4,
        name: "Code Clouders",
        logo: "/events/megfair-2-0/sponsors/codeclouders.jpg",
      },
      {
        id: 5,
        name: "Eductly",
        logo: "/events/megfair-2-0/sponsors/eductly.jpg",
      },
      {
        id: 6,
        name: "Kellogg's Instant Noodles",
        logo: "/events/megfair-2-0/sponsors/kellogg's.jpg",
      },
      {
        id: 7,
        name: "ASPC Arabian Solution Beacon",
        logo: "/events/megfair-2-0/sponsors/manara.jpg",
      },
      {
        id: 8,
        name: "Native",
        logo: "/events/megfair-2-0/sponsors/native.jpg",
      },
      {
        id: 9,
        name: "QOVA TECH",
        logo: "/events/megfair-2-0/sponsors/qova.jpg",
      },
      {
        id: 10,
        name: "Tremoloo Learning Academy",
        logo: "/events/megfair-2-0/sponsors/tremoloo.jpg",
      },
      {
        id: 11,
        name: "UX Breakfast",
        logo: "/events/megfair-2-0/sponsors/UXbreakfast.jpg",
      },
    ],
    meta: [
      { icon: "calendar", label: "Date", value: "April 27–28, 2026" },
      { icon: "clock", label: "Time", value: "09:00 AM – 05:00 PM" },
      { icon: "map-pin", label: "Location", value: "Mansoura University" },
      {
        icon: "record",
        label: "Activities",
        value: "Career Sessions & Networking",
      },
    ],
  },
  {
    title: "MEGFAIR 1.0",
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
  {
    slug: "fight-fear",
    title: "Fight Fear",
    shortDescription:
      "Meet your future monster and discover tech fields through sessions that help you explore tracks you never dared to consider.",
    description:
      "Fight Fear took us to meet with your monster future and give tech sessions to discover more about our fields and explore the tracks you never dared to consider.",
    state: "closed",
    link: "/events/fight-fear",
    hideReadMore: true,
    images: [
      {
        src: "/events/Fight Fear.JPG",
        alt: "Fight Fear event poster – Halloween-themed tech exploration event",
        width: 1200,
        height: 628,
      },
    ],
    dateTime: "2019-10-29T09:00:00+02:00",
    location: "Mansoura University, Dakahlia, Egypt",
    meta: [
      { icon: "calendar", label: "Date", value: "October 2019" },
      { icon: "map-pin", label: "Location", value: "Mansoura University" },
      { icon: "record", label: "Focus", value: "Tech Tracks & Career Exploration" },
    ],
  },
  {
    slug: "faculty-of-atlantis",
    title: "Faculty Of Atlantis",
    shortDescription:
      "A campaign inviting students to explore and discover a future in FCIS they might not have considered.",
    description:
      "Faculty of Atlantis Our campaign invited to explore and discover a future you might not have considered, but one that could be perfect for you in FCIS.",
    state: "closed",
    link: "/events/faculty-of-atlantis",
    hideReadMore: true,
    images: [
      {
        src: "/events/Faculty of Atlantis.JPG",
        alt: "Faculty Of Atlantis event poster – explore your future at FCIS",
        width: 1200,
        height: 628,
      },
    ],
    dateTime: "2018-10-01T09:00:00+02:00",
    location: "Faculty of Computers and Information Sciences, Mansoura University",
    meta: [
      { icon: "calendar", label: "Date", value: "October 2018" },
      { icon: "map-pin", label: "Location", value: "FCIS, Mansoura University" },
      { icon: "record", label: "Focus", value: "Future & Career Exploration" },
    ],
  },
] as const;
