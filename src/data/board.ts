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
 */

/** Leadership team (fixed display order). */
export const highBoard: BoardMember[] = [
  {
    id: "high-omar-magdy",
    name: "Omar Magdy",
    position: "Leader",
    image: "/Board photos/High board/Leader - Omar Magdy.jpeg",
  },
  {
    id: "high-eman-salem",
    name: "Eman Salem",
    position: "Vice Leader",
    image: "/Board photos/High board/Vice Leader - Eman Salem.jpeg",
  },
  {
    id: "high-abdullah-salama",
    name: "Abdullah Salama",
    position: "Vice Leader",
    image: "/Board photos/High board/Vice Leader - Abdullah Salama.jpg",
  },
  {
    id: "high-mahmoud-yasser",
    name: "Mahmoud Yasser",
    position: "Technical Manager",
    image: "/Board photos/High board/Technical Manager - Mahmoud Yasser.jpeg",
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
  },
  {
    id: "hr-amira-mahmoud",
    name: "Amira Mahmoud",
    position: "HR Vice",
    image: "/Board photos/Non-Tech/HR/Vice HR - Amira Mahmoud.jpeg",
  },
  {
    id: "hr-shahd-oraby",
    name: "Shahd Oraby",
    position: "HR Vice",
    image: "/Board photos/Non-Tech/HR/Vice HR - Shahd Oraby.jpeg",
  },
  // PR
  {
    id: "pr-farah-mahmoud",
    name: "Farah Mahmoud",
    position: "PR Head",
    image: "/Board photos/Non-Tech/PR/Head PR - Farah Mahmoud.jpeg",
  },
  {
    id: "pr-ahmed-yousef",
    name: "Ahmed Yousef",
    position: "PR Vice",
    image: "/Board photos/Non-Tech/PR/Vice PR - Ahmed Youssef.jpeg",
  },
  {
    id: "pr-toqaa-shamaa",
    name: "Toqaa Shamaa",
    position: "PR Vice",
    image: "/Board photos/Non-Tech/PR/Vice PR - Toqaa Shamaa.jpeg",
  },
  // Media
  {
    id: "media-ammar-yasser",
    name: "Ammar Yasser",
    position: "Media Head",
    image: "/Board photos/Non-Tech/Media/Head Media - Ammar Yasser.jpg",
  },
  {
    id: "media-bashayer-khalifa",
    name: "Bashayer Khalifa",
    position: "Media Vice",
    image: "/Board photos/Non-Tech/Media/Vice Media - Bashayer Khalifa.jpeg",
  },
  // R&D
  {
    id: "rd-alia-harb",
    name: "Alia Harb",
    position: "R&D Head",
    image: "/Board photos/Non-Tech/R&D/Head R&D - Alia Harb.jpeg",
  },
  {
    id: "rd-ahmed-eldsoqy",
    name: "Ahmed Eldsoqy",
    position: "R&D Vice",
    image: "/Board photos/Non-Tech/R&D/Vice R&D - Ahmed Eldsoqy.jpeg",
  },
  {
    id: "rd-shams-mohamed",
    name: "Shams Mohamed",
    position: "R&D Vice",
    image: "/Board photos/Non-Tech/R&D/Vice R&D - Shams Mohamed.jpeg",
  },
  // PM
  {
    id: "pm-mariam-salem",
    name: "Mariam Salem",
    position: "PM Head",
    image: "/Board photos/Non-Tech/PM/Head PM - Mariam Salem.jpg",
  },
  {
    id: "pm-islam-mohamed",
    name: "Islam Mohamed",
    position: "PM Vice",
    image: "/Board photos/Non-Tech/PM/Vice PM - Islam Mohamed.jpeg",
  },
  {
    id: "pm-menna-dahab",
    name: "Menna Dahab",
    position: "PM Vice",
    image: "/Board photos/Non-Tech/PM/Vice PM - Menna Dahab.jpeg",
  },
  // EO
  {
    id: "eo-fares-huiseen",
    name: "Fares Huiseen",
    position: "EO Head",
    image: "/Board photos/Non-Tech/EO/Head EO - Fares Huiseen.jpeg",
  },
  {
    id: "eo-malak-salem",
    name: "Malak Salem",
    position: "EO Vice",
    image: "/Board photos/Non-Tech/EO/Vice EO - Malak Salem.jpeg",
  },
  {
    id: "eo-mohamed-emad",
    name: "Mohamed Emad",
    position: "EO Vice",
    image: "/Board photos/Non-Tech/EO/Vice EO - Mohamed Emad.jpeg",
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
  },
  {
    id: "frontend-sarah-essam",
    name: "Sarah Essam",
    position: "Frontend Supervisor",
    image: "/Board photos/Tech/Frontend/Supervisor Frontend - Sarah Essam.jpeg",
  },
  {
    id: "frontend-abdalrahman-maroof",
    name: "Abdalrahman Maroof",
    position: "Frontend Supervisor",
    image: "/Board photos/Tech/Frontend/Supervisor Frontend - abdalrahman maroof.jpeg",
  },
  // Backend
  {
    id: "backend-ahmed-mohamed",
    name: "Ahmed Mohamed",
    position: "Backend Mentor",
    image: "/Board photos/Tech/Backend/Mentor Backend - Ahmed Mohamed.jpg",
  },
  {
    id: "backend-mostafa-labib",
    name: "Mostafa Labib",
    position: "Backend Supervisor",
    image: "/Board photos/Tech/Backend/Supervisor Backend - Mostafa labib.jpeg",
  },
  // UI/UX
  {
    id: "uiux-ranim-tamer",
    name: "Ranim Tamer",
    position: "UI/UX Mentor",
    image: "/Board photos/Tech/UI-UX/Mentor UIUX - Ranim Tamer.jpg",
  },
  // Business
  {
    id: "business-salma-shaheen",
    name: "Salma Shaheen",
    position: "Business Mentor",
    image: "/Board photos/Tech/Business/Mentor Business - Salma Shaheen.jpeg",
  },
  {
    id: "business-seif-elboghdady",
    name: "Seif Elboghdady",
    position: "Business Supervisor",
    image: "/Board photos/Tech/Business/Supervisor Business - Seif Elboghdady.jpg",
  },
  // CS
  {
    id: "cs-manar-elhabal",
    name: "Manar Elhabal",
    position: "CS Mentor",
    image: "/Board photos/Tech/CS/Mentor CS - Manar Elhabal.jpg",
  },
  // DataScience
  {
    id: "ds-nourhan-tarek",
    name: "Nourhan Tarek",
    position: "Data Science Mentor",
    image: "/Board photos/Tech/DataScience/Mentor DataScience - Nourhan Tarek.jpeg",
  },
  // Flutter
  {
    id: "flutter-romisaa-fadl",
    name: "Romisaa Fadl",
    position: "Flutter Mentor",
    image: "/Board photos/Tech/Flutter/Mentor Flutter - Romisaa Fadl.jpeg",
  },
  {
    id: "flutter-abdelrahman-ayman",
    name: "Abdelrahman Ayman",
    position: "Flutter Supervisor",
    image: "/Board photos/Tech/Flutter/Supervisor Flutter - Abdelrahman Ayman.jpg",
  },
  {
    id: "flutter-abdallah-yasser",
    name: "Abdallah Yasser",
    position: "Flutter Supervisor",
    image: "/Board photos/Tech/Flutter/Supervisor Flutter - abdallah yasser.jpeg",
  },
];
