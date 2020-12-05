import Link from 'next/link';

export default function index({ recentArticleList }) {
   return (
      <div className="home-blk">
         <div className="container promise">
            <div className="row">
               <div className="col-sm-12 d-flex flex-column justify-content-center">
                  <p className="promise-content mb-5 mt-5">G'day, I'm Amine Azizi, a <span className="focus-word">product guy</span>. <br/> I help teams worldwide get their ideas and products to the moon. I'm serious about creating amazing <span className="focus-word"> tools</span>, <span className="focus-word">practices</span>, and <span className="focus-word">open works</span> for creators, entrepreneurs, and creative teams.</p>
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

         <div className="container explore-blk">
            <div className="tiny-heading">
               <h5>EXPLORE THE AMINE WAY</h5>
            </div>

            <div className="step-1">
               <div className="label-imge">
                  <object data="/images/amine-way/step1.svg" type="image/svg+xml"></object>
               </div>

               <div className="label-title">
                  <h3>Ideation</h3>
               </div>

               <div className="title">
                  <h2>It all starts with a vision</h2>
               </div>

               <div className="description">
                  <p>Discovering hidden opportunities in a specific market segment is not a "Coup de chance". It's a customer-centered process. It goes from identifying a real need or problem encountered by your future clients to defining and prototyping a product-market fit ready to sell itself. We will come up with the right solutions by using a battle-tested set of tools and processes to gather enough data that defines your client and describes your playground, the market.</p>
               </div>

               <div className="tiny-heading">
                  <h5>Eureka! We got it. Let's build it!</h5>
               </div>
            </div>

            <div className="step-2">
               <div className="label-imge">
                  <object data="/images/amine-way/step2.svg" type="image/svg+xml"></object>
               </div>

               <div className="label-title">
                  <h3>Creation</h3>
               </div>

               <div className="title">
                  <h2>Shape your product</h2>
               </div>

               <div className="description">
                  <p>Let's tailor a minimum viable product that best suits your customer's needs! We will go from pen and paper sketches and storyboards defining your customer journey to designing the right user interfaces with the right colors and compositions. Next, we'll choose proper technologies and scalable architectures that will answer your future needs. Time to start developing!
                  <br/><br/>Having your MVP in hand, We'll put it inside the iteration and learning roller coaster to converge toward a final product.</p>
               </div>

               <div className="tiny-heading">
                  <h5>Your future-customer is all set to buy!</h5>
               </div>
            </div>

            <div className="step-3">
               <div className="label-imge">
                  <object data="/images/amine-way/step3.svg" type="image/svg+xml"></object>
               </div>

               <div className="label-title">
                  <h3>Monetization</h3>
               </div>

               <div className="title">
                  <h2>Delight your customers</h2>
               </div>

               <div className="description">
                  <p>Now that your philosophy, identity, and values start to take shape, it's time to tell your customer that you have the solution. Let's go fully ballistic and put in place a bulletproof acquisition funnel. We will generate an enormous set of leads by leveraging our growth hacking methods. Then, we'll automate the acquisition process and build brand awareness. For that, we will kick off a content strategy that'll harness the power of emails, social media, search engines, and word of mouth. We will rock it!
                  <br/><br/>On the way, we'll track each move of your customers and leads in order to will learn, adapt, and iterate.</p>
               </div>

               <div className="tiny-heading">
                  <h5>Got something to test? Let's go to step one!</h5>
               </div>
            </div>
         </div>

         <div className="container cta-blk">
            <h2>So,</h2>
            <div className="row">
               <div className="col-sm-12 d-flex flex-column justify-content-center">
                  <p className="cta-content mb-5">Wanna take your product from <span className="focus-word-ideation">ideation</span> to <span className="focus-word-creation">creation</span> and finish it with <span className="focus-word-monetization">monetization</span>?</p>
               </div>
            </div> 
            <div className="cta-button">
               <a href="mailto:hi@amineazizi.com" target="_blank">
                  Drop me a line
                  <img src="/images/cta-button.svg" alt="Cta image"/>
               </a>
            </div>
         </div>

         <div className="articles-blk">
            <h2>A walk through the ABCs</h2>

            <div className="container">
               <div className="row my-4 d-flex align-items-top">

               {recentArticleList.map(({ id, date, title, image, category }) => (
                  <div key={id} className="col-sm-6">
                     <div className="mr-2 w-100 mb-5 mb-md-3 bg-white learn-item"> 
                        <Link href='/learn-article/[id]' as={`/learn-article/${id}`}>
                           <a >
                              <img src={image} alt={title}/>
                              <div className="learn-item-bottom">
                                 <span className='category'>{category}  </span>  <span className='date'> - {date} </span>
                                 <br/>
                                 <span className="title">{title}</span> 
                              </div>
                           </a>
                        </Link>
                     </div>
                  </div>
               ))}

               </div>
            </div>
         </div>
      </div>
   );
}