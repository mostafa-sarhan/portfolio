const bars = document.querySelector(".header .bars");
const x_mark = document.querySelector(".links .close");
const links = document.querySelector(".links");
const menuLinks = document.querySelectorAll(".links ul li"); // Select all <a> inside the menu




bars.addEventListener("click",()=>{
    console.log("hello");

    links.classList.toggle("translateX_links");
});
x_mark.addEventListener("click",()=>{
    console.log("hello");

    links.classList.toggle("translateX_links");
});
menuLinks.forEach((link)=>{
    // link.addEventListener("click",()=>{
    //     links.classList.toggle("translateX_links");
    //     menuLinks.forEach((element)=>{
    //         element.classList.remove("active");
    //         console.log("Remove success");
    //     });
    //     link.classList.add("active");
    // })
    link.addEventListener("click", () => {
        // Toggle translateX_links on the parent .links
        links.classList.toggle("translateX_links");

        // Remove the 'active' class from all links
        menuLinks.forEach((element) => {
            element.classList.remove("active");
        });

        // Add 'active' class to the clicked link
        link.classList.add("active");
        console.log("Active class updated");
    });
})

console.log("Hello");


