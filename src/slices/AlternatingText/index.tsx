"use client";

import { Bounded } from "@/components/Bounded";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import clsx from "clsx";

/**
 * Component for "AlternatingText" Slices.
 */
const AlternatingText = (): JSX.Element => {
  // Replace this array with the new static content
  const textGroups = [
    {
      heading: "My Custom Heading 1",
      body: "This is the custom body text for the first section.",
    },
    {
      heading: "My Custom Heading 2",
      body: "This is the custom body text for the second section.",
    },
    {
      heading: "My Custom Heading 3",
      body: "This is the custom body text for the third section.",
    },
  ];

  return (
    <Bounded
      className="alternating-text-container relative bg-yellow-300 text-sky-950"
    >
      <div>
        <div className="relative z-[100] grid">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>

          {textGroups.map((item, index) => (
            <div
              key={item.heading}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",

                  "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30",
                )}
              >
                <h2 className="text-balance text-6xl font-bold">
                  {item.heading}
                </h2>
                <div className="mt-4 text-xl">{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;
