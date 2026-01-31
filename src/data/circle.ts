import { CircleData } from '@/types/circle';

/**
 * circles
 *
 * Complete data for all MEGA Circles (technical & non-technical tracks).
 *
 * Main Purpose:
 *   • Help applicants understand each circle/track before applying
 *   • Display circle cards / detailed pages in Circles section
 *   • Support decision-making during application process
 *
 * Key Characteristics:
 *   • Bilingual short + long descriptions
 *   • Classified as technical / non-technical
 *   • Contains link to detailed circle page
 *   • Ready for filtering (technical vs non-technical) & dynamic routing
 */
export const circles: CircleData[] = [
{
    slug: 'hr',
    title: 'HR',
    shortDescription: 'Your First Step Into the Team’s Core. Focuses on member support, growth, communication, and healthy team environment.',
    longDescription:
      `HR Circle – Your First Step Into the Team’s Core\n\n` +
      `Imagine opening a long-lost treasure chest and finding the very first clue that leads you down a path full of new discoveries. Every step along this journey reveals something bigger, and with every circle you explore, you uncover more about the different teams that shape our community. Today, we begin with the first stop on this adventure.\n\n` +
      `In any team or organization, every member plays a specific role that supports the overall mission. However, there is one group responsible for connecting these individuals, helping each person find the place where they can grow, thrive, and give their best. This role often becomes the hidden key behind the success of any company.\n\n` +
      `This is the role of Human Resources (HR).\n\n` +
      `The HR Circle focuses on the human side of the team. They provide support, guidance, and continuous development opportunities for every member. They serve as the bridge between leadership and the team, ensuring smooth communication and a healthy, collaborative environment.\n\n` +
      `HR is not only responsible for selecting the right people to join the team but also for helping members grow, monitoring their progress, and ensuring everyone maintains a healthy balance between personal life and responsibilities.\n\n` +
      `Key Responsibilities:\n• Selecting the right team members\n• Supporting personal and professional growth\n• Monitoring performance\n• Ensuring work-life balance\n\n` +
      `Required Skills:\n• Strong communication and active listening\n• The ability to understand people’s needs\n• Problem-solving with calmness and clarity\n• Organization and consistent follow-up\n• Flexibility and adaptability when facing new situations\n\n` +
      `If you’re passionate about this field and excited to contribute to meaningful development within the team, HR might be the perfect place to start.`,
    imageSrc: '/circles/hr.svg',
    type: 'non-technical',
    link: '/circles/hr',
  },
  {
    slug: 'pr-fr',
    title: 'PR & FR',
    shortDescription: 'Your Gateway to Communication and Influence. Builds public image, partnerships, events, and secures sponsorships.',
    longDescription:
      `PR & FR Circle – Your Gateway to Communication and Influence\n\n` +
      `A new stop on your journey, one that differs from all the previous ones. Here, the focus shifts toward communication and external impact. This is the station where you learn how to present the team to the world, shape public impressions, and build strong relationships with audiences and partners.\n\n` +
      `The PR & FR Circle, which stands for Public Relations and Fundraising, does more than communicate with the outside world. It works on building a positive and unified image for the team, ensuring that every message reflects its identity and values.\n\n` +
      `The PR side handles communication, event organization, and creating opportunities for collaboration with new partners.\nThe FR side focuses on securing the right financial support for events and initiatives by engaging with sponsors and potential donors.\n\n` +
      `Together, PR and FR ensure that the team’s voice reaches the public effectively and that the team has the resources it needs to bring its goals to life.\n\n` +
      `PR Focus:\n• Communication and public messaging\n• Event organization\n• Building partnerships\n\n` +
      `FR Focus:\n• Securing financial support\n• Engaging sponsors and donors\n\n` +
      `Required Skills:\n• Creativity in communication\n• Strong relationship-building abilities\n• Quick thinking and adaptability in different situations\n• Negotiation and persuasion skills\n\n` +
      `If you have strong communication skills, enjoy building connections, love organizing impactful events, and know how to secure the support needed to bring a vision to reality, then this circle might be the perfect place for you.`,
    imageSrc: '/circles/pr&fr.svg',
    type: 'non-technical',
    link: '/circles/pr-fr',
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    shortDescription: 'Where Ideas Become Achievable Plans. Transforms visions into structured projects with planning and efficiency.',
    longDescription:
      `Project Management Circle – Where Ideas Become Achievable Plans\n\n` +
      `Another stop on your journey, one that takes you behind the scenes to where ideas turn into structured plans and real outcomes. This is the station where direction, organization, and strategy come together to guide the team toward its goals.\n\n` +
      `The Project Management Circle is responsible for transforming visions into clear, actionable steps. It ensures that every project begins with a solid plan, moves through each phase smoothly, and reaches completion with high quality and efficiency.\n\n` +
      `Project Management oversees timelines, assigns responsibilities, monitors progress, and ensures that every member understands their role. The team acts as the backbone of workflow, maintaining order while creating an environment that supports productivity and creativity.\n\n` +
      `This circle also focuses on risk management, problem-solving, and making sure resources are used effectively. It helps the team stay aligned, organized, and capable of overcoming challenges along the way.\n\n` +
      `Key Responsibilities:\n• Developing project plans\n• Managing timelines and tasks\n• Monitoring progress\n• Risk management and problem-solving\n\n` +
      `Required Skills:\n• Strong organization and planning\n• Effective communication\n• Leadership and the ability to guide a team\n• Analytical thinking and problem-solving\n• Flexibility and adaptability\n\n` +
      `If you enjoy planning, coordinating tasks, turning ideas into structured steps, and helping teams achieve successful outcomes, then the Project Management Circle could be the perfect place for you.`,
    imageSrc: '/circles/pm.svg',
    type: 'non-technical',
    link: '/circles/project-management',
  },
  {
    slug: 'rnd',
    title: 'R&D',
    shortDescription: 'The Gateway to Exploration and Innovation. Focuses on research, development, testing, and content creation.',
    longDescription:
      `R&D Circle – The Gateway to Exploration and Innovation\n\n` +
      `We’ve reached a new and exciting stop in your journey, a place that opens the doors of exploration and innovation. Here, we’re not talking about communicating with the outside world, but about diving deep into ideas and development. This stop is your gateway to the world of Research & Development, where ideas move from imagination to reality, and where new solutions and continuous improvements come to life.\n\n` +
      `R&D, or Research & Development, focuses on developing products, ideas, and services. Here, you conduct in-depth research, test new concepts, improve performance, and create innovative solutions. This field builds the foundation for any new technology or idea and plays a major role in the continuous growth of any team or company.\n\n` +
      `Within this circle comes Content Creation, which focuses on crafting and shaping creative ideas in a way that attracts the audience and delivers the message clearly and effectively. It turns raw thoughts into engaging content that supports the development process and strengthens the team’s vision.\n\n` +
      `Areas Covered:\n• Research and testing\n• Developing new concepts\n• Improving performance\n• Content creation for idea communication\n\n` +
      `Required Skills:\n• Love for learning and discovery\n• Analytical skills\n• Innovation and creativity\n\n` +
      `Anyone working in R&D needs to have a passion for research, a love for learning and discovery, and the ability to innovate new solutions. Strong analytical and problem solving skills are essential to transform ideas into something real and valuable.\n\n` +
      `If you feel you have the drive to explore, develop, and help turn ideas into reality, then this circle might be the perfect place for you to start your journey with MEGA and grow with us.`,
    imageSrc: '/circles/r&d.svg',
    type: 'non-technical',
    link: '/circles/rnd',
  },
  {
    slug: 'media',
    title: 'Media',
    shortDescription: 'The Power of Visual Identity and Creative Impact. Handles graphic design, video editing, and visual storytelling.',
    longDescription:
      `Media Circle – The Power of Visual Identity and Creative Impact\n\n` +
      `The Media Circle is where creativity meets communication, and where ideas are transformed into visuals that speak louder than words.\n\n` +
      `It’s the circle responsible for shaping how the world sees the team, building a strong visual identity, crafting engaging stories, and delivering messages in a way that inspires, attracts, and leaves a lasting impression.\n\n` +
      `Media is the creative force that connects the team to its audience, enhances brand presence, and ensures that every idea finds its perfect visual expression.\n\n` +
      `The circle consists of 2 main sections:\n1. Graphic Design – Where concepts turn into striking visuals that reflect the team’s identity and vision.\n2. Video Editing & Motion Design – Where visuals come to life through movement, storytelling, and dynamic content that captures attention and elevates the message.\n\n` +
      `Ideal For:\n• Creative thinkers\n• Visual storytellers\n• Design enthusiasts\n\n` +
      `If you're passionate about creativity, design, and visual storytelling, the Media Circle is your chance to bring ideas to life and shape the image that represents the team to the world.`,
    imageSrc: '/circles/media.svg',
    type: 'non-technical',
    link: '/circles/media',
  },
  {
    slug: 'event-operations',
    title: 'Event Operations',
    shortDescription: 'The Heartbeat Behind Every Successful Event. Manages full event lifecycle from planning to execution.',
    longDescription:
      `Event Operations Circle – The Heartbeat Behind Every Successful Event\n\n` +
      `Our final stop on this journey is not the end but the beginning of a new stage filled with creativity and organization. This is the station that moves every detail from behind the scenes and ensures everything runs in a way that reflects the team’s identity.\n\n` +
      `With the Event Operations Circle, you discover how to manage every step and make every event appear in the best possible way.\n\n` +
      `The Event Operations Circle, or EO, handles the full process of event management. From initial planning to professional on-ground execution to post-event evaluation, this team makes sure every detail is aligned and every moment goes according to plan.\n\n` +
      `EO works closely with all circles, coordinates between members, and ensures that every action matches the event’s vision. You can think of EO as the beating heart that keeps every event organized and successful.\n\n` +
      `Operations is not only about the event day but also about careful preparation, attention to detail, and thinking ahead to achieve the best possible outcome.\n\n` +
      `Key Responsibilities:\n• Pre-event planning\n• On-ground execution\n• Post-event evaluation\n\n` +
      `Required Skills:\n• Quick thinking\n• Strong organizational abilities\n• Problem-solving skills\n• The ability to work under pressure\n• A talent for creating smooth and memorable event experiences\n\n` +
      `If you feel this station matches your skills and you’re ready to be part of the team that brings every event to life from behind the scenes, make sure to join the form and take your place in the EO Circle.`,
    imageSrc: '/circles/eo.svg',
    type: 'non-technical',
    link: '/circles/event-operations',
  },
  {
    slug: 'computer-science',
    title: 'Computer Science',
    shortDescription: 'The Foundation of Every Programmer. Covers programming fundamentals, logic, and problem-solving.',
    longDescription:
      `Computer Science Circle – The Foundation of Every Programmer\n\n` +
      `You’ve arrived at a new stop on your journey, the station that forms the core of every programmer. This is the Computer Science station, where we explore the fundamentals behind the applications and technologies we use every day. Here, you begin to understand how technology works and how it evolves at a rapid pace.\n\n` +
      `Computer Science focuses on programming, mathematics, and logical thinking. It is the backbone that enables developers to build efficient technical solutions. You can think of it as the base of modern technological advancements bringing logic and code together.\n\n` +
      `One of the key strengths of the CS track is its ability to tackle complex problems, opening endless doors for innovation and creativity across various fields. You learn how to build programs, write code, and solve advanced challenges using computational thinking.\n\n` +
      `This track empowers you to create software and systems that solve real problems and support daily operations. It also connects to major fields such as Backend Development, Data Science, and more.\n\n` +
      `Focus Areas:\n• Programming foundations\n• Mathematics and logic\n• Problem-solving\n• Software fundamentals\n\n` +
      `If you’re searching for a deeper understanding of the programming world and eager to develop innovative technical solutions, then the Computer Science Circle is the perfect place to begin your journey.`,
    imageSrc: '/circles/cs.svg',
    type: 'technical',
    link: '/circles/computer-science',
  },
  {
    slug: 'data-science',
    title: 'Data Science',
    shortDescription: 'Where Insights Lead the Way. Transforms data into meaningful insights using analysis and AI.',
    longDescription:
      `Data Science Circle – Where Insights Lead the Way\n\n` +
      `As we continue our journey in search of real value, we move forward to another station filled with discovery and deep thinking. This time, we arrive at the Data Science station, one of the most exciting tracks for those who love analysis and uncovering hidden patterns.\n\n` +
      `Data Science focuses on analyzing large datasets and transforming them into meaningful insights that support informed, fact-based decisions. It provides powerful tools to interpret massive amounts of data collected from applications, websites, and even our daily activities.\n\n` +
      `Here, you explore how data can be studied scientifically and used to enhance products and improve user experiences. In this track, you learn how to build analytical models, discover hidden trends, and apply artificial intelligence techniques for deeper, smarter data analysis.\n\n` +
      `Whether you enjoy statistics or have a passion for programming, Data Science brings both worlds together and opens wide opportunities across fields like marketing, healthcare, and technology.\n\n` +
      `Data Science relies on methods and tools that help us understand complex data. From statistical analysis of large datasets to building predictive models that guide decisions and shape future strategies.\n\n` +
      `Key Areas:\n• Data analysis\n• Statistics\n• Predictive modeling\n• AI techniques\n\n` +
      `If you're eager to uncover insights, understand patterns, and turn raw data into impactful solutions, then the Data Science Circle is your ideal stop on this journey.`,
    imageSrc: '/circles/data-science.svg',
    type: 'technical',
    link: '/circles/data-science',
  },
  {
    slug: 'ui-ux',
    title: 'UI/UX',
    shortDescription: 'Where Ideas Become Experiences. Creates intuitive, visually appealing user interfaces and journeys.',
    longDescription:
      `UI/UX Circle | Where Ideas Become Experiences\n\n` +
      `As our journey continues in search of real value, we arrive at a new and essential station. A station that takes us into the world of crafting unique and meaningful experiences.\n\n` +
      `This is the UI/UX station, where ideas are transformed into interactive journeys that make users’ lives easier and turn apps and websites into more than just lines of code. Here, we learn how to turn small details into visual experiences that leave a lasting impression and make every step inside a digital product enjoyable.\n\n` +
      `UI/UX focuses on both User Experience and User Interface design. It is a field that blends creativity with psychology, helping us create interfaces that are visually appealing and simple to use at the same time.\n\n` +
      `UI is about how the product looks, while UX shapes how the user moves through the product and how smooth and comfortable their experience is.\n\n` +
      `Through this circle, we aim to create innovative designs for websites and applications that offer clear, intuitive, and accessible experiences. This includes crafting main pages, choosing colors, arranging elements on screens, and much more.\n\n` +
      `What You Learn:\n• Visual design principles\n• User flows and journeys\n• Interface layout and structure\n• Creative problem-solving\n\n` +
      `If you are passionate about turning ideas into visual journeys, designing smooth user flows, and building products that users love, then the UI/UX Circle is the perfect stop for you on this adventure.`,
    imageSrc: '/circles/ui-ux.svg',
    type: 'technical',
    link: '/circles/ui-ux',
  },
  {
    slug: 'backend-development',
    title: 'Backend Development',
    shortDescription: 'The Power Behind Every Application. Manages data, servers, APIs, and security.',
    longDescription:
      `Backend Development Circle | The Power Behind Every Application\n\n` +
      `We arrive at a new station in our journey to uncover the true treasure. A station that requires strength, focus, and a deep dive into the world of data to discover the value hidden within.\n\n` +
      `This is the Backend Development station, where all the invisible processes take place to ensure that applications run efficiently and smoothly.\n\n` +
      `Backend Development is the foundation on which every website and application stands. It is responsible for managing data, communicating with servers, processing user requests, and maintaining speed and security.\n\n` +
      `The backend works behind the scenes, making sure everything functions properly and that data moves safely and accurately between the system and the database.\n\n` +
      `In this circle, we explore how to build strong systems for managing data, develop powerful and reliable APIs, and work with databases that act as the backbone of every application. Your work here ensures that everything operates smoothly and securely in the background.\n\n` +
      `You Will Explore:\n• Databases\n• APIs\n• Server logic\n• System performance and security\n\n` +
      `If you have the passion to explore the hidden world that powers applications, this circle is your ideal destination on the journey.`,
    imageSrc: '/circles/backend.svg',
    type: 'technical',
    link: '/circles/backend-development',
  },
  {
    slug: 'frontend-development',
    title: 'Frontend Development',
    shortDescription: 'Where Ideas Turn Into Visual Experiences. Builds interactive, responsive interfaces.',
    longDescription:
      `Frontend Development Circle | Where Ideas Turn Into Visual Experiences\n\n` +
      `We have reached the final station of our journey. A journey that started long ago, filled with creativity, exploration, and exciting challenges. Now we stand at the last stop before reaching the true treasure we have been searching for.\n\n` +
      `Here, we step into a world full of colors and visual creativity. This is the Frontend Development station, where you get the chance to design and build interfaces that capture attention and create smooth, enjoyable user experiences.\n\n` +
      `Frontend is not just about layout design. It is the art of turning ideas and static visuals into interactive realities that work across all devices and screens.\n\n` +
      `You learn how to work with colors, typography, layout, and visuals to create seamless and engaging user experiences. Frontend brings together HTML, CSS, JavaScript, and many modern tools and frameworks that help you build dynamic, responsive interfaces.\n\n` +
      `This field is more than just UI elements. It is your gateway to a limitless world of creativity across applications, websites, and digital platforms.\n\n` +
      `Core Topics:\n• HTML, CSS, JavaScript\n• UI frameworks\n• Building responsive and dynamic interfaces\n\n` +
      `If you want to be part of the team that transforms static pages into captivating and memorable user experiences, this circle is your perfect destination.`,
    imageSrc: '/circles/frontend.svg',
    type: 'technical',
    link: '/circles/frontend-development',
  },
  {
    slug: 'flutter',
    title: 'Flutter',
    shortDescription: 'One Code, Endless Platforms. Builds cross-platform apps with high performance and elegant UI.',
    longDescription:
      `Flutter Development Circle | One Code, Endless Platforms\n\n` +
      `We have reached a new station in our journey. A different stop that brings together programming and interface design, where you learn how to build multi-platform applications using a single codebase while maintaining both performance and visual elegance.\n\n` +
      `This is the Flutter station.\n\n` +
      `Flutter is not just a framework. It is a powerful toolkit that allows you to build applications that run on Android, iOS, web, and even desktop. With its built-in tools and smooth design system, you can achieve a perfect balance between beauty and performance in your applications.\n\n` +
      `Throughout this journey, you will learn how to turn your idea into a real application using Flutter and Dart. You will discover how this powerful tool enables you to build apps for every platform with ease.\n\n` +
      `Flutter stands out for its fast development environment, dynamic UI, and seamless performance. It opens the door for you to build high-quality applications with impressive user experiences, no matter what platform you target.\n\n` +
      `What You Learn:\n• Dart programming\n• Cross-platform development\n• UI design with Flutter\n\n` +
      `If you want to be part of a team that blends programming with modern and creative app design, this circle is the perfect fit for you.`,
    imageSrc: '/circles/flutter.svg',
    type: 'technical',
    link: '/circles/flutter',
  },
  {
    slug: 'business-analysis',
    title: 'Business Analysis',
    shortDescription: 'Where Ideas Become Real Solutions. Gathers requirements and creates structured plans.',
    longDescription:
      `Business Analysis Circle | Where Ideas Become Real Solutions\n\n` +
      `We’ve reached a new station in our journey. A station that brings together analytical thinking and understanding market needs. A place where ideas turn into clear, actionable plans.\n\n` +
      `This is the Business Analysis track.\n\n` +
      `Business Analysis is the field where we identify real problems, understand requirements, and transform ideas into structured solutions that help teams and companies build successful products.\n\n` +
      `It focuses on gathering information, analyzing data, studying user behavior, and understanding project goals to create the best possible outcome.\n\n` +
      `Throughout this circle, you will learn how to define project requirements, write professional documentation, and design project flows such as user stories, use cases, and workflows. You will also explore essential analytical tools like the Business Model Canvas, SWOT Analysis, and process mapping.\n\n` +
      `Business Analysis combines strategic thinking, effective communication, and problem solving. It acts as the bridge between technical teams and clients, ensuring the final product meets its objectives and delivers real value.\n\n` +
      `Focus Areas:\n• Requirement gathering\n• Documentation\n• User stories and use cases\n• Analytical tools (SWOT, BMC)\n\n` +
      `If you are passionate about understanding how projects work, analyzing needs, and creating practical solutions built on data and clear goals, then the Business Analysis track is the place for you.`,
    imageSrc: '/circles/cs.svg',
    type: 'technical',
    link: '/circles/business-analysis',
  },
] as const;