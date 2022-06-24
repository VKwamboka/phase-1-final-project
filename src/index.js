document.addEventListener("DOMContentLoaded",() => {
    // const jobsUrl = "http://localhost:3000/data"

    //job containers
    let jobContainer = document.getElementById("jobs")
    let searchBar = document.getElementById("searchBar")

    // displaying jobs card
    function displayJobs(itemJobObj){  
        console.log(itemJobObj)
        const ul = document.createElement('ul')
        itemJobObj.forEach(itemJob=>{
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
            const li = document.createElement('li')
            li.innerHTML = jobCard
            console.log(li)
            ul.appendChild(li)
            console.log(ul)

        })
        jobContainer.appendChild(ul)

        
       
        //console.log(jobCard)
        
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
        .then(results => displayJobs(results.data))
            //{
            // for(const jobbs in results){
            //     displayJobs(jobbs)
            //     console.log(jobbs)
            // }
            // Array.from(results).forEach(jobItem => {
            //     displayJobs(jobItem)
                // console.log(response[0])
           // })
            
        //}) 
        .catch(err => console.error(err));
      
    }
    getJobs()
    //displayJobs()

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


        let bonclick =document.getElementById('id01')
        function loginf(){
            let formcard =`
            <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>
            <div id="id01" class="modal">
  
            <form class="modal-content animate" action="/action_page.php" method="post">
            <div class="imgcontainer">
                <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
                <img src="img_avatar2.png" alt="Avatar" class="avatar">
            </div>

            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>
                
                <button type="submit">Login</button>
                <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
            </form>
            </div>

    
            `
        }



})