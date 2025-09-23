import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(){
  return (
    <>
      <Navbar />
      <div className='flex flex-col mx-auto justify-between px-6 h-full max-w-7xl'>
        <main className='pt-20'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
