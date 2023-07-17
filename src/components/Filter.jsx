
const Filter = ({data}) => {
  const arr=[]
  const getData=()=>{
    data.map((e)=>{
      if(e.price>20){
        arr.push(e.id)
      }
     
    })

  }
  console.log(arr[0])
  
  return (
    <div className="h-full w-[300px]">
      filter
      <button onClick={getData} id="men's clothing">Men's clotihng</button>
    </div>
  )
}

export default Filter
