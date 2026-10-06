import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const slideshowImages = [
  { name: "alat Cutting 1", filename: "alatCuttingCompressed.webp" },
  { name: "alat Cutting 2", filename: "alatCutting2Compressed.webp" },
  { name: "CWH EKSPOR railing", filename: "cwhEksporRailingCompressed.webp" },
  { name: "CWH ekspor 1", filename: "FOTO_CWH_EKSPOR.webp" },
  { name: "CWH ekspor 2", filename: "FOTO_CWH_EKSPOR2.webp" },
];

export function Slideshow() {
  // align 'center' look best when i have 5 images (odd number)
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 2500, stopOnInteraction: false }),
  ]);

  return (
    <section className="relative w-full overflow-hidden " ref={emblaRef}>
      <div className="flex">
        {slideshowImages.map((image) => (
          // Each file is exactly 100% viewport width
          <div
            key={image.filename}
            className="flex-[0_0_100%] min-w-0 relative h-[60vh] md:h-[80vh]"
          >
            <img
              src={`/slideshow_images/${image.filename}`}
              alt={image.name}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
