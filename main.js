function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element_show');
      }
    });
}
let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let text = document.querySelectorAll('.text');
  let git = document.querySelectorAll('.git');
  let landing_page = document.querySelectorAll('.landing_page');
  let together = document.querySelectorAll('.together');
for (let txt of text) {
    observer.observe(txt);
}
for (let g of git) {
    observer.observe(g);
}
for (let ld of landing_page) {
    observer.observe(ld);
}
for (let tg of together) {
    observer.observe(tg);
}
