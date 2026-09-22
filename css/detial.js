
    const modal = document.getElementById("productModal");
    const closeBtn = document.querySelector(".close-btn");

    // เมื่อคลิกที่การ์ดสินค้า
    document.querySelectorAll(".box2").forEach(card => {
        card.addEventListener("click", () => {
            // ดึงข้อมูลจาก data-* attributes
            const title = card.getAttribute("data-title");
            const price = card.getAttribute("data-price");
            const desc = card.getAttribute("data-desc");
            const img = card.getAttribute("data-img");

            // ส่งค่าไปแสดงใน Modal
            document.getElementById("modalTitle").innerText = title;
            document.getElementById("modalPrice").innerText = price;
            document.getElementById("modalDesc").innerText = desc;
            document.getElementById("modalImg").src = img;

            // แสดง Modal
            modal.style.display = "flex";
        });
    });

    // ปิดเมื่อกดปุ่ม X
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // ปิดเมื่อคลิกพื้นที่ว่างนอกกล่อง
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });