interface BannerProps {
  // Expect a string source from the parent
  imageSrc: string;
  // Expect the Banner text from the parent
  bannerText: string;
}

export default function Banner({ imageSrc, bannerText }: BannerProps) {
  return (
    <>
      {/* <!-- Banner Section  --> */}
      <div className="m-0 w-full h-[60vh] relative overflow-hidden grid grid-cols-1 grid-rows-1 place-items-center">
        {/* <!-- Image Container --> */}
        <div className="w-full col-start-1 row-start-1 h-full">
          <img className="object-cover w-full h-full" src={imageSrc} alt="" />
        </div>
        <div className="w-full h-full bg-[hsla(0,0%,0%,0.3)] col-start-1 row-start-1"></div>
        <p className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold col-start-1 row-start-1">
          {/* BANNER TEXT DYNAMIC */}
          {bannerText}
        </p>
      </div>
    </>
  );
}
