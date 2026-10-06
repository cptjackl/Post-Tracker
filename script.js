//Elements
const $trackers = document.getElementById("trackers")
const $newPostForm = document.getElementById("newPostForm")
const $postDisplay = document.getElementById("postDisplay")
const $postSelectionForm = document.getElementById("postSelection")
const $postSelection = document.getElementById("postSelect")



//Arrays
const trackers = [
    {
        sub: "Godot",
        link: "https://www.reddit.com/r/godot/",
        time: 3,
    },
    {
        sub: "Ottawa",
        link: "https://www.reddit.com/r/ottawa/",
        time: 3,
    },
    {
        sub: "ndp",
        link: "https://www.reddit.com/r/ndp/",
        time: 3,
    }
]

const posts = [
    {
        title: "Post 1", 
        image: "https://i.redd.it/aelq3ppqjwth1.jpeg", 
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur ante quam, pharetra congue arcu scelerisque quis. Nunc ornare, tellus eu consequat efficitur, mi eros sagittis ligula, at malesuada ligula diam vel arcu. Aliquam eu justo non elit dapibus ullamcorper. Integer aliquet lectus non accumsan consequat. Nulla dapibus ipsum vitae velit vehicula, eget dictum nisl egestas. Phasellus lobortis placerat consectetur. Quisque nec ornare purus, non molestie tellus. Proin vitae tortor sed odio hendrerit consectetur id vitae arcu. Maecenas pharetra mi ut diam vehicula laoreet ac eget nibh. Sed tempus ut massa eget bibendum. "
    },
    {
        title: "Post 2", 
        image: "https://i.redd.it/lxf0voqgawth1.png", 
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur ante quam, pharetra congue arcu scelerisque quis. Nunc ornare, tellus eu consequat efficitur, mi eros sagittis ligula, at malesuada ligula diam vel arcu. Aliquam eu justo non elit dapibus ullamcorper. Integer aliquet lectus non accumsan consequat. Nulla dapibus ipsum vitae velit vehicula, eget dictum nisl egestas. Phasellus lobortis placerat consectetur. Quisque nec ornare purus, non molestie tellus. Proin vitae tortor sed odio hendrerit consectetur id vitae arcu. Maecenas pharetra mi ut diam vehicula laoreet ac eget nibh. Sed tempus ut massa eget bibendum. "
    },
    {
        title: "Post 3", 
        image: "https://i.redd.it/qjsjbmf2lwth1.png", 
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur ante quam, pharetra congue arcu scelerisque quis. Nunc ornare, tellus eu consequat efficitur, mi eros sagittis ligula, at malesuada ligula diam vel arcu. Aliquam eu justo non elit dapibus ullamcorper. Integer aliquet lectus non accumsan consequat. Nulla dapibus ipsum vitae velit vehicula, eget dictum nisl egestas. Phasellus lobortis placerat consectetur. Quisque nec ornare purus, non molestie tellus. Proin vitae tortor sed odio hendrerit consectetur id vitae arcu. Maecenas pharetra mi ut diam vehicula laoreet ac eget nibh. Sed tempus ut massa eget bibendum. "
    }
]


//Functions
function displayTrackers(){
    $trackers.innerHTML = trackers.reduce((html,track)=>html + 
    `<div id="tracker1" class=" p-3 border-1 bg-light border border-1 mt-3 d-flex justify-content-between">
        <div>
            <h3> <a href='${track.link}'>${track.sub}</a> </h3>
            <p>Time remaining:${track.time}hrs </p>
        </div>
        <input type="button" value="reset">
    </div>`,'')
}

function displayPost(selPost){
    post = posts.find((story)=>story.title == selPost)

    $postDisplay.innerHTML = `
            <h3>${post.title}</h3>
            <img src=${post.image}>
            <p>${post.body}</p>`

        $newPostForm.classList.add('d-none')
        $postDisplay.classList.remove('d-none')
}

function fillPostList(){
    $postSelection.innerHTML = posts.reduce((html,post)=>html+
    `
    <option value="${post.title}">${post.title}</option>
    `,'<option value="newPost">Create New Post</option>')
}

$newPostForm.addEventListener('submit',function(e){
    e.preventDefault()
    let answers = e.target.elements
    posts.push({title:answers[0].value,image:answers[1].value,body:answers[2].value})
    fillPostList()
})

$postSelectionForm.addEventListener('click',function(e){
   selPost = $postSelection.value
    
    if(selPost == 'newPost'){
        
        $newPostForm.classList.remove('d-none')
        $postDisplay.classList.add('d-none')
    }else{
        displayPost(selPost)
    }
})

displayTrackers()
fillPostList()