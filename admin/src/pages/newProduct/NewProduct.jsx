import { useState } from "react";
import { useDispatch } from 'react-redux'
import "./newProduct.css";

export default function NewProduct() {
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);
    const dispatch = useDispatch();


    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    const handleCat = (e) => {
        setCat(e.target.value.split(","));
    };

    console.log(inputs);

    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Image</label>
                    <input name="img" type="file" id="file" onChange={e => setFile(e.target.files)[0]} />
                </div>
                <div className="addProductItem">
                    <label>Title</label>
                    <input
                        name="title"
                        type="text"
                        placeholder="Apple Airpods"
                        onChange={handleChange}
                    />
                </div>
                <div className="addProductItem">
                    <label>Description</label>
                    <input
                        name="desc"
                        type="text"
                        placeholder="description"
                        onChange={handleChange}
                    />
                </div>
                <div className="addProductItem">
                    <label>price</label>
                    <input
                        name="price"
                        type="number"
                        placeholder="100"
                        onChange={handleChange}
                    />
                </div>
                <div className="addProductItem">
                    <label>Categories</label>
                    <input
                        name="cat"
                        type="text"
                        placeholder="Jeans,Shirt"
                        onChange={handleCat}
                    />
                </div>
                <div className="addProductItem">
                    <label>Stock</label>
                    <select name="inStock" onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <button onClick={handleClick} className="addProductButton">Create</button>
            </form>
        </div>
    );
}
