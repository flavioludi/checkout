const DivGrow = ({
  children
}) => {
  return (
    <div
      style={{
        flexGrow: 1
      }}
    >
      {children}
    </div>
  )
}

export default DivGrow;