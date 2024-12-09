function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function showModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex"; 
}


function hideModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; 
}

window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        hideModal();
    }
});
