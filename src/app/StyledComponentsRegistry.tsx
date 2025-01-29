"use client";

import React, { useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import { useServerInsertedHTML } from "next/navigation";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    return (
      <>{styledComponentsStyleSheet.getStyleElement()}</>
    );
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
