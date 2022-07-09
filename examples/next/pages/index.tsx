import type { NextPage } from "next";

import { ScaleFrame } from "../../../dist";

const width = "100%";
const aspectRatio = 16 / 9;

const Page: NextPage = () => {
  return (
    <main>
      <h1>Hello Next.js</h1>
      <div
        style={{
          position: "relative",
          width: width,
          paddingBottom: `calc(${width} / ${aspectRatio})`,
          overflow: "hidden",
          backgroundColor: "red",
        }}
      >
        <ScaleFrame
          width={512}
          height={512 / aspectRatio}
          offset={1}
          throttle={100}
        >
          <div>
            <h2>Hello, watch me scale to my container</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod, nisi vel consectetur consectetur, nisl nunc euismod nisi,
              euismod consectetur nisi nisi vel nisi.
            </p>
          </div>
        </ScaleFrame>
      </div>
    </main>
  );
};

export default Page;
