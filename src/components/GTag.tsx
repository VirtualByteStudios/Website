import Script from 'next/script'
 
function GTag() {
    const env = process.env.NODE_ENV
    if (env == "production"){
    return (
        <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-FXPM94NCYC" />
        <Script id="google-analytics">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'FXPM94NCYC');
            `}
        </Script>
        </div>
    )
}
  
}
 
export default GTag