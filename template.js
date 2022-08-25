// posts is named found because function Searchcreator uses the variable "found"
function hTMLshowPosts(i, found) { 

    return document.getElementById('postings').innerHTML += `
    <div class="postings">
    <div class="creator"> 
        <div class="flex"> 
            <img src="${found[i]["profilimages"]}" class="posting-pp">
            <div class="column"> 
                <div> 
                    <span> 
                       <b> ${found[i]["username"]} </b>
                    </span>
                </div>
                <div> 
                    <span> 
                    ${found[i]["location"]}
                    </span>

                </div>
            </div>
        </div>
        <img src="img/menu-dotted.png"> 
    </div>

    <div class="posting-image"> 
        <img src="${found[i]["postingimage"]}"> 
    </div>
<div style="padding-left: 2%"> 
    <div class="posting-icons-row"> 
        <div> 
            <img src="img/heart.png" onclick="likeIn(${i})" id="like${i}">  
            <img src="img/bubble-chat.png"> 
            <img src="img/send.png"> 
        </div>
        <div> 
            <img src="img/save.png"> 
        </div>
    </div>

    <div id="display-likes"> 
        <span><b>  Gefällt ${found[i]["likes"]} mal </b></span> 
    </div>

    <div class="post-descripton">
        <span class="distance"> 
            <b> ${found[i]["username"]}</b>
        </span>
        <span>
            Post to inspire you, to go outside in beautifull nature.
        </span>
    </div>

    <div id="comments">
        <span class="show-all-comments" onclick="ShowCommentSection(${i})"> 
            View all Comments 
        </span>
        <div id="comment-preview${i}" class="comment-preview"> 

        </div> 

    </div>
    </div> 
    <div>
        <form onsubmit="inputComment(${i});return false;" class="form-input-comment"> 
            <input placeholder="Kommentieren..." required type="text" min="2" class="comment-input" id="comment-input${i}"> 
            <button class="comment-button">
                Posten
            </button>
        </form> 

    </div>

</div> 
`;
}


function hTMLshowComments(id, a) {
    document.getElementById('newComments').innerHTML += `
    <div class="comments-popup">
        <img src="${posts[id]["profilimages"]}" class="pp-image-popup" id="pp-image-popup"> 
        <div class="comment-content" id="newComments"> 
        <span>
            <b>${rater[id]}</b>
        </span> 
        <span >
            ${posts[id]["comments"][a]}
        </span> 
    </div>
    <img src="img/trash.png" class="trash-can" onclick="removeComment(${id}, ${a})"> 
    </div> 
`;
}


function hTMLFriendSuggestions(i) {
    return document.getElementById('suggestions-friends').innerHTML += `
    <div class="suggestions-friends"> 
        <div class="flex">
        <img src="${posts[i]["profilimages"]}"> 
        <div class="column">
            <span>
                <b> ${posts[i]["username"]} </b>
            </span>
            <span class="gray"> 
            ${posts[i]["username2"]}
            </span>
        </div>
        </div>
    <div>  
        <a href="#">
            Folgen 
        </a>
    </div>
    </div>
    `;
}