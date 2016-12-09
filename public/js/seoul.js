"use strict";

class App{
  constructor(){
    this.journey = [

  {
        "id": 1,
        "name": "Seoul",
      
      },
    ];
      
  
  }

  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }

journeyDesign(){
    let id = document.getElementById('journey1');
    let name = document.getElementById('journey2');
    let details = document.getElementById('journey3');
    let image = document.getElementById('journey4');
  

    let journey = {      
      "id": id.value,
      "name": name.value,
      "details": details.value,
      "image": image.value,
     
    };


    this.journey.push(journey);

    
    id.value = name.value = details.value = image.value = ''; 
  } 

  journeyDelete(key){
    let r = this.journey;
    for(let i=0;i<r.length;i++){
      if(r[i].id == key){
        this.journey.splice(i,1);
        break;
      }
    }   
    this.journeyList();
  }

  SearchJourneyById(id){
    let r = this.journey;
    for(let i=0;i<r.length;i++){
      if(id==r[i].id){
        return r[i];
      }
    }
  } 

  SearchJourney(name){
    let objects = [];
    let r = this.journey;
    for(let i=0;i<r.length;i++){
      let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
      if(expr){
        objects.push(r[i]);
      }
    }
    return objects;
  }
}
class Component extends App{
  constructor(){
    
    super();
  }

journeyDesignLayout(){
  let html = `
   <right>
   <div class="fixed-action-btn horizontal">
    <a class="btn-floating btn-large red">
      <i class="large material-icons">mode_edit</i>
    </a>
    <ul>
      <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
      <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
      <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
      <li><a class="btn-floating blue" href="app.html"><i class="material-icons">replay</i></a></li>
    </ul>
  </div>
  </right>
<div id="index-banner" class="parallax-container">
    <div class="section no-pad-bot">
      <div class="container">
        <br><br>
        <h1 class="header center teal-text text-lighten-2">Seoul</h1>
        <div class="row center">
          <h5 class="header col s12 light">Start a journey and satisfy your soul</h5>
        </div>
        <br><br>

      </div>
    </div>
    <div class="parallax"><img src="img/seoul.jpeg" alt="Unsplashed background img 1" style="display: block; transform: translate3d(-50%, 202px, 0px);"></div>
  </div>
    <div class="container">
    <div class="section">

      <!--   Icon Section   -->
       <ul class="collapsible popout" data-collapsible="accordion">
    <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>Introduction</div>
      <div class="collapsible-body"><p>Seoul is the capital of Korea with over 600 years of history. It is the heart of Korea’s culture and education as well as politics and economics. Seoul is home to many old historic sites like Gyeongbokgung and Changdeokgung Palaces, and places of traditional culture like Bukchon Hanok Village, Insa-dong, and Namdaemun Market. </p></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Journey Location</div>
      <div class="collapsible-body"><p><center> <img class="materialboxed" width="650" src="img/seoul3.png"></center></p></div>
    </li>
  </ul>

  </div>
  </div>
  <div class="parallax-container">
    <div class="parallax"><img src="img/seoul2.jpg" alt="Unsplashed background img 1" style="display: block; transform: translate3d(-50%, 202px, 0px);"></div>
  </div>
  <div class="container">
    <div class="section">

      <div class="row">
        <div class="col s12 center">
          <h3><i class="mdi-content-send brown-text"></i></h3>
          <center>
<i class="large material-icons"><a href="app.html" class="material tooltipped" onclick="Materialize.showStaggeredList('#staggered-test'), Materialize.toast('Select A Place', 5000, 'rounded');" data-position="left" data-delay="50" data-tooltip="Return">replay</a></i>
 
  </center>
        </div>
      </div>

    </div>
  </div>
  <div class="parallax-container valign-wrapper">
    <div class="section no-pad-bot">
      <div class="container">
        <div class="row center">
        </div>
      </div>
    </div>
    <div class="parallax"><img src="img/seoul1.jpg" alt="Unsplashed background img 3" style="display: block; transform: translate3d(-50%, 30px, 0px);"></div>
  </div>
  </div>

`;
  
    this.reRender(`
      ${html}

      `,document.getElementById("app"));
    this.journeyRecent();    
  }

Journey(id){
    let r = this.SearchJourneyById(id);

    let html = `

     <h5 class="center-align">${r.name}</h5>
      <div class="row">       
        <div class="col s12 m12">
          <div class="cardpanel teal">
            <div class="card-image">
              <img src="${r.image}">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>${r.details}</p>
              </div>
            <div class="card-action small">               
                <span onclick="component.journeyDelete(${r.id})" class="new badge small red" data-badge-caption="">Delete Base</span>
               <span onclick="component.journeyList()" class="new badge small" data-badge-caption="">Back to List</span>
              </div>            
            </div>     
          </div>   
          
        </div>      
      </div>
    `;

    this.reRender(`   
      ${html}     
      `,document.getElementById("Journey"));
    $('#Journey').show();
    $('#journeyRecent').hide();
    $('#journeyList').hide();
    $('#latestJourney').hide();

      $('#Home').hide();
  }

  journeyList(){
    

    html += `
      <div class="row" id="journeyItems">
    `;
    let r = this.journey;
    for(let i=0;i<r.length;i++){
      html+= `
      <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].image}">
              <span class="card-title">${r[i].name}</span>
            </div>
            <div class="card-content">
              <p>${r[i].details}</p>
            </div>
            <div class="card-action">
              <a href="#" onclick="component.Journey(${r[i].id})">Details</a>
            </div>
          </div>
        </div>
      `;
    }

    html += `</div>`;

    this.reRender(`
      ${html}
      `,document.getElementById("journeyList"));
    $('#journeyList').show();
    $('#Journey').hide();
    $('#journeyRecent').hide();
    $('#latestJourney').hide();    
         $('#Home').hide();
  }

journeyItems(name){
    let html = ``;
    let r = this.SearchJourney(name);
    for(let i=0;i<r.length;i++){
      html+= `
        <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].image}">
              <span class="card-title">${r[i].name}</span>
            </div>
            <div class="card-content">
              <p>${r[i].details}</p>
            </div>
            <div class="card-action">
              <a href="#" onclick="component.Journey(${r[i].id})">More</a>
            </div>
          </div>
        </div>
      `;
    }   

    this.reRender(`
      ${html}
      `,document.getElementById("journeyItems"));
    $('#journeyList').show();
    $('#Journey').hide();
    $('#journeyRecent').hide();  
    $('#latestJourney').hide();
        $('#Home').hide();    
  }

  journeyRecent(){
    
    let html = `



      <div class="row">
    `;

    let r = this.journey;
    let count = 0;
    for(let i=(r.length-1);i>=0;i--){
      if(count++ === 6)break;
      html+= `
        <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].image}">
              <span class="card-title">${r[i].name}</span>
            </div>
            <div class="card-content">
              <p>${r[i].details}</p>
            </div>
            <div class="card-action">
              <a href="#" onclick="component.Journey(${r[i].id})">Details</a>
            </div>
          </div>
        </div>
      `;
    }

    html += `</div>`;

    this.render(`   
      ${html}
      `,document.getElementById("journeyRecent"));
  }

  latestJourney(){
    let html = `

   
     
          
       <div class="row">
            <div class="input-field col s6 ">
           
              <input disabled value="${this.journey.length+1}" id="journey" type="text"class=" validate" >
            </div>
              <div class="row">
          <div class="input-field col s6 ">
              <input id="journey2" type="text" class=" vintage">
              <label for="journey2">Brand Name</label>
            </div>
          </div>
          
          <div class="row">
            <div class="input-field col s6 ">
              <input id="journey3" type="text" class="vintage">
             <label for="journey3">Car Details</label>
            </div>

            <div class="row">
            <div class="input-field col s6 ">
              <input id="journey5" type="text" class="vintage">
              <label for="journey5">Enter Link Address Picture</label>
            </div>
       
        <div align="left">
       
       <button onclick="component.journeyList()" class="btn waves-effect waves-light">Back</button>
       <button onclick="component.journeyDesign()" class="btn waves-effect waves-light">Save</button>
         </div>
        
      

    `;

    this.reRender(`
      ${html}
      `,document.getElementById("latestJourney"));
    $('#latestJourney').show();
    $('#journeyList').hide();
    $('#Journey').hide();
    $('#journeyRecent').hide(); 
    $('#Home').hide();    
  }

  Home(){
  let html=`



  `;
   this.reRender(`
      ${html}
      `,document.getElementById("latestJourney"));
    $('#latestJourney').show();
    $('#journeyList').hide();
    $('#Journey').hide();
    $('#journeyRecent').hide(); 
    $('#Home').hide();

}

} 
let component = new Component();
component.journeyDesignLayout();