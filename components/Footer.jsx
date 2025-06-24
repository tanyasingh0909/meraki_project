const Footer = () => {
  return (
    <footer className="bg-sunset text-black py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* External Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-2">Connect Us on: </h3>
          <p className="hover:underline cursor-pointer">Meraki, Culinary Arts Society</p>
          <p className="hover:underline cursor-pointer">Media & Cultural Council, Students Gymkhana, IITK</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-20 text-5xl mb-6 md:mb-0">
          <a
            href="https://www.instagram.com/culinaryarts.iitk/?hl=en" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/meraki-iitk/people/?viewAsMember=true" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="mailto: culinaryarts.iitk"
            className="hover:text-gray-600 transition"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        {/* Location */}
        <div>
          <h3 className="font-bold text-lg mb-2">Location</h3>
          <p>New Students Activity Centre,OAT</p>
          <p>Indian Institute of Technology, Kanpur</p>
          <p>Uttar Pradesh, 208016</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
