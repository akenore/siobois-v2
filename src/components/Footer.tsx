import Link from "next/link";

const Footer = () => {
     return (
          <footer className="section-half py-16 bg-white">
               <div className="container mx-auto px-4">
                    <div className="footer-bottom flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
                         <p className="footer-text m-0 text-sm text-gray-500">
                              Copyright &copy; {new Date().getFullYear()} | All rights reserved to{" "}
                              <Link href="https://www.siobois.com/" className="text-primary hover:underline">
                                   SioBois.com
                              </Link>
                         </p>
                         <div className="footer-social flex items-center mt-4 md:mt-0 space-x-4">
                              <a
                                   href="https://www.facebook.com/SioBois.officiel/"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-gray-500 hover:text-primary transition-colors"
                              >
                                   <i className="fa fa-facebook text-xl"></i>
                              </a>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
