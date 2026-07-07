import { BoardMember } from '@/types/board';

/**
 * Board Data
 *
 * Members of the MEGA board grouped into three tiers, each rendered as its own
 * carousel row in the "Meet Our Board" section:
 *   • highBoard        – leadership team
 *   • nonTechnicalBoard – non-technical circles (HR, PR, Media, R&D, PM, EO)
 *   • technicalBoard    – technical circles (Frontend, Backend, UI/UX, Business, CS, DataScience, Flutter)
 *
 * Ordering rules:
 *   • High board: Omar Magdy → Eman Salem → Abdullah Salama → Mahmoud Yasser
 *   • Non-technical & technical: grouped by circle in the order above, and within
 *     each circle the Head/Mentor comes first, followed by their Vices/Supervisors.
 *
 * Image paths point to files inside /public/Board photos.
 * Each member links to their LinkedIn profile via the `linkedin` field.
 */

/** Leadership team (fixed display order). */
export const highBoard: BoardMember[] = [
  {
    id: "high-omar-magdy",
    name: "Omar Magdy",
    position: "Leader",
    image: "/Board photos/High board/Leader - Omar Magdy.jpeg",
    linkedin: "https://www.linkedin.com/in/omar-magdy-86b19b2b2/",
  },
  {
    id: "high-eman-salem",
    name: "Eman Salem",
    position: "Vice Leader",
    image: "/Board photos/High board/Vice Leader - Eman Salem.jpeg",
    linkedin: "https://www.linkedin.com/in/eman-salem-9794b5295/",
  },
  {
    id: "high-abdullah-salama",
    name: "Abdullah Salama",
    position: "Vice Leader",
    image: "/Board photos/High board/Vice Leader - Abdullah Salama.jpg",
    linkedin: "https://www.linkedin.com/in/abdullah-ahmed-salama-961a97303/",
  },
  {
    id: "high-mahmoud-yasser",
    name: "Mahmoud Yasser",
    position: "Technical Manager",
    image: "/Board photos/High board/Technical Manager - Mahmoud Yasser.jpeg",
    linkedin: "https://www.linkedin.com/in/mahmoudyasser76/",
  },
];

/** Non-technical board — circles ordered: HR, PR, Media, R&D, PM, EO. */
export const nonTechnicalBoard: BoardMember[] = [
  // HR
  {
    id: "hr-mariam-rashad",
    name: "Mariam Rashad",
    position: "HR Head",
    image: "/Board photos/Non-Tech/HR/Head HR - Mariam Rashad.jpeg",
    linkedin: "https://www.linkedin.com/in/mariam-rashad/",
  },
  {
    id: "hr-amira-mahmoud",
    name: "Amira Mahmoud",
    position: "HR Vice",
    image: "/Board photos/Non-Tech/HR/Vice HR - Amira Mahmoud.jpeg",
    linkedin: "https://www.linkedin.com/in/amira-mahmoud-annaggar/",
  },
  {
    id: "hr-shahd-oraby",
    name: "Shahd Oraby",
    position: "HR Vice",
    image: "/Board photos/Non-Tech/HR/Vice HR - Shahd Oraby.jpeg",
    linkedin: "https://www.linkedin.com/in/shahd-orapy-76451a341/",
  },
  // PR
  {
    id: "pr-farah-mahmoud",
    name: "Farah Mahmoud",
    position: "PR Head",
    image: "/Board photos/Non-Tech/PR/Head PR - Farah Mahmoud.jpeg",
    linkedin: "https://www.linkedin.com/in/farah-mahmoud-b67530336/",
  },
  {
    id: "pr-ahmed-yousef",
    name: "Ahmed Yousef",
    position: "PR Vice",
    image: "/Board photos/Non-Tech/PR/Vice PR - Ahmed Youssef.jpeg",
    linkedin: "https://www.linkedin.com/in/ahmed-yusef-b383bb336/",
  },
  {
    id: "pr-toqaa-shamaa",
    name: "Toqaa Shamaa",
    position: "PR Vice",
    image: "/Board photos/Non-Tech/PR/Vice PR - Toqaa Shamaa.jpeg",
    linkedin: "https://www.linkedin.com/in/toqa-shamaa-102533336/",
  },
  // Media
  {
    id: "media-ammar-yasser",
    name: "Ammar Yasser",
    position: "Media Head",
    image: "/Board photos/Non-Tech/Media/Head Media - Ammar Yasser.jpg",
    linkedin: "https://www.linkedin.com/in/ammar-yasser-36664233b/",
  },
  {
    id: "media-bashayer-khalifa",
    name: "Bashayer Khalifa",
    position: "Media Vice",
    image: "/Board photos/Non-Tech/Media/Vice Media - Bashayer Khalifa.jpeg",
    linkedin: "https://www.linkedin.com/in/bashayer-khalefa-72b41533b/",
  },
  // R&D
  {
    id: "rd-alia-harb",
    name: "Alia Harb",
    position: "R&D Head",
    image: "/Board photos/Non-Tech/R&D/Head R&D - Alia Harb.jpeg",
    linkedin: "https://www.linkedin.com/in/alia-harb-ba660133b/",
  },
  {
    id: "rd-ahmed-eldsoqy",
    name: "Ahmed Eldsoqy",
    position: "R&D Vice",
    image: "/Board photos/Non-Tech/R&D/Vice R&D - Ahmed Eldsoqy.jpeg",
    linkedin: "https://www.linkedin.com/in/ahmed-aldosoqi-a2220833b/",
  },
  {
    id: "rd-shams-mohamed",
    name: "Shams Mohamed",
    position: "R&D Vice",
    image: "/Board photos/Non-Tech/R&D/Vice R&D - Shams Mohamed.jpeg",
    linkedin: "https://www.linkedin.com/in/shams-mohammed-085570330/",
  },
  // PM
  {
    id: "pm-mariam-salem",
    name: "Mariam Salem",
    position: "PM Head",
    image: "/Board photos/Non-Tech/PM/Head PM - Mariam Salem.jpg",
    linkedin: "https://www.linkedin.com/in/mariam-salem-uix/",
  },
  {
    id: "pm-islam-mohamed",
    name: "Islam Mohamed",
    position: "PM Vice",
    image: "/Board photos/Non-Tech/PM/Vice PM - Islam Mohamed.jpeg",
    linkedin: "https://www.linkedin.com/in/islam-mohamed-5562472b2/",
  },
  {
    id: "pm-menna-dahab",
    name: "Menna Dahab",
    position: "PM Vice",
    image: "/Board photos/Non-Tech/PM/Vice PM - Menna Dahab.jpeg",
    linkedin: "https://www.linkedin.com/in/mennadahab/",
  },
  // EO
  {
    id: "eo-fares-huiseen",
    name: "Fares Huiseen",
    position: "EO Head",
    image: "/Board photos/Non-Tech/EO/Head EO - Fares Huiseen.jpeg",
    linkedin: "https://www.linkedin.com/in/fares-alrafey-97094433b/",
  },
  {
    id: "eo-malak-salem",
    name: "Malak Salem",
    position: "EO Vice",
    image: "/Board photos/Non-Tech/EO/Vice EO - Malak Salem.jpeg",
    linkedin: "https://www.linkedin.com/in/malk-alsayed-b0a1a7375/",
  },
  {
    id: "eo-mohamed-emad",
    name: "Mohamed Emad",
    position: "EO Vice",
    image: "/Board photos/Non-Tech/EO/Vice EO - Mohamed Emad.jpeg",
    linkedin: "https://www.linkedin.com/in/mohamed-emad-954769377",
  },
];

/** Technical board — circles ordered: Frontend, Backend, UI/UX, Business, CS, DataScience, Flutter. */
export const technicalBoard: BoardMember[] = [
  // Frontend
  {
    id: "frontend-mahmoud-ramadan",
    name: "Mahmoud Ramadan",
    position: "Frontend Mentor",
    image: "/Board photos/Tech/Frontend/Mentor Frontend - Mahmoud Ramadan.jpeg",
    linkedin: "https://www.linkedin.com/in/mahmoud-ramadan21/",
  },
  {
    id: "frontend-sarah-essam",
    name: "Sarah Essam",
    position: "Frontend Supervisor",
    image: "/Board photos/Tech/Frontend/Supervisor Frontend - Sarah Essam.jpeg",
    linkedin: "https://www.linkedin.com/in/sarah-essam-175018377/",
  },
  {
    id: "frontend-abdalrahman-maroof",
    name: "Abdalrahman Maroof",
    position: "Frontend Supervisor",
    image: "/Board photos/Tech/Frontend/Supervisor Frontend - abdalrahman maroof.jpeg",
    linkedin: "https://www.linkedin.com/in/abdelrahman-ma3rouf/",
  },
  // Backend
  {
    id: "backend-ahmed-mohamed",
    name: "Ahmed Mohamed",
    position: "Backend Mentor",
    image: "/Board photos/Tech/Backend/Mentor Backend - Ahmed Mohamed.jpg",
    linkedin: "https://www.linkedin.com/in/a7medmo25/?locale=en",
  },
  {
    id: "backend-mostafa-labib",
    name: "Mostafa Labib",
    position: "Backend Supervisor",
    image: "/Board photos/Tech/Backend/Supervisor Backend - Mostafa labib.jpeg",
    linkedin: "https://www.linkedin.com/in/mostafa-labib-0xfff/",
  },
  // UI/UX
  {
    id: "uiux-ranim-tamer",
    name: "Ranim Tamer",
    position: "UI/UX Mentor",
    image: "/Board photos/Tech/UI-UX/Mentor UIUX - Ranim Tamer.jpg",
    linkedin: "https://www.linkedin.com/in/ranim-tamer-uix/",
  },
  // Business
  {
    id: "business-salma-shaheen",
    name: "Salma Shaheen",
    position: "Business Mentor",
    image: "/Board photos/Tech/Business/Mentor Business - Salma Shaheen.jpeg",
    linkedin: "https://www.linkedin.com/in/salma-shaheen-9a5b84231/",
  },
  {
    id: "business-seif-elboghdady",
    name: "Seif Elboghdady",
    position: "Business Supervisor",
    image: "/Board photos/Tech/Business/Supervisor Business - Seif Elboghdady.jpg",
    linkedin: "https://www.linkedin.com/in/seifelboghdady/",
  },
  // CS
  {
    id: "cs-manar-elhabal",
    name: "Manar Elhabal",
    position: "CS Mentor",
    image: "/Board photos/Tech/CS/Mentor CS - Manar Elhabal.jpg",
    linkedin: "https://www.linkedin.com/in/manar-elhabbal7/",
  },
  // DataScience
  {
    id: "ds-nourhan-tarek",
    name: "Nourhan Tarek",
    position: "Data Science Mentor",
    image: "/Board photos/Tech/DataScience/Mentor DataScience - Nourhan Tarek.jpeg",
    linkedin: "https://www.linkedin.com/in/nourhan-tarek-7994a32bb/",
  },
  // Flutter
  {
    id: "flutter-romisaa-fadl",
    name: "Romisaa Fadl",
    position: "Flutter Mentor",
    image: "/Board photos/Tech/Flutter/Mentor Flutter - Romisaa Fadl.jpeg",
    linkedin: "https://www.linkedin.com/in/romisaafadel/",
  },
  {
    id: "flutter-abdelrahman-ayman",
    name: "Abdelrahman Ayman",
    position: "Flutter Supervisor",
    image: "/Board photos/Tech/Flutter/Supervisor Flutter - Abdelrahman Ayman.jpg",
    linkedin: "https://www.linkedin.com/in/abdelrahman-ayman-elassy/",
  },
  {
    id: "flutter-abdallah-yasser",
    name: "Abdallah Yasser",
    position: "Flutter Supervisor",
    image: "/Board photos/Tech/Flutter/Supervisor Flutter - abdallah yasser.jpeg",
    linkedin: "https://www.linkedin.com/in/abdullah-yasser-06a021325/",
  },
];
