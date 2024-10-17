interface Props {
    title:string
    description:string
}
export function Card({title, description}:Props){
    return(
        <div className="h-[150px] bg-blur-md bg-white bg-opacity-5 rounded p-2 shadow-md hover:shadow-lg hover:bg-opacity-10">
            <h1 className="text-2xl">{title}</h1>
            <p className="mt-5">{description}</p>
        </div>
    )
}