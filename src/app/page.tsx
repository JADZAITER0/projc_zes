
"use client";
import React, { use } from "react";
import ProductCard from "@/components/ProductCard";


export default function Home() {
  class Product {
    constructor(
      public title: string,
      public number: string,
      public price: string,
      public src: string
    ) {}
  }

const products: Product[] = [
  new Product("1P 10AX 1-way switch grey", "16000", "—", "https://www.vimar.com/cache/images/catalog/16000-vimar-idea-interruttore-1p-10ax-grigio.57167-cab0c099b49c.webp"),
  new Product("1P 10AX 1-way switch white", "16000.B", "—", "https://www.vimar.com/cache/images/catalog/16000_b-vimar-idea-interruttore-1p-10ax-bianco.58515-caa3a12df58e.webp"),
  new Product("1P 16AX 1-way switch white", "16001.B", "—", "https://www.vimar.com/cache/images/catalog/16001_b-vimar-idea-interruttore-1p-16ax-bianco.57169-8ad0c1b12c4b.webp"),
  new Product("1P 10AX 2-way switch grey", "16004", "—", "https://www.vimar.com/cache/images/catalog/16004-vimar-idea-deviatore-1p-10ax-grigio.57170-8ad0c1b12c4b.webp"),
  new Product("1P 16AX reversing switch white", "16013.B", "—", "https://www.vimar.com/cache/images/catalog/16013_b-vimar-idea-invertitore-1p-16ax-bianco.58522-d5591297723d.webp"),
  new Product("1P NO 10A push general symbol grey", "16080", "—", "https://www.vimar.com/cache/images/catalog/16080-vimar-idea-pulsante-1p-no-10a-generico-grigio.57177-8ad0c1b12c4b.webp"),
  new Product("1P NO 10A push general symbol white", "16080.B", "—", "https://www.vimar.com/cache/images/catalog/16080_b-vimar-idea-pulsante-1p-no-10a-generico-bianco.58537-9d5a1adc3c7b.webp"),
  new Product("1P 10AX 2-way switch grey", "16140", "—", "https://www.vimar.com/cache/images/catalog/16140-vimar-idea-commutatore-1p-10ax-grigio.57180-9f195ff53de4.webp"),
  new Product("1P 10AX 2-way switch white", "16140.B", "—", "https://www.vimar.com/cache/images/catalog/16140_b-vimar-idea-commutatore-1p-10ax-bianco.58568-eecbbc0de327.webp"),
  new Product("1P 10A 2-way push button white", "16150", "—", "https://www.vimar.com/cache/images/catalog/16150.3217.B-56964f000480.webp"),
  new Product("1P NO 10A 12-24V name-plate push grey", "16190", "—", "https://www.vimar.com/cache/images/catalog/16190-vimar-idea-pulsante-targh-1p-no-10a-12-24v-grigio.57181-9f195ff53de4.webp"),
  new Product("1P NO 10A 12-24V name-plate push white", "16190.B", "—", "https://www.vimar.com/cache/images/catalog/16190_b-vimar-idea-pulsante-targh-1p-no-10a-12-24v-bianco.58571-eecbbc0de327.webp"),
  new Product("2P+E 16A P17/11 outlet grey", "16203", "—", "https://www.vimar.com/cache/images/catalog/16203-vimar-idea-presa-2p-t-16a-p17-11-grigio.57183-9f195ff53de4.webp"),
  new Product("2P+E 16A P17/11 outlet white", "16203.B", "—", "https://www.vimar.com/cache/images/catalog/16203_b-vimar-idea-presa-2p-t-16a-p17-11-bianco.57184-9f195ff53de4.webp"),
  new Product("2P+E 16A P30 outlet grey", "16209", "—", "https://www.vimar.com/cache/images/catalog/16209-vimar-idea-presa-2p-t-16a-p30-grigio.57185-9f195ff53de4.webp"),
  new Product("2P+E 16A P30 outlet white", "16209.B", "—", "https://www.vimar.com/cache/images/catalog/16209_b-vimar-idea-presa-2p-t-16a-p30-bianco.58577-8bc62a5b49cf.webp"),
  new Product("2P 15A USA+EU ø4,8mm outlet grey", "16233", "—", "https://www.vimar.com/cache/images/catalog/16233-vimar-idea-presa-2p-15a-usa-eu-diam4_8mm-grigio.75553-48d9d138140c.webp"),
  new Product("2P 15A USA+EU ø4,8mm outlet white", "16233.B", "—", "https://www.vimar.com/cache/images/catalog/16233_b-vimar-idea-presa-2p-15a-usa-eu-diam4_8mm-bianco.75554-48d9d138140c.webp"),
  new Product("2P 6A 24V SELV outlet grey", "16300", "—", "https://www.vimar.com/cache/images/catalog/16300-vimar-idea-presa-2p-6a-24v-selv-grigio.58632-9b6ac9c9a63c.webp"),
  new Product("2P 6A 24V SELV outlet white", "16300.B", "—", "https://www.vimar.com/cache/images/catalog/16300_b-vimar-idea-presa-2p-6a-24v-selv-bianco.58633-9b6ac9c9a63c.webp"),
  new Product("TV ø9,5IEC single conn.outlet grey", "16320", "—", "https://www.vimar.com/cache/images/catalog/16320-vimar-idea-presa-tv-semplice-9_5iec-grigio.58641-141d6b3fbf00.webp"),
  new Product("TV ø9,5IEC single conn.outlet white", "16320.B", "—", "https://www.vimar.com/cache/images/catalog/16320_b-vimar-idea-presa-tv-semplice-9_5iec-bianco.58642-141d6b3fbf00.webp"),
  new Product("RJ11 phone jack 6/4 grey", "16335", "—", "https://www.vimar.com/cache/images/catalog/16335-vimar-idea-presa-rj11-6-4-grigio.57192-552c254e4920.webp"),
  new Product("RJ11 phone jack 6/4 white", "16335.B", "—", "https://www.vimar.com/cache/images/catalog/16335_b-vimar-idea-presa-rj11-6-4-bianco.58650-dfbed0ecd3a9.webp"),
  new Product("RJ45 phone jack 8/8 white", "16337", "—", "https://www.vimar.com/cache/images/catalog/16337.3395.B-ba89c20f900b.webp"),
  new Product("RJ45 Cat5e 3M UTP outlet grey", "16357", "—", "https://www.vimar.com/cache/images/catalog/16357-vimar-idea-presa-rj45-3m-cat5e-utp-grigio.58661-d3e4b16ce068.webp"),
  new Product("RJ45 Cat5e 3M UTP outlet white", "16357.B", "—", "https://www.vimar.com/cache/images/catalog/16357_b-vimar-idea-presa-rj45-3m-cat5e-utp-bianco.58662-d3e4b16ce068.webp"),
  new Product("1P+N C16 CB 120-230V grey", "16505_16", "—", "https://www.vimar.com/cache/images/catalog/16505_16-vimar-idea-interruttore-mt-1p-n-c16-120-230v-grigio.57193-552c254e4920.webp"),
  new Product("1P+N C16 RCBO 120-230V 10mA grey", "16511_16", "—", "https://www.vimar.com/cache/images/catalog/16511_16-vimar-idea-interruttore-mtdiff-1p-n-c16-10ma-grigio.58741-4ed9fad9af1c.webp"),
  new Product("1P+N C16 RCBO 120-230V 10mA white", "16511_16.B", "—", "https://www.vimar.com/cache/images/catalog/16511_16_b-vimar-idea-interruttore-mtdiff-1p-n-c16-10ma-bianco.58744-4ed9fad9af1c.webp"),
  new Product("Blank module grooved front white", "16540.B", "—", "https://www.vimar.com/cache/images/catalog/16540_b-vimar-idea-copriforo-fronte-rigato-bianco.57269-f7c67473dfb2.webp"),
  new Product("Cable outlet +cord-grip grey", "16541", "—", "https://www.vimar.com/cache/images/catalog/16541-vimar-idea-passacavo-con-serracavo-grigio.57194-552c254e4920.webp"),
  new Product("Cable outlet +cord-grip white", "16541.B", "—", "https://www.vimar.com/cache/images/catalog/16541_b-vimar-idea-passacavo-con-serracavo-bianco.58745-94b1bb7a8a2b.webp"),
  new Product("Blank module smooth front grey", "16542", "—", "https://www.vimar.com/cache/images/catalog/16542-vimar-idea-copriforo-fronte-liscio-grigio.57270-fdb689c77a19.webp"),
  new Product("Blank module smooth front white", "16542.B", "—", "https://www.vimar.com/cache/images/catalog/16542_b-vimar-idea-copriforo-fronte-liscio-bianco.57271-fdb689c77a19.webp"),
  new Product("Classica plate 4M metal slate grey", "16734.46", "—", "https://www.vimar.com/cache/images/catalog/16734_46-vimar-idea-placca-classica-4m-ardesia.58840-9edaa4771f03.webp"),
  new Product("Classica plate 6M metal slate grey", "16736.46", "—", "https://www.vimar.com/cache/images/catalog/16736_46-vimar-idea-placca-classica-6m-ardesia.58856-984da4ce439a.webp"),
  new Product("Classica plate 3M techn. bright white", "16743.01", "—", "https://www.vimar.com/cache/images/catalog/16743_01-vimar-idea-placca-classica-3m-bianco-brillante.58860-0a51ed49687d.webp"),
  new Product("Classica plate 3M techn. Idea white", "16743.04", "—", "https://www.vimar.com/cache/images/catalog/16743_04-vimar-idea-placca-classica-3m-bianco-idea.58861-0a51ed49687d.webp"),
  new Product("Classica plate 3M techn. black", "16743.16", "—", "https://www.vimar.com/cache/images/catalog/16743_16-vimar-idea-placca-classica-3m-nero.58863-5473ed3344c8.webp"),
  new Product("Classica plate 4M techn. bright white", "16744.01", "—", "https://www.vimar.com/cache/images/catalog/16744_01-vimar-idea-placca-classica-4m-bianco-brillante.58867-5473ed3344c8.webp"),
  new Product("Classica plate 4M techn. Idea white", "16744.04", "—", "https://www.vimar.com/cache/images/catalog/16744_04-vimar-idea-placca-classica-4m-bianco-idea.58868-5473ed3344c8.webp"),
  new Product("Classica plate 4M techn. black", "16744.16", "—", "https://www.vimar.com/cache/images/catalog/16744_16-vimar-idea-placca-classica-4m-nero.58870-2cd07e651352.webp"),
  new Product("Classica plate 6M techn. bright white", "16746.01", "—", "https://www.vimar.com/cache/images/catalog/16746_01-vimar-idea-placca-classica-6m-bianco-brillante.58881-6bd8d98b60d6.webp"),
  new Product("Classica plate 6M techn. Idea white", "16746.04", "—", "https://www.vimar.com/cache/images/catalog/16746_04-vimar-idea-placca-classica-6m-bianco-idea.58882-6bd8d98b60d6.webp"),
  new Product("Rondò plate 3M techn. Idea white", "16763.04", "—", "https://www.vimar.com/cache/images/catalog/16763_04-vimar-idea-placca-rondo-3m-bianco-idea.58943-daff00fad407.webp"),
];

  const [search, setSearch] = React.useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.number.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <nav className="w-full bg-white shadow-sm px-4 py-3 flex items-center justify-center">
        <svg viewBox="0 0 210 100" width="160" height="48" xmlns="http://www.w3.org/2000/svg" className="block">
          <g style={{opacity:1}}>
            <path
              style={{fill:'#271faa', fillOpacity:1, strokeWidth:0.16}}
              d="M 8.4383979,23.806946 8.2178399,42.218479 14.350221,30.827505 c 2.659415,-4.887139 32.66174,-4.742933 32.347042,1.390804 C 46.107109,43.720864 12.41528,69.726797 9.0605639,76.959178 H 54.330618 c 0.01397,3.761478 1.373007,6.918677 4.079232,9.470461 2.720232,2.564992 6.080125,3.847424 10.079402,3.847424 3.278683,0 5.056556,-1.328823 6.060383,-3.021195 0.679878,-1.146219 0.595962,-4.070246 0.448488,-4.333729 -0.260575,-0.465551 -0.564578,-0.633301 -0.564578,-0.633301 -0.93677,0.964022 -0.33447,2.814458 -1.9139,3.739199 -1.57943,0.924742 -4.437008,0.390039 -6.786901,-0.356817 -2.349887,-0.746856 -4.386303,-2.450238 -5.421551,-4.615115 -1.238573,-2.590055 -1.657209,-6.131593 -0.292112,-8.653509 1.609521,-2.97345 5.464416,-6.163817 8.614515,-5.075415 2.583571,0.892659 3.558194,5.369011 2.988536,7.636347 -0.569658,2.267336 -3.87389,1.329424 -7.199976,1.401004 -0.598455,0.01287 -7.143854,-0.160722 -7.611498,0.223473 -0.52467,0.431065 -1.520405,0.856179 0.853791,0.872429 2.201521,0.01507 8.187086,-0.06771 12.28056,-0.108797 2.216235,-0.02224 4.171716,0.105 6.648623,-0.07456 0.609312,-0.04417 -0.514547,-7.185851 -1.458397,-9.29 -0.94385,-2.104148 -2.6559,-4.539308 -6.5651,-4.539308 -3.785387,0 -7.012868,1.166443 -9.684641,3.495245 V 56.060637 c 0,0 -3.08221,9.926728 -6.314363,15.184981 -5.41154,8.80381 -33.209673,2.269811 -33.209673,2.269811 L 56.500734,23.806946 Z"
            />
            <text
              x="53.039047"
              y="57.623001"
              style={{fontSize:'50.8px',fontFamily:'Andalus',fill:'#271faa',fillOpacity:1,strokeWidth:0.26}}
            >ouheir</text>
            <text
              x="75.510651"
              y="93.893417"
              style={{fontSize:'49.39px',fontFamily:'Andalus',fill:'#271faa',fillOpacity:1,strokeWidth:0.26}}
            >lectric</text>
          </g>
        </svg>
      </nav>

      <div className="w-full flex justify-center py-4">
        <input
          type="text"
          placeholder="Search by title or number..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <main className="min-h-screen bg-gray-50 p-4 sm:p-6 transition-colors">

        <section className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredProducts.map((product, idx) => (
              <ProductCard
                key={idx}
                src={product.src}
                title={product.title}
                price={product.price}
                number={product.number}
                id={idx}
              />
            ))}
          </div>
        </section>
        <section className="max-w-6xl mx-auto mt-10">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h2>
            <div className="flex items-center gap-2">
              <span className="text-base text-gray-700">Phone:</span>
              <a href="tel:+96103816746" className="text-blue-600 font-semibold hover:underline">+961 03 816 746</a>
              <a href="https://wa.me/96103816746" target="_blank" rel="noopener noreferrer">
                <svg fill="#25D366" width="24" height="24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>whatsapp</title>
<path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
</svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
