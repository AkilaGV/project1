import react from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import img1 from "./image/icon.jpg";


const root=ReactDOM.createRoot(document.getElementById("root"));

function Form(){
return (
<div>
  
      <div className="flex flex-row justify-center items-center mt-2"> 
        <h1 className="font-medium ">Internship Registration</h1>
        <img src={img1} alt="" style={{marginLeft:"20px"}}/>
      </div>
     
      
      <div className="flex flex-column justify-center mt-2 text-sm ">
    
      
      
       <form>
        <table >
          <tr>
            <td>Name</td>
            <td><input type="text" id="name" ></input></td>
           
          </tr>
          <tr>
            <td>Last Name</td><td><input type="text"></input></td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td><input type="number" id="phonenumber"></input></td>
            
          </tr>
          <tr>
            <td>Email Address</td>
            <td><input id="email" ></input></td>
           
          </tr>
          
          <tr>
            <td>Nationality</td><td>
              <input type="text"></input></td>
          </tr>
          <tr><td>Gender</td>
          <td><input type="radio" name="gender"/>
          <label for="genderMale">Male</label>
          <input type="radio" name="gender"/>
          <label for="genderFemale">Female</label></td>
          </tr>
          
          
          
         
            
          <tr>
           
            <td>Mode of Internship</td>
            
            <select>
              <option>
            Online
              </option>
              <option>Offline</option>
            </select>
          </tr>
            
            
          <tr>
            <td>Domain</td>
              <select>
                <option>Frontend Developer</option>
                <option>Backeend Developer</option>
                <option>Full stack Developer</option>
                <option>Devops Course</option>
                <option>Data Science</option>
              </select>
           

          </tr>
          <tr>
            <td > Why Internship?</td>
            <select>
              <option>
                Learn & Upgrade
              </option>
              <option>
                Get Trained & Gain Experience
              </option>
            </select>
          </tr>
          <tr>
           <td> How did you came to know about us?</td>
           <select>
            <option>
            Google,Yahoo,Bing
           </option>
           <option>Linkedin</option>
           <option>Instagram</option>
           <option>Whatsapp</option>
           </select>
           
          </tr>
          <tr>
              <td>Upload your Resume
              </td>
              <td><input type="file"></input></td>
          </tr>
          <tr>
            <td><input type="reset" style={{height:"30px",width:"70px",backgroundColor:"royalblue",color:"white",borderWidth:"0px"}}></input></td>
            <td><input type="submit" style={{height:"30px",width:"70px",backgroundColor:"royalblue",color:"white",borderWidth:"0px"}}></input></td>
          </tr>
          <tr>
            <td></td>
          </tr>
         
        <tr>
          <td>Enter your queries</td>
          <td>
          <input ></input>
          </td>
        </tr>




          
        </table>
       </form>
       
       </div>
       <div className="flex flex-row justify-center items-center mt-2 mb-2">
      <button>Register</button>
      </div>
</div>)
  
  
}




root.render(
 
    <Form></Form>
 


)
