import React from "react";
import twemoji from "twemoji";
import { EmojiContainer } from "./style";

export const Emoji = ({ emoji }) => (
  <EmojiContainer
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
        folder: "svg",
        ext: ".svg",
      }),
    }}
  />
);
