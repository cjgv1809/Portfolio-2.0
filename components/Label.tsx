type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
};

function Label({ children, htmlFor }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="sr-only">
      {children}
    </label>
  );
}

export default Label;
