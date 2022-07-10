const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded",() => {

    //job containers
    let jobContainer = document.getElementById("jobs")

    // define form
    let form = document.getElementById("searchForm")

    // search value input
    let searchInput = document.getElementById("searchBar")

    // search location input
    let searchLocationInput = document.getElementById("searchLocation")


    // event listener when form is submitted
    form.addEventListener("submit", function(event) {

        event.preventDefault()
        console.log(searchInput.value)
        console.log()
        
        // contains request method and authorization headers
        const options = {
            method: 'GET',
            headers: {Authorization: 'Token 46c9519a669fd6735fc7a3ac47ed8b16aa69b4e3'}
          };
          
        // create url searchparams based on input  
        const searchparams = new URLSearchParams({
            search : searchInput.value,
            sort_by : 'relevance',
            location : searchLocationInput.value,
        })

        fetch(`https://cors.eu.org/https://findwork.dev/api/jobs/?${searchparams}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response.results)
            displayJobs(response.results)
        })
        
        .catch(err => console.error(err));
        form.reset()

    })

    

    // displaying jobs card
    function displayJobs(itemJobs){  
        console.log(itemJobs)
        const ul = document.createElement('ul')
        itemJobs.forEach(itemJob=>{
        const jobCard = `
        <br>
        <div class="container" id="jobconts"> 
            <div id="jobs">
                <p>ID: ${itemJob.id}</p>
                <h3 id="role">${itemJob.role}</h3>
                <br>
                <h4>${itemJob.company_name}</h4>
                <p>${itemJob.employment_type}</p>
                <p><h4>Posted on</h4>${itemJob.date_posted}</p>
                <img src= ${itemJob.logo} alt="logo">
                <p>${itemJob.text}</p>        
               <a href=${itemJob.url}>Visit our site</a>
                <hr>
                <footer>
                  <ul>
                    <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
                  </ul>
                </footer>
                <br>
            </div>
        </div>
        `
        
        const li = document.createElement('li')
            li.innerHTML = jobCard
            console.log(li)
            ul.appendChild(li)
            console.log(ul)

        })
        jobContainer.appendChild(ul)
    }

    //mouseover event to change color
    let bar1 = document.getElementById('home')
    bar1.addEventListener('mouseover', function handleMouseOver() {
        bar1.style.color = 'green';
      });

      bar1.addEventListener('mouseout', function handleMouseOut() {
        bar1.style.color = 'black';
      });

      let bar2 = document.getElementById('abo')
      bar2.addEventListener('mouseover', function handleMouseOver() {
          bar2.style.color = 'green';
        });
  
        bar2.addEventListener('mouseout', function handleMouseOut() {
          bar2.style.color = 'black';
        });

        let bar3 = document.getElementById('job')
        bar3.addEventListener('mouseover', function handleMouseOver() {
            bar3.style.color = 'green';
          });
    
          bar3.addEventListener('mouseout', function handleMouseOut() {
            bar3.style.color = 'black';
          });
      
    //mouseover event to display content
    function navBar(evt, content) {
        // Declare all variables
        let i, tabcontent, tablinks;
      
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.querySelector("navbarcontainer");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("navlist");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        // Show the current tab, and add an "active" class to the link that opened the tab
        document.getElementById(content).style.display = "block";
        evt.currentTarget.className += " active";
      }
    //   navBar()xp

    const btnform = document.getElementById('btnform');
    // console.log(btnform)
    const form2 = document.getElementById('id01');
    form2.style.display = 'none '
    // console.log(form2)
    btnform.addEventListener('click', () => {
      
    if (form2.style.display === 'none') {
       
        form2.style.display = 'block';
    } else {
        
        form2.style.display = 'none';
    }
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
    
})
