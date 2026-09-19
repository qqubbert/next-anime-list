"use client";

import { Image } from "antd";
import type { ComponentProps } from "react";
import { useEffect, useState } from "react";

type ImageProps = ComponentProps<typeof Image>;

export function ImageWithPreview(props: ImageProps) {
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    if (!previewOpen) {
      return;
    }

    const scrollY = window.scrollY;

    const html = document.documentElement;
    const body = document.body;

    const previous = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
    };

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      html.style.overflow = previous.htmlOverflow;
      body.style.overflow = previous.bodyOverflow;
      body.style.position = previous.bodyPosition;
      body.style.top = previous.bodyTop;
      body.style.width = previous.bodyWidth;

      window.scrollTo(0, scrollY);
    };
  }, [previewOpen]);

  return (
    <Image
      {...props}
      preview={{
        ...(typeof props.preview === "object" ? props.preview : {}),
        wheel: true,
        onOpenChange: setPreviewOpen,
      }}
    />
  );
}