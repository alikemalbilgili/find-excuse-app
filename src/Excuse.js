import {useState} from 'react'
import Axios from 'axios'
import './App.css'

export const Excuse = (props) =>{
    const categories = ['family','office','children','party','funny','unbelievable','developers','gaming'];
    const [excuse, setExcuse] = useState("");
    const [category, setCategory] = useState("")
   
   
    const fetchExcuse = () =>{
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then((res)=>{
            setExcuse(res.data[0].excuse)
        })
    }

    const handleCategoryClick = (selectedCategory) => {
        setCategory(selectedCategory);
        fetchExcuse()
      }

    return (
        <div className='container'>
            <h1>Create Excuses By Category</h1>
            { categories.map((category,index)=>{
             return <button key={index} onClick={()=>handleCategoryClick(category)}>{category}</button>
             })}
           <h1>{excuse}</h1>
        </div>
    )
}