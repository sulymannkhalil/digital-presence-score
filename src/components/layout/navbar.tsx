"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

import {
  industriesDropdownItems,
  mainNav,
  navbarBrand,
  primaryCta,
  servicesDropdownItems,
  type MegaNavItem,
  type NavItem,
} from "@/config/navigation";
import { cn } from "@/lib/cn";

type DropdownKey = "services" | "industries";

function dropdownItemsFor(key: DropdownKey): MegaNavItem[] {
  return key === "services" ? servicesDropdownItems : industriesDropdownItems;
}

function StrategyCallButton({
  className,
  onNavigate,
  variant = "outline",
}: {
  className?: string;
  onNavigate?: () => void;
  /** Desktop keeps outline; mobile menu uses solid blue. */
  variant?: "outline" | "solid";
}) {
  const isSolid = variant === "solid";

  return (
    <a
      href={primaryCta.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onNavigate}
      className={cn(
        "group inline-flex h-11 items-center gap-3 rounded-full px-4 py-2 font-title text-sm font-medium transition-colors duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1114]",
        isSolid
          ? "border border-[#2563EB] bg-[#2563EB] text-white hover:bg-[#1d4ed8]"
          : "border border-[#D9DCE1]/40 bg-transparent text-[#D9DCE1] hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white",
        className,
      )}
    >
      <span className="transition-transform duration-300 ease-out group-hover:-translate-x-0.5">
        {primaryCta.label}
      </span>
      <span
        className={cn(
          "inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-out",
          "group-hover:translate-x-0.5",
          isSolid
            ? "bg-white text-[#2563EB]"
            : "bg-[#D9DCE1]/15 text-[#D9DCE1] group-hover:bg-white group-hover:text-[#2563EB]",
        )}
      >
        <ArrowUpRight
          className="size-4 transition-transform duration-300 ease-out group-hover:rotate-45"
          aria-hidden="true"
        />
      </span>
    </a>
  );
}

function MegaMenuCard({ item }: { item: MegaNavItem }) {
  return (
    <a
      href={item.href}
      className={cn(
        "group/item flex gap-4 rounded-[20px] p-3 transition-colors",
        "hover:bg-[#1A1D21]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]",
      )}
    >
      <span
        className={cn(
          "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A1D21] shadow-[0px_8px_24px_rgba(149,157,165,0.2)] transition-colors",
          "group-hover/item:bg-[#2563EB]",
        )}
      >
        <img
          src={item.iconSrc}
          alt=""
          width={22}
          height={22}
          className="size-[22px] object-contain"
          aria-hidden="true"
        />
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-2 text-left">
        <span className="flex items-center gap-4">
          <span className="min-w-0 flex-1 font-title text-base font-semibold text-white">
            {item.title}
          </span>
          <ArrowRight
            className="h-6 w-6 shrink-0 translate-x-[-4px] text-white opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100"
            aria-hidden="true"
          />
        </span>
        <span className="font-heading text-sm leading-relaxed text-[#9EA5B3]">
          {item.description}
        </span>
      </span>
    </a>
  );
}

function DesktopDropdownPanel({
  items,
  labelledBy,
}: {
  items: MegaNavItem[];
  labelledBy: string;
}) {
  return (
    <div
      role="menu"
      aria-labelledby={labelledBy}
      className={cn(
        "absolute top-full left-1/2 z-50 mt-8 w-[min(800px,calc(100vw-2rem))] -translate-x-1/2",
        "rounded-[32px] bg-[#0F1114] px-10 py-8 shadow-[0px_5px_15px_rgba(37,99,235,0.2)]",
      )}
    >
      <div className="grid grid-cols-2 gap-5">
        {items.map((item) => (
          <MegaMenuCard key={item.href} item={item} />
        ))}
      </div>
    </div>
  );
}

function DesktopNavItem({
  item,
  openDropdown,
  setOpenDropdown,
}: {
  item: NavItem;
  openDropdown: DropdownKey | null;
  setOpenDropdown: (key: DropdownKey | null) => void;
}) {
  const triggerId = useId();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isDropdown = Boolean(item.hasDropdown);
  const dropdownKey = item.hasDropdown ?? null;
  const isOpen = dropdownKey !== null && openDropdown === dropdownKey;

  function clearCloseTimer() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openMenu() {
    if (!dropdownKey) return;
    clearCloseTimer();
    setOpenDropdown(dropdownKey);
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 120);
  }

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  const navPillClass = cn(
    "rounded-full px-3 py-2.5 font-title text-base font-medium text-[#D9DCE1] transition-all",
    "hover:bg-black hover:text-[#2563EB] hover:shadow-[0_0_10px_rgba(255,255,255,0.1),0_0_20px_rgba(148,163,184,0.12)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]",
  );

  if (!isDropdown || !dropdownKey) {
    return (
      <a href={item.href} className={navPillClass}>
        {item.label}
      </a>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <a
        id={triggerId}
        href={item.href}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={cn(
          navPillClass,
          "inline-flex items-center gap-1",
          isOpen &&
            "bg-black text-[#2563EB] shadow-[0_0_10px_rgba(255,255,255,0.1),0_0_20px_rgba(148,163,184,0.12)]",
        )}
        onFocus={openMenu}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
          aria-hidden="true"
        />
      </a>
      {isOpen ? (
        <div onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
          <DesktopDropdownPanel
            items={dropdownItemsFor(dropdownKey)}
            labelledBy={triggerId}
          />
        </div>
      ) : null}
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey | null>(
    null,
  );
  const menuId = useId();

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMobileOpen(false);
        setMobileExpanded(null);
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-[70] w-full bg-[#0F1114]",
          mobileOpen && "border-b border-white/10",
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "relative mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-4",
            "px-[16px] sm:h-20 sm:px-[32px] md:px-[64px] lg:px-[100px]",
          )}
        >
          <a
            href={navbarBrand.href}
            className="relative z-10 flex min-w-0 shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            onClick={closeMobile}
          >
            <img
              src={navbarBrand.logoSrc}
              alt={navbarBrand.logoAlt}
              width={136}
              height={48}
              className="h-[40px] w-28 object-contain sm:h-20 sm:w-20 lg:h-[48px] lg:w-[136px]"
            />
          </a>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
            {mainNav.map((item) => (
              <li key={item.href}>
                <DesktopNavItem
                  item={item}
                  openDropdown={openDropdown}
                  setOpenDropdown={setOpenDropdown}
                />
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <StrategyCallButton className="hidden lg:inline-flex" />

            <button
              type="button"
              className={cn(
                "inline-flex size-6 cursor-pointer items-center justify-center rounded-md text-white transition-colors lg:hidden",
                "hover:bg-gray-800 hover:text-[#2563eb]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]",
              )}
              aria-expanded={mobileOpen}
              aria-controls={menuId}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() =>
                setMobileOpen((current) => {
                  if (current) setMobileExpanded(null);
                  return !current;
                })
              }
            >
              {mobileOpen ? (
                <X className="size-[24px]" aria-hidden="true" strokeWidth={2.25} />
              ) : (
                <Menu
                  className="size-[24px]"
                  aria-hidden="true"
                  strokeWidth={2.25}
                />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Spacer so fixed header does not cover page content */}
      <div className="h-16 sm:h-20" aria-hidden="true" />

      <div
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen ? true : undefined}
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-[60] flex flex-col gap-2 bg-[#0F1114] sm:top-20 lg:hidden",
          "transition-transform duration-300 ease-out motion-reduce:transition-none",
          mobileOpen
            ? "translate-x-0"
            : "pointer-events-none translate-x-full",
        )}
      >
        <nav
          aria-label="Mobile"
          className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain"
        >
          <div className="space-y-1 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            {mainNav.map((item) => {
              const dropdownKey = item.hasDropdown;
              const expanded =
                dropdownKey !== undefined && mobileExpanded === dropdownKey;
              const children = dropdownKey
                ? dropdownItemsFor(dropdownKey)
                : null;
              const mobileItemClass = cn(
                "w-full rounded-md px-3 py-2.5 text-left font-title text-base font-medium text-[#9EA5B3] transition-colors",
                "hover:bg-black hover:text-[#2563EB]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]",
              );

              if (children && dropdownKey) {
                return (
                  <div key={`mobile-${item.href}`}>
                    <button
                      type="button"
                      className={cn(
                        mobileItemClass,
                        "flex items-center justify-between",
                        expanded && "bg-black text-[#2563EB]",
                      )}
                      aria-expanded={expanded}
                      onClick={() =>
                        setMobileExpanded((current) =>
                          current === dropdownKey ? null : dropdownKey,
                        )
                      }
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-200",
                          expanded && "rotate-180 text-[#2563EB]",
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    {expanded ? (
                      <div className="mt-1 space-y-1 pl-4">
                        {children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            onClick={closeMobile}
                            className="block rounded-md px-3 py-2.5 font-heading text-sm text-[#9EA5B3] hover:bg-black hover:text-[#2563EB]"
                          >
                            {child.title}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <a
                  key={`mobile-${item.href}`}
                  href={item.href}
                  onClick={closeMobile}
                  className={cn(mobileItemClass, "block")}
                >
                  {item.label}
                </a>
              );
            })}

            <StrategyCallButton
              variant="solid"
              onNavigate={closeMobile}
              className="mt-4 w-fit justify-center"
            />
          </div>
        </nav>
      </div>
    </>
  );
}
