import { PodcastEpisode } from "@/types/episode";

/**
 * season1Episodes / season2Episodes
 *
 * MEGA Podcast (MEGast) episodes grouped by season.
 *
 * Main Purpose:
 *   • Populate the MEGA Podcasts section with poster-style episode cards
 *   • Provide each episode's cover image and its "Watch Now" video link
 *
 * Key Characteristics:
 *   • One entry per episode (Season 1 & Season 2, episodes 1–8)
 *   • Image paths point to /public/Podcast/... (spaces encoded in the card)
 *   • Links open the full episode on YouTube
 */
export const season2Episodes: PodcastEpisode[] = [
  {
    id: "s2e1",
    season: 2,
    episode: 1,
    title: "From Graduation Project to Startup",
    guest: "MEGAST S02 E01",
    imageSrc: "/Podcast/SEASON 2/Episode1/From Graduation Project To Startup .PNG",
    imageAlt: "From Graduation Project to Startup episode poster",
    link: "https://www.youtube.com/watch?v=Uu553EFht8Q&list=PLTZ24f4xNtFR35nRtPSEPLEw553ObOYSs&index=1&pp=iAQB",
  },
  {
    id: "s2e2",
    season: 2,
    episode: 2,
    title: "Soft Skills",
    guest: "with Eng. Moaz Zahran",
    imageSrc: "/Podcast/SEASON 2/Episode2/Soft Skills .JPG",
    imageAlt: "Soft Skills episode poster",
    link: "https://www.youtube.com/watch?v=1v_qS0G5nOQ&list=PLTZ24f4xNtFR35nRtPSEPLEw553ObOYSs&index=2&pp=iAQB0gcJCUwLAYcqIYzv",
  },
  {
    id: "s2e3",
    season: 2,
    episode: 3,
    title: "Personal Branding",
    guest: "with Dr. Seif Mohamed",
    imageSrc: "/Podcast/SEASON 2/Episode3/Personal Branding.JPG",
    imageAlt: "Personal Branding episode poster",
    link: "https://www.youtube.com/watch?v=yuW2NWs9yXo&list=PLTZ24f4xNtFR35nRtPSEPLEw553ObOYSs&index=3&t=1864s&pp=iAQB",
  },
  {
    id: "s2e4",
    season: 2,
    episode: 4,
    title: "Technology Is Not Just Code",
    guest: "with Eng. Fares El-Badrawy & Eng. Ahmed Nafe",
    imageSrc: "/Podcast/SEASON 2/Episode4/Technology is not just code .PNG",
    imageAlt: "Technology Is Not Just Code episode poster",
    link: "https://www.youtube.com/watch?v=SseI7uE6wsU&list=PLTZ24f4xNtFR35nRtPSEPLEw553ObOYSs&index=4&t=166s&pp=iAQB",
  },
  {
    id: "s2e5",
    season: 2,
    episode: 5,
    title: "Project Management",
    guest: "with Eng. Mohamed El-Morsy",
    imageSrc: "/Podcast/SEASON 2/Episode5/Project Management  .PNG",
    imageAlt: "Project Management episode poster",
    link: "https://www.youtube.com/watch?v=ylJJrbWhA80&list=PLTZ24f4xNtFR35nRtPSEPLEw553ObOYSs&index=5&pp=iAQB",
  },
  {
    id: "s2e6",
    season: 2,
    episode: 6,
    title: "Content Creation & Freelancing",
    guest: "with Eng. Ahmed El-Baheiry",
    imageSrc: "/Podcast/SEASON 2/Episode6/Content Creation & Freelancing .PNG",
    imageAlt: "Content Creation & Freelancing episode poster",
    link: "https://www.youtube.com/watch?v=3ffRpINGqK4&list=PLTZ24f4xNtFR35nRtPSEPLEw553ObOYSs&index=6&pp=iAQB",
  },
  {
    id: "s2e7",
    season: 2,
    episode: 7,
    title: "Business & Technology",
    guest: "with Eng. Hamza Abu Al-Khair",
    imageSrc: "/Podcast/SEASON 2/Episode7/Business & Technology .PNG",
    imageAlt: "Business & Technology episode poster",
    link: "https://www.youtube.com/watch?v=n1AZUMKU_I0&list=PLTZ24f4xNtFR35nRtPSEPLEw553ObOYSs&index=8&t=86s&pp=iAQB",
  },
  {
    id: "s2e8",
    season: 2,
    episode: 8,
    title: "CIS Roadmap",
    guest: "with Dr. Mohamed Mahfouz",
    imageSrc: "/Podcast/SEASON 2/Episode8/CIS Roadmap .PNG",
    imageAlt: "CIS Roadmap episode poster",
    link: "https://www.youtube.com/watch?v=uXbUbUq1yLE&list=PLTZ24f4xNtFR35nRtPSEPLEw553ObOYSs&index=9&t=636s&pp=iAQB",
  },
];

export const season1Episodes: PodcastEpisode[] = [
  {
    id: "s1e1",
    season: 1,
    episode: 1,
    title: "Time Management",
    guest: "with Dr. Mostafa Kandil",
    imageSrc: "/Podcast/SEASON 1/Episode1/TIME MANAGEMENT.jpg",
    imageAlt: "Time Management episode poster",
    link: "https://www.youtube.com/watch?v=GQr44ah--LA&list=PLTZ24f4xNtFQDVWLY9CXVwIShemeORzkm&index=3&pp=iAQB",
  },
  {
    id: "s1e2",
    season: 1,
    episode: 2,
    title: "Learn How to Learn",
    guest: "with Eng. Amall Elomda",
    imageSrc: "/Podcast/SEASON 1/Episode2/LEARN HOW TO LEARN.webp",
    imageAlt: "Learn How to Learn episode poster",
    link: "https://www.youtube.com/watch?v=ZJ_nlnRA6-4&list=PLTZ24f4xNtFQDVWLY9CXVwIShemeORzkm&index=4&pp=iAQB",
  },
  {
    id: "s1e3",
    season: 1,
    episode: 3,
    title: "Journey Between Science and Technology",
    guest: "with Dr. Sara El-Sayed El-Metwaly",
    imageSrc: "/Podcast/SEASON 1/Episode3/JOURNEY BETWEEN SCIENCE AND TECHNOLOGY.webp",
    imageAlt: "Journey Between Science and Technology episode poster",
    link: "https://www.youtube.com/watch?v=KmKc2r3nwsY&list=PLTZ24f4xNtFQDVWLY9CXVwIShemeORzkm&index=5&pp=iAQB",
  },
  {
    id: "s1e4",
    season: 1,
    episode: 4,
    title: "Theory of Everything",
    guest: "with Eng. Mohamed Hashem",
    imageSrc: "/Podcast/SEASON 1/Episode4/THEORY OF EVERY THING.jpg",
    imageAlt: "Theory of Everything episode poster",
    link: "https://www.youtube.com/watch?v=sfcKhbj9Y84&list=PLTZ24f4xNtFQDVWLY9CXVwIShemeORzkm&index=6&pp=iAQB",
  },
  {
    id: "s1e5",
    season: 1,
    episode: 5,
    title: "How to Learn Actively",
    guest: "with Dr. Mostafa Saad",
    imageSrc: "/Podcast/SEASON 1/Episode5/How to learn actively.jpg",
    imageAlt: "How to Learn Actively episode poster",
    link: "https://www.youtube.com/watch?v=IFAFG1npVDw&list=PLTZ24f4xNtFQDVWLY9CXVwIShemeORzkm&index=7&pp=iAQB",
  },
  {
    id: "s1e6",
    season: 1,
    episode: 6,
    title: "Debugging the Mind",
    guest: "with Eng. Mawadah Elmashad",
    imageSrc: "/Podcast/SEASON 1/Episode6/DEBUGGING THE MIND.webp",
    imageAlt: "Debugging the Mind episode poster",
    link: "https://www.youtube.com/watch?v=iIw2WKdpAxM&list=PLTZ24f4xNtFQDVWLY9CXVwIShemeORzkm&index=8&pp=iAQB",
  },
  {
    id: "s1e7",
    season: 1,
    episode: 7,
    title: "Git & GitHub",
    guest: "with Eng. Omar El-Sherif",
    imageSrc: "/Podcast/SEASON 1/Episode7/GIT & GITHUB.jpg",
    imageAlt: "Git & GitHub episode poster",
    link: "https://www.youtube.com/watch?v=47mZqZwnpXk&list=PLTZ24f4xNtFQDVWLY9CXVwIShemeORzkm&index=9&pp=iAQB0gcJCUwLAYcqIYzv",
  },
  {
    id: "s1e8",
    season: 1,
    episode: 8,
    title: "Your Project in Steps",
    guest: "with Dr. Walid El-Adrousi",
    imageSrc: "/Podcast/SEASON 1/Episode8/Your project in steps.webp",
    imageAlt: "Your Project in Steps episode poster",
    link: "https://www.youtube.com/watch?v=RxXgXmRo0mY&list=PLTZ24f4xNtFQDVWLY9CXVwIShemeORzkm&index=10&pp=iAQB",
  },
];
