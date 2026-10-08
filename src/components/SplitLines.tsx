import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

type SplitLinesProps = {
    children: ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
};

export default function SplitLines({ children, className, as: Tag = "h2" }: SplitLinesProps) {
    const ref = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        if (!ref.current) return;
        if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        SplitText.create(ref.current, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) => {

                gsap.set(self.masks, {
                    paddingBottom: "0.2em",
                });

                return gsap.from(self.lines, {
                    yPercent: 100,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    autoAlpha: 0,
                    ease: "power3.out",
                });
            },
        }); 
    }, { scope: ref, dependencies: [children] , revertOnUpdate: true },
    );

    return (
        <Tag ref={ref} className={className}>
            {children}
        </Tag>
    )
};