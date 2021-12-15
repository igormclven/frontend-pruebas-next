import { useEffect, useState } from "react";
import Image from 'next/image';

function ToDoPage() {
  const [ toDos, setToDos ] = useState()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
      setIsLoading(true)
      fetch('/api/data')
          .then(response => response.json())
          .then(data => {
              setToDos(data)
              setIsLoading(false)
          })
          .catch(console.error);

  }, [])
  if (isLoading) {
      return <p>Loading....</p>
  }
  if (!toDos) {
      return <p>No List to show</p>
  }
  return (
    <div className="container p-3">

        <h1>List of Products</h1>

        <div className="row mt-4">
            {toDos.map( toDo =>
            <div className="col-sm-4 d-flex">
                <div className="card mb-4" key={toDo.pk}>
                    <Image src={toDo.fields.url} width={400} height={250} />
                    <div className="card-body">
                        <h5 className="card-title">{toDo.fields.nombre}</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            )}
        </div>
          

      </div>
  )
}
export default ToDoPage;