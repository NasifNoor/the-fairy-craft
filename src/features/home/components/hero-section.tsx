"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Button } from "../../../components/ui/button";
import { Container } from "../../../components/ui/container";
import { Heading } from "../../../components/ui/heading";
import { HomeHeroData, HomeHeroItem } from "../types";

export interface HeroSectionProps {
  data: HomeHeroData;
}

const containerVars = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVars = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

function useCarousel(slideCount: number, delay = 7000) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const pointerStartX = React.useRef<number | null>(null);
  const timeoutRef = React.useRef<number | undefined>(undefined);

  const clearTimer = () => {
    if (timeoutRef.current !== undefined) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  };

  React.useEffect(() => {
    if (slideCount < 2 || isPaused) return;

    clearTimer();
    timeoutRef.current = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, delay);

    return clearTimer;
  }, [delay, isPaused, slideCount, activeIndex]);

  React.useEffect(() => clearTimer, []);

  const goTo = React.useCallback(
    (index: number) => {
      const next = index % slideCount;
      setActiveIndex(next < 0 ? next + slideCount : next);
    },
    [slideCount],
  );

  const prev = React.useCallback(
    () => goTo(activeIndex - 1),
    [activeIndex, goTo],
  );
  const next = React.useCallback(
    () => goTo(activeIndex + 1),
    [activeIndex, goTo],
  );

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX;
    setIsPaused(true);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) {
      setIsPaused(false);
      return;
    }

    const delta = event.clientX - pointerStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        prev();
      } else {
        next();
      }
    }

    pointerStartX.current = null;
    setIsPaused(false);
  };

  const handlePointerLeave = () => {
    pointerStartX.current = null;
    setIsPaused(false);
  };

  return {
    activeIndex,
    prev,
    next,
    goTo,
    setIsPaused,
    handlePointerDown,
    handlePointerUp,
    handlePointerLeave,
  };
}

function HeroContent({ data }: { data: HomeHeroItem }) {
  return (
    <motion.div
      className="max-w-2xl space-y-6"
      variants={containerVars}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.p
        variants={itemVars}
        className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]"
      >
        {data.eyebrow}
      </motion.p>

      <motion.div variants={itemVars}>
        <Heading as="h1" className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
          {data.title}
        </Heading>
      </motion.div>

      <motion.p
        variants={itemVars}
        className="max-w-xl text-lg leading-8 text-[var(--color-text-muted)]"
      >
        {data.description}
      </motion.p>

      <motion.div variants={itemVars} className="flex flex-wrap gap-3">
        <Link href="/products">
          <Button size="lg">{data.primaryCta}</Button>
        </Link>
        <Link href="/#custom-design">
          <Button variant="secondary" size="lg">
            {data.secondaryCta}
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

function HeroImage({
  slides,
  activeIndex,
  onPointerDown,
  onPointerUp,
  onPointerLeave,
}: {
  slides: HomeHeroItem[];
  activeIndex: number;
  onPointerDown: (event: React.PointerEvent<HTMLDivElement>) => void;
  onPointerUp: (event: React.PointerEvent<HTMLDivElement>) => void;
  onPointerLeave: () => void;
}) {
  return (
    <motion.div
      className="rounded-3xl border border-[var(--color-border)] bg-[linear-gradient(135deg,var(--color-surface-muted),var(--color-surface))] p-8 shadow-md"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerLeave}
        onPointerCancel={onPointerLeave}
      >
        <div className="aspect-[4/5] relative w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={
                index === activeIndex
                  ? "absolute inset-0 opacity-100 transition-opacity duration-700 ease-in-out"
                  : "absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-700 ease-in-out"
              }
              aria-hidden={index !== activeIndex}
            >
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                className="h-full w-full object-cover"
                sizes="100vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection({ data }: HeroSectionProps) {
  const t = useTranslations();
  if (data.length === 0) {
    return null;
  }

  const slideCount = data.length;
  const hasCarousel = slideCount > 1;
  const {
    activeIndex,
    prev,
    next,
    goTo,
    handlePointerDown,
    handlePointerUp,
    handlePointerLeave,
  } = useCarousel(slideCount, 7000);

  const activeSlide = data[activeIndex];

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24 lg:py-28"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <HeroContent data={activeSlide} />

        <HeroImage
          slides={data}
          activeIndex={activeIndex}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerLeave}
        />
      </Container>

      {hasCarousel && (
        <div className="pointer-events-none absolute inset-0">
          <div className="pointer-events-auto absolute left-4 top-1/2 flex -translate-y-1/2 items-center">
            <button
              type="button"
              aria-label={t("common.previous")}
              onClick={prev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]"
            >
              <span aria-hidden="true">‹</span>
            </button>
          </div>

          <div className="pointer-events-auto absolute right-4 top-1/2 flex -translate-y-1/2 items-center">
            <button
              type="button"
              aria-label={t("common.next")}
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>

          <div className="pointer-events-auto absolute inset-x-0 bottom-4 flex justify-center gap-2">
            {data.map((_, index) => (
              <button
                key={`hero-dot-${index}`}
                type="button"
                aria-label={t("common.goToSlide", { number: index + 1 })}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => goTo(index)}
                className={
                  activeIndex === index
                    ? "h-2.5 w-2.5 rounded-full border border-[var(--color-border)] bg-[var(--color-primary-700)] transition-colors"
                    : "h-2.5 w-2.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors"
                }
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
