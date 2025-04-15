function showSection(id) {
    document.getElementById('polls').style.display = 'none';
    document.getElementById('ideas').style.display = 'none';
    document.getElementById(id).style.display = 'block';
}

function createPoll() {
    const question = document.getElementById('pollQuestion').value;
    if (question.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = question + " — 0 votes";
        document.getElementById('pollResults').appendChild(li);
        document.getElementById('pollQuestion').value = '';
    }
}

function submitIdea() {
    const idea = document.getElementById('ideaText').value;
    if (idea.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = idea;
        document.getElementById('ideaList').appendChild(li);
        document.getElementById('ideaText').value = '';
    }
}