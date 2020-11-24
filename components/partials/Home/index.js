import Link from 'next/link';

export default function index() {
   return (
      <div className="home-blk">
         <div className="container promise">
            <div className="row">
               <div className="col-sm-12 d-flex flex-column justify-content-center">
                  <p className="promise-content mb-5 mt-5">G'day, I'm Amine Azizi, a <span className="focus-word">product guy</span>. <br/> I help teams worldwide get their ideas and products to the moon. I'm serious about creating amazing <span className="focus-word"> tools</span>, <span className="focus-word">practices</span>, and <span className="focus-word">open works</span> for creators, entrepreneurs, and creative teams.</p>
                  {/* <p className="promise-content mb-5">Wanna take your product from <span className="focus-word">ideation</span> to <span className="focus-word">creation</span> and finishing it with <span className="focus-word">monetization</span>?</p> */}
               </div>
            </div>
         </div>

         <div className="portfolio-blk">
            <div className="company-slider-top">
               <div className="slider-top-first">
                  <div className="company-logo"><img src="/images/portfolio/wechsra.png" alt="Wechsra"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/lalchimiste.png" alt="L'alchimiste"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/place2swap.png" alt="Place2swap"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/legalplace.png" alt="Legalplace"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/skaalab.png" alt="Skaalab"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/edbridg.png" alt="Edbridg"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/jules.png" alt="Jules"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/cdiscount.png" alt="Cdiscount"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/veepee.png" alt="Veepee"/> </div>
               </div>
               <div className="slider-top-next">
                  <div className="company-logo"><img src="/images/portfolio/wechsra.png" alt="Wechsra"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/lalchimiste.png" alt="L'alchimiste"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/place2swap.png" alt="Place2swap"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/legalplace.png" alt="Legalplace"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/skaalab.png" alt="Skaalab"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/edbridg.png" alt="Edbridg"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/jules.png" alt="Jules"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/cdiscount.png" alt="Cdiscount"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/veepee.png" alt="Veepee"/> </div>
               </div>
            </div>
            <div className="company-slider-bottom">
               <div className="slider-top-first">
                  <div className="company-logo"><img src="/images/portfolio/familyphoto.png" alt="Family Photo"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/wscripted.png" alt="Wscripted"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/expresscanada.png" alt="Express Canada"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/torelf.png" alt="Torelf"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/imadrassa.png" alt="Imadrassa"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/tordot.png" alt="Tordot"/> </div>
               </div>
               <div className="slider-top-next">
                  <div className="company-logo"><img src="/images/portfolio/familyphoto.png" alt="Family Photo"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/wscripted.png" alt="Wscripted"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/expresscanada.png" alt="Express Canada"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/torelf.png" alt="Torelf"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/imadrassa.png" alt="Imadrassa"/> </div>
                  <div className="company-logo"><img src="/images/portfolio/tordot.png" alt="Tordot"/> </div>
               </div>
            </div>
         </div>
      </div>
   );
}