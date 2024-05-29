function Button({
  type = "default",
  isDisabled = false,
  children,
  onClick,
  others = "",
}) {
  const color = {
    default: "",
    danger: " bg-red-600  text-red-100 hover:bg-red-700 hover:text-red-200 ",
    regular:
      "bg-tiny-blue text-gunmental hover:bg-hoker-green hover:text-tiffany-blue",
    check: "bg-forest-green text-white",
    plus: "!px-2 !py-0  bg-hoker-green text-white",
    addCart: "bg-orange-wheel text-white hover:bg-russet ",
    back: "bg-old-rose text-white hover:bg-pomp-power ",
    home: "bg-hoker-green text-white hover:bg-tiffany-blue ",
  };
  const styles = ` tracking-normal px-2 py-1 lg:tracking-wide font-semibold lg:px-3 lg:py-2 rounded-full ${color[type]} ${others}`;

  if (onClick)
    return (
      <button className={styles} disabled={isDisabled} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button className={styles} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Button;
