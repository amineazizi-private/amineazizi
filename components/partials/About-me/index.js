import Link from 'next/link';

export default function index() {
   return (
      <div className="about-blk">
         <div className="container head-blk">
            <div className="row">
               <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
                  <h1>Amine Azizi</h1>
                  <h3>Product Manager</h3>
                  <ul className="social-items p-2 d-flex justify-content-left">
                     <li>
                        <a href="https://www.linkedin.com/in/amineazizi/" target="_blank" title="Linkedin profile">
                           <img src="/images/about/social-media/linkedin.svg"alt="Linkedin" /> 
                        </a>
                     </li>
                     <li >
                        <a href="https://twitter.com/amineazizix" target="_blank" title="twitter profile">
                           <img src="/images/about/social-media/twitter.svg" alt="twitter" /> 
                        </a>
                     </li>
                     <li >
                        <a href="https://www.instagram.com/amineazizix/" target="_blank" title="instagram profile">
                           <img src="/images/about/social-media/instagram.svg" alt="instagram" /> 
                        </a>
                     </li>
                     <li >
                        <a href="https://www.facebook.com/amineazizix/" target="_blank" title="facebook profile">
                           <img src="/images/about/social-media/facebook.svg" alt="facebook" /> 
                        </a>
                     </li>
                     <li >
                        <a href="https://github.com/amineazizix" target="_blank" title="github profile">
                           <img src="/images/about/social-media/github.svg" alt="github" /> 
                        </a>
                     </li>
                  </ul>

                  <div className="text-content">
                     <p className="mb-5 mt-5">Now that you know my name. Let me tell you a bit about my story. I started my career as a software engineer. I've worked as a full-stack developer in European startups that have raised many millions of euros.</p><br/>
                     <p >In the meantime, I loved tinkering with big loads of data and improving the esthetics of diverse user interfaces. That's what pushed me to learn about product ownership and management. Before becoming a product manager, I started as a PO working for a Forbes 30 under 30 fintech startup that raised 1.5M dollars. Since then, I've become obsessed with customers and never stoped analyzing their behaviors.</p><br/>
                     <p>Wait a minute! Have I told you that I'm a professional swimmer and guitar player? So please, invite me for your outings. I've many good jokes that will release your mind from a hard-working day.</p>
                  </div>
               </div>

               <div className="col-md-5 d-md-inline d-none personal-image">
                  <img src="/images/about/amineazizi.jpg" alt="Amine Azizi" width="110%"/>
                  <h3>MOTTO</h3>
                  <p className="quote">" Keep it simple, keep it stupid, doing just what it is supposed to do. "</p>
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