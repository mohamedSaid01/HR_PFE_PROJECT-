interface DescriptionProps {
    title: string;
    description: string;
}

function Description(props: DescriptionProps) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-semibold text-2xl">{props.title}</h1>
      <p className="font-normal text-xs text-gray-400 w-96">{props.description}</p>
    </div>
  )
}

export default Description
