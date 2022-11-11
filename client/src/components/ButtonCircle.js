const ButtonCircle = ({ children }) => {
  return (
    <button className="rounded-full hover:bg-gray-200 h-10 w-10 p-2 flex items-center justify-center">
      {children}
    </button>
  );
};

export default ButtonCircle;
