function FormError({ children }) {
  return (
    <p className="py-2 text-sm px-3 bg-red-300 w-fit text-red-600 rounded-2xl ">
      {children}
    </p>
  );
}

export default FormError;
