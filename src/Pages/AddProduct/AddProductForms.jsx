import React from "react";

export const DropDown = (props) => {

    
    return(
        <label htmlFor="" className="">
            Product Type
            <select name="productType" onChange= {props.handleProduct} id="" className=" form__inputs text-center ">
                <option value={props.demo} className="">--- Select Product Type ---</option>
                <option value="size" className="">DVD</option>
                <option value="furniture" className="">Furniture</option>
                <option value="weight" className="">Weight</option>
            </select>
        </label>
    )
}

export const ProductType = (prop) => {
    
    const arr = []

    class Test {
        constructor( ){
            this.errorMessage = 'Please inut the right values'
        }


    
        size(){
            const Object = {
                key : 1,
                id : 'DVD',
                errorMessage : this.errorMessage,
                input : [
                    {
                        key : 1,
                        type: 'number',
                        label: 'Size (MB)',
                        name: 'size',
                    }
                ]
            }
            arr.push(Object)
        }
    
        furniture(){
            const Object = {
                key : 1,
                id : 'furniture',
                errorMessage : this.errorMessage,
                input : [
                    {
                        key: 1,
                        type: 'number',
                        label: 'Height (CM)',
                        name: 'height',
                    },
                    {
                        key: 2,
                        type: 'number',
                        label: 'Width (CM)',
                        name: 'width',
                    },
                    {
                        key: 3,
                        type: 'number',
                        label: 'Length (CM)',
                        name: 'length',
                    },
                ]
            }   
            arr.push(Object)
        }

        
    
        weight(){
            const Object = {
                key : 1,
                id : 'weight',
                errorMessage : this.errorMessage,
                input : [
                    {
                        key: 1,
                        type: 'number',
                        label: 'Weight (KG)',
                        name: 'weight',
                    }
                ]
            }
            arr.push(Object)
        }
    }

    let val = new Test()
    let value = prop
    eval(`val.${value}()`) 
    
    return arr
}

export const DynamicRender = (props) =>  {
    let arr = props.product


    return(
        <>
        {
            arr.map(value => {
                return(
                    <div 
                        key={value.key}  
                        id ={value.id}
                        className="grid gap-y-3">
                        {
                            value.input.map(inputsProp => {
                                return(
                                <div key={inputsProp.key} className="w-full">
                                    <label htmlFor={inputsProp.name}   className="">
                                        {inputsProp.label}
                                        <input {...inputsProp} 
                                        id={inputsProp.name}
                                        min="1"
                                        value={props.value[inputsProp.name]}
                                        onChange={props.handleChange}
                                        className="form__inputs border-2 "
                                        placeholder={inputsProp.name}  />
                                    </label>   
                                    <span className="">{inputsProp.errorMessage}</span>
                                </div>
                                ) 
                            })
                        }
                    </div>
                )
            })
        }
        </>
    )
}

const AddProductForms = (props) => {

    const { label, handleChange, errorMessage, ...inputProp } = props

  return (
    <div>
        <label htmlFor={inputProp.name} className="">
            {label}
            <input 
            {...inputProp}
            id={inputProp.name}
            className="border-2 form__inputs  " 
            onChange={handleChange}
            />
        </label>
        <div className="">{errorMessage}</div>
    </div>
  )
}

export default AddProductForms

