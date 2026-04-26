

const Footer = () => {
    const date = new Date();
    const time = date.getFullYear();
  return (
    <div className="bg-gray-500 flex justify-center items-center h-10">
     &#169; {time}
    </div>
  )
}

export default Footer
