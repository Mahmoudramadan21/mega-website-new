import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { circles } from '@/data/circle';
import { ArrowRightIcon } from "@/assets/icons";

interface CirclePageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Dynamic metadata for each individual circle page
 * Inherits from root layout (title template "%s | MEGA", metadataBase, etc.)
 */
export async function generateMetadata(
  { params }: CirclePageProps,
): Promise<Metadata> {
  const { slug } = await params;
  const circle = circles.find((c) => c.slug === slug);

  if (!circle) {
    return { title: 'Circle Not Found' };
  }

  // Use shortDescription for concise, high-CTR meta description
  // Fallback to first paragraph if needed
  const metaDescription = circle.shortDescription || circle.longDescription.split('\n\n')[1]?.slice(0, 150) + '...';

  const pageTitle = `${circle.title} Circle`; // ~50-60 chars

  return {
    title: pageTitle,
    description: `${metaDescription} Develop real skills through hands-on learning and mentorship in the ${circle.title} circle at MEGA Mansoura University.`,

    keywords: [
      `${circle.title} circle MEGA`,
      `${circle.title} circle Mansoura University`,
      `${circle.title} track Mansoura`,
      'MEGA Mansoura circles',
      circle.type === 'technical' 
        ? `${circle.title.toLowerCase()} development Mansoura` 
        : `${circle.title.toLowerCase()} team Mansoura`,
      'student tech circles Mansoura',
    ],

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: `https://megateam.vercel.app/circles/${slug}`,
    },

    openGraph: {
      title: pageTitle,
      description: `${metaDescription} Join the ${circle.title} circle to grow your skills with real projects and expert guidance.`,
      url: `/circles/${slug}`,
      siteName: 'MEGA',
      images: [
        {
          url: circle.imageSrc,
          width: 1200,
          height: 630,
          alt: `${circle.title} Circle – MEGA Mansoura University`,
        },
      ],
      type: 'article',
      locale: 'en_US',
    },

    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: metaDescription,
      images: [circle.imageSrc],
    },
  };
}

export default async function CirclePage({ params }: CirclePageProps) {
  const { slug } = await params;

  const circle = circles.find((c) => c.slug === slug);

  if (!circle) {
    notFound();
  }

  return (
    <>
      {/* Structured data for the circle (EducationalOrganization schema) */}
      <Script
        id={`circle-schema-${circle.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: `${circle.title} Circle – MEGA Mansoura University`,
            description: circle.shortDescription || circle.longDescription.split('\n\n')[0],
            url: `https://megateam.vercel.app/circles/${circle.slug}`,
            image: circle.imageSrc ? `https://megateam.vercel.app/${circle.imageSrc}` : undefined,
            provider: {
              "@type": "Organization",
              name: "MEGA Team Mansoura University",
              sameAs: "https://megateam.vercel.app"
            },
            hasCourse: {
              "@type": "Course",
              name: circle.title,
              description: circle.shortDescription,
              educationalLevel: "Intermediate",
              teaches: circle.type === 'technical' 
                ? `${circle.title} development, programming, and real-world tech projects`
                : `${circle.title} skills, team management, and organizational development`,
              occupationalCredentialAwarded: `Hands-on experience in ${circle.title} through projects and mentorship`
            }
          })
        }}
      />

      {/* Main circle details content with bottom padding */}
      <div className="pb-12">
        {/* Circle title heading with responsive sizing */}
        <h2 className="mb-4 font-bold text-xl md:text-2xl lg:text-3xl text-primary-500">
          {circle.title}
        </h2>
        {/* Full circle description with preserved line breaks */}
        <p className="mb-8 md:text-lg leading-relaxed text-neutral-600 whitespace-pre-line">
          {circle.longDescription}
        </p>
        {circle.link && (
          // Optional roadmap CTA button
          <Link
            href={circle.link}
            className="flex items-center justify-center gap-2 px-8 w-fit text-sm md:text-base btn focus-ring transition-all duration-300"
            aria-label={`View the roadmap for ${circle.title} circle`}
          >
            Our Roadmap
            <ArrowRightIcon aria-hidden="true" className="h-5 w-5 pt-0.5 md:pt-1" />
          </Link>
        )}
      </div>
    </>
  );
}

/**
 * Pre-render all circle detail pages at build time (SSG)
 * Benefits: Lightning-fast load times, full SEO indexing, excellent Lighthouse scores
 */
export async function generateStaticParams() {
  return circles.map((circle) => ({
    slug: circle.slug,
  }));
}