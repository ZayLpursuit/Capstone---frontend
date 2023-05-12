import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const API = process.env.REACT_APP_API_URL;

const Show = () => {
    const [business, setBusiness] = useState([])
    const { name, address, contact_num, year_opened, is_online, is_store, img, category, website, description } = business;

    let { id } = useParams();

    useEffect(() => {
        axios
            .get(`${API}/businesses/${id}`)
            .then((res) => {
                console.log(res.data)
                setBusiness(res.data)
            })
        .catch((c) => console.error("catch", c))
    }, [])


  return (
      <div>
          <div className='center-text'>
              <h1>{name}</h1>
              <img src={img} alt={name} height="400px" width="400px"/>
          </div>
          <section>
              <h3>Year Opened: {year_opened}</h3>
              <h3>Location: {address ? address : "Online Only"}</h3>
              <h3>Phone Number: {contact_num ? contact_num : "N/A"}</h3>
              <h3>Website: <a href={website ? website : "N/A"} target="*">{website}</a></h3>
              <h4>{description }</h4>
          </section>
    </div>
  )
}

export default Show
