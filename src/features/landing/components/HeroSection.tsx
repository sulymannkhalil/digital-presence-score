import { ConicBorderPill } from "@/components/shared/conic-border-pill";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

import { WebsiteUrlInput } from "./WebsiteUrlInput";

const HERO_BACKGROUND_URL =
  "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1792669186/Hero_Section_bkqzlk.svg";

export type HeroSectionProps = {
  badgeText?: string;
  heading?: string;
  description?: string;
  /** When false, hides the website URL form. */
  showUrlInput?: boolean;
  /** When false, hides the “No login required” note. */
  showFooterNote?: boolean;
  sectionId?: string;
  headingId?: string;
  /** Max width of the centered hero content column. Defaults to landing width. */
  contentMaxWidthClassName?: string;
  /** Max width of the H1. Defaults to landing width. */
  headingMaxWidthClassName?: string;
  /** Max width of the description paragraph. Defaults to landing width. */
  descriptionMaxWidthClassName?: string;
  /** Extra classes for the outer section (e.g. fixed frame size). */
  sectionClassName?: string;
  /** Extra classes for the inner container. */
  containerClassName?: string;
};

/**
 * Landing / audit hero band. Defaults match the marketing homepage.
 */
export function HeroSection({
  badgeText = "Digital Presence Score",
  heading = "How strong is your business online?",
  description = "Discover how well your online presence helps customers find, trust, and contact your business. Get a clear assessment with actionable recommendations.",
  showUrlInput = true,
  showFooterNote = true,
  sectionId = "home",
  headingId = "hero-heading",
  contentMaxWidthClassName = "max-w-[845px]",
  headingMaxWidthClassName = "max-w-[770px]",
  descriptionMaxWidthClassName = "max-w-[705px]",
  sectionClassName,
  containerClassName,
}: HeroSectionProps = {}) {
  return (
    <section
      id={sectionId}
      aria-labelledby={headingId}
      className={cn(
        "relative isolate flex w-full items-center overflow-hidden bg-[#0F1114] bg-cover bg-center bg-no-repeat",
        showUrlInput ? "h-[616px]" : null,
        sectionClassName,
      )}
      style={{ backgroundImage: `url(${HERO_BACKGROUND_URL})` }}
    >
      <Container
        className={cn(
          "relative z-10 flex h-full w-full flex-col items-center justify-center text-center",
          showUrlInput
            ? "px-4 py-0 sm:px-6"
            : "px-4 py-[72px] sm:px-6",
          containerClassName,
        )}
      >
        <div
          className={cn(
            "flex w-full flex-col items-center gap-9",
            contentMaxWidthClassName,
          )}
        >
          <div className="flex w-full flex-col items-center gap-2">
            <ConicBorderPill labelClassName="px-6 py-2.5 font-title text-[15px] font-medium leading-normal lg:text-[15px]">
              {badgeText}
            </ConicBorderPill>

            <h1
              id={headingId}
              className={cn(
                "font-title text-[2.25rem] leading-[1.15] font-black tracking-[-0.01em] text-white sm:text-5xl lg:text-[4rem]",
                headingMaxWidthClassName,
              )}
            >
              {heading}
            </h1>

            <p
              className={cn(
                "mt-0 font-heading text-base leading-normal font-medium text-[#9EA5B3]",
                descriptionMaxWidthClassName,
              )}
            >
              {description}
            </p>
          </div>

          {showUrlInput ? (
            <div className="w-full max-w-[845px]">
              <WebsiteUrlInput variant="hero" />
            </div>
          ) : null}

          {showFooterNote ? (
            <div className="max-w-[706px] font-heading text-base leading-normal font-medium text-[#9EA5B3]">
              <p>A public digital-presence assessment. No login required.</p>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
