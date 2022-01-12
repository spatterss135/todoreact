

export default function Task({data} ){
    return (
        <div className='task' key={data.id}> 
        <p>{data.id}</p>
        <p>{data.text}</p>
        </div>
    )
}