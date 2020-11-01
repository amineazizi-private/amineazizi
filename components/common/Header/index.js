import Link from 'next/link';

export default function index() {
   return (
      <div className="container-fluid sticky-top bg-white px-1 px-sm-5">
         <nav className="navbar navbar-expand-md navbar-light mb-sm-3 mt-2 justify-content-between">
            <Link href='/'>
               <a className="navbar-brand">
                  <img className="d-md-inline d-none" src="/images/logo-big.svg" alt="Amine Azizi logo" width="100%" />
                  <img className="d-md-none" src="/images/logo-small.svg" alt="Amine Azizi logo" width="100%" />
               </a>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav menu-items p-2">
                  <li className="nav-item">
                     <Link href='/learn'>
                        <a className="nav-link">Learn</a>
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link href="/open-works">
                        <a className="nav-link">Open Works</a>
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link href="/about">
                        <a className="nav-link">About</a>
                     </Link>
                  </li>
               </ul>

               <div className="contact-blk p-2">
                     <a className="contact-button" href="mailto:hi@amineazizi.com" target="_blank" >Contact</a>
               </div>

               <ul className="social-items ml-auto p-2 d-flex justify-content-center">
                  <li>
                     <a href="https://www.linkedin.com/in/amineazizi/" target="_blank" title="Linkedin profile">
                        <img src="/images/social-media/linkedin.svg"alt="Linkedin" /> 
                     </a>
                  </li>
                  <li >
                     <a href="https://twitter.com/amineazizix" target="_blank" title="twitter profile">
                        <img src="/images/social-media/twitter.svg" alt="twitter" /> 
                     </a>
                  </li>
                  <li >
                     <a href="https://www.instagram.com/amineazizix/" target="_blank" title="instagram profile">
                        <img src="/images/social-media/instagram.svg" alt="instagram" /> 
                     </a>
                  </li>
                  <li >
                     <a href="https://www.facebook.com/amineazizix/" target="_blank" title="facebook profile">
                        <img src="/images/social-media/facebook.svg" alt="facebook" /> 
                     </a>
                  </li>
                  <li >
                     <a href="https://github.com/amineazizix" target="_blank" title="github profile">
                        <img src="/images/social-media/github.svg" alt="github" /> 
                     </a>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   );
}