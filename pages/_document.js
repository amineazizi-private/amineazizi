import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
   static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
   }

   render() {
      return (
         <Html lang='en'>
            <Head>
               <meta charSet="utf-8" />
               <meta name="robots" content="index, follow" />
               <meta name="description" content="Hi, I'm Amine Azizi, a product guy and a dropout software engineer.  I'm serious about creating amazing tools, practices, and open works for designers, creators, entrepreneurs, and creative teams." />
               <meta name="author" content="Amine Azizi" />
               <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
               <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
               <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
               <link rel="manifest" href="/images/favicons/site.webmanifest" />
            </Head>

            <body>
               <Main />
               <NextScript />

               <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
               <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
               <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
               <script src="/js/third-party/google-analytics.js"></script>
            </body>
         </Html>
      );
  }
}

export default AppDocument;