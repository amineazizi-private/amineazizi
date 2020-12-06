import Link from 'next/link'

export default function index({ articlesInfo }){
   return (
      <div className="learn-blk">
         <div className="learn-top">
            <h2> Learn </h2>
            <p>Take your product from Ideation to Creation, and finish it with Monetization.</p>
         </div>

         <div className="container learn-listing">
            <div className="row my-5 d-flex align-items-top">

            {articlesInfo.map(({ id, date, title, image, category }) => (
               <div key={id} className="col-sm-6">
                  <div className="mr-2 w-100 mb-3 bg-white learn-item"> 
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
   )
}