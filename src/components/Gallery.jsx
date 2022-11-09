import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Gallery() {
    const [data, setData] = useState([])
    useEffect(() => {
        let url = "https://api.github.com/users";
        axios.get(url)
            .then((item) => {
                setData(item.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <div className='row text-center'>

                {
                    data.map((item) => {
                        return (
                            <div className="col-12 col-sm-6 col-md-4">

                                <div className="container">


                                    <div class="card mt-5 bg-dark text-light ">
                                        <img src={item.avatar_url} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{item.login}</h5>
                                            <p class="card-text">To reach out Mr.{item.login}, please press this button</p>
                                        </div>
                                        <div className='px-3'>
                                            <a href={item.html_url} className="btn btn-primary">GITHUB </a>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>





                                </div>
                            </div>
                        )


                    })
                }

            </div>
        </>
    )
}

export default Gallery