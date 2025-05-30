"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

// Animation data - using inline JSON for popular animations
const codeAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 90,
  w: 100,
  h: 100,
  nm: "Code Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Code",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 45,
              s: [110],
            },
            { t: 90, s: [100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [60, 40] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 4 },
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.2, 0.6, 1, 1] },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
  ],
};

const designAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 90,
  w: 100,
  h: 100,
  nm: "Design Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Palette",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 90, s: [360] },
          ],
        },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              d: 1,
              s: { a: 0, k: [50, 50] },
              p: { a: 0, k: [0, 0] },
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0.4, 0.6, 1] },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
  ],
};

const webAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 90,
  w: 100,
  h: 100,
  nm: "Web Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Globe",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 90, s: [360] },
          ],
        },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 45,
              s: [105],
            },
            { t: 90, s: [100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              d: 1,
              s: { a: 0, k: [60, 60] },
              p: { a: 0, k: [0, 0] },
            },
            {
              ty: "st",
              c: { a: 0, k: [0.1, 0.8, 0.4, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 3 },
            },
          ],
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
  ],
};

const phoneAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Phone Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Phone",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 15,
              s: [10],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 30,
              s: [-10],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 45,
              s: [5],
            },
            { t: 60, s: [0] },
          ],
        },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [30, 50] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 8 },
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.2, 0.8, 0.2, 1] },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
    },
  ],
};

const emailAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 90,
  w: 100,
  h: 100,
  nm: "Email Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Envelope",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 0,
              s: [50, 50],
              to: [0, -2],
              ti: [0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 45,
              s: [50, 38],
              to: [0, 0],
              ti: [0, -2],
            },
            { t: 90, s: [50, 50] },
          ],
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [60, 40] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 4 },
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.9, 0.3, 0.3, 1] },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
  ],
};

const locationAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 90,
  w: 100,
  h: 100,
  nm: "Location Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Pin",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 0,
              s: [50, 50],
              to: [0, -1],
              ti: [0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 45,
              s: [50, 44],
              to: [0, 0],
              ti: [0, -1],
            },
            { t: 90, s: [50, 50] },
          ],
        },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 45,
              s: [105],
            },
            { t: 90, s: [100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              d: 1,
              s: { a: 0, k: [40, 60] },
              p: { a: 0, k: [0, 0] },
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.8, 0.2, 0.8, 1] },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
  ],
};

interface LottieIconProps {
  size?: number;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export function CodeLottieIcon({
  size = 24,
  className = "",
  loop = true,
  autoplay = true,
}: LottieIconProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        className={`w-6 h-6 bg-primary/20 rounded ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div className={className} style={{ width: size, height: size }}>
      <Lottie
        animationData={codeAnimation}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export function DesignLottieIcon({
  size = 24,
  className = "",
  loop = true,
  autoplay = true,
}: LottieIconProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        className={`w-6 h-6 bg-primary/20 rounded ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div className={className} style={{ width: size, height: size }}>
      <Lottie
        animationData={designAnimation}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export function WebLottieIcon({
  size = 24,
  className = "",
  loop = true,
  autoplay = true,
}: LottieIconProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        className={`w-6 h-6 bg-primary/20 rounded ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div className={className} style={{ width: size, height: size }}>
      <Lottie
        animationData={webAnimation}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export function PhoneLottieIcon({
  size = 24,
  className = "",
  loop = true,
  autoplay = true,
}: LottieIconProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        className={`w-6 h-6 bg-primary/20 rounded ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div className={className} style={{ width: size, height: size }}>
      <Lottie
        animationData={phoneAnimation}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export function EmailLottieIcon({
  size = 24,
  className = "",
  loop = true,
  autoplay = true,
}: LottieIconProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        className={`w-6 h-6 bg-primary/20 rounded ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div className={className} style={{ width: size, height: size }}>
      <Lottie
        animationData={emailAnimation}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export function LocationLottieIcon({
  size = 24,
  className = "",
  loop = true,
  autoplay = true,
}: LottieIconProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        className={`w-6 h-6 bg-primary/20 rounded ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div className={className} style={{ width: size, height: size }}>
      <Lottie
        animationData={locationAnimation}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
