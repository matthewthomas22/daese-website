const keyPeople = [
  { name: "Soegianto", role: "President Director", email: "soegianto@metrogarmin.com" },
  { name: "Budi Prayogo", role: "General Manager", email: "bprayogo@daesegarmin.com" },
  { name: "Asep Thersia", role: "Marketing Manager", email: "asep@daesegarmin.com" },
  { name: "Rossy Utomo", role: "Purchasing Manager", email: "rossy@daesegarmin.com" },
];

export default function Footer() {
  return (
    <footer className="bg-merahDaese font-montserrat text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <div className="border-b border-white/35 pb-8 sm:pb-10">
          <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/75">
            Daese Garmin Industries Ltd.
          </p>
          <h2 className="max-w-2xl text-2xl font-medium leading-tight sm:text-3xl lg:text-4xl">
            Built in Indonesia for customers around the world.
          </h2>
        </div>

        <div className="grid gap-10 py-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16 lg:gap-24">
          <section aria-labelledby="footer-office">
            <h3 id="footer-office" className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/75">
              Office &amp; factory
            </h3>
            <address className="mt-4 max-w-sm text-sm leading-6 not-italic text-white/95">
              Jl. Ibrahim Adjie No.90, Kebonwaru,<br />
              Kec. Batununggal, Kota Bandung, Jawa Barat 40272
            </address>
            <div className="mt-5 flex flex-col gap-1 text-sm text-white/95">
              <a className="w-fit underline-offset-4 hover:underline" href="tel:+62227200950">+62 22 7200950</a>
              <span className="text-white/70">Fax +62 22 7200905</span>
              <a className="w-fit underline-offset-4 hover:underline" href="mailto:daese@daesegarmin.com">daese@daesegarmin.com</a>
            </div>
          </section>

          <section aria-labelledby="footer-people">
            <h3 id="footer-people" className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/75">
              Key people
            </h3>
            <ul className="mt-4 divide-y divide-white/25 border-y border-white/25">
              {keyPeople.map((person) => (
                <li className="grid gap-1 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-6" key={person.email}>
                  <div>
                    <p className="text-base font-semibold">{person.name}</p>
                    <p className="mt-0.5 text-sm text-white/75">{person.role}</p>
                  </div>
                  <a className="w-fit text-sm text-white/90 underline-offset-4 hover:underline" href={`mailto:${person.email}`}>
                    {person.email}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/35 pt-5 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Daese Garmin Industries Ltd.</span>
          <span>Bandung, Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
