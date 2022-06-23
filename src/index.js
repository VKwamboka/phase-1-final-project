document.addEventListener("DOMContentLoaded",() => {
    // const jobsUrl = "http://localhost:3000/data"

    //job containers
    let jobContainer = document.getElementById("jobs")
    let searchBar = document.getElementById("searchBar")

    // displaying jobs card
    function displayJobs(itemJob){  
        const jobCard = `
        <div class="container">
         <div id="jobs">
                <p id="slug">${itemJob.slug}</p>
                <p id="company_name">Company: ${itemJob.company_name}</p>
                <h4 id="title">${itemJob.title}</h4>
                <p id="description">${itemJob.description}</p>
                <p id="remote">${itemJob.remote}</p>
                <p id="url">${itemJob.url}</p>
                <p id="tags">${itemJob.tags}</p>
                <p id="job_types">${itemJob.job_types}</p>
                <p id="location">${itemJob.location}</p>
                <p id="created_at">${itemJob.created_at}</p>
            </div>
        </div>
        `
        
        jobContainer.innerHTML = jobCard
    }

    // get jobs
    function getJobs(){
        let reqOptions = {
            method : "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': 'f47f2d948amshf7e417382eb17b4p1b1341jsn86b1bb9c9915',
                'X-RapidAPI-Host': 'arbeitnow-free-job-board.p.rapidapi.com'
            }
        };
        
        fetch ('https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api', reqOptions)
        .then((response) => response.json())
            // console.log(response)
        .then(results =>{
            for(const jobbs in results){
                displayJobs(jobbs)
                console.log(jobbs)
            }
            // results.forEach(jobItem => {
            //     displayJobs(jobItem)
            //     // console.log(response[0])
            // })
            
        }) .catch(err => console.error(err));
      
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
