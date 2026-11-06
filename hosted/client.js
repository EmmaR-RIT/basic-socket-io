const socket = io();

const displayMessage = (msg) => {
    const msgDiv = document.createElement('div');
    msgDiv.textContent = msg;
    document.getElementById('messages').appendChild(msgDiv);
}


const handleEditBox = () => {
    const editForm = document.getElementById('editForm');
    const editBox = document.getElementById('editBox');

    editForm.onsubmit = (e) => {
        e.preventDefault();
        if (editBox.value) socket.emit('chatMessage', editBox.value);
        editBox.value = '';
    }
};


window.onload = () => {
    handleEditBox();
    socket.on('sendChat', displayMessage);
};
