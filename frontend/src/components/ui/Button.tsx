interface ButtonProps  {
    text:String,
    variant: "primary" | "secondary",
    size: "sm" | "md" | "lg",
    
}

const variantStyle = {
    "primary": "bg-primary text-white",
    "secondary": "bg-secondary text-secondarytext"
}

const sizeStyle = {
    "sm": " py-2 px-4  text-sm ",
    "md": " py-3 px-6 ",
    "lg": " py-3 px-10 text-xl ",
}




const Button = (props:ButtonProps) => {
  return (
    <button className= {variantStyle[props.variant] + sizeStyle[props.size] +" rounded-lg w-fit"}>
        {props.text} 
    </button>
  )
}

export default Button