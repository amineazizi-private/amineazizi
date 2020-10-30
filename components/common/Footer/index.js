import Link from 'next/link';

export default function index() {
   return (
      <div className="footer-blk">
         <footer className="container">
            <div className="row footer-top py-md-4">
               <div className="col-sm-3">
                  <p className="footer-logo">
                     <a href="/">
                        <img className="d-md-inline d-none" src="/images/logo-big.svg" alt="Amine Azizi Logo" width="150%" />
                        <img className="d-md-none" src="/images/logo-small.svg" alt="Amine Azizi Logo" width="100%" />
                     </a>
                  </p>
               </div>
               <div className="col-sm-7 offset-sm-2">
                  <div className="row">
                        <div className="col-6 col-sm-4">
                           <h5>Take a tour</h5>
                           <ul className="pl-0 mt-3">
                              <li>
                                 <Link href='/learn'>
                                    <a className="text-secondary">Learn</a>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="/learn/roadmaps">
                                    <a className="text-secondary" >Roadmaps</a>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="/open-works">
                                 <a className="text-secondary" >Open Works</a>
                                 </Link>
                              </li>
                              <li>
                                 <Link href='/About'>
                                    <a className="text-secondary">About</a>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="/">
                                    <a className="text-secondary">Home</a>
                                 </Link>
                              </li>
                           </ul>
                        </div>
                        <div className="col-6 col-sm-4">
                           <h5>Find Me</h5>
                           <ul className="pl-0 mt-3">
                              <li>
                                 <a className="text-secondary" href="https://www.linkedin.com/in/amineazizi/" title="Linkedin profile">Linkedin</a>
                              </li>
                              <li>
                                 <a className="text-secondary" href="https://twitter.com/amineazizix" title="Twitter profile">Twitter</a>
                              </li>
                              <li>
                                 <a className="text-secondary" href="https://www.instagram.com/amineazizix/" title="Instagram profile">Instagram</a>
                              </li>
                              <li>
                                 <a className="text-secondary" href="https://www.facebook.com/amineazizix/" title="Facebook profile">Facebook</a>
                              </li>
                              <li>
                                 <a className="text-secondary" href="https://github.com/amineazizix" title="Github profile">Github</a>
                              </li>
                           </ul>
                        </div>
                        <div className="col-12 col-sm-4 footer-contact">
                           <h5>Contacte</h5>
                           <ul className="pl-0 mt-3">
                              <li><b>By Email</b><br /><a href="mailto:hi@amineazizi.com" className="text-secondary">hi@amineazizi.com</a></li>
                              <li>
                                 <b>Call</b><br />
                                 <Link href='//calendly.com/amine-azizi/call'>
                                    <a className="text-secondary">schedule a call</a>
                                 </Link>
                              </li>
                           </ul>
                        </div>
                  </div>
               </div>
            </div>
            <div className="row footer-bottom pt-2">
               <div className="col-sm-12">
                  <p className="text-secondary">© Copyright Amine Azizi 2020. All rights reserved.</p>
               </div>
            </div>
         </footer> 
      </div>
   );
}