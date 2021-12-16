import { useEffect, useState } from "react";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Card from "../components/Card";

import Head from "next/head";
import Image from "next/image";

function ToDoPage() {
  const [toDos, setToDos] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => {
        setToDos(data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (!toDos) {
    return <p>No List to show</p>;
  }
  return (
    <>
      <Head>
        <title>Next App - Productos</title>
        <meta name="description" content="An awesome Next App xd" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        />
      </Head>
      <Navbar fixed />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="mt-10 py-10 text-center">
                  <h1>List of Products</h1>

                  <div className="row mt-4">
                    {toDos.map((toDo) => (
                      <div className="col-sm-4 d-flex" key={toDo.pk}>
                        <Card
                          title={toDo.fields.nombre}
                          desc={toDo.fields.desc}
                          url={toDo.fields.url}
                          image={toDo.fields.img_url}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default ToDoPage;
