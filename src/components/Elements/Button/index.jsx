const Button = (props) => {
    const {variant = "bg-primer", hover = 'hover:bg-orange-400', textColor, type, disabled, children} = props;
  return (
    <button id="btn-nav-login" type={type} disabled={disabled} className={`flex ${variant} ${hover} ${textColor} w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primer`}>
      {children}
    </button>
  );
};

export default Button;