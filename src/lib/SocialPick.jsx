const CustomLink = ({ children, ...props }) => {
    return (
      <a
        className="rounded-full flex justify-center items-center gap-x-2 py-2 px-3 mt-2 hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  };
  
  export default CustomLink;
  