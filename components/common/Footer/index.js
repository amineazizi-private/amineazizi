import Link from 'next/link';

export default function index() {
   return (
      <div className="footer-blk">
         <div className="waves-bottom">
            <img className="d-md-inline d-none" src="/images/wave.svg" alt="bottom wave"/>
            <img className="d-md-none" src="/images/wave-small.svg" alt="bottom wave"/>
         </div>

         <div className="footer-content">
            <footer className="container">
               <div className="row footer-top pb-md-4">
                  <div className="col-sm-3">
                     <p className="footer-logo">
                        <a href="/">
                           <object data="/images/logo-footer.svg" type="image/svg+xml" className="d-md-inline d-none" width="100%"></object>
                           <object data="/images/logo-footer-small.svg" type="image/svg+xml" className="d-md-none" width="100%"></object>
                        </a>
                     </p>
                  </div>
                  <div className="col-sm-7 offset-sm-2">
                     <div className="row">
                           <div className="col-6 col-sm-4">
                              <h5>Take a tour</h5>
                              <ul className="pl-0 mt-3">
                                 <li>
                                    <Link href="/">
                                       <a >Home</a>
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/learn'>
                                       <a >Learn</a>
                                    </Link>
                                 </li>
                                 {/* <li>
                                    <Link href="/learn/roadmaps">
                                       <a >Roadmaps</a>
                                    </Link>
                                 </li> */}
                                 <li>
                                    <Link href="/open-works">
                                       <a >Open Works</a>
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href='/About'>
                                       <a >About</a>
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                           <div className="col-6 col-sm-4">
                              <h5>Find me on</h5>
                              <ul className="pl-0 mt-3">
                                 <li>
                                    <a href="https://www.linkedin.com/in/amineazizi/"  target="_blank" title="Linkedin profile">Linkedin</a>
                                 </li>
                                 <li>
                                    <a href="https://twitter.com/amineazizix"  target="_blank" title="Twitter profile">Twitter</a>
                                 </li>
                                 <li>
                                    <a href="https://www.instagram.com/amineazizix/"  target="_blank" title="Instagram profile">Instagram</a>
                                 </li>
                                 <li>
                                    <a href="https://www.facebook.com/amineazizix/"  target="_blank" title="Facebook profile">Facebook</a>
                                 </li>
                                 <li>
                                    <a href="https://github.com/amineazizix"  target="_blank" title="Github profile">Github</a>
                                 </li>
                              </ul>
                           </div>
                           <div className="col-12 col-sm-4 footer-contact">
                              <h5>Contact</h5>
                              <ul className="pl-0 mt-3">
                                 <li><b>By Email</b><br /><a href="mailto:hi@amineazizi.com"  target="_blank" >hi@amineazizi.com</a></li>
                                 <li>
                                    <b>Call</b><br />
                                       <a href='https://calendly.com/amineazizi/call' className="text-white"  target="_blank">Schedule a call</a>
                                 </li>
                              </ul>
                           </div>
                     </div>
                  </div>
               </div>
               <div className="row footer-bottom pt-2">
                  <div className="col-sm-12">
                     <p >© Copyright Amine Azizi 2020. All rights reserved.</p>
                  </div>
               </div>
            </footer> 
         </div>
      </div>
   );
}