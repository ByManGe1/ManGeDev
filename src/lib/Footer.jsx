const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {currentYear} <a href="#" className="hover:underline">Desarrollado por ManGe</a> ❤️
        </span>
      </div>
    </footer>
  );
};

export default Footer;
