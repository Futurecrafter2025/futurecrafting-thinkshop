function showSection(id) {
    document.getElementById('polls').style.display = 'none';
    document.getElementById('ideas').style.display = 'none';
    document.getElementById(id).style.display = 'block';
}

function updateHeader() {
    const name = document.getElementById('workshopName').value;
    const facilitator = document.getElementById('facilitatorName').value;
    const date = document.getElementById('workshopDate').value;
    const headerText = `${name ? name : ''} ${facilitator ? '| Facilitator: ' + facilitator : ''} ${date ? '| Date: ' + date : ''}`;
    document.getElementById('sessionHeader').textContent = headerText;
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
        li.textContent = idea;
        const targetList = document.getElementById(`ideas-${tag}`);
        if (targetList) {
            targetList.appendChild(li);
        }
        document.getElementById('ideaText').value = '';
    }
}
