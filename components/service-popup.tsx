interface Props {
    description: string
}

const ServicePopup: React.FC<Props> = (({description}) => {
    return(
        <div className = "flex mt-10 h-full w-full items-center justify-center popup">
          <p className = "text-md">{description}</p>
        </div>
    )
})

export default ServicePopup