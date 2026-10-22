"use client";

import { useRef, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const wrapper = useRef<HTMLDivElement>(null);
    const content = useRef<HTMLDivElement>(null);
    const {pathname} = useLocation();

    useGSAP(
        () => {
            if (!wrapper.current || !content.current) return;

            // Start each route at the top before setting up smooth scrolling.
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });

            // Respect the visitor motion preference.
            if( window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                return;
            }

            const smoother = ScrollSmoother.create({
                wrapper: wrapper.current,
                content: content.current,
                smooth: 1.5,
                smoothTouch: false
            });

            smoother.scrollTop(0);

            // Native anchor jumps scroll the fixed wrapper instead of the window, which
            // desyncs ScrollSmoother. Route same-page hash links through the smoother.
            const handleAnchorClick = (event: MouseEvent) => {
                const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
                const id = link?.hash.slice(1);
                const target = id ? document.getElementById(decodeURIComponent(id)) : null;
                if (!target) return;

                event.preventDefault();
                // ScrollSmoother ignores CSS scroll-margin, so pass it as the offset.
                const offset = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
                smoother.scrollTo(target, true, `top ${offset}px`);
            };

            const contentElement = content.current;
            contentElement.addEventListener("click", handleAnchorClick);

            return () => {
                contentElement.removeEventListener("click", handleAnchorClick);
                smoother.kill();
            };
        },
        {
            dependencies: [pathname],
            revertOnUpdate: true,
        },
    );

    return (
        <div ref={wrapper}>
            <div ref={content}>
                {children}
            </div>
        </div>
    )
}