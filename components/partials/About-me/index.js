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
      </div>
   );
}