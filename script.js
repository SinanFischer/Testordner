let posts = [
    {
        "username": "Fairy",
        "username2": "Die_Fee_im_Walde",
        "profilimages": "img/background_hintersee.jpg",
        "postingimage": "img/frau-im-wald.jpg",
        "likes": "9.212",
        "comments": ['Schönes Foto', 'auf gehts!', 'sehr schönes Bild!'],
        "location": "In der Natur",
    },
    {
        "username": "Foxy",
        "username2": "Die_Füchsin",
        "profilimages": "img/bild1 (2).jpg",
        "postingimage": "img/bild1 (9).jpg",
        "likes": "13.532",
        "comments": ['Ich Liebe den WALD!',],
        "location": "Bei den Rehen",
    },
    {
        "username": "m_lucas",
        "username2": "lucas",
        "profilimages": "img/bild1 (3).jpg",
        "postingimage": "img/bild1 (11).jpg",
        "likes": "84.123",
        "comments": ['Guter Schnappschuss und eine sehr schöne Eule.'],
        "location": "Schwarzwald",
    },
    {
        "username": "hrdn_jnfr",
        "username2": "harden_jennifer",
        "profilimages": "img/bild1 (4).jpg",
        "postingimage": "img/bild1 (12).jpg",
        "likes": "176.212",
        "comments": ['Amazing'],
        "location": "Rostocker Zoo",
    },
    {
        "username": "tree_magic",
        "username2": "TreeMagic",
        "profilimages": "img/bild1 (6).jpg",
        "postingimage": "img/bild1 (17).jpg",
        "likes": "12.256",
        "comments": ['besser als mallorca.'],
        "location": "Magieversunken",
    },
    {
        "username": "treeoftea",
        "username2": "treeoftea",
        "profilimages": "img/bild1 (7).jpg",
        "postingimage": "img/bild1 (18).jpg",
        "likes": "186.082",
        "comments": ['Naja gibt schönere Wege...', 'also mal ehrlich...grummel, grummel.'],
        "location": "Richtung Burgfest",
    },
]

let rater = ["Japlant", "Die_Eule", "Martin_432", "llyf", "Der_#Fuchs", "Grummelbaer", "Since this is just an exercise, the array ends with the names."]; 

let like = 0; // needed for the like button


// pp stays for profile picture // HTML as start function startname stands for HTML Code for the function behind the HTML // 

load();


// Shows Storys from Friends 

function storyPreview() {
    document.getElementById('story-section').innerHTML = '';
    for (i = 0; i < posts.length; i++) {
        document.getElementById('story-section').innerHTML += `
    <div class="story-img"> 
        <img src="${posts[i]["profilimages"]}" class="insta-gradient"> 
        <span>
            ${posts[i]["username"]}
        </span>
    </div>
    `;
    }
    friendSuggestions();
}


// Zeigt Suggestions for Friends 
function friendSuggestions() {
    document.getElementById('suggestions-friends').innerHTML = '';
    for (i = 0; i < posts.length; i++)
    hTMLFriendSuggestions(i); 
    showPosts();
    
} 


// Shows all postings 
function showPosts() {

    document.getElementById('postings').innerHTML = '';
    for (i = 0; i < posts.length; i++) {
        hTMLshowPosts(i, posts); 
        commentPreview(i, posts);
    }
}


// Function for filtering the search bar
function searchCreator(nameid) {
    let search = document.getElementById(nameid).value;
    search = search.toLowerCase();
    console.log(search);

    let posting = document.getElementById('postings');
    posting.innerHTML = '';

    if (search == "") {
        showPosts();
    }
    else {
        let found = posts.filter(e => e.username.toLowerCase().includes(search));
        console.log(found);

        for (let i = 0; i < found.length; i++) {

            let post = found[i]['username'];

            if (post.toLowerCase().includes(search)) {
                hTMLshowPosts(i, found);
            }
        }
        if (found.length == 0) {
            posting.innerHTML = `<div class="notfound"> Es wurde kein entsprechender Creator gefunden </div> `;
        }

    }
}



// for like button
function likeIn(i) {
    if (like === 0) {
        document.getElementById(`like${i}`).src = `img/heart(1).png`;
        like++;
    }

    else {
        document.getElementById(`like${i}`).src = `img/heart.png`;
        like--;
    }
}


//shows the 2 last Comments on main postingpost
function commentPreview(i) {
    let loop = 0; 
    document.getElementById(`comment-preview${i}`).innerHTML = '';
    for (e = posts[i]['comments'].length -1; e >= 0; e--) {
        loop++; 
        document.getElementById(`comment-preview${i}`).innerHTML += `
        <span style="padding-bottom: 10px"> 
            <b class="distance">
             ${rater[i]} 
            </b>
            ${posts[i]['comments'][e]} 
        </span> 
        `;  
        if (loop === 2) {
            break; 
        }
    }
}


// Shows Comments in Comment window 
function showComments(id) {

    document.getElementById('newComments').innerHTML = '';
    document.getElementById('posting-image').src = `${posts[id]["postingimage"]}`; /// shows posting image 
    document.getElementById('pp-image-popup').src = `${posts[id]["profilimages"]}`; /// shows profilpicture image 

    for (a = 0; a < posts[id]["comments"].length; a++) {
        hTMLshowComments(id, a);
        inputToCommentSection();
    }
}


// Fügt dem json array die kommentare hinzu
function inputComment(i) {

    let input = document.getElementById(`comment-input${i}`);

    posts[i]["comments"].push(input.value);
    save();

    input.value = "";

    commentPreview(i); 
}


function removeComment(id, a) {
    posts[id]["comments"].splice(a, 1);
    save();
    showComments(id);
    commentPreview(id); 
}


//Adds Input field to comment section in pop up 
function inputToCommentSection(i) {

    document.getElementById('add-input-to-comment-section').innerHTML = `               
    <input placeholder="function in work" class="comment-input" id="comment-input">
    <button class="comment-button" onclick="inputComment()">
        Posten
    </button>
    `;
}


// displays comment window  // Id = number of quantity of post
function ShowCommentSection(id) {
    document.getElementById('comment-popup').classList.remove('d-none');
    showComments(id);
}


// close Comment window 
function fadeCommentSection() {
    document.getElementById('comment-popup').classList.add('d-none');
}


// Save in LocalStorage 

function save() {
    let postsAsText = JSON.stringify(posts);
    localStorage.setItem('postings', postsAsText);
}


function load() {
    let postsAsText = localStorage.getItem('postings');

    if (postsAsText) {

        posts = JSON.parse(postsAsText);
    }
}