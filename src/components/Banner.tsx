import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
interface BannerProps {
  // Expect a string source from the parent
  imageSrc: string;
  // Expect the Banner text from the parent
  bannerText: string;
}

gsap.registerPlugin(useGSAP);

export default function Banner({ imageSrc, bannerText }: BannerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP((_context, contextSafe) => {
    if (!contextSafe) return;
    let cancelled = false;
    const animate = contextSafe(() => {
      if (cancelled || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(ref.current, {
        yPercent: -60,
        autoAlpha: 0,
        duration: 0.6,
      });
    });

    // Decode also handles images already in the browser cache. Keep the title
    // readable if the image fails, and ignore completions after navigation.
    void imageRef.current?.decode().then(animate, () => {});
    return () => { cancelled = true; };
  }, { dependencies: [imageSrc, bannerText], revertOnUpdate: true });

  return (
    <>
      {/* <!-- Banner Section  --> */}
      <div className="m-0 w-full h-[60vh] relative overflow-hidden bg-neutral-700">
        {/* <!-- Image Container --> */}
        <div className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2">
          <img ref={imageRef} className="object-cover w-full h-full" src={imageSrc} alt="" fetchPriority="high" decoding="async" />
        </div>
        <div className="w-full h-full bg-[hsla(0,0%,0%,0.3)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-3 "></div>
        <div className="w-full h-full relative z-4">
          <p
            ref={ref}
            className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  "
          >
            {/* BANNER TEXT DYNAMIC */}
            {bannerText}
          </p>
        </div>
      </div>
    </>
  );
}
