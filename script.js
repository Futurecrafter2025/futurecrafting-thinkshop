function showSection(id) {
    document.getElementById('polls').style.display = 'none';
    document.getElementById('ideas').style.display = 'none';
    document.getElementById(id).style.display = 'block';
}

function createPoll() {
    const question = document.getElementById('pollQuestion').value;
    if (question.trim() !== "") {
        const li = document.createElement('li');
        const text = document.createTextNode(question + " — ");
        const voteBtn = document.createElement('button');
        voteBtn.textContent = "Vote";
        voteBtn.onclick = function () {
            const count = parseInt(this.getAttribute('data-votes')) + 1;
            this.setAttribute('data-votes', count);
            this.textContent = "Votes: " + count;
        };
        voteBtn.setAttribute('data-votes', 0);
        voteBtn.style.marginLeft = "10px";
        li.appendChild(text);
        li.appendChild(voteBtn);
        document.getElementById('pollResults').appendChild(li);
        document.getElementById('pollQuestion').value = '';
    }
}

function submitIdea() {
    const idea = document.getElementById('ideaText').value;
    const tag = document.getElementById('ideaTag').value;
    if (idea.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = `[${tag}] ${idea}`;
        document.getElementById('ideaList').appendChild(li);
        document.getElementById('ideaText').value = '';
    }
}
