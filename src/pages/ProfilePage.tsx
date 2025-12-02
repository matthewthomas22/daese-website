import profileBanner from "/eksporEstetik.webp";
import cinematicMtm from "/cinematic_mtm.webp";
import Banner from "../components/Banner";

export default function ProfilePage() {
  return (
    <>
      <Banner
        imageSrc={profileBanner}
        bannerText="Our Company Profile"
      ></Banner>

      {/* <!-- another section --> */}
      <div className="py-16 w-full h-auto overflow-hidden flex flex-col md:flex-row">
        {/* <!-- Text Container --> */}
        <div className="font-montserrat p-8 md:mx-6 lg:mx-12 text-center lg:w-300">
          <div className="text-2xl font-bold pb-4 text-center">
            <span className="text-4xl">Daese Garmin</span> <br />
            Industries. LTD
          </div>
          <div className="text-sm pb-4 font-semibold">
            Pioneering Excellence in Garment Industries <br />
            since 1988
          </div>
          <div className="text-sm pb-6 text-justify">
            Daese Garmin stands as an Indonesian export garment factory,
            situated in Bandung,West Java, Indonesia. Since our inception in
            1988, PT Daese Garmin has been a beacon of quality, catering to
            discerning customers worldwide. We proudly hold the distinction of
            being the foremost men's suit maker, harnessing over 30 years of
            expertise.
          </div>
          <button
            id="company-profile-button"
            className="px-6 py-3 text-white font-oswald font-semibold text-xl uppercase"
          >
            download company profile
          </button>
        </div>
        {/* <!-- image  --> */}
        <div className="w-full grid place-items-center">
          <div className="w-80 md:w-100 lg:w-140  overflow-hidden  rounded-xl shadow-xl">
            <img className="object-contain" src={cinematicMtm} alt="fotoMTM" />
          </div>
        </div>
      </div>

      <section className="py-16 md:py-8 bg-merahDaese w-screen h-auto md:h-200 grid place-content-center">
        <div className="w-full h-[30vh] md:h-[70vh]">
          <iframe
            className="embed-responsive-item w-[80vw] h-full"
            src="https://www.youtube.com/embed/nYN_xDLkv9s?mute=0&amp;showinfo=1&amp;controls=1&amp;start=0"
          ></iframe>
        </div>
      </section>

      <section className="px-8 py-16 w-full h-400 bg-white">
        <div>
          <div className="font-oswald text-2xl 2xl:text-3xl font-semibold pb-4 text-center">
            Our Global Reach
          </div>
          <div className="text-center text-sm">
            Our collective annual production capacity stands at an impressive
            3.0 million pieces. Today, our market extends to include regions
            such as the USA, Europe, Japan, Korea, Singapore, and Australia.
            Among our esteemed clients are:
          </div>
        </div>
      </section>
    </>
  );
}
