import Link from 'next/link'

export default function index({ articleData, recentArticleList }){
   return (
   <div className="article-blk">
      <div className='container article-wrapper'>
         <div className="row">
            <div className="col-md-2 d-md-block d-none article-summary" id="article-summary">
               <div className="article-summary-content">
                  <h3>CONTENTS</h3>
                  <ul>
                     <li>
                        <a href="#politique" className="title-focus">Politique centrée sur les relations humaines</a> 
                     </li>
                     <li>
                        <a href="#technologie">Technologie d'appui</a>
                     </li>
                     <li>
                        <a href="#conclusion">Conclusion</a>
                     </li>
                  </ul>
               </div> 
            </div>

            <div className="col-12 col-md-8 article-content" id="article-content">
               <div className="mb-4 article-image d-flex align-items-center justify-content-end">
                  <img src={articleData.image} alt={articleData.title}/>
               </div>

               <div className="article-title" >
                  <p>
                     <span className="article-category">{articleData.category}</span>
                  </p>
                  <h1 >{articleData.title}</h1> 
                  <p>
                     <span className="article-author">By Amine Azize</span>
                  </p>
                  <p>
                     <span className="article-date">Updated {articleData.date}</span> 
                  </p>
               </div>

               <div className="mt-5 d-flex article-text-content">
                  <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} ></div>
               </div>
            </div>

            <div className="col-md-2 d-md-block d-none article-related">
               <h3>RELATED</h3>

               <ul>
                  <li>
                     <a href="" className="title-focus">
                        Politique centrée sur les relations humaines
                        <span><img src="/images/misc/document.svg" alt="Document"/> Startups </span>
                     </a>
                  </li>
                  <li>
                     <a href="">
                        Technologie d'appui
                        <span><img src="/images/misc/document.svg" alt="Document"/> Startups </span>
                     </a>
                  </li>
                  <li>
                     <a href="">
                        Conclusion Politique centrée 
                        <span><img src="/images/misc/document.svg" alt="Document"/> Startups </span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>

      <div className="container-fluid article-recent">
            <h3>Recent aricles</h3>

            <div className="container">
               <div className="row my-4 d-flex align-items-stretch">
                  {recentArticleList.map(({ id, date, title, image, category }) => (
                     <div key={id} className="col-sm-4">
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
   </div>
   )
}