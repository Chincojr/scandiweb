import React, {useState} from 'react'
import  AddProductForms, { DropDown, DynamicRender, ProductType }  from './AddProductForms';
import './AddProducts.css'

const AddProducts = () => {

  const [values, setValues] = useState({
    sku: "",
    name: "",
    price: "",
    productType: "",
    size: "",
    height: "",
    width:"",
    length: "",
    weight: "",

  });

  const [addProducts, setAddProducts] = useState({})

  const [array, setArray] = useState([])

  const handleChange = (event) => {
    setValues({...values,[event.target.name]: event.target.value })
    setAddProducts({...addProducts ,[event.target.name]: event.target.value }) 
  }

  const handleProduct = (event) =>  {
    setValues({...values,[event.target.name]: event.target.value })
    setAddProducts({...addProducts ,[event.target.name]: event.target.value }) 
    let temp = ProductType(event.target.value)
    setArray(temp)
    console.log(array);
  }

  const inputs = [
    {
      id: 1,
      name: "sku",
      type: "text",
      placeholder:"sku",
      errorMessage: "",
      label:"SKU",
    },
    {
      id: 2,
      name: "name",
      type: "text",
      placeholder:"name",
      errorMessage: "",
      label:"Name",
    },
    {
      id: 3,
      name: "price",
      type: "number",
      placeholder:"price",
      errorMessage: "",
      label:"Price",
      min: 1,
    },
  ]

  const handleCancel = () => {
    setValues({
      sku: "",
      name: "",
      price: "",
      productType: "",
      size: "",
      height: "",
      width:"",
      length: "",
      weight: "",
  
    })
  }

  const handleAdd = (event) => {

    event.preventDefault()
    const data = {
      ...addProducts,
      productValue: values.weight || values.size || `${values.height}x${values.width}x${values.length}`,
    }
    console.log(data);
    const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      // "X-Frame-Options": "ALLOWALL",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "POST, GET",
      // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      },
      body: JSON.stringify(data),
      };
    fetch('http://localhost:3001/add-products', options)
      .then(() => {
        handleCancel()
      })
  }

  return (
    <div className="product_form grid justify-center mt-[50px] ">
      <h3 className="text-center text-[40px] font-bold ">Add Products</h3>
      <form onSubmit={handleAdd} className="mt-8 grid justify-center items-center w-[301px]">
        <div className="grid gap-y-2">
            {
              inputs.map((input) => {
                return(
                <AddProductForms 
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  handleChange = {handleChange}
                />
                )
              })
            }
            <DropDown handleProduct = {handleProduct} demo = {values.productType} />
            <DynamicRender  value={values} handleChange = {handleChange} product = {array} />
            <div className="grid grid-flow-col gap-x-2">
              <button type='submit'  className="form__btn">SAVE</button>
              <button className="form__btn" onClick={handleCancel}>CANCEL</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default AddProducts