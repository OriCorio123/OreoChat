
const CustomButton = ({text , isActive ,onClick}) => {
  return (
    <button onClick={onClick} className={`border border-gray-200 rounded-2xl px-2 ${isActive?'bg-black':'bg-gray-100'} ${isActive?'text-gray-100':'text-black'}`}>
        {text}
    </button>
  )
}

export default CustomButton