"use client";

import { Bounded } from "@/components/Bounded";
import Scene from "./Scene";
import { View } from "@react-three/drei";

/**
 * Component for "SkyDive".
 */
const SkyDive = (): JSX.Element => {
  const flavor = "Vanilla Sky"; // Replace with desired flavor text
  const sentence = "Experience the thrill of the skies!"; // Replace with desired sentence text

  return (
    <Bounded
      className="skydive h-screen"
    >
      <h2 className="sr-only">{sentence}</h2>
      <View className="h-screen w-screen">
    
        <Scene 
        // @ts-ignore
        flavor={flavor} sentence={sentence} />
      </View>
    </Bounded>
  );
};

export default SkyDive;
