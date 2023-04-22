import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"
const Container = ({children, keywords})=>{
    return (
        <>
            <Head>
                <meta keywords={keywords}></meta>
            </Head>
            <Header/>
            <>
                {children}
            </>
            <Footer/>
        </>
    )
}

export default Container