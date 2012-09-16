$(document).ready(function() {
  Reveal.addEventListener('slidechanged', function(event) {
    $("#timer").html(
      Math.round(
        30 * (
          $(event.currentSlide).index() /
          $("#slides").children("section").length
        )
      ) +
      " mins"
    );
  });

  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    
    theme: 'beige', // default/neon/beige
    transition: 'default', // default/cube/page/concave/linear(2d)

    // Optional libraries used to extend on reveal.js
    dependencies: [
      { src: 'reveal.js-1.4/lib/js/highlight.js', async: true, callback: function() { window.hljs.initHighlightingOnLoad(); } },
      { src: 'reveal.js-1.4/lib/js/classList.js', condition: function() { return !document.body.classList; } },
      { src: 'reveal.js-1.4/lib/js/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: 'reveal.js-1.4/lib/js/data-markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      //{ src: '/socket.io/socket.io.js', async: true, condition: function() { return window.location.host === 'localhost:1947'; } },
      { src: 'reveal.js-1.4/plugin/speakernotes/client.js', async: true, condition: function() { return window.location.host === 'localhost:1947'; } },
    ]
  });
});
