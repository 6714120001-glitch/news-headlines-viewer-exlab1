# 📰 News Headlines Viewer (Lab 1)

แอปพลิเคชันแสดงข่าวพาดหัวล่าสุด 5 อันดับจากทั่วโลก โดยดึงข้อมูลสดผ่าน **The Guardian API** โปรเจกต์นี้เป็นส่วนหนึ่งของการเรียนรู้การใช้งาน Fetch API, Async/Await และการจัดการ DOM ด้วย JavaScript



## ✨ คุณสมบัติ (Features)
- **Real-time Data**: ดึงข้อมูลข่าวล่าสุดผ่าน API ของ The Guardian
- **Modern UI**: การ์ดข่าว (News Cards) มีเงา (Shadow) และเอฟเฟกต์ลอยตัวเมื่อเอาเมาส์ไปชี้ (Hover Effect)
- **Category Badges**: แยกหมวดหมู่ข่าวด้วยสีที่ชัดเจน (เช่น Sport = น้ำเงิน, Environment = เขียว, Politics = แดง)
- **Responsive Design**: รองรับการแสดงผลทั้งบนคอมพิวเตอร์และมือถือ
- **External Links**: สามารถคลิกที่หัวข้อข่าวเพื่อเปิดอ่านเนื้อหาฉบับเต็มในแท็บใหม่ได้

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)
- **HTML5**: โครงสร้างหน้าเว็บแบบ Semantic
- **CSS3**: การตกแต่งด้วย Flexbox, Grid และ Transition effects
- **JavaScript (ES6+)**: การใช้ Fetch API, Promises และ DOM Manipulation
- **NPM**: ใช้สำหรับการจัดการโปรเจกต์และรัน Local Development Server

## 🚀 วิธีการรันโปรเจกต์
1. Clone หรือ Download Repository นี้ลงเครื่อง
2. เปิด Terminal ใน WebStorm หรือโฟลเดอร์ของโปรเจกต์
3. ติดตั้ง Dependencies (หากมี):
   ```bash
   npm install
4. เริ่มต้นการทำงาน:
   npm start
    # หรือ
    npm run dev