let math = document.getElementById("math"),
    literature = document.getElementById("literature"),
    english = document.getElementById("english"),
    display = document.getElementById("p1");
document.getElementById("btn").addEventListener("click", function () {
    let sum = +math.value + +literature.value + +english.value;
        area = document.getElementById("Khuvuc").value,
        kv1 = sum + 0.75,
        kv2 = sum + 0.25,
        kv2_NT = sum + 0.5;
        text = 'Tổng điểm ĐG khối D của bạn là:';
    switch (area) {
        case "KV1":
            display.innerHTML = text + kv1;
            break;
        case "KV2":
            display.innerHTML = text + kv2;
            break;
        case "KV2_NT":
            display.innerHTML = text + kv2_NT;
            break;
        case 'KV3':
            display.innerHTML = text + sum;
}
});