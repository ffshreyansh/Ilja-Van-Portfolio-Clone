const btn = document.querySelector('.color-mode-btn');

btn.addEventListener('mouseenter', () => {
  // Create the icons as `i` elements
  const icon1 = document.createElement('i');
  const icon2 = document.createElement('i');

  // Add the necessary styles for the icons
  icon1.style.cssText = "color: #df3636; margin-left: 8px; margin-right: 8px;"
  btn.style.cssText = "transition: 0.5s ease-out;"
//   icon2.style.cssText = `
//     width: 50px;
//     height: 50px;
//     background-color: #fff;
//     border-radius: 50%;
//     position: absolute;
//     top: 50%;
//     right: -75px; /* position the icon to the right of the button */
//     transform: translateY(-50%);
//   `;

  // Add the Font Awesome class to the icons
  icon1.classList.add('fas', 'fa-circle');
  icon2.classList.add('fas', 'fa-circle');

  // Insert the icons as the first child elements of the button
  btn.insertBefore(icon1, btn.firstChild);
  btn.insertBefore(icon2, btn.firstChild);
});

btn.addEventListener('mouseleave', () => {
  // Remove the icons when the mouse leaves the button
  btn.innerHTML = 'Color Mode';
});
