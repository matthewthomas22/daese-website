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

            return () => smoother.kill();
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