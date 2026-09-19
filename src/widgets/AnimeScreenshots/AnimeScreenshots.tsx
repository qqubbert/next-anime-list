"use client";

import { Carousel, ConfigProvider, Grid, Image } from "antd";
import { useEffect, useState } from "react";

import type { Screenshot } from "@/shared/types/types";

import styles from "./AnimeScreenshots.module.css";
import { ImageWithPreview } from "@/shared/ui";

type Props = {
  screenshots: Screenshot[];
};

const { useBreakpoint } = Grid;

export function AnimeScreenshots({ screenshots }: Props) {
  const screens = useBreakpoint();
  const [previewOpen, setPreviewOpen] = useState(false);

  const perSlide = screens.xl
    ? 4
    : screens.lg
      ? 3
      : screens.md
        ? 2
        : 1;

  useEffect(() => {
    if (!previewOpen) {
      return;
    }

    const scrollY = window.scrollY;

    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyWidth = body.style.width;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;

      window.scrollTo(0, scrollY);
    };
  }, [previewOpen]);

  if (!screenshots.length) {
    return null;
  }

  const slides = Array.from(
    {
      length: Math.ceil(screenshots.length / perSlide),
    },
    (_, index) =>
      screenshots.slice(
        index * perSlide,
        index * perSlide + perSlide,
      ),
  );

  return (
    <section
      className={styles.section}
      >
      <h2 className={styles.title}>Скриншоты</h2>

      <ConfigProvider>
        <Carousel
          key={perSlide}
          className={styles.carousel}
          arrows
          draggable
          infinite={slides.length > 1}
          dots
          speed={500}
          style={{ "--slide-count": perSlide } as React.CSSProperties}
        >
          {slides.map((slide, index) => (
            <div key={index}>
              <div className={styles.slide}>
                {slide.map((screenshot) => (
                  <ImageWithPreview
                    key={screenshot.id}
                    className={styles.image}
                    src={screenshot.imageUrl}
                    alt=""
                    // width={390}
                    height={220}
                    preview={{
                      wheel: true,
                      onOpenChange: setPreviewOpen,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </ConfigProvider>
    </section>
  );
}