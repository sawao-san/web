const form = document.querySelector("#searchForm");
form.addEventListener('submit', function (e) {
    e.preventDefault(); //formでリクエストを投げるのを止める
    console.log(form.elements.query.value);

})