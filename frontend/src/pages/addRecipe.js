import React, { useState } from "react"

/*cloudinary.config({ 
    cloud_name: 'guptap1', 
    api_key: '695351193913259', 
    api_secret: 'sjzBCiI7JQidzt-HUrwCpIBCtGc' 
});*/

function AddRecipe() {
    const [count, setCount] = useState(1);

    function doTheAdd() {
        const recipename = document.getElementById("recipename").value;
        const recipesteps = []
        const recipeimage = document.getElementById("profilepic").files[0];

        for (var i = 0; i < count; i++) {
            recipesteps.push(document.getElementById("recipesteps" + i).value);
        }

        
    }

    const addLine = () => {
        setCount(count + 1);
    }

    let widget = window.cloudinary.createUploadWidget()
    
    return(
        <div>
            <h3 className="display-3 text-center">Add a Recipe</h3>
            <div className="form-group text-center">
                <label for="recipename" className="mx-2">Recipe Name</label><br />
                <input type="text" id="recipename" name="recipename" placeholder="What'd you make?" className="m-2" />
            </div>
            <div className="form-group text-center">
                <label for="recipesteps" className="mx-2">Steps</label><br />
                {[...Array(count)].map((value, index) => (<div><input type="text" id={"recipesteps" + index} name="recipesteps" placeholder="How'd you make it?" className="m-2" /><br /></div>))}
            </div>
            <div className="text-center">
                <button onClick={addLine} type="submit" className="btn btn-primary m-2 text-center">Add Step</button>
            </div>
            <div className="form-group text-center">
                <label for="profilepic" className="mx-2">Recipe Photo</label><br />
                {/*<input type="file" name="profilepic" accept="image/*" id="profilepic" className="m-2" />*/}
            </div>
            <div className="text-center">
                <button onClick={doTheAdd} type="submit" className="btn btn-primary m-2 text-center">Submit</button>
            </div>
        </div>
    );
}

export default AddRecipe;