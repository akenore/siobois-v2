import Link from "next/link";

const Footer = () => {
     return (
          <footer className="py-16 bg-[#222222] text-white">
               <div className="container mx-auto px-4">
                    <div className="footer-bottom flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
                         <p className="footer-text m-0 text-sm opacity-80">
                              Copyright &copy; {new Date().getFullYear()} | All rights reserved to{" "}
                              <Link href="https://www.siobois.com/" className="text-primary hover:underline font-semibold">
                                   SioBois.com
                              </Link>
                         </p>
                         <div className="footer-social flex items-center mt-4 md:mt-0 space-x-6">
                              <a
                                   href="https://www.facebook.com/SioBois.officiel/"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-white opacity-60 hover:text-primary hover:opacity-100 transition-all"
                              >
                                   <i className="fa fa-facebook text-2xl"></i>
                              </a>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
