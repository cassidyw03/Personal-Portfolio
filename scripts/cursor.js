// document.addEventListener('mousemove', (event) => {
//     let cursorElement = document.getElementById('cursor-element');
//     cursorElement.style.display = 'block';
//     cursorElement.style.left = event.clientX + 'px';
//     cursorElement.style.top = event.clientY + 'px';
  
//     // Add a delay or "lazy" effect using setTimeout (optional)
//     setTimeout(() => {
//       cursorElement.style.left = event.clientX + 'px';
//       cursorElement.style.top = event.clientY + 'px';
//     }, 400); // Adjust delay in milliseconds (e.g., 100ms for a slight lag)
  
//     // Hide the cursor when moving out of the document (optional)
// //     document.addEventListener('mouseout', () => {
// //       cursorElement.style.display = 'none';
// //     });
//   });

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", () => {
    let x = e.pageX;
    let y = e.pageY;

    // console.log(x);

    cursor.forEach(el => {
        el.style.left = `$(x)px`;
        el.style.top = `$(y)px`;
    })
});

