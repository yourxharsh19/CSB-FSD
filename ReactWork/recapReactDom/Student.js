const parent=document.getElementById('parent');
console.log(parent);
const root =ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:"blue",background:"yellow"}},"Hello from Student Component");
// const h3=React.createElement("h3",{style:{color:"purple"}},"This is Student.js file");
// const wrapper=React.createElement('div',{},h2,h3);
// root.render(wrapper);

const img=<img src="https://picsum.photos/200/300" style={{width:'200px', height:'200px', borderRadius:'50%'}}/>
const myname=<h2 style={{color:'red'}}>Harshdeep</h2>
const branch=<h3 style={{color:'green'}}>Computer Science</h3>
const section=<h3 style={{color:'orange'}}>Section B</h3>

const college=<h4 style={{color:'blue'}}>ABES Engineering College</h4>
const container=(
      <div style={{textAlign:'center', backgroundColor:'lightgrey', padding:'20px', borderRadius:'10px', boxShadow:'0 0 10px rgba(0,0,0,0.1)', maxWidth:'400px', margin:'auto', marginTop:'50px', fontFamily:'Arial, sans-serif', color:'#333', lineHeight:'1.6', fontSize:'16px', letterSpacing:'0.5px', wordSpacing:'2px', textShadow:'1px 1px 2px rgba(0,0,0,0.1)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'15px', transition:'all 0.3s ease-in-out', hover:{boxShadow:'0 0 15px rgba(0,0,0,0.2)'}, cursor:'pointer', transition:'all 0.3s ease-in-out', hover:{transform:'scale(1.05)', boxShadow:'0 0 15px rgba(0,0,0,0.2)'}, animation:'fadeIn 0.5s ease-in-out'}}>
        {img}
        {myname}
        {branch}
        {section}
        {college}
      </div>
)
root.render(container);

