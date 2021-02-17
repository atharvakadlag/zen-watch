import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();

// $(function() {
//   $('a.page-scroll').bind('click', function(event) {
//       var $anchor = $(this);
//       $('html, body').stop().animate({
//           scrollTop: $($anchor.attr('href')).offset().top
//       }, 1500, 'easeInOutExpo');
//       event.preventDefault();
//   });
// });

// // Highlight the top nav as scrolling occurs
// $('body').scrollspy({
//   target: '.navbar-fixed-top'
// })

// // Closes the Responsive Menu on Menu Item Click
// $('.navbar-collapse ul li a').click(function() {
//   $('.navbar-toggle:visible').click();
// });
