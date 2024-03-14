
interface ButtonProps {
    value: string;
    width?: string;
}

function Button(props: ButtonProps) {
  return (
    <>
      <button type='submit' className={`text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 font-medium text-sm ${props.width}`}>{props.value}</button>
    </>
  )
}

export default Button
