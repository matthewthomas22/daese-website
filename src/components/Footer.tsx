export default function Footer() {
  return (
    <footer className="w-screen h-fit bg-merahDaese shadow-md px-10 py-16 m-0 font-montserrat">
      <span className="block w-full h-auto text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold pb-4 text-white relative before:content[''] before:absolute before:bg-white before:w-full before:h-1 before:bottom-0">
        Daese Garmin Industries. LTD
      </span>
      <div className=" md:flex  w-full h-auto font-montserrat pt-8">
        <div className="">
          <address className="text-white">
            <span className="font-semibold text-[16px] xl:text-xl">
              Office & Factory
            </span>
            <br />
            <span className="leading-8 text-xs">
              Jl. Ibrahim Adjie No.90, Kebonwaru,
              <br />
              Kec. Batununggal, Kota Bandung, Jawa Barat 40272 <br />
              Tel : (+62-22) 7200950 <br />
              Fax : (+62-22) 7200905 <br />
              Email : daese@daesegarmin.com
            </span>
          </address>
        </div>
        <hr className="text-white my-8 lg:opacity-0  " />
        <div className="flex flex-col w-full md:ml-14">
          <span className="font-semibold text-[16px] xl:text-xl text-white">
            Key Person
          </span>
          <div className="text-white h-fit grid grid-cols-2 grid-rows-2 md:gap-2">
            {/* <!-- 1st Card Soegianto --> */}
            <div className="p-1.5  bg-[hsla(357,65%,56%,1)] shadow-lg rounded-xl">
              <span className="block p-2 bg-[hsla(357,65%,60%,1)] rounded-xl font-semibold text-md xl:text-xl md:pl-4">
                Soegianto
              </span>
              <span className="block pt-2 text-[10px] md:text-sm md:ml-4">
                President Director <br />
                soegianto@metrogarmin.com
              </span>
            </div>
            {/* <!-- 2nd Card Budi Prayogo --> */}
            <div className="p-1.5  bg-[hsla(357,65%,56%,1)] shadow-lg rounded-xl">
              <span className="block p-2 bg-[hsla(357,65%,60%,1)] rounded-xl font-semibold text-md xl:text-xl md:pl-4">
                Budi Prayogo
              </span>
              <span className="block pt-2 text-[10px] md:text-sm md:ml-4">
                General Manager <br />
                bprayogo@daesegarmin.com
              </span>
            </div>
            {/* <!-- 3rd Card Asep Thersia --> */}
            <div className="p-1.5  bg-[hsla(357,65%,56%,1)] shadow-lg rounded-xl">
              <span className="block p-2 bg-[hsla(357,65%,60%,1)] rounded-xl font-semibold text-md xl:text-xl md:pl-4">
                Asep Thersia
              </span>
              <span className="block pt-2 text-[10px] md:text-sm md:ml-4">
                Marketing Manager <br />
                asep@daesegarmin.com
              </span>
            </div>
            {/* <!-- 4th Card Rossy Utomo --> */}
            <div className="p-1.5  bg-[hsla(357,65%,56%,1)] shadow-lg rounded-xl">
              <span className="block p-2 bg-[hsla(357,65%,60%,1)] rounded-xl font-semibold text-md xl:text-xl md:pl-4">
                Rossy Utomo
              </span>
              <span className="block pt-2 text-[10px] md:text-sm md:ml-4">
                Purchasing Manager <br />
                rossy@daesegarmin.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
