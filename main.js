function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function showOnas() {
    const modal = document.getElementById("onas1");
    modal.style.display = "flex"; 
}


function hideOnas() {
    const modal = document.getElementById("onas1");
    modal.style.display = "none"; 
}

window.addEventListener("click", (event) => {
    const modal = document.getElementById("onas1");
    if (event.target === modal) {
        hideModal();
    }
});
window.addEventListener("click", (event) => {
    const modal1 = document.getElementById("okno1");
    if (event.target === modal1) {
        closeModal1();
    }
});
function openModal1(id) {
    document.getElementById(`okno${id}`).style.display = "flex";
}

function closeModal1(id) {
    document.getElementById(`okno${id}`).style.display = "none";
}