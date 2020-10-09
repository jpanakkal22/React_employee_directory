import React from "react";

function SortGender(props) {
return (
    
    <div onChange={props.onChangeValue}>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="male" />
        <label class="form-check-label" for="exampleRadios1">
            Male
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="female" />
        <label class="form-check-label" for="exampleRadios2">
            Female
        </label>
        </div> 
        <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="both" checked/>
        <label class="form-check-label" for="exampleRadios2">
            Both
        </label>
        </div>        
    </div>
        
    
    )

}

export default SortGender;