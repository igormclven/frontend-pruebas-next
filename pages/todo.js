import { useEffect, useState } from "react";
import Image from 'next/image';

function ToDoPage() {
  const [ toDos, setToDos ] = useState()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
      setIsLoading(true)
      fetch('https://backend-pruebas-next.herokuapp.com/data')
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
      <div>
          <h1>TODO List</h1>
          <ul>
              {toDos.map( toDo =>
                  <li key={toDo.pk}>
                      {toDo.fields.nombre} - <Image src={toDo.fields.url} width={200} height={200} />
                  </li>
              )}
          </ul>
      </div>
  )
}
export default ToDoPage;