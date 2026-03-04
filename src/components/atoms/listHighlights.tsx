const Listhighlights = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  const { isOpen } = props;
  return isOpen ? (
    <li
      {...props}
      className="flex items-start gap-2 p-3 rounded-md transition-all border-2 border-[#c09068] bg-orange-50 shadow-lg"
    >
      <span className="status-badge">{children}</span>
    </li>
  ) : (
    <li {...props}>{children}</li>
  );
};

export default Listhighlights;
