


//js
//const somu =" HI me here" ;

/*const headingstyle = {
  backgroundColor : "pink",
  color: "grey",
  textAlign :"Centre",
}<h3  style ={headingstyle}>ID:1812020099</h3>*/

function Card(props){
  return <div   className="card"> 
              <h1 > {props.text}</h1>
              <p  >CSE student</p>
         </div>
}

export default Card;