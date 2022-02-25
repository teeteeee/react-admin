import "./newProduct.css"

export default function NewProduct() {
  return (
    <div className="NewProduct">
        <h1 className="addProductTitle">New Product</h1>        
            <form className="addproductForm">
                <div className="addproductItem">
                    <label>Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="addproductItem">
                    <label>Name</label>
                    <input type="text" placeholder="Apple Airpods" />
                </div>
                <div className="addproductItem">
                    <label>Stock</label>
                    <input type="text" placeholder="123" />
                </div> 
                <div className="addproductItem">
                    <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                </div>  
                <button className="addproductButton">Create</button>     
            </form>
        
    </div>
  )
}
