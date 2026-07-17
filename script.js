// ===========================
// Portfolio V4 JavaScript
// ===========================

// Smooth Animation เมื่อเลื่อน

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".info,.time,.item,.contact-box").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// ===========================
// Gallery Zoom
// ===========================

const images=document.querySelectorAll(".item img");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.className="overlay";

        overlay.innerHTML=`
            <img src="${img.src}">
        `;

        document.body.appendChild(overlay);

        overlay.onclick=()=>{

            overlay.remove();

        }

    });

});

// ===========================
// Scroll Top Button
// ===========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
