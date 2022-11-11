const Button = (props) => {
  const { bg, children } = props;

  const style = {
    dark: "bg-black text-white",
    light: "bg-white",
  };

  return (
    <button className={`${style[bg]} rounded-3xl  px-3 py-2 font-semibold`}>
      {children}
    </button>
  );
};

export default Button;
