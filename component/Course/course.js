const template=document.createElement('template')
template.innerHTML=`
<link rel="stylesheet" href="component/Course/course.css" />
<div class="course-card">
<div class="cover">
  <img src="" alt="" >
</div>

<div class="details">
    <h2></h2>
    <div class="info">
      <p>students:<slot name="students"></slot></p>
      <p> Teacher:<slot name="Teacher"></slot></p>
    </div>

    <div class="actions">
      <button id="register">Register</button>
      <button id="toggle">Show Details</button>
    </div>
</div>




</div>
`

class Course extends HTMLElement{
    constructor(){
        
        super()
        this.toggleInfo=false
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        
    }
    register(comp){
     
       alert(`you registered in ${comp.getAttribute('title')}`)
    }
    changeToggle=()=>{
        this.toggleInfo=!this.toggleInfo
        this.shadowRoot.querySelector('.info').style.display= this.toggleInfo ? 'block' :  'none'
        
        this.shadowRoot.querySelector('#toggle').innerHTML= this.toggleInfo ? 'Hide Detail' :  'Show Details'
    

     
    }

    connectedCallback(){
      this.shadowRoot.querySelector('.details h2').innerHTML=this.getAttribute('title')
      this.shadowRoot.querySelector('.cover img').src=this.getAttribute('cover')

      this.shadowRoot.querySelector('#register').addEventListener('click',()=>{
        this.register(this)
      })
      this.shadowRoot.querySelector('#toggle').addEventListener('click',this.changeToggle)
    }
    static observedAttributes(){
        return["title","cover"]
    }
}
export {Course}