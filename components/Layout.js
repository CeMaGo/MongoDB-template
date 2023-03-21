import Head from "next/head";
import NavBar from "/NavBar";

const Layout = { children } => (
    <>
        <Head><title>Note App</title></Head>
        <NavBar/>
        {children}
    </>
);

export default Layout
