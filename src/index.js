document.addEventListener("DOMContentLoaded",() => {
    const jobsUrl = "http://localhost:3000/data"

    //job containers
    let jobContainer = document.getElementById("jobs")
    let searchBar = document.getElementById("searchBar")

    // displaying jobs card
    function displayJobs(itemJob){  
        const jobCard = `
        <div class="container">
        <div id="jobs">
        <h3 id="slug">${itemJob.slug}</h3>
        <h4 id="company_name">${itemJob.company_name}</h4>
        <h2 id="title">${itemJob.title}</h2>
        <p id="description">${itemJob.description}</p>
        <h3 id="remote">${itemJob.remote}</h3>
        <p id="url">${itemJob.url}</p>
        <h3 id="tags">${itemJob.tags}</h3>
        <h3 id="job_types">${itemJob.job_types}</h3>
        <h3 id="location">${itemJob.location}</h3>
        <h4 id="created_at">${itemJob.created_at}</h4>
    </div>
    </div>
        `
        
        jobContainer.innerHTML = jobCard
    }

    // get jobs
    function getJobs(){
        let reqOptions = {
            method : "GET"
        }
        
        fetch (jobsUrl, reqOptions)
        .then((response) => response.json())
            // console.log(response)
        .then(results =>{
            
            results.forEach(jobItem => {

                displayJobs(jobItem)
                
            })
        })
      
    }
    getJobs()

    //search event listener
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'f47f2d948amshf7e417382eb17b4p1b1341jsn86b1bb9c9915',
            'X-RapidAPI-Host': 'arbeitnow-free-job-board.p.rapidapi.com'
        }
    };

    fetch('https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    
})
